<template>
    <section class="page">
        <div class="container">
            <!-- 查询区域 -->
            <div class="search-wrapper">
                <a-form layout="inline" @keyup.enter.native="queryData">
                    <a-row :gutter="24">
                        <a-col :md="6" :sm="8">
                            <a-form-item label="名称">
                                <a-input v-model="queryParam.name" placeholder="请输入名称"></a-input>
                            </a-form-item>
                        </a-col>
                        <a-col :md="6" :sm="8">
                            <a-form-item label="标题">
                                <a-input v-model="queryParam.title" placeholder="请输入标题"></a-input>
                            </a-form-item>
                        </a-col>
                        
                        <template v-if="toggleSearchStatus">
                            <a-col :md="6" :sm="8">
                                <a-form-item label="内容">
                                    <a-input v-model="queryParam.content" placeholder="请输入内容"></a-input>
                                </a-form-item>
                            </a-col>
                            <a-col :md="6" :sm="8">
                                <a-form-item label="类型">
                                    <a-input v-model="queryParam.type" placeholder="请输入类型"></a-input>
                                </a-form-item>
                            </a-col>
                        </template>
                        
                        <a-col :md="6" :sm="8">
                            <span style="float: left;overflow: hidden;" class="page-search-submitButtons">
                                <a-button type="primary" @click="queryData" icon="search">查询</a-button>
                                <a-button type="primary" @click="queryReset" icon="reload" style="margin-left: 8px">重置</a-button>
                                <a @click="handleToggleSearch" style="margin-left: 8px">
                                    {{ toggleSearchStatus ? '收起' : '展开' }}
                                    <a-icon :type="toggleSearchStatus ? 'up' : 'down'"/>
                                </a>
                            </span>
                        </a-col>
                    </a-row>
                </a-form>
            </div>

            <!-- 操作按钮区域 -->
            <div class="operator-wrapper">
                <a-button type="primary" @click="handleAdd" icon="plus">新增</a-button>
                <a-button type="primary" @click="handleExport" icon="download">导出</a-button>
            </div>

            <!-- 表格区域 -->
            <div class="table-wrapper">
                <div class="ant-alert ant-alert-info" style="margin-bottom: 16px;">
                    <i class="anticon anticon-info-circle ant-alert-icon"></i>
                    已选择 <a style="font-weight: 600">{{ selectedRowKeys.length }}</a>项
                    <a style="margin-left: 24px" @click="onClearSelected">清空</a>
                </div>

                <a-table
                    ref="table"
                    size="middle"
                    bordered
                    rowKey="id"
                    :columns="columns"
                    :dataSource="dataSource"
                    :pagination="pagination"
                    :loading="loading"
                    :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
                    @change="handleTableChange"
                >
                    <span slot="templateContent" slot-scope="text">{{ text }}</span>

                    <span slot="action" slot-scope="text, record">
                        <a @click="handleEdit(record)">编辑</a>
                        <a-divider type="vertical"/>
                        <a-dropdown>
                            <a class="ant-dropdown-link">更多 <a-icon type="down"/></a>
                            <a-menu slot="overlay">
                                <a-menu-item>
                                    <a @click="handleDelete(record.id)">删除</a>
                                </a-menu-item>
                                <a-menu-item>
                                    <a>测试</a>
                                </a-menu-item>
                            </a-menu>
                        </a-dropdown>
                    </span>
                </a-table>
            </div>
        </div>

        <!-- 表单区域 -->
        <message-modal ref="modalForm" @ok="modalFormOk"></message-modal>
    </section>
