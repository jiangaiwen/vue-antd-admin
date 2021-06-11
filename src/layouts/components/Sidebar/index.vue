<template>
    <a-layout-sider 
        class="ant-sider-fixed" :style="{
        overflow: 'hidden', 
        flex: `0 0 ${sidebarWidth}`, 
        maxWidth: sidebarWidth, 
        minWidth: sidebarWidth, 
        width: sidebarWidth}"
    >
        sider
    </a-layout-sider>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
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