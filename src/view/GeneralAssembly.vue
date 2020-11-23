<template>
  <div class="GeneralAssemblyClass">
    <div class="returnLisTitlex">
      <a href="javascript:history.back(-1)" style="display: contents;">
        <span class="returnLis">返回</span>
        <span class="ProjecArrow"></span>
      </a>
    </div>

    <div @click="NationalCong" class="NationalCongress">
      <div class="NationalCongressName">{{datearr[0]}}</div>
      <div class="NationalCongressASH">{{datearr[1]}}</div>
      <div class="NationalCongressName">{{datearr[2]}}</div>
      <!-- {{date.fullName}} -->
    </div>

    <div class="NationalCongressListx">
      <div class="NationalCongressListxImgx">
        <video class="NationalCongressListx_img" :src="videolink" controls></video>

        <div class="NationalCoPoins">
          <ul>
            <li
            style=" cursor: pointer;"
              v-for="(item,index) in videolist"
              :key="index"
              @click="AsHrADIClick(index+1)"
              :class="ASHRadioxShow == index+1 ? 'ASHRadiox':''"
            >{{index+1}}</li>
            <!-- <li @click="AsHrADIClick(2)" :class="ASHRadioxShow == 2 ? 'ASHRadiox':''">2</li>
            <li @click="AsHrADIClick(3)" :class="ASHRadioxShow == 3 ? 'ASHRadiox':''">3</li> -->
          </ul>
        </div>
      </div>
      <div class="NationalCongresstEXTCEN">
        <div class="DangxHlineList">
          <div class="DangxHline"></div>
          <div class="DangxName">{{date.fullName}}</div>
        </div>
        <div class="TextDahui">
          <div class="TextDahuiTextyi">
            {{date.content}}
          </div>
          <!-- <div class="TextDahuiTexter">
            驱蚊器翁群翁群翁驱蚊器翁群翁群翁驱蚊器翁群翁群翁驱蚊器翁群翁群翁
            驱蚊器翁群翁群翁驱蚊器翁群翁群翁驱蚊器翁群翁群翁驱蚊器翁群翁群翁
            驱蚊器翁群翁群翁驱蚊器翁群翁群翁驱蚊器翁群翁群翁驱蚊器翁群翁群翁
            驱蚊器翁群翁群翁驱蚊器翁群翁群翁驱蚊器翁群翁群翁驱蚊器翁群翁群翁
          </div>-->
        </div>
      </div>
      <div class="NationalCongresRight">
        <img class="NationalCongresRightImg" src="../assets/img/background.jpg" alt />
        <!-- <img class="NationalCongresRightImg" :src="date.relatedPictures" alt /> -->
        <div class="RelatedImages">
          <div class="RelatedImagesL" @click="left">
            <img src="../assets/img/left.png" alt />
          </div>
          <div class="RelatedImagesName">相关图片</div>
          <div class="RelatedImagesR" @click="right">
            <img src="../assets/img/right.png" alt />
          </div>
        </div>
      </div>
    </div>

    <div class="YiDaoJ">
      <ul class="YiDaoJOne">
        <li
          v-for="(item,index) in list.slice(0,10)"
          :key="index"
          @click="FooterBtnxClick(item.id)"
          :class="FooterBtnxShow == item.id?`FooterBtnx`+(index+1)+` ASHlenGsColor`:`FooterBtnx`+(index+1)"
        >{{item.fullName[3]}}</li>
        <!-- <li
          @click="FooterBtnxClick(2,'二')"
          :class="FooterBtnxShow == 2 ?`FooterBtnx`+2+` ASHlenGsColor`:`FooterBtnx2`"
        >二</li>
        <li
          @click="FooterBtnxClick(3,'三')"
          :class="FooterBtnxShow == 3 ?'FooterBtnx3 ASHlenGsColor':'FooterBtnx3'"
        >三</li>
        <li
          @click="FooterBtnxClick(4,'四')"
          :class="FooterBtnxShow == 4 ?'FooterBtnx4 ASHlenGsColor':'FooterBtnx4'"
        >四</li>
        <li
          @click="FooterBtnxClick(5,'五')"
          :class="FooterBtnxShow == 5 ?'FooterBtnx5 ASHlenGsColor':'FooterBtnx5'"
        >五</li>
        <li
          @click="FooterBtnxClick(6,'六')"
          :class="FooterBtnxShow == 6 ?'FooterBtnx6 ASHlenGsColor':'FooterBtnx6'"
        >六</li>
        <li
          @click="FooterBtnxClick(7,'七')"
          :class="FooterBtnxShow == 7 ?'FooterBtnx7 ASHlenGsColor':'FooterBtnx7'"
        >七</li>
        <li
          @click="FooterBtnxClick(8,'八')"
          :class="FooterBtnxShow == 8 ?'FooterBtnx8 ASHlenGsColor':'FooterBtnx8'"
        >八</li>
        <li
          @click="FooterBtnxClick(9,'九')"
          :class="FooterBtnxShow == 9 ?'FooterBtnx9 ASHlenGsColor':'FooterBtnx9'"
        >九</li>
        <li
          @click="FooterBtnxClick(10,'十')"
          :class="FooterBtnxShow == 10 ?'FooterBtnx10 ASHlenGsColor':'FooterBtnx10'"
        >十</li> -->
      </ul>
      <ul class="YiDaoJer">
        <li
          v-for="(item,index) in list.slice(10)"
          :key="index"
          @click="FooterBtnxClick(item.id)"
          :class="FooterBtnxShow == item.id?`FooterBtnx+`+(index+1)+`+ ASHlenGsColor`:`FooterBtnx`+(index+1)"
        >{{item.fullName[3]}}</li>
        <!-- <li
          @click="FooterBtnxClick(11,'十一')"
          :class="FooterBtnxShow == 11 ?'FooterBtnx11 ASHlenGsColor':'FooterBtnx11'"
        >十一</li>
        <li
          @click="FooterBtnxClick(12,'十二')"
          :class="FooterBtnxShow == 12 ?'FooterBtnx12 ASHlenGsColor':'FooterBtnx12'"
        >十二</li>
        <li
          @click="FooterBtnxClick(13,'十三')"
          :class="FooterBtnxShow == 13 ?'FooterBtnx13 ASHlenGsColor':'FooterBtnx13'"
        >十三</li>
        <li
          @click="FooterBtnxClick(14,'十四')"
          :class="FooterBtnxShow == 14 ?'FooterBtnx14 ASHlenGsColor':'FooterBtnx14'"
        >十四</li>
        <li
          @click="FooterBtnxClick(15,'十五')"
          :class="FooterBtnxShow == 15 ?'FooterBtnx15 ASHlenGsColor':'FooterBtnx15'"
        >十五</li>
        <li
          @click="FooterBtnxClick(16,'十六')"
          :class="FooterBtnxShow == 16 ?'FooterBtnx16 ASHlenGsColor':'FooterBtnx16'"
        >十六</li>
        <li
          @click="FooterBtnxClick(17,'十七')"
          :class="FooterBtnxShow == 17 ?'FooterBtnx17 ASHlenGsColor':'FooterBtnx17'"
        >十七</li>
        <li
          @click="FooterBtnxClick(18,'十八')"
          :class="FooterBtnxShow == 18 ?'FooterBtnx18 ASHlenGsColor':'FooterBtnx18'"
        >十八</li>
        <li
          @click="FooterBtnxClick(19,'十九')"
          :class="FooterBtnxShow == 19 ?'FooterBtnx19 ASHlenGsColor':'FooterBtnx19'"
        >十九</li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "GeneralAssembly",
  data() {
    return {
      isFullscreen: false,
      ASHRadioxShow: 1,
      FooterBtnxShow: 1,
      center: "一",
      date: {},
      datearr: [],
      list: [],
      videolist: [],
      videolink:''
    };
  },
  mounted() {
    this.$axios({
      type: "get",
      url: "/party/congress/largeScreen/list",
    }).then((res) => {
      console.log(res.data.rows);
      this.list = res.data.rows;
    });
    this.$axios({
      type: "get",
      url: "/party/congress/largeScreen/" + this.$route.query.FooterBtnxShow,
    }).then((res) => {
      console.log(res.data);
      this.date = res.data.data;
      //  {this.date.fullName : 0 : 2}
      var a = this.date.fullName.split("")[0] + this.date.fullName.split("")[1];
      var b =
        this.date.fullName.split("")[2] +
        this.date.fullName.split("")[3] +
        this.date.fullName.split("")[4];
      var c =
        this.date.fullName.split("")[5] +
        this.date.fullName.split("")[6] +
        this.date.fullName.split("")[7] +
        this.date.fullName.split("")[8] +
        this.date.fullName.split("")[9] +
        this.date.fullName.split("")[10];
      this.datearr = [a, b, c];
      console.log(this.date.fullName.split("")[0]);
      console.log(a);
      console.log(this.datearr);
      // this.FooterBtnxShow = 
      this.$axios({
        type: "get",
        url: "/party/video/largeScreen/list?congressId=" + this.date.id,
      }).then((res) => {
        console.log(res.data.rows);
        this.videolist = res.data.rows;
        this.videolink =  this.videolist[0].videoLink
      });
    });
    console.log();
    console.log(this.$route.query.FooterBtnxShow);
    this.FooterBtnxShow = this.$route.query.FooterBtnxShow;
    this.center = this.$route.query.center;
  },
  methods: {
    NationalCong() {
      screenfull.toggle();
    },
    AsHrADIClick(index) {
      console.log(index)
      this.ASHRadioxShow = index;
      this.videolink = this.videolist[index-1].videoLink
      console.log( this.videolink)
    },
    FooterBtnxClick(a) {
      console.log(a)
      this.FooterBtnxShow = a;
      // this.center = content;
    },
    right() {},
    left() {},
  },
};
</script>

