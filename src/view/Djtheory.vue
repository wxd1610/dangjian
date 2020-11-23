<template>
  <div class="DjtheoryClass">
    <div class="DjtheoryClassBox">
      <div class="returnLisTitlex">
        <span  class="TitleName">{{title}} > {{title1}}</span>
        <span class="retRighex" @click="comeback">
          <!-- <router-link to="/i"> -->
          <!-- <a href="javascript:history.back(-1)" style="display:contents"> -->
            <span class="returnLis">返回</span>
            <span class="ProjecArrow"></span>
          <!-- </a> -->
          <!-- </router-link> -->
        </span>
      </div>

      <div class="DjtheoryClassContent">
        <div class="DjtheoryClassContent_title">{{content.newsTitle}}</div>
        <div class="DjtheoryClassContent_date">
          <div style="margin-right:0.5rem">{{content.releasDate}}</div>
          <div>来源： {{content.informationSource}}</div>
        </div>
        <div id="contents" v-html="content.content" class="DjtheoryClassContent_text">
          <!-- {{content.content}} -->
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "Djtheory",
  data() {
    return {
      isFullscreen: false,
      title: "",
      title1: "",
      content:[]
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
    MacClick() {
      screenfull.toggle();
    },
  },
  mounted() {
    console.log(this.$route);
    console.log(this.$route.query.left);
    this.title = sessionStorage.getItem("onename");
    this.title1 = sessionStorage.getItem("twoname");
    this.$axios({
      url: "/party/information/largeScreen/" + this.$route.query.id,
    }).then((res) => {
      console.log(res);
      this.content = res.data.data
    });
  },
};
</script>

<style scoped>
.DjtheoryClassContent_text {
  font-size: 0.28rem;
  color: #333;
  text-align: left;
  letter-spacing: 2px;
  text-indent: 0.6rem;
  line-height: 0.45rem;
}
.DjtheoryClassContent_date {
  text-align: center;
  display: flex;
  justify-content: center;
  margin: 0.4rem 0;
}
.DjtheoryClassContent_date div {
  font-size: 0.2rem;
  color: #888;
}
.DjtheoryClassContent_title {
  font-size: 0.3rem;
  color: #333;
  letter-spacing: 2px;
  text-align: center;
}
.DjtheoryClassContent {
  background: url("../assets/img/fff.png") no-repeat;
  background-size: 100% 100%;
  border-radius: 10px;
  height: 8.5rem;
  max-height: 8.5rem;
  padding: 0.3rem 1.5rem;
  overflow: auto;
  margin-top: 0.2rem;
  /* margin-bottom: 0.2rem; */
  /* box-sizing: border-box; */
}
.DjtheoryClass {
  background: url("../assets/img/proBack.png") no-repeat;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
.DjtheoryClassBox {
  padding: 0 1rem;
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
a {
  text-decoration: none;
}
</style>
