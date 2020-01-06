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
          :class="{active:index == nowIndex}"
          @click="active(index)"
        >
          <router-link :to="item.path">
            <div class="navList">
              <div class="item">
                <v-icon :name="item.icon" scale="1.5" />
                <p>{{ item.title }}</p>
              </div>
            </div>
          </router-link>
        </li>
        <li>
          <a href="http://zhyd.atx.net.cn/indexNew7.html">
            <div class="navList">
              <div class="item">
                <v-icon name="wave-square" scale="1.5" />
                <p>智慧用电</p>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="https://www.zxyun119.com/business.html#/home">
            <div class="navList">
              <div class="item">
                <v-icon name="tint" scale="1.5" />
                <p>智慧消防</p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </el-col>
    <el-col :span="6" class="header_time">
      <div class="timebox">
        <span class="time">{{ time }}</span>
        <span class="date">{{ date }}</span>
        <span class="week">{{ week }}</span>
      </div>
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
      ],
      time: '00 : 00 : 00',
      date: '2020-01-01',
      week: '星期一'
    };
  },
  mounted () {
    this.currentTime();
  },
  methods: {
    active (num) {
      this.nowIndex = num;
    },
    currentTime () {
      setInterval(this.getTime, 1000)
    },
    getTime: function () {
      //获取当前标准时间
      let nowDate = new Date();
      // 获取年份
      let year = nowDate.getFullYear();
      //获取当前月
      let month = nowDate.getMonth() + 1;
      //判断小于10 加0
      month = month < 10 ? '0' + month : month;
      //获取当前日
      let date = nowDate.getDate();
      //判断小于10 加0
      date = date ? '0' + date : date;
      //赋值
      this.date = year + '-' + month + '-' + date;
      //获取当前小时
      let hours = nowDate.getHours();
      hours = hours < 10 ? '0' + hours : hours;
      //获取当前分钟
      let minute = nowDate.getMinutes();
      minute = minute < 10 ? '0' + minute : minute;
      //获取当前秒
      let second = nowDate.getSeconds();
      second = second < 10 ? '0' + second : second;
      this.time = hours + ' : ' + minute + ' : ' + second;

      //星期集合
      let weekday = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
      let day = nowDate.getDay();
      this.week = weekday[day]
    }
  }
}
</script>

<style lang="stylus" scoped>
.header {
  width: 100%;
  height: 100%;

  .header_logo {
    .logo {
      width: 70%;

      img {
        width: 100%;
        vertical-align: middle;
      }
    }
  }

  .header_nav {
    height: 100%;

    ul {
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

              .fa-icon {
                width: 30px;
                height: 30px;
              }

              p {
                white-space: nowrap;
              }
            }
          }
        }
      }
    }
  }

  .header_time {
    .timebox {
      text-align: right;

      span {
        margin-left: 20px;
        color: $color;

        &.time {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
