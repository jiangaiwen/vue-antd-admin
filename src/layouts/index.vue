<template>
    <div class="ant-admin-wrapper">
        <a-layout class="ant-basic-layout has-sider">
            <div class="ant-pro-fixed-stuff" :style="{width: sidebarWidth, overflow: 'hidden'}"></div>
            <Sidebar></Sidebar>
            <a-layout>
                <Navbar></Navbar>
                <a-layout-content class="ant-basic-layout-content">
                    <router-view />
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { Navbar, Sidebar } from './components';
export default {
    components: {
        Navbar,
        Sidebar
    },
    computed: {
        ...mapGetters([
            'sidebar'
        ]),
        sidebarWidth(){
            return this.sidebar.opened ? '208px' : '48px'
        }
    }
}
</script>
<style lang="less" scoped>
.ant-admin-wrapper{
    position: relative;
    width: 100%;
    height: 100%;

    .ant-basic-layout{
        position: relative;
        width: 100%;
        height: 100%;

        .ant-pro-fixed-stuff{
            flex-shrink: 0;
            transition: width .2s;
        }
    }

    .has-sider{
        flex-direction: row;
    }

    .ant-sider-fixed{
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        height: 100%;
        box-shadow: 2px 0 8px 0 rgb(29, 35, 41, 0.05);
    }

    .ant-basic-layout-content{
        position: relative;
        margin: 20px;
    }
}
</style>