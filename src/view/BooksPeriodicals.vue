<template>
  <div class="BooksPeriodicalsClass">
    <div class="BooksPeriodicalsClassBox">
      <div class="returnLisTitlex">
        <span class="TitleName">党建理论 > 党内期刊</span>
        <span class="retRighex" @click="comeback">
          <!-- <router-link to="/i"> -->
          <!-- <a href="javascript:history.back(-1)" style="display:contents"> -->
          <span class="returnLis">返回</span>
          <span class="ProjecArrow"></span>
          <!-- </a> -->
          <!-- </router-link> -->
        </span>
      </div>
      <div class="BooksPeriodicalsClassBoxList">
        <ul>
          <li @click="downresource(item.resourcesPath)" v-for="(item,index) in list" :key="index">
            <img class src="../assets/img/list.png" alt />
            <p>2020-7月刊</p>
          </li>
        </ul>
        <div class="blockPage">
          <!--  分页-->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-size="12"
            layout=" prev, pager, next"
            :total="total"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "BooksPeriodicals",
  data() {
    return {
      isFullscreen: false,
      currentPage4: 1,
      total:0,
      list:[]
    };
  },
  methods: {
    comeback(){
      this.$router.push({
        path:'/i',
        query:{
          left:this.$route.query.left,
          top:this.$route.query.top,
        }
      })
    },
    downresource(a) {
      console.log(1);
      this.$axios({
        type: "get",
        url:
          "/common/download/resource?name="+a,
      }).then((res) => {
        console.log(res);
        let data = res.data;
        let url = window.URL.createObjectURL(
          new Blob([data])
        );
        console.log(url);
        let link = document.createElement("a");
        link.style.display = "none";
        link.href = url;
        link.download;
        document.body.appendChild(link);
        link.click();
        console.log(link);
      });
    },
    MacClick() {
      screenfull.toggle();
    },
    handleSizeChange() {},
    handleCurrentChange() {},
  },
  mounted(){
    console.log(this.$route.query)
     this.$axios({
        type: "get",
        url: "/party/journal/largeScreen/list",
        params: {
          parentId: this.$route.query.id,
          lesseeId: "1",
          pageNum:this.currentPage4,
          pageSize:12
        },
      })
        .then((res) => {
          console.log(res.data);
          this.total = res.data.total
          this.list = res.data.rows;
        })
  },
};
</script>

<style scoped>
.BooksPeriodicalsClassBoxList ul li p {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  color: #fff;
  font-size: 0.26rem;
  text-align: center;
  padding: 0.1rem 0;
  border-radius: 0 0 10px 10px;
}
.BooksPeriodicalsClassBoxList ul li img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.BooksPeriodicalsClassBoxList ul li {
  width: 15%;
  height: 3.5rem;
  border-radius: 10px;
  border: 1px solid red;
  position: relative;
  margin: 0 0.1rem 0.3rem;
}
.BooksPeriodicalsClassBoxList ul {
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  border-bottom: 1px solid red;
  width: 100%;
  padding-left: 0.2rem;
}
.BooksPeriodicalsClassBoxList {
  background: url("../assets/img/fff.png") no-repeat;
  background-size: 100% 100%;
  min-height: 8rem;
  max-height: 8.5rem;
  margin-top: 0.3rem;
  padding: 0.4rem 0.7rem 0;
  border-radius: 10px;
}
.BooksPeriodicalsClass {
  background: url("../assets/img/proBack.png") no-repeat;
  background-size: 100% 100%;
  /* height: 100%; */
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  /* height: 3000px; */
}
.BooksPeriodicalsClassBox {
  padding: 0 1rem;
}
.retRighex {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 0.3rem;
  cursor: pointer;
}
.returnLisTitlex {
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.25rem;
  margin-top: 1rem;
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
.blockPage {
  margin: 0.2rem 0 0;
  text-align: right;
  height: 0.5rem;
}
a {
  text-decoration: none;
}
</style>
