import Menu from 'ant-design-vue/es/menu';
import Icon from 'ant-design-vue/es/icon';

export default {
    name: 'SMenu',
    props: {
        menu: {
            type: Array,
            required: true
        },
        theme: {
            type: String,
            required: false,
            default: 'dark'
        },
        mode: {
            type: String,
            required: false,
            default: 'inline'
        },
        collapsed: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data(){
        return{
            openKeys: [],
            selectedKeys: [],
            cachedOpenKeys: []
        }
    },
    computed: {
        rootSubmenuKeys: vm => {
            const keys = []
            vm.menu.forEach(element => keys.push(element.path))
            return keys
        }
    },
    watch: {
        collapsed(val) {
            if(val) {
                this.cachedOpenKeys = this.openKeys.concat()
                this.openKeys = []
            } else {
                this.openKeys = this.cachedOpenKeys
            }
        },
        $route(){
            this.updateMenu()
        }
    },
    mounted() {
        this.updateMenu()
    },
    methods: {
        // select menu item
        onOpenChange(openKeys) {
            // 在水平模式下时执行，并且不再执行后续
            if(this.mode === 'horizontal') {
                this.openKeys = openKeys
                return
            }

            // 非水平模式时
            const latestOpenKey = openKeys.find(key => !this.openKeys.includes(key))
            if(!this.rootSubmenuKeys.includes(latestOpenKey)) {
                this.openKeys = openKeys
            } else {
                this.openKeys = latestOpenKey ? [latestOpenKey] : []
            }
        },
        onSelect ({ item, key, selectedKeys }) {
            this.selectedKeys = selectedKeys
            this.$emit('select', { item, key, selectedKeys })
        },
        updateMenu() {
            const routes = this.$route.matched.concat()
            const { hidden } = this.$route.meta
            if (routes.length >= 3 && hidden) {
                routes.pop()
                this.selectedKeys = [routes[routes.length - 1].path]
            } else {
                this.selectedKeys = [routes.pop().path]
            }
            const openKeys = []
            if(this.mode === 'inline') {
                routes.forEach(item => {
                    openKeys.push(item.path)
                })
            }

            this.collapsed ? (this.cachedOpenKeys = openKeys) : (this.openKeys = openKeys)
        },

        // render
        renderItem(menu) {
            if(!menu.isHide) {
                return menu.children && !menu.alwaysShow ? this.renderSubMenu(menu) : this.renderMenuItem(menu)
            }
            return null
        },
        renderMenuItem(menu) {
            const tag = 'router-link'
            let props = { to: { path: menu.link } }

            const attrs = { href: menu.link }

            return (
                <Menu.Item {...{ key: menu.link }}>
                    <tag {...{ props, attrs }}>
                        {this.renderIcon(menu.icon)}
                        <span>{menu.title}</span>
                    </tag>
                </Menu.Item>
            )
        },
        renderSubMenu(menu) {
            const itemArr = []
            if (!menu.alwaysShow) {
                menu.children.forEach(item => itemArr.push(this.renderItem(item)))
            }
            return (
                <Menu.SubMenu {...{ key: menu.link }}>
                    <span slot="title">
                        {this.renderIcon(menu.icon)}
                        <span>{menu.title}</span>
                    </span>
                    {itemArr}
                </Menu.SubMenu>
            )
        },
        renderIcon(icon) {
            if(icon === 'none' || icon === undefined){
                return null
            }
            const props = {}
            typeof (icon) === 'object' ? props.component = icon : props.type = icon
            return (
                <Icon {...{ props }}></Icon>
            )
        }
    }, 
    render() {
        const { mode, theme, menu } = this
        const props = {
            mode: mode,
            theme: theme,
            openKeys: this.openKeys,
            selectedKeys: this.selectedKeys
        }
        const on = {
            openChange: this.onOpenChange,
            select: this.onSelect
        }

        const menuTree = menu.map(item => {
            if(item.hidden) {
                return null
            }
            return this.renderItem(item)
        })

        return (
            <Menu vModel={this.selectedKeys} {...{ props, on: on }}>
                {menuTree}
            </Menu>
        )
    }
}