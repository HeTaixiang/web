<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <el-carousel height="300px">
                    <el-carousel-item v-for="(item,index) in arr" :key="1">
                        <h3 :key="index" style="text-align:center;">{{ item }}</h3>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        
        <div class="row" style="margin:30px 15px 0px 30px">
            <div class="col-lg-2" style="">
                <el-menu default-active="2" class="el-menu-vertical-demo" >
                    <el-submenu index="1">
                        <template slot="title"><i class="el-icon-message"></i>导航一</template>
                        <el-menu-item-group>
                            <template slot="title">分组一</template>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                            <el-menu-item index="1-2">选项2</el-menu-item>
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
            <div class="col-lg-10" style="bakground-color:#d3dce6; height: 800px;">
                <router-view></router-view>
            </div>
        </div>
    
    </div>
</template>

<script>
import { Carousel, CarouselItem, Menu, Submenu, MenuItem, MenuItemGroup } from 'element-ui'
export default {
    name: 'home',
    data: function () {
        return {
            arr: [1, 2, 3, 4]
        }
    },
    components: {
        'el-carousel': Carousel,
        'el-carousel-item': CarouselItem,
        'el-menu': Menu,
        'el-submenu': Submenu,
        'el-menu-item': MenuItem,
        'el-menu-item-group': MenuItemGroup
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
</style>