<style scoped>
* {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent; /* For some Androids */
}
.ASHlenGsColor {
  background: url("../assets/img/xuanzhong.png") no-repeat center !important;
  background-size: 100% 100% !important;
  width: 1rem !important;
  height: 1rem !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.05rem;
}
.FooterBtnx19 {
  position: relative;
  top: -0.8rem;
}
.FooterBtnx18 {
  position: relative;
  top: -0.7rem;
}
.FooterBtnx17 {
  position: relative;
  top: -0.6rem;
}
.FooterBtnx16 {
  position: relative;
  top: -0.5rem;
}
.FooterBtnx15 {
  position: relative;
  top: -0.4rem;
}
.FooterBtnx14 {
  position: relative;
  top: -0.3rem;
}
.FooterBtnx13 {
  position: relative;
  top: -0.2rem;
}
.FooterBtnx12 {
  position: relative;
  top: -0.1rem;
}
.YiDaoJer {
  padding-left: 0.6rem;
}
.FooterBtnx10 {
  position: relative;
  top: -0.9rem;
}
.FooterBtnx9 {
  position: relative;
  top: -0.8rem;
}
.FooterBtnx8 {
  position: relative;
  top: -0.7rem;
}
.FooterBtnx7 {
  position: relative;
  top: -0.6rem;
}
.FooterBtnx6 {
  position: relative;
  top: -0.5rem;
}
.FooterBtnx5 {
  position: relative;
  top: -0.4rem;
}
.FooterBtnx4 {
  position: relative;
  top: -0.3rem;
}
.FooterBtnx3 {
  position: relative;
  top: -0.2rem;
}
.FooterBtnx2 {
  position: relative;
  top: -0.1rem;
}
.YiDaoJ {
  position: fixed;
  left: 5rem;
  bottom: 0.8rem;
  cursor: pointer;
}
.YiDaoJer li {
  background: url("../assets/img/weixuanz.png") no-repeat;
  background-size: 100%;
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.05rem;
}
.YiDaoJOne li {
  background: url("../assets/img/weixuanz.png") no-repeat;
  background-size: 100%;
  width: 1rem;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.05rem;
}
.YiDaoJ .YiDaoJer {
  display: flex;
  justify-content: start;
  font-size: 0.28rem;
  color: #000;
  margin-top: -0.2rem;
}
.YiDaoJ .YiDaoJOne {
  display: flex;
  justify-content: start;
  font-size: 0.28rem;
  color: #000;
}
.RelatedImagesR img {
  display: block;
  width: 0.2rem;
  font-size: 0.3rem;
}
.RelatedImagesL img {
  display: block;
  width: 0.2rem;
  font-size: 0.3rem;
}
.RelatedImagesName {
  font-size: 0.3rem;
  color: #000;
  padding: 0 0.2rem;
}
.RelatedImages {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ASHRadiox {
  background: red !important;
  color: #fff !important;
  cursor: pointer;
}
.NationalCongresRightImg {
  width: 100%;
  height: 3.5rem;
  border: 2px solid red;
  border-radius: 10px;
}
.NationalCongresRight {
  width: 25%;
  max-height: 6rem;
  position: relative;
}
.NationalCongresstEXTCEN {
  padding: 0 0.5rem;
  max-height: 6rem;
  width: 30%;
}
.NationalCongressListxImgx {
  width: 45%;
  max-height: 6rem;
  height: 6rem;
  position: relative;
}
.NationalCoPoins ul li {
  border: 3px solid red;
  width: 0.5rem;
  height: 0.5rem;
  margin-left: 0.3rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
}
.NationalCoPoins ul {
  display: flex;
  justify-content: start;
  font-size: 0.4rem;
  color: red;
}
.NationalCoPoins {
  position: absolute;
  right: 0;
  bottom: -0.8rem;
}
.TextDahuiTexter {
  font-size: 0.28rem;
  color: #333;
  text-indent: 0.6rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;
  line-height: 40px;
}
.TextDahuiTextyi {
  font-size: 0.28rem;
  color: #333;
  text-indent: 0.6rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 10;
  overflow: hidden;
  line-height: 48px;
  letter-spacing: 1px;
}
.DangxHlineList {
  margin-bottom: 0.2rem;
  display: flex;
  align-items: center;
}
.DangxName {
  font-size: 0.3rem;
  font-weight: bold;
  color: #333;
}
.DangxHline {
  width: 0.03rem;
  height: 0.25rem;
  background: #000;
  border-radius: 10px;
  margin-right: 0.1rem;
}
.NationalCongressListx_img {
  width: 100%;
  height: 100%;
  border: 8px solid red;
  border-radius: 10px;
}
.NationalCongressListx {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.3rem;
}
.NationalCongress {
  display: flex;
  justify-content: start;
  align-items: baseline;
}
.NationalCongressASH {
  font-size: 0.55rem;
  color: rgba(253, 242, 11);
  text-shadow: 2px 2px 3px red;
}
.NationalCongressName {
  font-size: 0.35rem;
  color: rgba(253, 242, 11);
  text-shadow: 2px 2px 3px red;
}
.ProjecArrow {
  width: 0.15rem;
  height: 0.15rem;
  border-right: 2px solid rgba(253, 242, 11);
  border-bottom: 2px solid rgba(253, 242, 11);
  transform: rotate(-45deg);
  display: inline-block;
}
.returnLis {
  font-size: 0.3rem;
  color: rgba(253, 242, 11);
  text-shadow: 2px 2px 3px red;
  margin-right: -35px;
}
.returnLisTitlex {
  text-align: right;
}
.GeneralAssemblyClass {
  background: url("../assets/img/daibiao.png") no-repeat;
  background-size: 100% 100%;
  /* height: 3000px; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 1rem;
}
a {
  text-decoration: none;
  /* color: #333; */
}
</style>
