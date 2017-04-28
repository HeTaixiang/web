<template>
        <div class="wrap-footer-outer">
            <footer class="wrap-footer container-fluid">
                <div>
                    <img src="http://zhimei-cdn.oss-cn-shenzhen.aliyuncs.com/assets%2Fimg%2Fv2%2Fblue_slogan.png" alt="">
                </div>
    
                <ul class="links-list">
                    <li><a href="/page/about">关于我们</a></li>
                    <li><a href="/page/about#contact">联系我们</a></li>
                    <li><a href="#">帮助中心</a></li>
                    <li><a href="/page/app">手机APP</a></li>
                </ul>
    
                <div class="copyright">
                    <p>
                        2015©深圳市前海智媒网络科技有限公司.版权所有 | <a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备14064435号</a>
                    </p>
                </div>
            </footer>
        </div>
</template>

<style>
.wrap-footer-outer {
    position: relative;
    bottom: 0;
    width: 100%;
    min-width: 1230px;
    height: 140px;
    background: #fff;
    margin-top: 100px;
    border-top: 1px solid #e5e5e5;
}

.wrap-footer {
    padding-top: 20px;
    text-align: center;
}

.wrap-footer .links-list {
    display: inline-block;
    margin: 20px auto 20px;
    padding: 0;
}

.wrap-footer .links-list li {
    display: inline-block;
    padding: 0 10px;
}

.wrap-footer .links-list li a {
    color: #333;
}

.wrap-footer .side-board {
    position: fixed;
    right: 20px;
    bottom: 60px;
    cursor: default;
    z-index: 999;
}

.wrap-footer .side-board .side-board-card {
    width: 40px;
    height: 40px;
    background-size: cover;
    border: 1px solid #ddd;
    margin-bottom: 8px;
    color: #4285f4;
    position: relative;
    background: #fff;
}

.wrap-footer .side-board .side-board-card:hover {
    background: #4285f4;
    border-color: #4285f4;
    color: #fff;
}

.wrap-footer .side-board .service {
    height: auto;
    padding: 5px 0;
    border-color: #4285f4;
    font-size: 18px;
}

.wrap-footer .side-board .text {
    display: none;
    cursor: default;
    padding-top: 3px;
    font-size: 14px;
    line-height: 16px;
}

.wrap-footer .side-board .side-board-card:hover .text,
.wrap-footer .side-board .side-board-card:hover .slide {
    display: inherit;
}

.wrap-footer .side-board .text a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    display: block;
}

.wrap-footer .side-board .slide {
    background: #fff;
    position: absolute;
    bottom: 50%;
    right: 45px;
    padding: 8px;
    border: 1px solid #ddd;
    -webkit-transform: translate(0, 50%);
    transform: translate(0, 50%);
    box-shadow: 0 1px 1px #ccc;
    display: none;
}

.wrap-footer .side-board .slide-text {
    color: #666;
}

.wrap-footer .side-board .qr-code {
    background-image: url(http://zhimei-cdn.oss-cn-shenzhen.aliyuncs.com/assets%2Fimg%2Fv2%2Fwechat.png);
}

.wrap-footer .side-board .telephone {
    background-image: url(http://zhimei-cdn.oss-cn-shenzhen.aliyuncs.com/assets%2Fimg%2Fv2%2Fcustomer_service.png);
}

.wrap-footer .side-board .feedback {
    background-image: url(http://zhimei-cdn.oss-cn-shenzhen.aliyuncs.com/assets%2Fimg%2Fv2%2Ffeedback.png);
}

.wrap-footer .side-board .to-top {
    /*background-image: url(http://zhimei-cdn.oss-cn-shenzhen.aliyuncs.com/assets%2Fimg%2Fv2%2Ffeedback.png);*/
    background-image: url(http://zhimei-cdn.oss-cn-shenzhen.aliyuncs.com/assets%2Fimg%2Fv2%2Fup.png);
}

.wrap-footer .copyright {
    text-align: center;
}

.wrap-footer .copyright,
.wrap-footer .copyright a {
    color: #aaa;
    font-size: 13px;
}
</style>

