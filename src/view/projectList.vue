<template>
  <div class="ProjecClass">
    <div class="ProjecClassBox">
      <div class="returnLisTitlex">
        <span class="TitleName">{{titlename}}</span>
        <span class="retRighex">
          <a href="javascript:history.back(-1);" style="display:contants">
            <!-- <a href="javascript:history.back(-1)"> -->
            <span class="returnLis">返回</span>
            <span class="ProjecArrow"></span>
          </a>
        </span>
      </div>

      <div class="FeatureFilms">
        <div class="opacityC"></div>
        <div class="FeatureFilmsbOXM" style="padding: 0.7rem 0.4rem; z-index: 9999">
          <div class="FeatureFilms_left">
            <ul>
              <li
                v-for="(item,index) in titlelist"
                :key="index"
                @click="AshBackClick(item.id)"
                :class="AshBackreShow == item.id? 'AshBackre':''"
              >{{item.title}}</li>
              <!-- <li @click="AshBackClick(2)" :class="AshBackreShow == 2? 'AshBackre':''">十九大必须掌握的知识点</li>
              <li @click="AshBackClick(3)" :class="AshBackreShow == 3? 'AshBackre':''">砥砺奋进的五年</li>
              <li @click="AshBackClick(4)" :class="AshBackreShow == 4? 'AshBackre':''">党的十九大精神解读</li>
              <li @click="AshBackClick(5)" :class="AshBackreShow == 5? 'AshBackre':''">示例标题</li>-->
            </ul>
          </div>
          <div class="FeatureFilms_right">
            <div
              v-for="(item,index) in titlelist"
              :key="index"
              v-if="AshBackreShow==item.id"
              class="DangWinPad"
            >
              <ul class>
                <li
                  v-for="(item1,index1) in contentlist"
                  :key="index1"
                  @click="gotovideo(item1.id)"
                >
                  <img :src="item1.partyClassPicture" alt />
                  <!-- <img src="../assets/img/list.png" alt /> -->
                  <p>{{item1.partyClassName}}</p>
                </li>
              </ul>
              <div class="blockPage">
                <!--  分页-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage4"
                  :page-size="10"
                  layout=" prev, pager, next"
                  :total="total"
                ></el-pagination>
              </div>
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
  name: "projectList",
  data() {
    return {
      isFullscreen: false,
      currentPage4: 1,
      total: "1",
      AshBackreShow: 1,
      titlename: "",
      titlelist: [],
      contentlist: [],
    };
  },
  methods: {
    MacClick() {
      screenfull.toggle();
    },
    handleSizeChange() {},
    handleCurrentChange() {},
    AshBackClick(index) {
      this.AshBackreShow = index;
      this.$axios({
        url: "/party/class/largeScreen/screenlist",
        params: {
          lesseeId: "1",
          classifyId: index,
          pageNum: this.currentPage4,
          pageSize: 10,
        },
      }).then((res) => {
        console.log(res);
        this.contentlist = res.data.rows;
        this.total = res.data.total;
        // this.list = res.data.rows;
        // this.total = res.data.total;
      });
    },
    gotovideo(id) {
      console.log(111);
      this.$router.push({
        path: "/m",
        query: {
          id: id,
        },
      });
    },
    getDate() {
      this.$axios({
        url:
          "/party/partyclassclassify/largeScreen/list?parentId=" +
          this.$route.query.id,
      }).then((res) => {
        console.log(res);
        this.AshBackreShow = res.data.rows[0].id;
        this.titlelist = res.data.rows;
        this.AshBackClick(res.data.rows[0].id);
        // this.list = res.data.rows;
        // this.total = res.data.total;
      });
    },
  },
  mounted() {
    console.log(this.$route.query);
    this.getDate();
    this.titlename = this.$route.query.titlename;
  },
};
</script>

<style scoped>
.AshBackre {
  background: red !important;
  color: #fff !important;
}
.FeatureFilms_right ul li img {
  width: 95%;
  margin-bottom: 0.1rem;
}
.FeatureFilms_right ul li {
  text-align: center;
  margin-bottom: 0.4rem;
  color: #333;
  width: 100%;
  height: 100%;
  font-size: 0.26rem;
}
.FeatureFilms_right ul {
  /* display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  height: 100%;
  grid-gap: 0.4rem;
}
.FeatureFilms_right {
  font-size: 0.16rem;
  color: #fff;
  width: 100%;
}
.FeatureFilms_left ul li {
  width: 3rem;
  padding: 0.2rem;
  background: #fff;
  font-size: 0.26rem;
  color: #333;
  margin-bottom: 0.3rem;
  border-radius: 6px;
  text-align: center;
  list-style: none;
  cursor: pointer;
  box-shadow: 1px 3px 2px #ccc;
}
.FeatureFilms_left {
  width: 3rem;
  max-width: 3rem;
  margin-right: 0.6rem;
}
.FeatureFilms {
  display: flex;
  justify-content: space-between;
  z-index: 999;
  position: relative;
}
.FeatureFilmsbOXM {
  display: flex;
  justify-content: space-between;
  width: 100%;
  /*height: 80%;*/
}
.opacityC {
  position: absolute;
  background: #fff;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0.4rem;
  opacity: 0.9;
  z-index: 9;
  border-radius: 6px;
  margin-top: 0.3rem;
}
.retRighex {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0.3rem;
}
.returnLisTitlex {
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.25rem;
}
.returnLis {
  font-size: 0.25rem;
  color: #fff;
}
.TitleName {
  font-size: 0.48rem;
  color: #fff;
}
.ProjecArrow {
  width: 0.15rem;
  height: 0.15rem;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(-45deg);
  display: inline-block;
}
.ProjecClass {
}
.ProjecClassBox {
  padding: 0.6rem 0.7rem 0;
  background: url("../assets/img/proBack.png") center center no-repeat;
  background-size: cover;
  /* height: 3000px; */
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.blockPage {
  text-align: right;
  margin: 0.1rem 0;
}
a {
  text-decoration: none;
  display: contents;
}
</style>
<style>
.el-pager li.active {
  color: #fff;
  cursor: default;
  background: red !important;
  border-radius: 5px !important;
  border: none;
}
.el-pager li {
  background: rgba(0, 0, 0, 0) !important;
  height: 35px;
  line-height: 35px;
  margin: 0 0.1rem;
  border-radius: 5px !important;
  border: 1px solid #ccc;
}
.el-pagination .btn-next,
.el-pagination .btn-prev {
  background: rgba(0, 0, 0, 0);
  height: 35px;
  line-height: 35px;
  border: 1px solid #ccc;
  text-align: center;
  padding: 0;
  margin: 0 0.1rem;
}
.el-pagination button:disabled {
  height: 35px;
  line-height: 35px;
  background: rgba(0, 0, 0, 0);
}
</style>
