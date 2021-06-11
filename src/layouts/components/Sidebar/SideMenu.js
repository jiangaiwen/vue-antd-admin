import Menu from 'ant-design-vue/es/menu';
import Icon from 'ant-design-vue/es/icon';

const { Item, SubMenu } = Menu

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

        }
    }
}