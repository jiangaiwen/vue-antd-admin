<template>
    <div class="user-wrapper">
        <div class="content-box">
            <notice class="action" />
            <a-dropdown>
                <span class="action ant-dropdown-link user-dropdown-menu">
                    <a-avatar class="avatar" size="small" :src="avatar"/>
                    <span>{{ name }}</span>
                </span>
                <a-menu slot="overlay" class="user-dropdown-menu-wrapper">
                    <a-menu-item key="0">
                        <router-link :to="{ name: 'center' }">
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

        <!-- Setting Drawer -->
        <setting-drawer ref="settingDrawer" :closable="true" title="系统设置"></setting-drawer>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Notice from './Notice';
import SettingDrawer from '@/components/SettingDrawer';
import { USER_NAME, ACCESS_TOKEN } from '@/store/mutation-types'
export default {
    components: {
        Notice,
        SettingDrawer
    },
    computed: {
        ...mapGetters([
            'name',
            'avatar'
        ])
    },
    methods: {
        systemSetting(){
            this.$refs.settingDrawer.showDrawer()
        },
        handleLogout(){
            var that = this;
            this.$confirm({
                title: '提示',
                content: '确定要退出当前系统吗？',
                onOk() {
                    that.$ls.remove(USER_NAME);
                    that.$ls.remove(ACCESS_TOKEN);
                    window.location.reload();
                }
            })
        },
    }
}
</script>