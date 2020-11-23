<template>
  <div class="HomePageClass">
    <div class="HomeContent">
      <div class="HomePageTitle">
        <img title="大屏切换" @click="buttoncli" src="../assets/img/dangLog1.png" alt />
        <p>先立智慧党建云平台</p>
      </div>

      <div class="HeaderBar">
        <ul>
          <router-link to="/g">
            <li class="HeaderBarULI1">
              <!-- <div class> -->
              <p style="margin-left:5px;">党组织</p>
              <!-- </div> -->
            </li>
          </router-link>
          <router-link to="/i">
            <li class="HeaderBarULI2">
              <div>
                <p class="PaddingRisd">党建</p>
                <p class="PaddingRisd">之窗</p>
              </div>
            </li>
          </router-link>
          <router-link to="/f">
            <li class="HeaderBarULI3">
              <div>
                <p class="PaddingRisd">两学</p>
                <p class="PaddingRisd">一做</p>
              </div>
            </li>
          </router-link>
          <router-link to="/e">
            <li class="HeaderBarULI4">
              <div>
                <p class="PaddingRisd">三会</p>
                <p class="PaddingRisd">一课</p>
              </div>
            </li>
          </router-link>
          <router-link to="/c">
            <li class="HeaderBarULI5">
              <div>
                <p class="PaddingRisd">智慧</p>
                <p class="PaddingRisd">党课</p>
              </div>
            </li>
          </router-link>
          <router-link to="/n">
            <li class="HeaderBarULI6">
              <div>
                <p>党建</p>
                <p style="margin-left:5px;">大数据</p>
              </div>
            </li>
          </router-link>
        </ul>
      </div>

      <div class="HomeLunbo">
        <div class="HomeLunbo_left">
          <!-- v-on:mouseover="stop()" v-on:mouseout="move()" -->
          <div  class="HomeLunbo_leftImg app" style="position:relative">
            <transition-group tag="ul" name="image" style="widht:100%;height:100%">
              <li
                v-for="(items,index) in list"
                v-show="index===num"
                :key="index"
                 style="position: absolute;left:0;width:100%; height: 100%"
              >
                <img :src="items" alt style="width:100%;height:100%" />
                <div class="xdd" style="position: absolute;right: 20px;bottom:30px">
                  <span
                    v-for="(items,index) in list.length"
                    :key="index"
                    class="nav"
                    @click="change(index)"
                    :class="{'active':index==num} "
                  ></span>
                </div>
              </li>
            </transition-group>
          </div>
          <!-- <img class="HomeLunbo_leftImg" src="../assets/img/WechatIMG10.png" alt /> -->
        </div>
        <div class="HomeLunbo_right">
          <ul>
            <router-link to="/k">
              <li class="RightImg1">
                <div class>
                  <div class>
                    <img src="../assets/img/home1.png" alt />
                  </div>
                  <div>历届党代会</div>
                </div>
              </li>
            </router-link>
              <li @click="autofunc('ScreenRecorder')" class="RightImg2">
                <div>
                  <div>
                    <img src="../assets/img/home2.png" alt />
                  </div>
                  <div>党建录屏</div>
                </div>
              </li>
            <!-- <router-link to> -->
              <li @click="autofunc('WhiteBoard')" class="RightImg3">
                <div>
                  <div>
                    <img src="../assets/img/home3.png" alt />
                  </div>
                  <div>白板书写</div>
                </div>
              </li>
            <!-- </router-link> -->
            <!-- <router-link to> -->
              <li @click="autofunc('TakePhoto')" class="RightImg4">
                <div>
                  <div>
                    <img src="../assets/img/home4.png" alt />
                  </div>
                  <div>党建拍照</div>
                </div>
              </li>
            <!-- </router-link>
            <router-link to> -->
              <li @click="autofunc('screenSharePkg')" class="RightImg5">
                <div>
                  <div>
                    <img src="../assets/img/home5.png" alt />
                  </div>
                  <div>无线传屏</div>
                </div>
              </li>
            <!-- </router-link>
            <router-link to> -->
              <li @click="autofunc()" class="RightImg6">
                <div>
                  <div>
                    <img src="../assets/img/home6.png" alt />
                  </div>
                  <div>文件快传</div>
                </div>
              </li>
            <!-- </rou/nk to> -->
              <li @click="autofunc()" class="RightImg7">
                <div>
                  <div>
                    <img src="../assets/img/home7.png" alt />
                  </div>
                  <div>党建投票</div>
                </div>
              </li>
            <!-- </router-link>
            <router-link to> -->
              <li @click="autofunc('MindLinkerMeeting')" class="RightImg8">
                <div>
                  <div>
                    <img src="../assets/img/home8.png" alt />
                  </div>
                  <div>党建会议</div>
                </div>
              </li>
            <!-- </router-link> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import screenfull from "screenfull";
