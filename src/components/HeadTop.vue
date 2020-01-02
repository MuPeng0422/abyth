<template>
  <el-row type="flex" class="header" justify="space-between" align="middle">
    <el-col :span="6" class="header_logo">
      <div class="logo">
        <img :src="logoImg" />
      </div>
    </el-col>
    <el-col :span="12" class="header_nav">
      <ul>
        <li
          v-for="(item, index) in navList"
          :key="index"
          :class="{active:index==nowIndex}"
          @click="active(index)"
        >
          <router-link :to="item.path">
            <div class="navList">
              <div class="item">
                <icon :name="item.icon" size="2x"></icon>
                <i class="fa fa-home fa-2x" aria-hidden="true"></i>
                <p>{{ item.title }}</p>
              </div>
            </div>
          </router-link>
        </li>
        <li>
          <a href="https://www.zxyun119.com/business.html#/home">
            <div class="navList">
              <div class="item">
                <i class="fa fa-home fa-2x" aria-hidden="true"></i>
                <p>智慧用电</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.zxyun119.com/business.html#/home">
            <div class="navList">
              <div class="item">
                <i class="fa fa-home fa-2x" aria-hidden="true"></i>
                <p>智慧消防</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </el-col>
    <el-col :span="6" class="header_weather">
      <icon name="home"></icon>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "HeadTop",
  data () {
    return {
      nowIndex: 0,
      logoImg: require('@/assets/img/logo2.png'),
      navList: [
        {
          title: '指挥中心',
          icon: 'home',
          path: '/home'
        }, {
          title: '项目管理',
          icon: 'th-list',
          path: '/personnel'
        }, {
          title: '人员管理',
          icon: 'user-plus',
          path: '/home'
        }, {
          title: '设备管理',
          icon: 'satellite-dish',
          path: '/home'
        }, {
          title: '监控管理',
          icon: 'video',
          path: '/home'
        }, {
          title: '事件管理',
          icon: 'list-ol',
          path: '/home'
        }, {
          title: '培训考核',
          icon: 'file-signature',
          path: '/home'
        }
      ]
    };
  },
  methods: {
    active (num) {
      this.nowIndex = num;
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/css/reset.styl';

.header {
  width: 100%;
  height: 100%;

  .header_logo {
    width: 25%;

    .logo {
      width: 100%;

      img {
        width: 100%;
        vertical-align: middle;
      }
    }
  }

  .header_nav {
    width: 100%;
    height: 100%;

    ul {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: space-around;

      li {
        width: 10%;
        display: flex;
        align-items: center;

        &.active {
          background: $bgc;
        }

        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          color: #fff;
          text-decoration: none;

          .navList {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            text-align: center;

            .item {
              width: 100%;
            }
          }
        }
      }
    }
  }
}
</style>