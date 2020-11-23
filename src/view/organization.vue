<template>
  <div class="organizationClassBox">
    <div class="organizationClass">
      <div class="WisdomPartyName">党组织</div>
      <div class="Bibaoid">
        <router-link to="/a" style="display: contents;">
          <span class="arrow"></span>
          <span class="returnx">返回</span>
        </router-link>
      </div>

      <div class="OrganizationList" v-for="(item,index) in list" :key="index">
        <div class="TheCommittee">
          <div class="WeiyunahiList">
            <div class="OrganizationList_name">
              <p>{{item.deptName}}</p>
            </div>
            <div class="GroupList">
              <div class="GroupListBox" v-for="(items,i) in item.partyMember" :key="i">
                <div class="GroupListBoxImg">
                  <img src="../assets/img/list.png" alt />
                  <!-- <img :src="items.avatar" alt /> -->
                </div>
                <div class="GrDisp">
                  <div class="GroupListBox_name MarginBtns">
                    <span>姓名：</span>
                    <span>{{items.compellation}}</span>
                  </div>
                  <div class="GroupListBox_name">
                    <span>职位：</span>
                    <span>{{items.professionId_dictText}}</span>
                  </div>
                </div>
              </div>
              <!-- <div class="GroupListBox">
                <div class="GroupListBoxImg">
                  <img src="../assets/img/list.png" alt />
                </div>
                <div class="GrDisp">
                  <div class="GroupListBox_name MarginBtns">
                    <span>姓名：</span>
                    <span>黎明</span>
                  </div>
                  <div class="GroupListBox_name">
                    <span>职位：</span>
                    <span>组长</span>
                  </div>
                </div>
              </div>
              <div class="GroupListBox">
                <div class="GroupListBoxImg">
                  <img src="../assets/img/list.png" alt />
                </div>
                <div class="GrDisp">
                  <div class="GroupListBox_name MarginBtns">
                    <span>姓名：</span>
                    <span>黎明</span>
                  </div>
                  <div class="GroupListBox_name">
                    <span>职位：</span>
                    <span>组长</span>
                  </div>
                </div>
              </div>-->
            </div>
          </div>
        </div>

        <div class="groupingList">
          <div class="groupingListBixc MarginTop40" v-for="(items1,i1) in item.children" :key="i1">
            <div class="firstGroup">{{items1.deptName}}</div>
            <div class="firstGroupListDa" v-for="(items2,i2) in items1.partyMember" :key="i2">
              <div class="GroupListBoxImg">
                <img src="../assets/img/list.png" alt />
                <!-- <img :src="items2.avatar" alt /> -->
              </div>
              <div class="GrDisp">
                <div class="GroupListBox_name MarginBtns">
                  <span>姓名：</span>
                  <span>{{items2.compellation}}</span>
                </div>
                <div class="GroupListBox_name">
                  <span>职位：</span>
                  <span>{{items2.professionId_dictText}}</span>
                </div>
              </div>
            </div>

            <!-- <div class="firstGroupListDa">
              <div class="GroupListBoxImg">
                <img src="../assets/img/list.png" alt />
              </div>
              <div class="GrDisp">
                <div class="GroupListBox_name MarginBtns">
                  <span>姓名：</span>
                  <span>黎明</span>
                </div>
                <div class="GroupListBox_name">
                  <span>职位：</span>
                  <span>组长</span>
                </div>
              </div>
            </div>

            <div class="firstGroupListDa">
              <div class="GroupListBoxImg">
                <img src="../assets/img/list.png" alt />
              </div>
              <div class="GrDisp">
                <div class="GroupListBox_name MarginBtns">
                  <span>姓名：</span>
                  <span>黎明</span>
                </div>
                <div class="GroupListBox_name">
                  <span>职位：</span>
                  <span>组长</span>
                </div>
              </div>
            </div>-->
          </div>

          <!-- <div class="groupingListBixc MarginTop40">
            <div class="firstGroup">{{items1.deptName}}</div>
            <div class="firstGroupListDa">
              <div class="GroupListBoxImg">
                <img src="../assets/img/list.png" alt />
              </div>
              <div class="GrDisp">
                <div class="GroupListBox_name MarginBtns">
                  <span>姓名：</span>
                  <span>黎明</span>
                </div>
                <div class="GroupListBox_name">
                  <span>职位：</span>
                  <span>组长</span>
                </div>
              </div>
            </div>

            <div class="firstGroupListDa">
              <div class="GroupListBoxImg">
                <img src="../assets/img/list.png" alt />
              </div>
              <div class="GrDisp">
                <div class="GroupListBox_name MarginBtns">
                  <span>姓名：</span>
                  <span>黎明</span>
                </div>
                <div class="GroupListBox_name">
                  <span>职位：</span>
                  <span>组长</span>
                </div>
              </div>
            </div>

            <div class="firstGroupListDa">
              <div class="GroupListBoxImg">
                <img src="../assets/img/list.png" alt />
              </div>
              <div class="GrDisp">
                <div class="GroupListBox_name MarginBtns">
                  <span>姓名：</span>
                  <span>黎明</span>
                </div>
                <div class="GroupListBox_name">
                  <span>职位：</span>
                  <span>组长</span>
                </div>
              </div>
            </div>
          </div>-->
        </div>
        <div class="groupingList">
          <div class style="margin-top:0.6rem" v-for="(items1,i1) in item.children" :key="i1">
            <div
              class="groupingListBixc MarginTop40"
              v-for="(items2,i2) in items1.children"
              :key="i2"
            >
              <div class="firstGroup">{{items2.deptName}}</div>
              <div class="firstGroupListDa" v-for="(items3,i3) in items2.partyMember" :key="i3">
                <div class="GroupListBoxImg">
                  <img src="../assets/img/list.png" alt />
                  <!-- <img :src="items2.avatar" alt /> -->
                </div>
                <div class="GrDisp">
                  <div class="GroupListBox_name MarginBtns">
                    <span>姓名：</span>
                    <span>{{items3.compellation}}</span>
                  </div>
                  <div class="GroupListBox_name">
                    <span>职位：</span>
                    <span>{{items3.professionId_dictText}}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="firstGroupListDa">
              <div class="GroupListBoxImg">
                <img src="../assets/img/list.png" alt />
              </div>
              <div class="GrDisp">
                <div class="GroupListBox_name MarginBtns">
                  <span>姓名：</span>
                  <span>黎明</span>
                </div>
                <div class="GroupListBox_name">
                  <span>职位：</span>
                  <span>组长</span>
                </div>
              </div>
            </div>

            <div class="firstGroupListDa">
              <div class="GroupListBoxImg">
                <img src="../assets/img/list.png" alt />
              </div>
              <div class="GrDisp">
                <div class="GroupListBox_name MarginBtns">
                  <span>姓名：</span>
                  <span>黎明</span>
                </div>
                <div class="GroupListBox_name">
                  <span>职位：</span>
                  <span>组长</span>
                </div>
              </div>
            </div>-->
          </div>

          <!-- <div class="groupingListBixc MarginTop40">
            <div class="firstGroup">{{items1.deptName}}</div>
            <div class="firstGroupListDa">
              <div class="GroupListBoxImg">
                <img src="../assets/img/list.png" alt />
              </div>
              <div class="GrDisp">
                <div class="GroupListBox_name MarginBtns">
                  <span>姓名：</span>
                  <span>黎明</span>
                </div>
                <div class="GroupListBox_name">
                  <span>职位：</span>
                  <span>组长</span>
                </div>
              </div>
            </div>

            <div class="firstGroupListDa">
              <div class="GroupListBoxImg">
                <img src="../assets/img/list.png" alt />
              </div>
              <div class="GrDisp">
                <div class="GroupListBox_name MarginBtns">
                  <span>姓名：</span>
                  <span>黎明</span>
                </div>
                <div class="GroupListBox_name">
                  <span>职位：</span>
                  <span>组长</span>
                </div>
              </div>
            </div>

            <div class="firstGroupListDa">
              <div class="GroupListBoxImg">
                <img src="../assets/img/list.png" alt />
              </div>
              <div class="GrDisp">
                <div class="GroupListBox_name MarginBtns">
                  <span>姓名：</span>
                  <span>黎明</span>
                </div>
                <div class="GroupListBox_name">
                  <span>职位：</span>
                  <span>组长</span>
                </div>
              </div>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "organization",
  data() {
    return {
      isFullscreen: false,
      list: [], //一级列表
    };
  },
  methods: {
    buttoncli() {
      screenfull.toggle();
    },
    // comeback(){

    // },
  },
  mounted() {
    this.$axios({
      url: "/party/organizationdept/largeScreen/partyTreeList?lesseeId=1",
      type: "get",
    }).then((res) => {
      console.log(res.data.data);
      this.list = res.data.data;
    });
  },
};
</script>

