<template>
    <a-layout-sider 
        class="ant-sider-fixed" :style="{
        overflow: 'hidden', 
        flex: `0 0 ${sidebarWidth}`, 
        maxWidth: sidebarWidth, 
        minWidth: sidebarWidth, 
        width: sidebarWidth}"
    >
        <side-menu
            :collapsed="collapsed"
            :menu="menus"
            :theme="theme"
            @select="onSelect"
            :mode="mode"
            :style="smenuStyle"
        ></side-menu>
    </a-layout-sider>
</template>
<script>
import { mapGetters } from 'vuex';
import SideMenu from './SideMenu';
export default {
    components: { SideMenu },
    props: {
        mode: {
            type: String,
            required: false,
            default: 'inlie'
        },
        theme: {
            type: String,
            required: false,
            default: 'dark'
        },
        collapsible: {
            type: Boolean,
            required: false,
            default: false
        },
        collapsed: {
            type: Boolean,
            required: false,
            default: false
        },
        menus: {
            type: Array,
            required: true
        }
    },
    computed: {
        ...mapGetters([
            'sidebar'
        ]),
        sidebarWidth() { 
            return this.sidebar.opened ? '208px' : '48px'
        },
        smenuStyle() {
            let style = { 'padding': '0' }
            // if (this.fixSiderbar) {
            //     style['height'] = 'calc(100% - 59px)'
            //     style['overflow'] = 'auto'
            //     style['overflow-x'] = 'hidden'
            // }
            return style
        }
    },
    methods: {
        onSelect(obj) {
            this.$emit('menuSelect', obj)
        }
    }
}
</script>