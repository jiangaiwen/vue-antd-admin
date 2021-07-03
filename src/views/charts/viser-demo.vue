<template>
    <section class="page">
        <div class="container">
            <a-tabs defaultActiveKey="1">
                <!-- 柱状图 -->
                <a-tab-pane tab="柱状图" key="1">
                    <bar title="柱状图" :dataSource="barData" :height="height" />
                </a-tab-pane>

                <!-- 多列柱状图 -->
                <a-tab-pane tab="多列柱状图" key="2">
                    多列柱状图
                </a-tab-pane>

                <!-- 迷你柱状图 -->
                <a-tab-pane tab="迷你柱状图" key="3">
                    迷你柱状图
                </a-tab-pane>

                <!-- 面积图 -->
                <a-tab-pane tab="面积图" key="4">
                    面积图
                </a-tab-pane>

                <!-- 迷你面积图 -->
                <a-tab-pane tab="迷你面积图" key="5">
                    迷你面积图
                </a-tab-pane>

                <!-- 多行折线图 -->
                <a-tab-pane tab="多行折线图" key="6">
                    多行折线图
                </a-tab-pane>

                <!-- 饼图 -->
                <a-tab-pane tab="饼图" key="7">
                    <pie title="饼图" :height="height"/>
                </a-tab-pane>

                <!-- 雷达图 -->
                <a-tab-pane tab="雷达图" key="8">
                    雷达图
                </a-tab-pane>

                <!-- 仪表盘 -->
                <a-tab-pane tab="仪表盘" key="9">
                    仪表盘
                </a-tab-pane>

                <!-- 进度条 -->
                <a-tab-pane tab="进度条" key="10">
                    进度条
                </a-tab-pane>

                <!-- 排名列表 -->
                <a-tab-pane tab="排名列表" key="11">
                    排名列表
                </a-tab-pane>
            </a-tabs>
        </div>
    </section>
</template>
<script>
import Bar from '@/components/Charts/Bar';
import Pie from '@/components/Charts/Pie';
export default {
    data() {
        return {
            height: 420,
            barData: [],
        }
    },
    components: {
        Bar,
        Pie
    },
    created() {
        setTimeout(() => {
            this.loadBarData()
        }, 100)
    },
    methods: {
        loadData(x, y, max, min, before = '', after = '月') {
            let data = []
            for(let i = 0; i < 12; i += 1) {
                data.push({
                    [x]: `${before}${i + 1}${after}`,
                    [y]: Math.floor(Math.random() * max) + min
                })
            }
            return data
        },
        // 加载柱状图数据
        loadBarData() {
            this.barData = this.loadData('x', 'y', 1000, 200)
        }
    }
}
</script>
<style lang="less" scoped>
/deep/ .ant-tabs{
    position: relative;
    height: 100%;

    .ant-tabs-content{
        height: calc(100% - 50px);
    }
}
</style>