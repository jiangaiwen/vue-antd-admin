import { mapState } from "vuex";

const mixin = {
    computed: {
        ...mapState({
            layoutMode: state => state.app.layout,
            navTheme: state => state.app.theme,
            primaryColor: state => state.app.color,
            colorWeak: state => state.app.weak,
            multiTab: state => state.app.multiTab,//多页签设置
            fixedHeader: state => state.app.fixedHeader,
            fixSiderbar: state => state.app.fixSiderbar,
            fixSidebar: state => state.app.fixSiderbar,
            contentWidth: state => state.app.contentWidth,
            autoHideHeader: state => state.app.autoHideHeader,
            sidebarOpened: state => state.app.sidebar
        })
    },
    methods: {
        isTopMenu() {
            return this.layoutMode === 'topmenu'
        },
        isSideMenu() {
            return !this.isTopMenu()
        }
    }
}

const mixinDevice = {
    computed: {
        ...mapState({
            device: state => state.app.device
        })
    },
    methods: {
        isMobile() {
            return this.device === 'mobile'
        },
        isDesktop() {
            return this.device === 'desktop'
        }
    }
}

export { mixin, mixinDevice }