export default {
  name: "home",
  data() {
    return {
      isFullscreen: false,
      data: ["1", "2", "3"],
      time: "",
      num: 0,
      list: [
        // '/static/img/banner1.jpg',
        // '/static/img/two.jpg',
        // '/static/img/three.jpg',
        // '../assets/img/banner1.jpg',
        // '../assets/img/two.jpg',
        // '../assets/img/three.jpg',
        // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534136662314&di=af7ec227db5e118a5626a94ab97026f3&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4bed2e738bd4b31ccda81d7a8bd6277f9f2ff85f.jpg",
        "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=4b22ec31ddc8a786a12a4c0e5708c9c7/5bafa40f4bfbfbedc5597ab474f0f736aec31ffc.jpg",
        "https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=87d6daed02f41bd5c553eef461d881a0/f9198618367adab4b025268587d4b31c8601e47b.jpg",
      ],
    };
  },
  methods: {
    // 其他功能
    autofunc(a){
      if(!a){
        this.$message.error('功能暂未实现')
      }
      this.$axios({
      type:'get',
      url:'/openSoftware?softwareName='+a
    }).then((res)=>{
      console.log(res.data)
      // this.list = res.data.data
    })
    },
    buttoncli() {
      screenfull.toggle();
    },
    play() {
      this.time = setInterval(() => {
        this.num++;
        if (this.num == this.list.length) {
          this.num = 0;
        }
      }, 4000);
    },
    change(i) {
      this.num = i;
    },
    stop() {
      clearInterval(this.time);
    },
    move() {
      this.play();
    },
  },
  mounted() {
    // console.log(baseUrl)
    this.play()
    // 获取轮播图
    // this.$axios({
    //   type:'get',
    //   url:'/party/banner/largeScreen/getBanner?lesseeId=2'
    // }).then((res)=>{
    //   console.log(res.data.data)
    //   this.list = res.data.data
    // })
  },
   beforeDestroy(){
      clearInterval(this.time);
console.log('销毁')
  }
};
</script>

<style scoped>
.HomeLunbo_right > ul > a > li > div > div {
  font-size: 0.28rem;
  color: #fff;
}
.HeaderBarULI1 {
  position: relative;
  top: 60px;
}
.PaddingRisd {
  padding-left: 6px;
  padding-top: 1px;
}
.HeaderBarULI2 {
  position: relative;
  top: 15px;
}
.HeaderBarULI3 {
  position: relative;
  top: -25px;
  transform: rotate(10deg);
}
.HeaderBarULI3 > div {
  transform: rotate(-9deg);
}
.HeaderBar {
  padding-left: 19%;
  padding-right: 6%;
  font-size: 16px;
  color: #333;
}
.HeaderBarULI4 {
  position: relative;
  top: -30px;
  transform: rotate(12deg);
}
.HeaderBarULI4 > div {
  transform: rotate(-12deg);
}
.HeaderBarULI5 {
  position: relative;
  top: -30px;
  transform: rotate(14deg);
}
.HeaderBarULI5 > div {
  transform: rotate(-12deg);
}
.HeaderBarULI6 {
  top: 25px;
  position: relative;
  transform: rotate(23deg);
}
.HeaderBarULI6 > div {
  transform: rotate(-22deg);
}
.HeaderBar ul li {
  text-align: center;
  background: url("../assets/img/xingxing.png") no-repeat;
  background-size: 100% 100%;
  width: 190px;
  height: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.HeaderBar ul li p {
  font-size: 0.3rem;
}
.HeaderBar ul {
  display: flex;
  justify-content: space-around;
}
.HeaderBar {
  margin: 30px 0 60px;
}
.HomeLunbo_right ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.HomeLunbo_right ul li {
  background: url("../assets/img/rightBacks.png") no-repeat;
  background-size: 100% 100%;
  text-align: center;
  width: 1.5rem;
  font-size: 0.28rem;
  color: #fff;
  height: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.2rem;
}
.HomeLunbo_right ul li > div > img {
  width: 40px;
  border-radius: 10px;
}
ul li {
  list-style: none;
}
.HomeLunbo_left {
  width: 77%;
  height: 7rem;
  border: 8px solid #fff;
  border-radius: 10px;
  background: #fff;
}
.HomeLunbo_right {
  width: 4rem;
}
.HomeLunbo_right ul {
  display: flex;
  justify-content: space-around;
  width: 100%;
}
.HomeLunbo {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.HomeLunbo_leftImg {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.HomeContent {
  margin: 0 auto;
  padding: 2% 3%;
}
.HomePageTitle {
  display: flex;
  align-items: center;
}
.HomePageTitle > img {
  width: 0.75rem;
  cursor: pointer;
}
.HomePageTitle > p {
  font-size: 0.36rem;
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
  text-shadow: 1px 3px 2px #000;
}
.HomePageClass {
  background: url("../assets/img/homeBack.png") no-repeat;
  background-size: 100% 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.screen {
  cursor: pointer;
}
a {
  text-decoration: none;
  color: #333;
}
.xdd {
  display: flex;
  margin-right: 20px;
}
.xdd span {
  display: block;
  width: 20px;
  height: 20px;
  background: #fff;
  margin: 0 10px;
  border-radius: 50%;
}
.xdd .active {
  width: 40px;
  background: coral;
  border-radius: 50px;
}
</style>
