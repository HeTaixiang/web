<template>
    <div class="container-fluid" >
        <div class="row">
            <div class="col-xs-12" style="background-color:#ccc">
                <el-carousel height="300px" type="card">
                    <el-carousel-item v-for="(item, index) in arr" :key="index">
                        <h3 style="text-align:center;">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <div class="container">
                    <div class="row">
                        <!-- 子菜单 -->
                        <div class="col-xs-12 col-sm-3 ">
                            <el-menu default-active="/hello" :router="true">
                                <el-submenu index="1">
                                    <template slot="title"><i class="el-icon-message"></i>导航一</template>
                                    <el-menu-item-group>
                                        <template slot="title">分组一</template>
                                        <el-menu-item index="/hello">选项1</el-menu-item>
                                        <el-menu-item index="/collection">选项2</el-menu-item>
                                    </el-menu-item-group>
                                    <el-menu-item-group title="分组2">
                                        <el-menu-item index="1-3">选项3</el-menu-item>
                                    </el-menu-item-group>
                                    <el-submenu index="1-4">
                                        <template slot="title">选项4</template>
                                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                                    </el-submenu>
                                </el-submenu>
                                <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
                                <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
                            </el-menu>
                        </div>
    
                        <!-- 内容 -->
                        <div class="col-xs-12 col-sm-9 ">
                            <!-- 路径显示 -->
                            <div class="row breadcrumb-block">
                                <div class="col-xs-12 source">
                                    <el-breadcrumb separator="/">
                                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                                        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                                        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                                        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                                    </el-breadcrumb>
                                </div>
                            </div>
    
                            <!-- 具体内容展示 -->
                            <div class="row" style="margin-top:15px">
                                <div class="col-xs-12">
                                    <router-view></router-view>
                                </div>
                            </div>
    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template>

<script>
import { Carousel, CarouselItem, Menu, Submenu, MenuItem, MenuItemGroup, Breadcrumb, BreadcrumbItem } from 'element-ui'
export default {
    name: 'home',
    data: function () {
        return {
            arr: [1, 2, 3, 4],
            router: false
        }
    },
    components: {
        'el-carousel': Carousel,
        'el-carousel-item': CarouselItem,
        'el-menu': Menu,
        'el-submenu': Submenu,
        'el-menu-item': MenuItem,
        'el-menu-item-group': MenuItemGroup,
        'el-breadcrumb': Breadcrumb,
        'el-breadcrumb-item': BreadcrumbItem
    }

}
</script>
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}

.breadcrumb-block {
    border-width: 1px;
    border-style: solid;
    border-color: rgb(234, 238, 251);
    border-image: initial;
    border-radius: 4px;
    transition: 0.2s;
}

.breadcrumb-block .source {
    padding: 15px
}
</style>