</template>
<script>
import messageModal from './modules/MessageModal';
export default {
    components: {
        messageModal
    },
    data() {
        return {
            toggleSearchStatus: false,
            queryParam: {
                name: '',
                title: '',
                content: '',
                type: ''
            },
            loading: false,
            // 表头
            columns: [{ 
                title: '#', 
                dataIndex: '', 
                key: 'rowIndex', 
                width: 60, 
                align: 'center', 
                customRender: function(t, r, index) {
                    return parseInt(index) + 1
                }
            }, {
                title: '标题',
                align: 'center',
                dataIndex: 'title'
            }, {
                title: '名称',
                align: 'center',
                dataIndex: 'name'
            }, {
                title: '内容',
                align: 'center',
                dataIndex: 'content'
            }, {
                title: '类型',
                align: 'center',
                dataIndex: 'type',
                customRender: function(text) {
                    if(text == '1'){
                        return '短信'
                    }
                    if(text == '2'){
                        return '邮件'
                    }
                    if(text == '3'){
                        return '微信'
                    }
                    if(text == '4'){
                        return '系统'
                    }
                }
            }, {
                title: '操作',
                align: 'center',
                dataIndex: 'action',
                scopedSlots: {
                    customRender: 'action'
                }
            }],
            // 数据源
            dataSource:[{
                title: '111',
                name: '222',
                content: '333',
                type: 2
            },{
                title: '111',
                name: '222',
                content: '333',
                type: 2
            },{
                title: '111',
                name: '222',
                content: '333',
                type: 2
            },{
                title: '111',
                name: '222',
                content: '333',
                type: 2
            },{
                title: '111',
                name: '222',
                content: '333',
                type: 2
            },{
                title: '111',
                name: '222',
                content: '333',
                type: 2
            },{
                title: '111',
                name: '222',
                content: '333',
                type: 2
            },{
                title: '111',
                name: '222',
                content: '333',
                type: 2
            },{
                title: '111',
                name: '222',
                content: '333',
                type: 2
            },{
                title: '111',
                name: '222',
                content: '333',
                type: 2
            },{
                title: '111',
                name: '222',
                content: '333',
                type: 2
            },{
                title: '111',
                name: '222',
                content: '333',
                type: 2
            },{
                title: '111',
                name: '222',
                content: '333',
                type: 2
            },{
                title: '111',
                name: '222',
                content: '333',
                type: 2
            }],
            // 分页
            pagination: {
                current: 1,
                pageSize: 10,
                pageSizeOptions: ['10', '20', '30'],
                showTotal: (total, range) => {
                    return range[0] + '-' + range[1] + ' 共' + total + '条'
                },
                showQuickJumper: true,
                showSizeChanger: true,
                total: 0
            },
            selectedRowKeys: [],
            selectionRows: []
        }
    },
    mounted() {
        this.queryData();
    },
    methods: {
        // 切换查询条件
        handleToggleSearch(){
            this.toggleSearchStatus = !this.toggleSearchStatus;
        },
        // 分页、筛选、排序变化时触发
        handleTableChange(pagination, filters, sorter){
            this.pagination = pagination
        },
        // 查询数据
        queryData(){

        },
        // 重置
        queryReset(){
            for(var i in this.queryParam){
                this.queryParam[i] = '';
            }
            this.queryData()
        },
        // 选择
        onSelectChange(selectedRowKeys, selectionRows){
            this.selectedRowKeys = selectedRowKeys;
            this.selectionRows = selectionRows;
        },
        // 清除选择
        onClearSelected(){
            this.selectedRowKeys = [];
            this.selectionRows = [];
        },
        // 新增/修改 成功时，重载列表
        modalFormOk() {
            this.queryData()
        },
        // 新增
        handleAdd(){
            this.$refs.modalForm.add();
            this.$refs.modalForm.title = "新增";
            this.$refs.modalForm.disableSubmit = false;
        },
        // 编辑
        handleEdit(record){
            this.$refs.modalForm.edit(record);
            this.$refs.modalForm.title = "编辑";
            this.$refs.modalForm.disableSubmit = false;
        },
        // 删除
        handleDelete(){
            this.$confirm({
                title: '提示',
                content: '确定要删除当前数据吗?删除后不可恢复',
                okText: '确定',
                okType: 'danger',
                cancelText: '取消',
                onOk() {
                    console.log('OK');
                },
                onCancel() {
                    console.log('Cancel');
                }
            });
        },
        // 导出
        handleExport(){

        },
    }
}
</script>