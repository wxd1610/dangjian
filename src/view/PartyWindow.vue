<template>
  <div class="PartyWindowClass">
    <div class="PartyWindowClassBox">
      <div class="WisdomPartyName">两学一做</div>
      <div class="Bibaoid">
        <router-link to="/a" style="display: contents;">
          <span class="arrow"></span>
          <span class="returnx">返回</span>
        </router-link>
      </div>
      <div class="HeaderTab">
        <ul>
          <li @click="ASHLighetClick(6,'')" :class="ASHLighetShow == 6 ? 'ASHLighet':''">党章党规</li>
          <li @click="ASHLighetClick(7,'系列讲话')" :class="ASHLighetShow == 7 ? 'ASHLighet':''">系列讲话</li>
          <li @click="ASHLighetClick(8,'做合格党员')" :class="ASHLighetShow == 8 ? 'ASHLighet':''">做合格党员</li>
        </ul>
      </div>

      <div class="PartyWindowList">
        <div v-if="ASHLighetShow == 6" class>
          <div class="SeriesSpeech">
            <p>党章党规</p>
          </div>
          <div class="PartyWindowListBoxc DangListv">
            <ul style="overflow:auto">
              <li @click="gotodzdg('a')">
                <p>
                  <span class="ListArrow"></span>
                  <span class="PartyWindowListName">总 纲</span>
                </p>
                <p></p>
              </li>
              <li @click="gotodzdg('b')">
                <p>
                  <span class="ListArrow"></span>
                  <span class="PartyWindowListName">第一章 党 员</span>
                </p>
                <p></p>
              </li>
              <li @click="gotodzdg('c')">
                <p>
                  <span class="ListArrow"></span>
                  <span class="PartyWindowListName">第二章 党的组织制度</span>
                </p>
                <p></p>
              </li>
              <li @click="gotodzdg('d')">
                <p>
                  <span class="ListArrow"></span>
                  <span class="PartyWindowListName">第三章 党的中央组织</span>
                </p>
                <p></p>
              </li>
              <li @click="gotodzdg('e')">
                <p>
                  <span class="ListArrow"></span>
                  <span class="PartyWindowListName">第四章 党的地方组织</span>
                </p>
                <p></p>
              </li>
              <li @click="gotodzdg('f')">
                <p>
                  <span class="ListArrow"></span>
                  <span class="PartyWindowListName">第五章 党的基层组织</span>
                </p>
                <p></p>
              </li>
              <li @click="gotodzdg('g')">
                <p>
                  <span class="ListArrow"></span>
                  <span class="PartyWindowListName">第六章 党的干部</span>
                </p>
                <p></p>
              </li>
              <li @click="gotodzdg('h')">
                <p>
                  <span class="ListArrow"></span>
                  <span class="PartyWindowListName">第七章 党的纪律</span>
                </p>
                <p></p>
              </li>
              <li @click="gotodzdg('i')">
                <p>
                  <span class="ListArrow"></span>
                  <span class="PartyWindowListName">第八章 党的纪律检查机关</span>
                </p>
                <p></p>
              </li>
              <li @click="gotodzdg('j')">
                <p>
                  <span class="ListArrow"></span>
                  <span class="PartyWindowListName">第九章 党 组</span>
                </p>
                <p></p>
              </li>
              <li @click="gotodzdg('k')">
                <p>
                  <span class="ListArrow"></span>
                  <span class="PartyWindowListName">第十章 党和共产主义青年团的关系</span>
                </p>
                <p></p>
              </li>
              <li @click="gotodzdg('l')">
                <p>
                  <span class="ListArrow"></span>
                  <span class="PartyWindowListName">第十一章 党徽党旗</span>
                </p>
                <p></p>
              </li>
            </ul>
            <!-- <div style="width:60%;overflow: auto;height: 6rem;">
              <el-tree
                accordion
                style="background:rgba(0,0,0,0);font-size:0.28rem"
                :data="data"
                :props="defaultProps"
                @node-click="handleNodeClick"
              ></el-tree>
            </div>-->

            <div
              class="DangListBoxc"
              v-on:mouseover="stop()"
              v-on:mouseout="move()"
              style=" position: relative;height:6rem;width:40%"
            >
              <img :src="imgArr[index]" id="pic" />
              <div id="left" @click="pre"></div>
              <div id="right" @click="next"></div>
              <div id="pagenum">
                <p>{{index+1}}</p>/
                <p style="font-size:0.2rem">{{imgArr.length}}</p>
              </div>
              <p class="RudangName">入党致辞</p>
            </div>
          </div>
        </div>

        <div v-if="ASHLighetShow == 7" class>
          <div class="SeriesSpeech">
            <p>系列讲话</p>
          </div>
          <div class="PartyWindowListBoxc">
            <ul>
              <li @click="gotowenzhang(item.id)" v-for="(item,index) in list" :key="index">
                <p>
                  <span class="ListArrow"></span>
                  <span class="PartyWindowListName">
                    各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担
                    当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛
                    一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当
                  </span>
                </p>
                <p>2020-09-08</p>
              </li>
            </ul>
          </div>
          <div class="blockPage">
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
        <div v-if="ASHLighetShow == 8" class>
          <div class="SeriesSpeech">
            <p>做合格党员</p>
          </div>
          <div class="PartyWindowListBoxc">
            <ul>
              <li @click="gotowenzhang(item.id)" v-for="(item,index) in list" :key="index">
                <p>
                  <span class="ListArrow"></span>
                  <span class="PartyWindowListName">
                    各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担
                    当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛
                    一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当
                  </span>
                </p>
                <p>2020-09-08</p>
              </li>
            </ul>
          </div>
          <div class="blockPage">
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
  </div>
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "PartyWindow",
  data() {
    return {
      isFullscreen: false,
      ASHLighetShow: 6,
      currentPage4: 1,
      total: 0,
      imgArr: [
        // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534136662314&di=af7ec227db5e118a5626a94ab97026f3&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4bed2e738bd4b31ccda81d7a8bd6277f9f2ff85f.jpg",
        "https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=4b22ec31ddc8a786a12a4c0e5708c9c7/5bafa40f4bfbfbedc5597ab474f0f736aec31ffc.jpg",
        // "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534136662314&di=af7ec227db5e118a5626a94ab97026f3&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4bed2e738bd4b31ccda81d7a8bd6277f9f2ff85f.jpg",
        "https://ss3.baidu.com/9fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=87d6daed02f41bd5c553eef461d881a0/f9198618367adab4b025268587d4b31c8601e47b.jpg",
      ],
      index: 1,
      time: "",
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1",
                },
              ],
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1",
                },
              ],
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1",
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    gotodzdg(a) {
      this.$router.push({
        path: "/o",
        query: { id: a },
      });
    },
    gotowenzhang(id) {
      sessionStorage.setItem('onename','两学一做')
      this.$router.push({
        path: "/h",
        params: { id: id,  top: this.ASHLighetShow },
      });
    },
    handleNodeClick(data) {
      console.log(data);
    },
    pre: function () {
      if (this.index > 0) {
        this.index--;
      } else if (this.index == 0) {
        this.index = this.imgArr.length - 1;
      }
    },
    next: function () {
      // console.log(this.imgArr[0]);
      // console.log(this.imgArr[1]);
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
      this.time = setInterval(this.next, 3000);
    },

    buttoncli() {
      screenfull.toggle();
    },
    ASHLighetClick(index,title) {
      sessionStorage.setItem('twoname',title)
      this.ASHLighetShow = index;
      if (index == 6) {
        return false;
      }
      this.$axios({
        type: "get",
        url: "/party/information/largeScreen/list",
        params: {
          lesseeId: 1,
          classifyId: index,
          pageNum: 1,
          pageSize: 10,
        },
      }).then((res) => {
        console.log(res.data.rows);
        // this.rightlist = res.data.rows;
        // this.total = res.data.total;
        // this.DangShow = res.data.rows[0].id;
        // this.DangShow = 1;
      });
    },
    handleSizeChange() {},
    handleCurrentChange() {},
  },
  mounted() {
    this.next(); //先调用一遍
    this.play();
    if(this.$route.query.top !== undefined){
      this.ASHLighetShow = this.$route.query.top
    }
    this.ASHLighetClick('6')
  },
  beforeDestroy() {
    clearInterval(this.time);
    // console.log("销毁");
  },
};
</script>

