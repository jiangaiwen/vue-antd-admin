<template>
    <a-layout-header class="navbar" style="padding: 0px; height: 48px; line-height: 48px; width: 100%; z-index: 9;">
        <div class="ant-global-header">
            <div>
                <a-icon class="trigger" :type="collapsed ? 'menu-fold' : 'menu-unfold'" @click="toggle"/>
            </div>
        </div>
    </a-layout-header>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters([
            'sidebar'
        ]),
        collapsed(){
            return this.sidebar.opened
        }
    },
    methods: {
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
    height: 100%;
    padding: 0 16px;
    background: #fff;
    box-shadow: 0 1px 4px rgb(0 21 41 / 8%);

    .trigger{
        font-size: 16px;
    }
}
</style>