<template>
  <div class="ThreelessonClass">
    <div class="ThreelessonClassBox">
      <div class="WisdomPartyName">三会一课</div>
      <div class="Bibaoid">
        <router-link to="/a" style="display: contents;">
          <span class="arrow"></span>
          <span class="returnx">返回</span>
        </router-link>
      </div>

      <div v-if="selectShow == 1" class="meetingTypeList">
        <div class="meetingTypeListBox">
          <span class="Min-widthx">会议类型:</span>
          <el-select v-model="type" clearable placeholder="请选择会议类型">
            <el-option
              v-for="item in options"
              :key="item.dictValue"
              :label="item.dictLabel"
              :value="item.dictValue"
            ></el-option>
          </el-select>
        </div>

        <div class="meetingTypeListBox">
          <span class="Min-widthx">会议类别:</span>
          <el-select v-model="category" clearable placeholder="请选择会议类别">
            <el-option
              v-for="item in options1"
              :key="item.dictValue"
              :label="item.dictLabel"
              :value="item.dictValue"
            ></el-option>
          </el-select>
        </div>

        <div class="meetingTypeListBox">
          <span class="Min-widthx">开始时间:</span>
          <el-date-picker value-format='yyyy-MM-dd HH:mm:ss' v-model="starttime" clearable type="date" placeholder="请选择开始时间"></el-date-picker>
        </div>

        <div class="meetingTypeListBox">
          <span class="Min-widthx">结束时间:</span>
          <el-date-picker value-format='yyyy-MM-dd HH:mm:ss' v-model="endtime" clearable type="date" placeholder="请选择结束时间"></el-date-picker>
        </div>

        <div class="meetingTypeListCXWE">
          <span class="meetingTypeListCXWE_one" @click="chongzhi" style="cursor: pointer;">重置</span>
          <span class="meetingTypeListCXWE_two" @click="meetingTypeListCXWEClick">
            <i class="el-icon-search"></i>
          </span>
        </div>
      </div>
      <div v-if="selectShow == 2" class="meetingTypeList">
        <div class="meetingTypeListBox WidthOnexb">
          <span class="Min-widthx">会议标题:</span>
          <el-input class="MeetIUnputxc" clearable v-model="input" placeholder="请输入会议标题"></el-input>
          <span @click="TheQueryClick" class="TheQuery">查询</span>
          <span @click="ThecancelClick" class="Thecancel">取消</span>
        </div>
      </div>

      <div class="ThreelessonDaList">
        <div
          v-for="(item,index) in list"
          :key="index"
          class="ThreelessonDaListBox"
          @click="contentclick(item.id)"
        >
          <div class>
            <img class="ThlEFtaimg" src="../assets/img/homeBack.png" alt />
            <!-- <img class="ThlEFtaimg" :src="item.titleImg" alt /> -->
          </div>
          <div class="MarginLecft">
            <p class="meetingTitle">{{item.meetingTitle}}</p>
            <p class="meetingTitleContent">{{item.meetingContent}}</p>
            <div class="DisplayFlex">
              <p class="Inheritx">
                <span class="BranchMembers">{{item.meetingType_dictText}}</span>
                <span class="BranchMembers">{{item.meetingCategory_dictText}}</span>
              </p>
              <p class="BranchMembersNum" style="white-space:nowrap;">{{item.createTime}}</p>
            </div>
          </div>
        </div>

        <!-- <div class="ThreelessonDaListBox" @click="contentclick">
          <div class>
            <img class="ThlEFtaimg" src="../assets/img/homeBack.png" alt />
          </div>
          <div class="MarginLecft">
            <p class="meetingTitle">这里是会议标题</p>
            <p class="meetingTitleContent">
              这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会
              议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题
              这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会
              议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题
            </p>
            <div class="DisplayFlex">
              <p class="Inheritx">
                <span class="BranchMembers">支部党员大会</span>
                <span class="BranchMembers">民主生活会</span>
              </p>
              <p class="BranchMembersNum">2020-07-31</p>
            </div>
          </div>
        </div>

        <div class="ThreelessonDaListBox" @click="contentclick">
          <div class>
            <img class="ThlEFtaimg" src="../assets/img/homeBack.png" alt />
          </div>
          <div class="MarginLecft">
            <p class="meetingTitle">这里是会议标题</p>
            <p class="meetingTitleContent">
              这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会
              议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题
              这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会
              议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题
            </p>
            <div class="DisplayFlex">
              <p class="Inheritx">
                <span class="BranchMembers">支部党员大会</span>
                <span class="BranchMembers">民主生活会</span>
              </p>
              <p class="BranchMembersNum">2020-07-31</p>
            </div>
          </div>
        </div>

        <div class="ThreelessonDaListBox" @click="contentclick">
          <div class>
            <img class="ThlEFtaimg" src="../assets/img/homeBack.png" alt />
          </div>
          <div class="MarginLecft">
            <p class="meetingTitle">这里是会议标题</p>
            <p class="meetingTitleContent">
              这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会
              议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题
              这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会
              议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题这里是会议标题
            </p>
            <div class="DisplayFlex">
              <p class="Inheritx">
                <span class="BranchMembers">支部党员大会</span>
                <span class="BranchMembers">民主生活会</span>
              </p>
              <p class="BranchMembersNum">2020-07-31</p>
            </div>
          </div>
        </div>-->
      </div>
      <div class="dk">
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
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "Threelesson",
  data() {
    return {
      isFullscreen: false,
      options: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      options1: [],
      type: "",
      category: "",
      starttime: "",
      endtime: "",
      selectShow: 1,
      input: "",
      currentPage4: 1,
      total: 0,
      list: [],
    };
  },
  methods: {
    handleSizeChange() {
      // console.log(val,1)
    },
    handleCurrentChange(val) {
      console.log(val, 2);
      this.currentPage4 = val;
      this.getList();
    },
    meetingTypeListCXWEClick() {
      this.selectShow = 2;
    },
    ThecancelClick() {
      //搜索取消按钮
      this.selectShow = 1;
    },
    TheQueryClick() {
      //  查询按钮
      this.getList();
    },

    contentclick(a) {
      console.log(1);
      this.$router.push({
        path: "/d",
        query: {
          id: a,
        },
      });
    },

    buttoncli() {
      screenfull.toggle();
    },
    chongzhi() {
      this.input="";
      this.category="";
      this.type="";
      this.starttime="";
      this.endtime="";
      this.getList()
    },
    getList() {
      this.$axios({
        type: "get",
        url: "/party/lesson/largeScreen/list?pageSize=4",
        params: {
          pageNum: this.currentPage4,
          lesseeId: 1,
          meetingTitle: this.input,
          meetingCategory: this.category,
          meetingType: this.type,
          startTime: this.starttime,
          overTime: this.endtime,
        },
      }).then((res) => {
        console.log(res.data);
        this.list = res.data.rows;
        this.total = res.data.total;
      });
    },
  },
  mounted() {
    this.getList();
    // 会议类型
    this.$axios({
      type: "get",
      url: "/system/dict/data/largeScreen/type/" + "meeting_type",
    }).then((res) => {
      console.log(res);
      // this.list = res.data.rows
      // this.total= res.data.total
      this.options = res.data.data;
    });
    // 会议类别
    this.$axios({
      type: "get",
      url: "/system/dict/data/largeScreen/type/" + "meeting_category",
    }).then((res) => {
      console.log(res);
      // this.list = res.data.rows
      this.options1 = res.data.data;
      // this.total= res.data.total
    });
  },
};
</script>