<style scoped>
.MarginTop40 {
  margin-top: 0.6rem;
}
.firstGroupListDa {
  justify-content: start;
  align-items: center;
  display: flex;
  width: 33%;
}

.firstGroup {
  margin-right: 0.6rem;
  font-size: 0.3rem;
  min-width: 12%;
  color: #000;
  width: 10%;
}
.groupingListBixc {
  justify-content: start;
  display: flex;
}
.groupingListBixc:first-child {
  margin-top: 0;
}
.groupingList {
  border: 1px solid red;
  padding: 0.5rem 0.3rem;
  border-radius: 10px;
  background: #fff;
  margin-top: 1rem;
}
.MarginBtns {
  margin-bottom: 0.3rem;
}
.GroupListBoxImg {
  height: 1.3rem;
}
.GroupListBox_name {
  justify-content: start;
  align-items: center;
  display: flex;
}
.GroupListBox_name span {
  font-size: 0.24rem;
  color: #333;
}
.GroupListBoxImg img {
  margin-right: 0.2rem;
  height: 1.3rem;
  width: 1.1rem;
}
.GroupList {
  justify-content: space-around;
  padding: 0.2rem;
  display: flex;
}
.GroupListBox {
  justify-content: start;
  align-items: center;
  display: flex;
}

.OrganizationList_name p {
  border-bottom: 1px solid orangered;
  padding-top: 0.3rem;
  padding-bottom: 8px;
  font-size: 0.3rem;
  max-width: 2rem;
  display: table;
  color: #333;
}
.OrganizationList_name {
  justify-content: center;
  text-align: center;
  display: flex;
}
.WeiyunahiList {
  border: 1px solid red;
  border-radius: 10px;
  background: #fff;
  max-width: 55%;
  width: 100%;
}
.TheCommittee {
}
.OrganizationList_name {
  text-align: center;
}
.TheCommittee {
  justify-content: center;
  display: flex;
}
.OrganizationList {
  background: url("../assets/img/zuzhi.jpg") no-repeat;
  padding: 0.3rem 1.3rem 0.6rem;
  background-size: 100% 100%;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 0.2rem;
  overflow-y: auto;
  height: 9rem;
}
.WisdomPartyName {
  font-size: 0.48rem;
  text-align: center;
  margin: 0.6rem 0 0;
  color: #fff;
}
.Bibaoid {
  border-bottom: 1px solid #fff;
  padding-bottom: 0.2rem;
  align-items: center;
  display: flex;
}
.returnx {
  margin-left: 0.1rem;
  font-size: 0.34rem;
  color: #fff;
}
.arrow {
  border-bottom: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(135deg);
  display: inline-block;
  height: 0.15rem;
  width: 0.15rem;
}
.organizationClass {
  padding: 0 1rem;
}
.organizationClassBox {
  background: url("../assets/img/proBack.png") no-repeat;
  background-size: 100% 100%;
  position: fixed;
  height: 100%;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
}
a {
  text-decoration: none;
  /* color: #333; */
}
</style>
