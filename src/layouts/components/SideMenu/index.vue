<template>
    <a-layout-sider 
        :class="['sider', isDesktop() ? null : 'shadow', theme, fixSiderbar ? 'ant-fixed-sidemenu' : null ]"
        width="256px"
        :collapsible="collapsible"
        v-model="collapsed"
        :trigger="null"
    >
        <logo />
        <side-menu
            :collapsed="collapsed"
            :menu="menus"
            :theme="theme"
            :mode="mode"
            :style="smenuStyle"
            @select="onSelect"
        ></side-menu>
    </a-layout-sider>
</template>
<script>
import Logo from '../Header/Logo';
import SideMenu from './SideMenu';
import { mixin, mixinDevice } from '@/utils/mixin';
export default {
    components: { Logo, SideMenu },
    mixins: [mixin, mixinDevice],
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