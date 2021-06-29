<template>
    <a-config-provider :locale="locale">
        <div id="app">
            <router-view />
        </div>
    </a-config-provider>
</template>
<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import enUS from 'ant-design-vue/lib/locale-provider/en_US';
export default {
    data () {
        return {
            locale: zhCN
        }
    },
}
</script>