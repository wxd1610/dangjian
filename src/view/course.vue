<template>
  <div class="CourseClass">
    <div class="CourseClassBox">
      <div class="returnLisTitlex">
        <span @click="buttoncli" class="TitleName">{{content.partyClassName}}</span>
        <span class="retRighex">
          <a href="javascript:history.back(-1);" style="display:contents">
            <span class="returnLis">返回</span>
            <span class="ProjecArrow"></span>
          </a>
        </span>
      </div>

      <div class="shufflingList">
        <div class="shufflingList_Left">
          <!-- <img src="../assets/img/background.jpg" alt /> -->
          <video :src="video1" controls ></video>
          <!-- <video src="https://www.w3school.com.cn/i/movie.ogg" controls ></video> -->
        </div>
        <div class="shufflingList_Right">
          <ul v-for="(item, index) in dataList" :key="index">
            <li @click="check(arr.id,arr.resourcesPath,arr.parentId)" v-for="(arr, index1) in item.children" :key="index1">
              <div class="shufflingList_RightBox">
                <div class>
                  <img class="LogoJtn" src="../assets/img/yuanquan331.png" alt />
                </div>
                <div :class="arr.id ==checkid?'NewsHeadlines red' :'NewsHeadlines'">{{arr.resourcesName}}</div>
              </div>
              <div class>
                <div class="NewsHeadlines_text">
                  新华社勃发习近平同志文章阿萨达是大所多啊新华社勃发习近平同志文章阿萨达是大所多啊新华社勃发习
                  近平同志文章阿萨达是大所多啊新华社勃发习近平同志文章阿萨达是大所多啊
                  新华社勃发习近平同志文章阿萨达是大所多啊新华社勃发习近平同志文章阿萨达是大所多啊
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="courseCatalogList">
        <div class="directoryBox">
          <div @click="directoryClick(1)" :class="directoryShow == 1? 'directory':''">课程目录</div>
          <div @click="directoryClick(2)" :class="directoryShow == 2? 'directory':''">课程介绍</div>
        </div>

        <div class>
          <div v-if="directoryShow == 1" class>
            <div @click="DirListClick(item.id)" v-for="(item, index) in dataList" :key="index" class>
              <div class="courseTitlexBox">
                <div class="courseTitlex">{{item.resourcesName}}</div>
                <div :class="{DirectArrowASH:item.id == DirULlIstxSHow}" class="DirectArrow"></div>
              </div>

              <ul :class="{DirULlIstxLi:item.id !== DirULlIstxSHow}" class="DirULlIstx">
                <li @click="check(arr.id,arr.resourcesPath,arr.parentId)" v-for="(arr, index1) in item.children" :key="index1">
                  <div class="DirectArrow_logo">
                    <img src="../assets/img/yuanquan331.png" alt />
                  </div>
                  <div :class="arr.id ==checkid?'development red' :'development'">{{arr.resourcesName}}</div>
                </li>
              </ul>
            </div>
          </div>
          <div v-if="directoryShow == 2" class>
            <div class="DisplayFlexs">
              <div class="DisplayFlexs_name">课程讲师：</div>
              <div class="DisplayFlexs_text">{{content.courseInstructor}}</div>
            </div>
            <div class="DisplayFlexs">
              <div class="DisplayFlexs_name">讲师介绍：</div>
              <div class="DisplayFlexs_text">{{content.introduction}}</div>
            </div>
            <div class="DisplayFlexs" style="margin-bottom:0.15rem">
              <div class="DisplayFlexs_name">课程时长：</div>
              <div class="DisplayFlexs_text">{{content.courseDuration}}</div>
            </div>
            <div class>
              <div class="DisplayFlexs_name" style="margin-bottom:0.1rem">学习目标：</div>
              <div class="DisplayFlexs_text textInnerx">{{content.learningObjectives}}</div>
            </div>
            <div class="Martopxc">
              <div class="DisplayFlexs_name" style="margin-bottom:0.1rem">课程内容：</div>
              <div class="DisplayFlexs_text textInnerx">{{content.courseContent}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "course",
  data() {
    return {
      video1:'',
      checkid: "",
      content: [],
      isFullscreen: false,
      directoryShow: 1,
      dataList: [
        {
          title: "1、引领经济发展新常态",
          user: [
            {
              name: "1.0《引领经济发展新时代常态》",
            },
            {
              name: "1.1《引领经济发展新时代常态》",
            },
          ],
        },
        {
          title: "2、引领经济发展新常态",
          user: [
            {
              name: "2.1《引领经济发展新时代常态》",
            },
            {
              name: "2.2《引领经济发展新时代常态》",
            },
          ],
        },
        {
          title: "3、引领经济发展新常态",
          user: [
            {
              name: "3.1《引领经济发展新时代常态》",
            },
            {
              name: "2.2《引领经济发展新时代常态》",
            },
          ],
        },
      ],
      DirULlIstxSHow: 0,
    };
  },
  methods: {
    check(id,path,parentId) {
      console.log(path)
      this.checkid = id;
       this.video1 = path
       this.DirListClick(parentId)
    },
    buttoncli() {
      screenfull.toggle();
    },
    directoryClick(index) {
      this.directoryShow = index;
    },
    DirListClick(index) {
      this.DirULlIstxSHow = index;
      console.log(index);
    },
    getlist() {
      this.$axios({
        url:
          "/party/resources/largeScreen/getTreeList?partyClassId=" +
          this.$route.query.id,
      }).then((res) => {
        console.log(res);
        this.dataList = res.data.data;
        // this.total = res.data.total;
      });
    },
  },
  mounted() {
    this.getlist();
    this.$axios({
      url: "/party/class/largeScreen/" + this.$route.query.id,
    }).then((res) => {
      console.log(res);
      this.content = res.data.data;
      // this.total = res.data.total;
    });
  },
};
</script>

