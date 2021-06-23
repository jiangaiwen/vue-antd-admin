<template>
    <div class="analysis">
        <div :style="{ marginBottom: '24px' }">
            <h3 class="setting-drawer-index-title">风格配色</h3>
            <div style="height: 20px">
                <a-switch checked-children="暗色" un-checked-children="白色" :defaultChecked="this.navTheme === 'dark' && true || false" @change="onChangeTheme" />
            </div>
        </div>

        <div :style="{ marginBottom: '24px' }">
            <h3 class="setting-drawer-index-title">主题色</h3>
            <div style="height: 20px">
                <a-tooltip class="setting-drawer-theme-color-colorBlock" v-for="(item, index) in colorList" :key="index">
                    <template slot="title">
                        {{ item.key }}
                    </template>
                    <a-tag :color="item.color" @click="onChangeColor(item.color)">
                        <a-icon type="check" v-if="item.color === primaryColor"></a-icon>
                    </a-tag>
                </a-tooltip>
            </div>
        </div>

        <div :style="{ marginBottom: '20px' }">
            <a-button type="primary">{{ primaryColor }}</a-button>
        </div>

        <div :style="{ marginBottom: '20px' }">
            <a-pagination v-model="current" :total="50" show-less-items />
        </div>

        <div :style="{ marginBottom: '20px' }">
            <a-progress :percent="30" />
        </div>

        <div :style="{ marginBottom: '20px' }">
            <a-spin />
        </div>

        <a-button type="primary" @click="getUserList">Primary</a-button>
    </div>
</template>
<script>
import config from '@/config/defaultSettings';
import { updateTheme, colorList } from '@/config/theme';
import { mixin, mixinDevice } from '@/utils/mixin';
export default {
    data(){
        return{
            colorList,
            current: 2
        }
    },
    mixins: [mixin, mixinDevice],
    mounted() {
        // 当主题色不是默认色时，才进行主题编译
        if(this.primaryColor !== config.primaryColor){
            updateTheme(this.primaryColor)
        }

        this.getUserList();
    },
    methods: {
        onChangeTheme(checked) {
            if (checked) {
                this.$store.dispatch('app/ToggleTheme',  'dark')
            } else {
                this.$store.dispatch('app/ToggleTheme',  'light')
            }
        },
        onChangeColor(color) {
            if(this.primaryColor !== color) {
                this.$store.dispatch('app/ToggleColor', color)
                updateTheme(color)
            }
        },
        async getUserList(){
            const res = await this.$api.user.getUserList()
            console.log('获取用户==',res);
        }
    }
}
</script>
<style lang="less" scoped>
.analysis{
    position: relative;
    width: 100%;
    height: 100%;

}
</style>