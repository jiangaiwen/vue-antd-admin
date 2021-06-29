<template>
    <div class="setting-drawer">
        <a-drawer
            width="300"
            placement="right"
            @close="onClose"
            :closable="false"
            :visible="visible"
            style="height: 100%; overflow: auto;"
        >
            <div class="setting-drawer-index-content">
                <div :style="{ marginBottom: '24px' }">
                    <h3 class="setting-drawer-index-title">整体风格设置</h3>

                    <div class="setting-drawer-index-blockChecbox">
                        <a-tooltip>
                            <template slot="title">
                                暗色菜单风格
                            </template>
                            <div class="setting-drawer-index-item" @click="handleMenuTheme('dark')">
                                <img src="https://gw.alipayobjects.com/zos/rmsportal/LCkqqYNmvBEbokSDscrm.svg" alt="dark">
                                <div class="setting-drawer-index-selectIcon" v-if="navTheme === 'dark'">
                                    <a-icon type="check"/>
                                </div>
                            </div>
                        </a-tooltip>

                        <a-tooltip>
                            <template slot="title">
                                亮色菜单风格
                            </template>
                            <div class="setting-drawer-index-item" @click="handleMenuTheme('light')">
                                <img src="https://gw.alipayobjects.com/zos/rmsportal/jpRkZQMyYRryryPNtyIC.svg" alt="light">
                                <div class="setting-drawer-index-selectIcon" v-if="navTheme !== 'dark'">
                                    <a-icon type="check"/>
                                </div>
                            </div>
                        </a-tooltip>
                    </div>
                </div>

                <div :style="{ marginBottom: '24px' }">
                    <h3 class="setting-drawer-index-title">主题色</h3>

                    <div style="height: 20px">
                        <a-tooltip class="setting-drawer-theme-color-colorBlock" v-for="(item, index) in colorList" :key="index">
                            <template slot="title">
                                {{ item.key }}
                            </template>
                            <a-tag :color="item.color" @click="changeColor(item.color)">
                                <a-icon type="check" v-if="item.color === primaryColor"></a-icon>
                            </a-tag>
                        </a-tooltip>
                    </div>
                </div>

                <a-divider />

                <div :style="{ marginBottom: '24px' }">
                    <h3 class="setting-drawer-index-title">导航模式</h3>

                    <div class="setting-drawer-index-blockChecbox">
                        <div>
                            <a-list :split="false">
                                <a-list-item>
                                    <a-switch slot="actions" size="small" :defaultChecked="fixedHeader" @change="handleFixedHeader" />
                                    <a-list-item-meta>
                                        <div slot="title">固定 Header</div>
                                    </a-list-item-meta>
                                </a-list-item>
                                <a-list-item>
                                    <a-switch slot="actions" size="small" :disabled="!fixedHeader" :defaultChecked="autoHideHeader" @change="handleFixedHeaderHidden" />
                                    <a-list-item-meta>
                                        <a-tooltip slot="title" placement="left">
                                            <template slot="title">固定 Header 时可配置</template>
                                            <div :style="{ opacity: !fixedHeader ? '0.5' : '1' }">下滑时隐藏 Header</div>
                                        </a-tooltip>
                                    </a-list-item-meta>
                                </a-list-item>
                                <a-list-item>
                                    <a-switch slot="actions" size="small" :disabled="(layoutMode === 'topmenu')" :defaultChecked="fixSiderbar" @change="handleFixSiderbar" />
                                    <a-list-item-meta>
                                        <div slot="title" :style="{ textDecoration: layoutMode === 'topmenu' ? 'line-through' : 'unset' }">固定侧边菜单</div>
                                    </a-list-item-meta>
                                </a-list-item>
                            </a-list>
                        </div>
                    </div>
                </div>
            </div>
        </a-drawer>
    </div>
</template>
<script>
import config from '@/config/defaultSettings';
import { updateTheme, colorList } from '@/config/theme';
import { mixin, mixinDevice } from '@/utils/mixin';
export default {
    data(){
        return{
            visible: false,
            colorList
        }
    },
    mixins: [mixin, mixinDevice],
    mounted () {
        // 当主题色不是默认色时，才进行主题编译
        if(this.primaryColor !== config.primaryColor){
            updateTheme(this.primaryColor)
        }
    },
    methods: {
        showDrawer() {
            this.visible = true
        },
        onClose () {
            this.visible = false
        },
        handleMenuTheme(theme){
            this.$store.commit('TOGGLE_THEME', theme)
        },
        changeColor(color) {
            if(this.primaryColor !== color) {
                this.$store.commit('TOGGLE_COLOR', color)
                updateTheme(color)
            }
        },
        handleFixedHeader (fixed) {
            this.$store.commit('TOGGLE_FIXED_HEADER', fixed)
        },
        handleFixedHeaderHidden (autoHidden) {
            this.$store.commit('TOGGLE_FIXED_HEADER_HIDDEN', autoHidden)
        },
        handleFixSiderbar (fixed) {
            if (this.layoutMode === 'topmenu') {
                this.$store.commit('TOGGLE_FIXED_SIDERBAR', false)
                return
            }
            this.$store.commit('TOGGLE_FIXED_SIDERBAR', fixed)
        }
    }
}
</script>
<style lang="less" scoped>
.setting-drawer-index-content {

    .setting-drawer-index-blockChecbox {
        display: flex;

        .setting-drawer-index-item {
            margin-right: 16px;
            position: relative;
            border-radius: 4px;
            cursor: pointer;

            img {
                width: 48px;
            }

            .setting-drawer-index-selectIcon {
                position: absolute;
                top: 0;
                right: 0;
                width: 100%;
                padding-top: 15px;
                padding-left: 24px;
                height: 100%;
                color: #1890ff;
                font-size: 14px;
                font-weight: 700;
            }
        }
    }
    .setting-drawer-theme-color-colorBlock {
        width: 20px;
        height: 20px;
        border-radius: 2px;
        float: left;
        cursor: pointer;
        margin-right: 8px;
        padding-left: 0px;
        padding-right: 0px;
        text-align: center;
        color: #fff;
        font-weight: 700;

        i {
            font-size: 14px;
        }
    }
}

.setting-drawer-index-handle {
    position: absolute;
    top: 240px;
    background: #1890ff;
    width: 48px;
    height: 48px;
    right: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    pointer-events: auto;
    z-index: 1001;
    text-align: center;
    font-size: 16px;
    border-radius: 4px 0 0 4px;

    i {
        color: rgb(255, 255, 255);
        font-size: 20px;
    }
}
</style>
