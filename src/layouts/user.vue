<template>
    <div :class="['user-layout-wrapper', device]">
        <div class="container">
            <div class="top">
                <div class="header">
                    <a href="/">
                        <img src="~@/assets/images/logo.svg" class="logo" alt="logo">
                        <span class="title">Ant Design Vue</span>
                    </a>
                </div>
                <div class="desc">Ant Design 是西湖区最具影响力的 Web 设计规范</div>
            </div>  

            <div class="main">
                <router-view />
            </div>

            <div class="footer">
                <div class="links">
                    <a href="https://pro.loacg.com/" target="_blank">Pro 首页</a>
                    <a
                        href="https://github.com/sendya/ant-design-pro-vue"
                        target="_blank"
                    >
                        <a-icon type="github" />
                    </a>
                    <a href="https://ant.design/" target="_blank">Ant Design</a>
                </div>
                <div class="copyright">
                    Copyright &copy; 2021 <span>Ant Design Vue开源社区出品</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mixinDevice } from '@/utils/mixin'
export default {
    mixins: [mixinDevice],
}
</script>
<style lang="less" scoped>
.user-layout-wrapper{
    height: 100%;

    &.mobile {
        .container {
            .main {
                max-width: 368px;
                width: 98%;
            }
        }
    }

    .container {
        position: relative;
        width: 100%;
        min-height: 100%;
        background: #f0f2f5 url(~@/assets/images/background.svg) no-repeat 50%;
        background-size: 100%;
        padding: 110px 0 144px;

        a {
            text-decoration: none;
        }

        .top {
            text-align: center;

            .header {
                height: 44px;
                line-height: 44px;

                .badge {
                    position: absolute;
                    display: inline-block;
                    line-height: 1;
                    vertical-align: middle;
                    margin-left: -12px;
                    margin-top: -10px;
                    opacity: 0.8;
                }

                .logo {
                    height: 44px;
                    vertical-align: top;
                    margin-right: 16px;
                    border-style: none;
                }

                .title {
                    font-size: 33px;
                    color: rgba(0, 0, 0, .85);
                    font-family: "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
                    font-weight: 600;
                    position: relative;
                    top: 2px;
                }
            }
            .desc {
                font-size: 14px;
                color: rgba(0, 0, 0, 0.45);
                margin-top: 12px;
                margin-bottom: 40px;
            }
        }

        .main {
            min-width: 260px;
            width: 368px;
            margin: 0 auto;
        }

        .footer {
            position: absolute;
            width: 100%;
            bottom: 0;
            padding: 0 16px;
            margin: 48px 0 24px;
            text-align: center;

            .links {
                margin-bottom: 8px;
                font-size: 14px;
                a {
                    color: rgba(0, 0, 0, 0.45);
                    transition: all 0.3s;
                    &:not(:last-child) {
                        margin-right: 40px;
                    }
                }
            }
            .copyright {
                color: rgba(0, 0, 0, 0.45);
                font-size: 14px;
            }
        }   
    }
}
</style>