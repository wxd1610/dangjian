<template>
  <div class="MeetingTitleClass">
    <div class="MeetingTitleClassBox">
      <div class="returnLisTitlex">
        <span @click="buttoncli" class="TitleName">{{contents.meetingTitle}}</span>
        <span class="retRighex">
          <router-link to="/e">
            <span class="returnLis">返回</span>
            <span class="ProjecArrow"></span>
          </router-link>
        </span>
      </div>

      <div class="MeetingContnet">
        <div class="MeetingContnetBox">
          <div class="MeetingContnetBoxBackff"></div>
          <div class="MeetingContnetBox_comer">
            <div
              class="MeetingContnetBox_Left"
              v-on:mouseover="stop()"
              v-on:mouseout="move()"
              style=" position: relative;"
            >
              <!-- 轮播图 -->
              <img :src="imgArr[index]" id="pic" />
              <div id="left" @click="pre">
                <p></p>
              </div>
              <div id="right" @click="next">
                <p></p>
              </div>
              <div id="pagenum">
                <p>{{index+1}}</p>/
                <p style="font-size:0.2rem">{{imgArr.length}}</p>
              </div>
              <!-- <img class="BackgroundMe" src="../assets/img/background.jpg" alt /> -->
              <div class="MeetingContentxv">
                <p>
                  <span>
                   {{contents.meetingContent}}
                  </span>
                </p>
              </div>
            </div>
            <div class="MeetingContnetBox_Right">
              <div class="MeetingContnetBox_RightBack">
                <div>
                  <p>会议类型：</p>
                  <p>{{contents.meetingType_dictText}}</p>
                </div>
                <div>
                  <p>会议类别：</p>
                  <p>{{contents.meetingCategory_dictText}}</p>
                </div>
                <div>
                  <p>主持人：</p>
                  <p>{{contents.compere}}</p>
                </div>
                <div>
                  <p>参会人员：</p>
                  <p @click="ToViewClick" class="redHighlight">查看</p>
                </div>
                <div>
                  <p>开始时间：</p>
                  <p>{{contents.startTime}}</p>
                </div>
                <div>
                  <p>会议时长：</p>
                  <p>{{contents.meetingLength}}</p>
                </div>
                <div class="DispNOne">
                  <p class="MarginTopcb">参会地址：</p>
                  <p
                    style="letter-spacing:1px;	word-wrap: break-word;word-break: break-all;"
                  >{{contents.meetingAddress}}</p>
                </div>
                <div class="download">
                  <p class="MarginTopcb">相关文件：</p>
                  <div v-for="(item,index) in relevantDocument" :key="index">
                    <p>没有名字</p>
                    <a class="redHighlight" :href="item" download>下载</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 弹框-->
    <div v-if="bouncedShow" class="bounced">
      <div class="bouncedBox">
        <img @click="DelClick" class="DelClass" src="../assets/img/del.png" alt />
        <p class="attendees">参会人员名单</p>
        <ul class="bouncedListx">
          <li v-for="(item,index) in lesson" :key="index">{{item.compellation}}</li>
        </ul>
      </div>
    </div>
    <!--      弹框-->
  </div>
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "MeetingTitle",
  data() {
    return {
      isFullscreen: false,
      bouncedShow: false,
      contents: [],
      relevantDocument: [],
      lesson: [],
      imgArr: [
        // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534136662314&di=af7ec227db5e118a5626a94ab97026f3&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4bed2e738bd4b31ccda81d7a8bd6277f9f2ff85f.jpg",
        "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=4b22ec31ddc8a786a12a4c0e5708c9c7/5bafa40f4bfbfbedc5597ab474f0f736aec31ffc.jpg",
        // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534136662314&di=af7ec227db5e118a5626a94ab97026f3&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4bed2e738bd4b31ccda81d7a8bd6277f9f2ff85f.jpg",
        "https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=87d6daed02f41bd5c553eef461d881a0/f9198618367adab4b025268587d4b31c8601e47b.jpg",
      ],
      index: 0,
      time: "",
    };
  },
  methods: {
    pre: function () {
      if (this.index > 0) {
        this.index--;
      } else if (this.index == 0) {
        this.index = this.imgArr.length - 1;
      }
    },
    next: function () {
      // console.log(this.index);
      // console.log(this.imgArr.length);
      if (this.index < this.imgArr.length - 1) {
        this.index++;
      } else if (this.index == this.imgArr.length - 1) {
        this.index = 0;
      }
    },
    stop() {
      clearInterval(this.time);
    },
    move() {
      this.play();
    },
    play() {
      this.time = setInterval(this.next, 4000);
    },

    DelClick() {
      this.bouncedShow = false;
    },
    MacClick() {},
    buttoncli() {
      screenfull.toggle();
    },
    ToViewClick() {
      this.bouncedShow = true;
    },
    getContent() {
      this.$axios({
        type: "get",
        url: "/party/lesson/largeScreen/" + this.$route.query.id,
      }).then((res) => {
        console.log(res.data.data);
        this.contents = res.data.data;
        this.relevantDocument = res.data.data.relevantDocument.split(",");
        // this.imgArr = res.data.data.meetingPicture.split(",");
        this.$axios({
          type: "get",
          url:
            "/party/lessonpeople/largeScreen/list?threeMeetingLessonId=" +
            res.data.data.id,
        }).then((res) => {
          console.log(res.data);
          this.lesson = res.data.rows;
        });
      });
    },
  },
  mounted() {
    this.next(); //先调用一遍
    this.play();
    this.getContent();
  },
  beforeDestroy() {
    clearInterval(this.time);
    // console.log("销毁");
  },
};
</script>

