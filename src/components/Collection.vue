<template>
    <div class="container-fluid">
        <div class="row " v-for="(row,index) in 3">
            <div class="col-xs-4" v-for="(o, index) in 3" :key="index">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="../assets/hamburger.png" class="image">
                    <div style="padding: 14px;">
                        <span>好吃的汉堡</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                            <el-button type="text" class="button">操作按钮</el-button>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
import { Card, Button } from 'element-ui'

export default {
    name: 'collection',
    components: {
        'el-card': Card,
        'el-button': Button
    },
    data: function() {
        return {
            'currentDate': new Date()
        }
    }
}
</script>

<style>
  .row {
    margin-bottom: 30px
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>