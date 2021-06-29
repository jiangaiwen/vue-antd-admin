<template>
    <a-layout :class="['layout', device]">

        <side-menu
            mode="inline"
            :menus="permission_routes"
            :theme="navTheme"
            :collapsed="collapsed"
            :collapsible="true"
            @menuSelect="menuSelect"
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
import { mapGetters } from 'vuex';
import { Header, SideMenu } from './components';
import { mixin, mixinDevice } from '@/utils/mixin';
import { triggerWindowResizeEvent } from '@/utils';
export default {
    data() {
        return {
            activeMenu: {}
        }
    },
    components: {
        Header,
        SideMenu
    },
    mixins: [mixin, mixinDevice],
    computed: {
        ...mapGetters([
            'permission_routes',
            'sidebar'
        ]),
        contentPaddingLeft() {
            console.log('this.sidebar.opened===', this.sidebar.opened);
            if (!this.fixSidebar || this.isMobile()) {
                return '0'
            } 
            if (this.sidebar.opened) {
                return '256px'
            }
            return '80px'
        },
        collapsed() {
            return this.sidebar.opened
        }
    },
    methods: {
        menuSelect(value) {
            // 
        },
        toggle() {
            if(this.collapsed){
                this.$store.commit('SET_SIDEBAR_TYPE', false)
            }else{
                this.$store.commit('SET_SIDEBAR_TYPE', true)
            }
            triggerWindowResizeEvent()
        }
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