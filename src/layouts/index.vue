<template>
    <a-layout :class="['layout', device]">

        <side-menu
            mode="inline"
            :menus="permission_routes"
            :theme="navTheme"
            :collapsed="collapsed"
            :collapsible="true"
        ></side-menu>

        <a-layout :class="[layoutMode, `content-width-${contentWidth}`]" :style="{ paddingLeft: contentPaddingLeft, minHeight: '100vh' }">
            <!-- layout header -->
            <Header
                :mode="layoutMode"
                :menus="permission_routes"
                :theme="navTheme"
                :collapsed="collapsed"
                :device="device"
                @toggle="toggle"
            ></Header>

            <!-- layout content -->
            <a-layout-content :style="{ height: '100%', margin: '24px 24px 0', paddingTop: fixedHeader ? '64px' : '0' }">
                <transition name="page-transition">
                    <router-view />
                </transition>
            </a-layout-content>

            <!-- layout footer -->
        </a-layout>
    </a-layout>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import { Header, SideMenu } from './components';
import { mixin, mixinDevice } from '@/utils/mixin';
import { triggerWindowResizeEvent } from '@/utils';
export default {
    data() {
        return {
            activeMenu: {},
            collapsed: false,
        }
    },
    components: {
        Header,
        SideMenu
    },
    mixins: [mixin, mixinDevice],
    computed: {
        ...mapGetters([
            'permission_routes'
        ]),
        contentPaddingLeft() {
            if (!this.fixSidebar || this.isMobile()) {
                return '0'
            } 
            if (this.sidebarOpened) {
                return '256px'
            }
            return '80px'
        }
    },
    watch: {
        sidebarOpened (val) {
            this.collapsed = !val
        }
    },
    created() {
        this.collapsed = !this.sidebarOpened
    },
    mounted() {
        const userAgent = navigator.userAgent
        if (userAgent.indexOf('Edge') > -1) {
            this.$nextTick(() => {
                this.collapsed = !this.collapsed
                setTimeout(() => {
                    this.collapsed = !this.collapsed
                }, 16)
            })
        }
    },
    methods: {
        ...mapActions(['setSidebar']),
        toggle () {
            this.collapsed = !this.collapsed
            this.setSidebar(!this.collapsed)
            triggerWindowResizeEvent()
        },
        paddingCalc () {
            let left = ''
            if (this.sidebarOpened) {
                left = this.isDesktop() ? '256px' : '80px'
            } else {
                left = (this.isMobile() && '0') || ((this.fixSidebar && '80px') || '0')
            }
            return left
        },
        menuSelect(){}
    }
}
</script>
<style lang="less" scoped>
.page-transition-enter {
    opacity: 0;
}

.page-transition-leave-active {
    opacity: 0;
}

.page-transition-enter .page-transition-container,
.page-transition-leave-active .page-transition-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>