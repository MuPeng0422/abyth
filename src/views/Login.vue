<template>
  <div class="login">
    <el-row class="container" :gutter="10">
      <el-col :xs="18" :sm="14" :md="12" :lg="8" :xl="6">
        <div class="logo">
          <span>
            <b>安天下</b>一体化管理系统
          </span>
        </div>
        <div class="form">
          <el-form ref="form" :model="form">
            <el-form-item class="nomargin">
              <span class="active">系统登录</span>
            </el-form-item>
            <el-form-item>
              <el-input prefix-icon="el-icon-user" v-model="form.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input
                type="password"
                prefix-icon="el-icon-lock"
                v-model="form.password"
                placeholder="请输入密码"
              ></el-input>
            </el-form-item>
            <el-form-item class="nomargin">
              <el-row>
                <el-col :span="14">
                  <el-input prefix-icon="el-icon-user" v-model="form.captcha" placeholder="请输入验证码"></el-input>
                </el-col>
                <el-col :span="10" class="captchaImg">
                  <img :src="captcha" alt />
                </el-col>
              </el-row>
            </el-form-item>
            <el-form-item class="nomargin">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="记住我" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item class="nomargin">
              <el-button type="primary" size="medium" class="loginBtn" @click="onSubmit">登录</el-button>
            </el-form-item>
            <el-form-item class="nomargin">
              <el-button type="text" size="medium" class="reg">注册账号</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  name: "login",
  data () {
    return {
      random: Math.floor(Math.random() * (9999999 - 1000000 + 1)) + 1000000,
      form: {
        username: '',
        password: '',
        type: [],
        captcha: '',
        token: ''
      }
    }
  },
  created () {
    this.captcha = 'api/auth/captcha?key=' + this.random
  },
  methods: {
    ...mapMutations(['changeLogin']),
    onSubmit () {
      let _this = this;
      if (this.form.username === '') {
        this.$message.error('用户名不能为空');
        return;
      } else if (this.form.password === '') {
        this.$message.error('密码不能为空');
        return;
      } else if (this.form.captcha === '') {
        this.$message.error('验证码不能为空');
        return;
      }
      let formData = new FormData();
      formData.append('username', this.form.username);
      formData.append('password', this.form.password);
      formData.append('grant_type', 'password');
      formData.append('code', this.form.captcha);
      formData.append('key', this.random);

      let config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ZmViczoxMjM0NTY='
        }
      }
      this.axios.post('api/auth/oauth/token', formData, config).then((res) => {
        if (res.status === 200) {
           _this.userToken = res.data.access_token;
          // 将用户token保存到vuex中
          _this.changeLogin({ Authorization: _this.userToken });
          _this.$message({
          message: '恭喜你，登录成功！',
          type: 'success'
        });
          _this.$router.push('/home');
        }
      })
        .catch(function (err) {
          if(err){
            _this.$message.error(err.response.data.message);
          }
        });

    }
  }
}
</script>
<style lang="stylus" scoped>
.login {
  width: 100%;
  height: 100%;
  background: #f0f2f5 url('~@/assets/img/background.svg') no-repeat center 110px;
  display: flex;
  align-items: center;

  .container {
    width: 100%;
    display: flex;
    justify-content: center;

    .logo {
      width: 100%;
      height: 80px;
      font-size: 27px;
      color: #3491ff;
      text-align: center;

      span {
        font-weight: 600;
        color: rgba(0, 0, 0, 0.85);
        border-bottom: 1px solid #3491ff;

        b {
          color: #3491ff;
        }
      }
    }

    .form {
      overflow: hidden;
      background: #fff;
      padding: 40px 40px 20px;
      border-radius: 0;
      box-shadow: 1px 3px 3px #ccc;
      position: relative;

      .active {
        display: inline-block;
        padding-right: 20px;
        font-size: 16px;
        line-height: 30px;
        color: #333;
        cursor: pointer;
        transition: color 0.5s ease;
      }

      .nomargin {
        margin-bottom: 0;

        .loginBtn {
          width: 100%;
        }

        .captchaImg {
          height: 40px;
          line-height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;

          img {
            width: 90%;
          }
        }

        .reg {
          width: 100%;
          text-align: right;
        }
      }
    }
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>