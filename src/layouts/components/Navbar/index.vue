<template>
    <a-layout-header class="navbar" style="padding: 0px; height: 48px; line-height: 48px; width: 100%; z-index: 9;">
        <div class="ant-global-header">
            <div class="hamburger">
                <a-icon class="trigger" :type="collapsed ? 'menu-fold' : 'menu-unfold'" @click="toggle"/>
            </div>

            <div class="user-wrapper">
                <notice class="menu-item" />
                <a-dropdown>
                    <span class="menu-item user-dropdown-menu">
                        <a-avatar class="avatar" size="small" :src="avatar"/>
                        <span>{{ name }}</span>
                    </span>
                    <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
                        <a-menu-item key="0">
                            <router-link :to="{ name: 'account-center' }">
                                <a-icon type="user"/>
                                <span>个人中心</span>    
                            </router-link>
                        </a-menu-item>
                        <a-menu-item key="1">
                            <a href="javascript:;" @click="systemSetting">
                                <a-icon type="tool"/>
                                <span>系统设置</span>    
                            </a>
                        </a-menu-item>
                        <a-menu-item key="2">
                            <a href="javascript:;" @click="handleLogout">
                                <a-icon type="logout"/>
                                <span>退出登录</span>    
                            </a>
                        </a-menu-item>
                    </a-menu>
                </a-dropdown>
            </div>
        </div>
    </a-layout-header>
</template>
<script>
import { mapGetters } from 'vuex';
import notice from './notice.vue';
export default {
    computed: {
        ...mapGetters([
            'sidebar',
            'name',
            'avatar'
        ]),
        collapsed(){
            return this.sidebar.opened
        }
    },
    components: {
        notice
    },
    methods: {
        systemSetting(){

        },
        handleLogout(){
            this.$confirm({
                title: '提示',
                content: '确定要退出当前系统吗？',
                onOk() {
                    this.$ls.remove('USER_NAME');
                    this.$ls.remove('ACCESS_TOKEN');
                    location.reload();
                }
            })
        },
        toggle(){
            if(this.collapsed){
                this.$store.dispatch('app/setSidebar', false)
            }else{
                this.$store.dispatch('app/setSidebar', true)
            }
        }
    }
}
</script>
<style lang="less" scoped>
.ant-global-header{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 16px;
    background: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

    .trigger{
        font-size: 16px;
    }

    .user-wrapper{
        .menu-item{
            cursor: pointer;
            padding: 0 14px;
            display: inline-block;
            transition: all .3s;
            height: 100%;
            line-height: 48px;
            &:hover{
                background: rgba(0,0,0,.05);
            }
        }

        .avatar{
            margin: 11px 10px 11px 0;
        }
    }
}
</style>