<style scoped>
.MeetIUnputxc {
  font-size: 0.18rem;
}
.MeetIUnputxc::placeholder {
  font-size: 0.18rem;
}
.Thecancel {
  width: 1rem;
  height: 0.44rem;
  line-height: 0.44rem;
  border: 1px solid #fff;
  font-size: 0.18rem;
  color: #fff;
  display: inline-block;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
}
.TheQuery {
  width: 1rem;
  height: 0.45rem;
  line-height: 0.45rem;
  background: #fff;
  border-radius: 10px;
  display: inline-block;
  margin-right: 0.2rem;
  font-size: 0.18rem;
  color: red !important;
  text-align: center;
  margin-left: 0.2rem;
  cursor: pointer;
}
.WidthOnexb {
  width: 100%;
}
.MarginLecft {
  margin-left: 0.4rem;
  width: 100%;
  position: relative;
}
.ThlEFtaimg {
  width: 3rem;
  height: 2.8rem;
  border-radius: 10px;
}
.Inheritx {
  display: inherit;
}
.BranchMembersNum {
  font-size: 0.2rem;
  color: #888;
}
.BranchMembers {
  border: 1px solid orangered;
  padding: 0.05rem 0;
  width: 1.5rem;
  display: inline-block;
  text-align: center;
  border-radius: 5px;
  color: orangered;
  font-size: 0.2rem;
  margin-right: 0.1rem;
}
.meetingTitleContent {
  letter-spacing: 1px;
  font-size: 0.26rem;
  color: #333;
  text-indent: 60px;
  margin: 0.1rem 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  line-height: 0.4rem;
}
.meetingTitle {
  font-size: 0.36rem;
  color: #333;
}
.DisplayFlex {
  position: absolute;
  bottom: 0.3rem;
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}
.ThreelessonDaListBox {
  display: flex;
  justify-content: start;
  background: rgb(252, 235, 228);
  width: 46%;
  border-radius: 10px;
  margin-bottom: 0.4rem;
}
.ThreelessonDaListBox {
  padding: 0.3rem 0.3rem 0.1rem;
}

.ThreelessonDaList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.meetingTypeListCXWE_one {
  width: 1.2rem;
  height: 0.45rem;
  line-height: 0.45rem;
  background: #fff;
  border-radius: 10px;
  text-align: center;
  font-size: 0.18rem;
  color: orangered !important;
}
.meetingTypeListCXWE_two {
  width: 0.8rem;
  height: 0.45rem;
  line-height: 0.45rem;
  background: #fff;
  border-radius: 10px;
  text-align: center;
}
.meetingTypeListCXWE {
  display: inherit;
  width: 10%;
}
.meetingTypeListCXWE span {
  font-size: 0.2rem;
  color: #fff;
  margin-right: 0.2rem;
}
.Min-widthx {
  min-width: 1.1rem;
}
.meetingTypeListBox {
  display: flex;
  justify-content: start;
  align-items: center;
}
.meetingTypeListBox > span {
  font-size: 0.24rem;
  color: #fff;
}
.meetingTypeList {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;
}
.ThreelessonClassBox {
  padding: 0 0.4rem;
}
.WisdomPartyName {
  font-size: 0.48rem;
  color: #fff;
  text-align: center;
  margin: 0.6rem 0 0;
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
.ThreelessonClass {
  background: url("../assets/img/proBack.png") no-repeat;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
a {
  text-decoration: none;
  /* color: #333; */
}
</style>
<style>
.el-input {
  min-width: 3rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.el-input__inner {
  height: 0.4rem;
  line-height: 0.4rem;
}
.el-icon-search {
  color: red !important;
}
.dk {
  display: flex;
  justify-content: flex-end;
}
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


