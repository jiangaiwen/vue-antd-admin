<template>
    <div class="main">
        <a-form-model ref="form" :model="model" :rules="validatorRules" class="user-layout-login">
            <a-form-model-item required prop="username">
                <a-input v-model="model.username" size="large" placeholder="请输入帐户名 / SuperAdmin">
                    <a-icon slot="prefix" type="user" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                </a-input>
            </a-form-model-item>
            <a-form-model-item required prop="password">
                <a-input v-model="model.password" size="large" type="password" autocomplete="false" placeholder="请输入密码 / 123456">
                    <a-icon slot="prefix" type="lock" :style="{ color: 'rgba(0,0,0,.25)' }"/>
                </a-input>
            </a-form-model-item>
            <a-form-model-item>
                <a-checkbox @change="handleRememberMeChange" default-checked>自动登录</a-checkbox>
            </a-form-model-item>

            <a-form-item style="margin-top:24px">
                <a-button size="large" type="primary" htmlType="submit" class="login-button" :loading="loading" @click.stop.prevent="handleSubmit" :disabled="loading">确定</a-button>
            </a-form-item>
        </a-form-model>
    </div>
</template>
<script>
export default {
    data() {
        return {
            loading: false,
            model: {
                username: 'SuperAdmin',
                password: '123456',
                rememberMe: true
            },
            validatorRules: {
                username: [
                    { required: true, message: '请输入用户名!', validator: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码!', validator: 'blur' },
                ]
            }
        }
    },
    methods: {
        handleSubmit(){
            this.loading = true;
            this.$refs['form'].validate(valid => {
                if (valid) {
                    this.$store.dispatch("user/login", this.model).then((res) => {
                        this.loading = false;
                        if(res.success){
                            this.$store.dispatch('user/getInfo');
                            this.$router.push("/")
                        }else{
                            this.$notification[ 'error' ]({
                                message: '登录失败',
                                description: res.error,
                                duration: 4
                            });
                        }
                    });
                    
                } else {
                    this.loading = false;
                    console.log('error submit!!');
                    return false
                }
            })
            
        },
        handleRememberMeChange(e){
            this.model.rememberMe = e.target.checked
        }
    }
}
</script>