<style scoped>
.RudangName {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  border: 0 0 10px 10px;
  height: 0.7rem;
  line-height: 0.7rem;
  font-size: 0.34rem;
  color: #fff;
  text-align: center;
}
.DangListBoxc {
  width: 100%;
  height: 6.5rem;
  position: relative;
}
.DangListv > ul > li {
  margin-top: 0 !important;
  margin-bottom: 0.2rem;
}
.DangListv > ul {
  width: 60%;
  min-width: 60%;
}
.DangListv > div {
}
.DangListv {
  width: 100%;
  margin-top: 0.25rem;
}
.DangListv {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.DangListImhg {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.PartyWindowListBoxc ul li {
  margin-top: 0.25rem;
  display: flex;
  justify-content: space-between;
}
.PartyWindowListBoxc ul li p {
  display: flex;
  align-items: center;
}
.PartyWindowListBoxc ul li p:first-child {
  width: 90%;
}

.PartyWindowListBoxc ul li p:last-child {
  font-size: 0.26rem;
  color: #888;
  text-align: right;
  white-space: nowrap;
}
.PartyWindowListName {
  font-size: 0.28rem;
  color: #333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  letter-spacing: 1px;
  /* width: 9rem; */
  /* width: ; */
}
.ListArrow {
  margin-right: 0.2rem;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 10px solid red;
  display: inline-block;
}
.SeriesSpeech p {
  color: #333;
  font-size: 0.28rem;
  background: url("../assets/img/hong.png") no-repeat;
  /* background-size:100% 100%; */
  color: #fff;
  background-size: 100% 100%;
  width: 2.2rem;
  padding: 0.1rem 0.3rem;
  /* padding: 0.1rem; */
  /* height: 1rem; */
}
.SeriesSpeech {
  border-bottom: 1px solid orangered;
  padding-bottom: 0.1rem;
  width: 100%;
}
.PartyWindowList {
  padding: 0.3rem 0.5rem;
  background: url("../assets/img/fff.png") no-repeat;
  background-size: 100% 100%;
  border-radius: 10px;
  height: 7.5rem;
  position: relative;
}
.ASHLighet {
  background: #fcb10e;
  color: #fff;
  border: none !important;
}
.HeaderTab {
  margin: 0.3rem 0 0.4rem;
}
.HeaderTab ul {
  display: flex;
  justify-content: space-around;
}
.HeaderTab ul li {
  font-size: 0.36rem;
  color: #fff;
  text-align: center;
  width: 2.8rem;
  padding: 0.1rem 0;
  border: 2px solid #fff;
  border-radius: 10px;
  cursor: pointer;
}
.arrow {
  width: 0.15rem;
  height: 0.15rem;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(135deg);
  display: inline-block;
}
.PartyWindowClassBox {
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
.PartyWindowClass {
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
}
.blockPage {
  text-align: right;
  border-top: 1px solid red;
  position: absolute;
  left: 0.5rem;
  right: 0.5rem;
  bottom: 0;
  height: 0.5rem;
  padding-top: 0.2rem;
}
a {
  text-decoration: none;
  /* color: #333; */
}

#pic {
  width: 100%;
  height: 100%;
}
#left {
  position: absolute;
  left: 0.1rem;
  bottom: 0.2rem;
  width: 0.3rem;
  height: 0.3rem;
  background: url("../assets/img/left1.png") no-repeat;
  background-size: 100%;
  z-index: 99999;
}
#right {
  position: absolute;
  right: 0.1rem;
  bottom: 0.2rem;
  width: 0.1rem;
  width: 0.3rem;
  height: 0.3rem;
  background: url("../assets/img/right1.png") no-repeat;
  background-size: 100%;
  z-index: 99999;
}
#pagenum {
  display: flex;
  position: absolute;
  right: 10%;
  bottom: 0.2rem;
  font-size: 0.2rem;
  color: #fff;
  z-index: 99999;
}

#pagenum p {
  display: flex;
  align-items: flex-end;
  margin: 0 5px;
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

.el-tree-node__content .el-tree-node__label {
  font-size: 0.3rem;
  color: #000;
}
.el-tree-node__content > .el-tree-node__expand-icon {
  color: red;
  font-size: 0.28rem;
}

.el-tree-node__content {
  /* margin-bottom: 0.3rem; */
  height: 0.3rem;
}
.is-focusable {
  margin-top: 0.25rem;
}
.el-tree-node:focus > .el-tree-node__content {
  /* background: red; */
  background: rgba(0, 0, 0, 0.1);
}
.el-tree-node__content:hover {
  background: rgba(0, 0, 0, 0.1);
}
</style>