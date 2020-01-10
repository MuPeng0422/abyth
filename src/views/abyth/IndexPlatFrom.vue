<template>
  <div class="platfrom">
    <div class="system">
      <div class="itemBtn">
        <ul>
          <li v-for="(item, index) in btnList" :key="index" @click="active(index)">
            <a :href="item.url" target="_blank">
              <div class="item">
                <v-icon :name="item.icon" scale="3" />
                <p>{{ item.name }}</p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div class="ehcartLine">
        <ve-line
          id="IndexLine"
          width="100%"
          height="100%"
          :data="chartData"
          :extend="extend"
          :grid="grid"
          :legend-visible="false"
          :title="chartTitle"
        ></ve-line>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "IndexPlatFrom",
  data () {
    return {
      btnList: [{
        icon: 'globe',
        name: '应急管理平台',
        url: 'http://140.246.10.129:9081'
      }, {
        icon: 'chalkboard-teacher',
        name: '远程培训',
        url: 'https://test.atx.net.cn'
      }, {
        icon: 'fingerprint',
        name: '电子考勤',
        url: 'http://47.92.143.38:8089/kq/a/login'
      }, {
        icon: 'cart-plus',
        name: '电子商城',
        url: 'http://zs.atxmall.cn'
      }],
      extend: {
        'series.0.smooth': false
      },
      chartData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3530 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      },
      chartTitle: {
        text: '人流量统计',
        top: '10px'
      },
      grid: {
        bottom: '5%'
      }
    };
  }
}
</script>
<style lang="stylus" scoped>
.platfrom {
  width: 100%;
  height: 100%;
  padding: 0 2%;
  box-sizing: border-box;

  .system {
    height: 100%;

    .itemBtn {
      height: 35%;

      ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        overflow: hidden;

        li {
          width: 20%;
          height: 90%;
          cursor: pointer;

          a {
            width: 100%;
            height: 100%;
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            text-decoration: none;

            .item {
              color: #fff;
            }
          }

          &:nth-child(1) {
            background: #00c2ff;
          }

          &:nth-child(2) {
            background: #00cddf;
          }

          &:nth-child(3) {
            background: #24c768;
          }

          &:nth-child(4) {
            background: #e5ce10;
          }

          &:nth-child(5) {
            background: #ff7e00;
          }

          &:nth-child(5) {
            background: #da0000;
          }
        }
      }
    }

    .ehcartLine {
      height: 65%;
    }
  }
}
</style>