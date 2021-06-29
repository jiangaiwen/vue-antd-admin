<template>
    <div class="analysis">
        <a-button type="primary" @click="getUserList">Primary</a-button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {
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