<style scoped>
.MarginTopcb {
  margin-bottom: 0.3rem;
}
.DelClass {
  width: 0.7rem;
  display: block;
  text-align: right;
  position: absolute;
  top: 0.2rem;
  right: 0.25rem;
  cursor: pointer;
}
.bouncedListx li {
  font-size: 0.24rem;
  width: 1.3rem;
  height: 0.5rem;
  line-height: 0.5rem;
  background: orangered;
  border-radius: 10px;
  color: #fff;
  text-align: center;
  margin: 0.3rem 0.2rem 0;
  cursor: pointer;
}
.bouncedListx li:hover {
  background: red;
}
.bouncedListx {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
}
.attendees {
  font-size: 0.35rem;
  color: #333;
  margin: 0.4rem 0 0.5rem;
  text-align: center;
}
.bouncedBox {
  background: #fff;
  border-radius: 10px;
  padding: 0.4rem 0.6rem;
  width: 80%;
  height: 7rem;
  position: relative;
  max-height: 7rem;
  overflow: auto;
}
.bounced {
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
}
.download > div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
}
.DispNOne {
  display: inline-block !important;
}
.DispNOne p:last-child {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 12;
  overflow: hidden;
}
.download {
  display: inline-block !important;
}
.download {
  font-size: 0.24rem;
  color: #333;
}
.MeetingContnetBox_RightBack > div {
  display: flex;
  justify-content: start;
  margin-bottom: 0.3rem;
  width: 100%;
}
.MeetingContnetBox_RightBack div p {
  font-size: 0.24rem;
  color: #333;
}
.MeetingContentxv {
  width: 95%;
  text-indent: 50px;
  background: #f8f8f8;
  border-radius: 10px;
  font-size: 0.24rem;
  color: #333;
  /* height: 2.3rem; */
}
.MeetingContentxv > p {
  padding: 0.2rem;
}
.MeetingContentxv > p > span {
  display: inline-block;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  line-height: 40px;
  letter-spacing: 1px;
}
.MeetingContnetBox_RightBack {
  border-radius: 10px;
  padding: 0.3rem 0.5rem;
}
.BackgroundMe {
  width: 95%;
  height: 5rem;
  border-radius: 10px;
  border: 2px solid red;
}
.MeetingContnetBox_Left {
  width: 70%;
  z-index: 9999;
  height: 100%;
}
.MeetingContnetBox_Right {
  width: 30%;
  z-index: 9999;
  background: #f1f1f1;
  border-radius: 10px;
}
.MeetingContnetBox_comer {
  z-index: 999;
  display: flex;
  justify-content: start;
  width: 100%;
  color: #333;
}
.MeetingContnetBoxBackff {
  background: url("../assets/img/fff.png") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  border-radius: 10px;
  z-index: 1;
}
.MeetingContnetBox {
  position: relative;
  padding: 0.3rem;
}
.MeetingContnet {
  margin-top: 0.5rem;
}
.MeetingTitleClassBox {
  padding: 0.6rem 0.7rem 0;
  background: url("../assets/img/proBack.png") center center no-repeat;
  background-size: cover;
  /*height: 3000px;*/
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
}
.ProjecArrow {
  width: 0.15rem;
  height: 0.15rem;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(-45deg);
  display: inline-block;
}
.returnLisTitlex {
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.returnLis {
  font-size: 0.3rem;
  color: #fff;
  margin-right: -0.2rem;
}
.TitleName {
  font-size: 0.48rem;
  color: #fff;
}
.redHighlight {
  border-bottom: 1px solid red;
  color: red !important;
  cursor: pointer;
}
a {
  text-decoration: none;
  /* color: #333; */
}
/* div {
  width: 400px;
  height: 300px;
  margin: 0 auto;
  position: relative;
} */
#pic {
  width: 95%;
  height: 6rem;
}
#left {
  position: absolute;
  left: 0px;
  top: 0;
  line-height: 6;
  margin-left: 3%;
  height: 100%;
  /* bottom: 150px; */
  /* width: 40px; */
}
#right {
  position: absolute;
  right: 0px;
  top: 0;
  line-height: 6;
  margin-right: 8%;
  height: 100%;
  /* bottom: 150px; */
  /* width: 40px; */
}
#left p,
#right p {
  color: #fff;
  font-size: 0.2rem;
  width: 0.4rem;
  height: 0.8rem;
  border-radius: 0.1rem;
  background: rgba(255, 255, 255, 0.3);
  margin: auto;
  display: inline-block;
}
#left p {
  background: url("../assets/img/left1.png") no-repeat;
  background-size: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  background-position: 50% 50%;
}
#right p {
  background: url("../assets/img/right1.png") no-repeat;
  background-size: 100%;
  background-color: rgba(255, 255, 255, 0.3);
  background-position: 50% 50%;
}
#pagenum {
  display: flex;
  position: absolute;
  right: 7%;
 top: 5.5rem;
  font-size: 0.3rem;
  color: #fff;
}

#pagenum p {
  display: flex;
  align-items: flex-end;
  margin: 0 5px;
}
</style>