<style scoped>
.red {
  color: red !important;
}
.DisplayFlexs_text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.Martopxc {
  margin-top: 0.15rem;
}
.textInnerx {
  text-indent: 0.6rem;
  letter-spacing: 2px;
  /* margin-bottom: ; */
}
.DisplayFlexs_text {
  color: #666;
  font-size: 0.28rem;
  margin-left: 0.2rem;
}
.DisplayFlexs_name {
  font-size: 0.28rem;
  color: #000;
  font-weight: 400;
}
.DisplayFlexs {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 0.15rem;
}
.DirULlIstxLi {
  display: none !important;
}
.DirULlIstx {
  padding-left: 0.5rem;
  margin-top: 0.1rem;
}
.DirULlIstx li {
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0.05rem 0;
}
.development {
  font-size: 0.2rem;
  color: #333;
}
.DirectArrow_logo img {
  width: 0.15rem;
  height: 0.15rem;
  display: block;
  margin-right: 0.1rem;
}
.courseTitlexBox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.2rem;
  cursor: pointer;
}
.courseTitlex {
  font-size: 0.26rem;
  color: #333;
  /* margin-bottom: 0.1rem; */
}
.DirectArrow {
  width: 0.15rem;
  height: 0.15rem;
  border-right: 2px solid #333;
  border-bottom: 2px solid #333;
  transform: rotate(-45deg);
  display: inline-block;
}
.DirectArrowASH {
  width: 0.15rem;
  height: 0.15rem;
  border-right: 2px solid #333;
  border-bottom: 2px solid #333;
  transform: rotate(43deg);
  display: inline-block;
}
.directoryBox > div {
  width: 1.3rem;
  margin-right: 0.5rem;
  padding-bottom: 0.1rem;
  cursor: pointer;
}
.directory {
  color: orangered !important;
  border-bottom: 2px solid orangered;
  padding-bottom: 0.1rem;
}
.directoryBox {
  font-size: 0.3rem;
  display: flex;
  justify-content: start;
  border-bottom: 1px solid #ccc;
}
.courseCatalogList {
  background: #f1f1f1;
  border-radius: 10px;
  padding: 0.3rem 0.4rem;
  margin-bottom: 0.3rem;
}
.shufflingList_RightBox {
  display: flex;
  justify-content: start;
  align-items: center;
}
.LogoJtn {
  width: 0.2rem;
  height: 0.2rem;
  display: block;
  margin-top: -0.1rem;
}
.shufflingList_Right ul li {
  border-bottom: 1px solid #ccc;
  padding-bottom: 0.16rem;
  margin-bottom: 0.16rem;
}
.NewsHeadlines_text {
  font-size: 0.2rem;
  color: #666;
  display: -webkit-box;
  letter-spacing: 1px;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  padding-left: 0.3rem;
}
.NewsHeadlines {
  font-size: 0.24rem;
  color: #000;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  padding-left: 0.1rem;
  margin-bottom: 0.1rem;
}
.shufflingList_Right ul li {
}
.shufflingList_Right ul {
  padding: 0.2rem;
}
.shufflingList_Left video {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: #000;
}
.shufflingList_Left {
  width: 75%;
  height: 6rem;
  border-radius: 10px;
}
.shufflingList_Right {
  width: 25%;
  height: 6rem;
  border-radius: 10px;
  background: #f1f1f1;
  margin-left: 0.2rem;
  overflow: auto;
}
.shufflingList {
  display: flex;
  justify-content: start;
  margin: 0.2rem 0;
}
.CourseClassBox {
  padding: 0.3rem 1.2rem 0;
  background: url("../assets/img/proBack.png") center center no-repeat;
  background-size: cover;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 9;
  height: 100%;
  overflow-y: auto;
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
a {
  text-decoration: none;
}
</style>
