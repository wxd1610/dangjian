<template>
  <div class="WisdomPartyClass">
    <div class="WisdomPartyClassBox">
      <div class="WisdomPartyName">智慧党课</div>
      <div class="Bibaoid">
        <router-link to="/a" style="display: contents;">
          <span class="arrow"></span>
          <span class="returnx">返回</span>
        </router-link>
      </div>
      <div class="WisdomPartyList">
        <ul>
          <li @click="gotocont(item.id,item.title)" v-for="(item,index) in list" :key="index">
            <!-- <router-link :to="'/b?'+"> -->
              <!-- <img src="../assets/img/list.png" alt /> -->
              <img :src="item.picture" alt />
              <p class="WisdomPartyList_content">{{item.title}}</p>
            <!-- </router-link> -->
          </li>
          <!-- <li>
            <router-link to="/b">
              <img src="../assets/img/list.png" alt />
              <p class="WisdomPartyList_content">十九大专题</p>
            </router-link>
          </li>
          <li>
            <router-link to="/b">
              <img src="../assets/img/list.png" alt />
              <p class="WisdomPartyList_content">十九大专题</p>
            </router-link>
          </li>
          <li>
            <router-link to="/b">
              <img src="../assets/img/list.png" alt />
              <p class="WisdomPartyList_content">十九大专题</p>
            </router-link>
          </li>
          <li>
            <router-link to="/b">
              <img src="../assets/img/list.png" alt />
              <p class="WisdomPartyList_content">十九大专题</p>
            </router-link>
          </li>
          <li>
            <router-link to="/b">
              <img src="../assets/img/list.png" alt />
              <p class="WisdomPartyList_content">十九大专题</p>
            </router-link>
          </li>-->
        </ul>
        <div class="blockPage dk">
          <!--  分页-->
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-size="10"
            layout="prev, pager, next"
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
  name: "WisdomParty",
  data() {
    return {
      isFullscreen: false,
      currentPage4: 1,
      total: "1",
      list: [],
    };
  },
  methods: {
    gotocont(id,name){
      this.$router.push({
        path:'/b',
        query:{
          id:id,
          titlename:name
        }
      })
    },
    buttoncli() {
      screenfull.toggle();
    },
    handleSizeChange() {},
    handleCurrentChange() {},
  },
  mounted() {
    this.$axios({
      url: "/party/partyclassclassify/largeScreen/list?parentId=0",
    }).then((res) => {
      console.log(res);
      this.list = res.data.rows;
      this.total = res.data.total;
    });
  },
};
</script>

<style scoped>
.WisdomPartyList_content {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
  color: #fff;
  font-size: 0.24rem;
  max-width: 100%;
  width: 100%;
  border-radius: 0 0 10px 10px;
}
.WisdomPartyList ul li img {
  width: 100%;
  height: 100%;
}
.WisdomPartyList ul li a {
  display: contents;
}
.WisdomPartyList ul li {
  /* width: 31%; */
  width: 90%;
  height: 90%;
  margin-top: 0.3rem;
  position: relative;
  border: 5px solid #fff;
  border-radius: 10px;
}
.WisdomPartyList ul {
  /* width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  height: 100%;
      grid-gap: 0.4rem ;
}
.WisdomPartyClassBox {
  padding: 0 1rem;
}
.Bibaoid {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #fff;
  padding-bottom: 0.2rem;
}
.returnx {
  font-size: 0.34rem;
  color: #fff;
  margin-left: 0.1rem;
}
.arrow {
  width: 0.15rem;
  height: 0.15rem;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(135deg);
  display: inline-block;
}
.WisdomPartyClass {
  background: url("../assets/img/proBack.png") no-repeat;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
.WisdomPartyName {
  font-size: 0.48rem;
  color: #fff;
  text-align: center;
  margin: 0.6rem 0 0;
  position: relative;
  top: 0.1rem;
}
.blockPage {
  text-align: right;
  margin: 0.3rem 0 0;
}
a {
  text-decoration: none;
  /* color: #333; */
  /* display:block; */
  height: 100%;
}
</style>
    <style>
.dk .el-pager li.active {
  color: #fff;
  cursor: default;
  background: red !important;
  border-radius: 5px !important;
  border: none;
}

.dk .el-pager li {
  background: rgba(0, 0, 0, 0);
  color: red;
  width: 35px !important;
  height: 35px !important;
  line-height: 35px !important;
  margin: 0 0.1rem !important;
  border-radius: 5px !important;
  border: 1px solid red !important;
}

.dk .el-pagination .btn-next,
.dk .el-pagination .btn-prev {
  background: rgba(0, 0, 0, 0);
  width: 35px !important;
  height: 35px !important;
  line-height: 35px !important;
  border: 1px solid red !important;
  text-align: center !important;
  padding: 0 !important;
  margin: 0 0.1rem !important;
  color: red;
}

.dk .el-pagination button:disabled {
  height: 35px !important;
  line-height: 35px !important;
  background: rgba(0, 0, 0, 0) !important;
}
</style>