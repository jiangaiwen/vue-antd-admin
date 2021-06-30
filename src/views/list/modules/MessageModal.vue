<template>
    <a-modal
        :title="title"
        :width="800"
        :visible="visible"
        :confirmLoading="confirmLoading"
        @ok="handleOk"
        @cancel="handleCancel"
        okText="确定"
        cancelText="关闭"
    >
        <a-spin :spinning="confirmLoading">
            <a-form :form="form">
                <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32}">
                    <a-col :span="12">
                        <a-form-item
                            :labelCol="labelCol"
                            :wrapperCol="wrapperCol"
                            label="标题"
                        >
                            <a-input v-decorator="['title', validatorRules.title ]" placeholder="请输入标题"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item
                            :labelCol="labelCol"
                            :wrapperCol="wrapperCol"
                            label="名称"
                        >
                            <a-input v-decorator="['name', validatorRules.name ]" placeholder="请输入名称"></a-input>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item
                            :labelCol="labelCol"
                            :wrapperCol="wrapperCol"
                            label="内容"
                        >
                            <a-input v-decorator="['content', validatorRules.content ]" placeholder="请输入内容"></a-input>
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
        </a-spin>
    </a-modal>
</template>
<script>
import pick from 'lodash.pick';
export default {
    data() {
        return {
            title: '操作',
            visible: false,
            labelCol: {
                xs: {span: 24},
                sm: {span: 5},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            },
            confirmLoading: false,
            form: this.$form.createForm(this),
            validatorRules: {
                title: {rules: [{ required: true, message: '请输入标题!' }]},
                name: {rules: [{required: true, message: '请输入名称!'}]},
                content: {rules: [{required: true, message: '请输入内容!'}]}
            },
        }
    },
    methods: {
        add(){
            this.edit({})
        },
        edit(record){
            this.form.resetFields();
            this.model = Object.assign({}, record);
            this.visible = true;

            this.$nextTick(() => {
                this.form.setFieldsValue(pick(this.model, 'title', 'name', 'content', 'type'))
            })
        },
        close(){
            this.$emit('close'),
            this.visible = false;
        },
        // 触发表单验证
        handleOk(){
            const that = this;
            this.form.validateFields((err, values) => {
                if(!err){
                    that.confirmLoading = true;
                }
            })
        },
        handleCancel(){
            this.close()
        }
    }
}
</script>