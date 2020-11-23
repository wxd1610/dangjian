<template>
  <div class="BigDataClass">
    <router-link to="/a">
      <div class="Bibaoid" style>
        <!-- <span class="arrow"></span> -->
        <span class="returnx"></span>
      </div>
    </router-link>
    <div class="BigDataHeader">
      <div class="BigDataHeader_left">
        <div class="partyMembers">
          <div class="partyMembersName">党员人数</div>
          <div
            id="partyMembers"
            style="
              width: 97%;
              height: 300px;
              margin-top: -0.35rem;
              padding-left: 0.2rem;
            "
          ></div>
        </div>
        <div class="NationalStatistics MzNtojiTop">
          <div class="partyMembers">
            <div class="partyMembersName">民族统计</div>
            <div
              id="NationalStatistics"
              style="
                width: 97%;
                height: 300px;
                margin-top: -0.35rem;
                position: relative;
                left: 40px;
              "
            ></div>
          </div>
        </div>
      </div>
      <div class="BigDataHeader_center Pagdding20">
        <div class="BigDataHeader_centerDitu">
          <div class="MargonTop40">
            <div class="partyMembersName_dazhs">党员足迹</div>
            <!--              <div class="" id="container" style="width: 97%; height: 300px; margin-top: -0.35rem; position: relative;left: 40px;"></div>-->
            <div
              id="mapChart"
              style="width: 100%; height: 520px; position: relative; top: -90px"
              ref="mapChart"
            ></div>
          </div>
        </div>
        <div class="Generalsituation">
          <div class="GeneralsituationDYzc">党建概况</div>
          <ul>
            <li v-for="(item, index) in list" :key="index">
              {{ item.classifyName }}:{{ item.number }}
            </li>
            <!-- <li>党建理论：9</li>
            <li>党风廉政：9</li>
            <li>先进典型：9</li>
            <li>党务公开：9</li>
            <li>两学一做：9</li>
            <li>三会一课：9</li>
            <li>指挥党课：9</li> -->
          </ul>
        </div>
      </div>
      <div class="BigDataHeader_right">
        <div class="partyMembers">
          <div class="partyMembersName">学习时长</div>
          <div
            id="learningTime"
            style="
              width: 97%;
              height: 300px;
              margin-top: -0.35rem;
              padding-left: 0.2rem;
            "
          ></div>
        </div>
        <div class="NationalStatistics MzNtojiTop">
          <div class="partyMembers">
            <div class="partyMembersName">入党时间</div>
            <div
              id="partyTime"
              style="
                width: 97%;
                height: 300px;
                margin-top: -0.35rem;
                padding-left: 0.2rem;
              "
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="BigDataFooter">
      <div class="BigDataFooter_left">
        <div class>
          <div class="partyMembersName">信息统计</div>
          <div class="partyMembersNameBox">
            <div class>
              <div class>年龄</div>
              <div id="age" style="width: 200px; height: 250px"></div>
            </div>
            <div class>
              <div class>学历</div>
              <div
                id="schooling"
                style="width: 200px; height: 250px"
                class
              ></div>
            </div>
            <div class>
              <div class>性别</div>
              <div id="gender" style="width: 200px; height: 250px" class></div>
            </div>
          </div>
        </div>
      </div>
      <div class="BigDataFooter_conter">
        <div class>
          <div class="partyMembersName">会议统计</div>
          <div
            class
            id="statistical"
            style="width: 97%; height: 300px; margin-top: -0.35rem"
          ></div>
        </div>
      </div>
      <div class="BigDataFooter_right">
        <div class>
          <div class="partyMembersName">职业统计</div>
          <div
            class
            id="occupation"
            style="width: 97%; height: 300px; margin-top: -0.35rem"
          ></div>
          <!-- <div class="ParListDataJUn-box">
            <div class="ParListDataJUn">
              <div class="ParZhiNames">在职人员</div>
              <div class="WidthORI">
                <el-progress
                  class="ParZhiDataClass"
                  :text-inside="true"
                  :stroke-width="18"
                  :percentage="50"
                ></el-progress>
              </div>
            </div>
            <div class="ParListDataJUn">
              <div class="ParZhiNames">军人</div>
              <div class="WidthORI">
                <el-progress
                  class="ParZhiDataClass"
                  :text-inside="true"
                  :stroke-width="18"
                  :percentage="70"
                ></el-progress>
              </div>
            </div>
            <div class="ParListDataJUn">
              <div class="ParZhiNames">大学生</div>
              <div class="WidthORI">
                <el-progress
                  class="ParZhiDataClass"
                  :text-inside="true"
                  :stroke-width="18"
                  :percentage="34"
                  status="success"
                ></el-progress>
              </div>
            </div>
            <div class="ParListDataJUn">
              <div class="ParZhiNames">离退职工</div>
              <div class="WidthORI">
                <el-progress
                  class="ParZhiDataClass"
                  :text-inside="true"
                  :stroke-width="18"
                  :percentage="50"
                  status="exception"
                ></el-progress>
              </div>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BigData",
  components: {},
  data() {
    return {
      list: [],
      partTime: [], //入党时间 y
      parttime: [], //入党时间 x
      memberNumber: [], // 党员人数 y
      membernumber: [], // 党员人数 x
      Age: [], //信息统计
      age: [], //信息统计
      educaTion: [],
      education: [],
      Sex: [],
      sex: [],
      ThreeMeetingLesson: [
        ["product", "支部党员大会", "支部委员会", "党小组会议", "党课"],
      ], //会议统计
      learnTime: [],
      learntime: [],
      profession: [["score", "product"]],
      footprint: [],
      Nation: [],
      nation: [],
    };
  },
  methods: {
    mapFn() {
      // var data = this.footprint
      console.log(data);
      var data = [
        { name: "北京", value: 234 },
        { name: "天津", value: 44 },
        { name: "上海", value: 432 },
        { name: "重庆", value: 213 },
        { name: "河北", value: Math.round(Math.random() * 500) },
        { name: "河南", value: Math.round(Math.random() * 500) },
        { name: "云南", value: Math.round(Math.random() * 500) },
        { name: "辽宁", value: Math.round(Math.random() * 500) },
        { name: "黑龙江", value: Math.round(Math.random() * 500) },
        { name: "湖南", value: Math.round(Math.random() * 500) },
        { name: "安徽", value: Math.round(Math.random() * 500) },
        { name: "山东", value: Math.round(Math.random() * 500) },
        { name: "新疆", value: Math.round(Math.random() * 500) },
        { name: "江苏", value: Math.round(Math.random() * 500) },
        { name: "浙江", value: Math.round(Math.random() * 500) },
        { name: "江西", value: Math.round(Math.random() * 500) },
        { name: "湖北", value: Math.round(Math.random() * 500) },
        { name: "广西", value: Math.round(Math.random() * 500) },
        { name: "甘肃", value: Math.round(Math.random() * 500) },
        { name: "山西", value: 876 },
        { name: "内蒙古", value: 67, api: "red" },
        { name: "陕西", value: Math.round(Math.random() * 500) },
        { name: "吉林", value: Math.round(Math.random() * 500) },
        { name: "福建", value: Math.round(Math.random() * 500) },
        { name: "贵州", value: Math.round(Math.random() * 500) },
        { name: "广东", value: Math.round(Math.random() * 500) },
        { name: "青海", value: Math.round(Math.random() * 500) },
        { name: "西藏", value: Math.round(Math.random() * 500) },
        { name: "四川", value: Math.round(Math.random() * 500) },
        { name: "宁夏", value: Math.round(Math.random() * 500) },
        { name: "海南", value: Math.round(Math.random() * 500) },
        { name: "台湾", value: Math.round(Math.random() * 500) },
        { name: "香港", value: Math.round(Math.random() * 500) },
        { name: "澳门", value: Math.round(Math.random() * 500) },
        { name: "南海诸岛", value: Math.round(Math.random() * 500) },
      ];
      // 基于准备好的dom，初始化echarts实例
      // var mapChart = this.$echarts.init(this.$refs.mapChart);
      var mapChart = this.$echarts.init(document.getElementById("mapChart"));
      mapChart.setOption({
        backgroundColor: "", //背景颜色
        title: {
          text: "",
          subtext: "",
          color: "#fff",
          x: "center",
        },
        //是视觉映射组件，用于进行『视觉编码』，也就是将数据映射到视觉元素（视觉通道）。
        visualMap: {
          show: true,
          min: 0, //最小值
          max: 1000, //最大值
          calculable: false, //是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。
          inRange: {
            color: ["#ffbe7a", "#f04831"], //颜色
          },
          textStyle: {
            color: "#fff",
          },
          left: "50",
          bottom: "50",
        },
        tooltip: {
          show: true, //鼠标移入是否触发数据
          trigger: "item", //出发方式
          formatter: "{b}-人次：{c}",
        },
        //配置地图的数据，并且显示
        series: [
          {
            name: "地图",
            type: "map", //地图种类
            map: "neimenggu", //地图类型。
            data: "",
            itemStyle: {
              //地图区域的多边形 图形样式。
              emphasis: {
                //高亮状态下的样试
                label: {
                  show: true,
                },
              },
            },
            zoom: 1, //放大比例
            label: {
              //图形上的文本标签，可用于说明图形的一些数据信息
              show: true,
            },
          },
          {
            type: "scatter",
            showEffectOn: "render", //配置什么时候显示特效
            coordinateSystem: "geo", //该系列使用的坐标系
            symbolSize: 10, //标记的大小
            data: [{ name: "宜昌", value: [111.3, 30.7, 130] }],
            zlevel: 99999,
          },
        ],
      }),
        window.addEventListener("resize", () => {
          // 自动渲染echarts
          mapChart.resize();
        });
    },
  },
  mounted() {
    this.mapFn();
    this.$axios({
      type: "get",
      url: "/party/screen/largeScreen/statistics?lesseeId=1",
      // params: {
      //   lesseeId: 1,
      // },
    }).then((res) => {
      console.log(res.data.data);
      //入党时间
      for (let a in res.data.data.statisticsPartyTime) {
        this.partTime.push(res.data.data.statisticsPartyTime[a].number);
        this.parttime.push(res.data.data.statisticsPartyTime[a].year);
      }
      // 党员人数
      for (let a in res.data.data.statisticsMemberNumber) {
        this.memberNumber.push(res.data.data.statisticsMemberNumber[a].number);
        this.membernumber.push(res.data.data.statisticsMemberNumber[a].year);
      }
      //信息统计 年龄
      for (let a in res.data.data.statisticsAge) {
        this.Age.push(res.data.data.statisticsAge[a].age);
        this.age.push({
          value: res.data.data.statisticsAge[a].number,
          age: res.data.data.statisticsAge[a].age,
        });
      }
      //信息统计 学历
      for (let a in res.data.data.statisticsEducation) {
        this.educaTion.push(
          res.data.data.statisticsEducation[a].educationBackground
        );
        this.education.push({
          value: res.data.data.statisticsEducation[a].number,
          name: res.data.data.statisticsEducation[a].educationBackground,
        });
      }
      //信息统计 性别
      for (let a in res.data.data.statisticsSex) {
        this.Sex.push(res.data.data.statisticsSex[a].sex);
        this.sex.push({
          value: res.data.data.statisticsSex[a].number,
          name: res.data.data.statisticsSex[a].sex,
        });
      }
      //会议统计
      for (let a in res.data.data.statisticsThreeMeetingLesson) {
        // this.ThreeMeetingLesson.push(
        //   res.data.data.statisticsSex[a].sex
        // );
        this.ThreeMeetingLesson.push([
          res.data.data.statisticsThreeMeetingLesson[a].month,
          res.data.data.statisticsThreeMeetingLesson[a].zbdydhnumber,
          res.data.data.statisticsThreeMeetingLesson[a].zwhnumber,
          res.data.data.statisticsThreeMeetingLesson[a].dxznumber,
          res.data.data.statisticsThreeMeetingLesson[a].dknumber,
        ]);
      }
      //学习时长
      for (let a in res.data.data.statisticsLearnTime) {
        this.learnTime.push(res.data.data.statisticsLearnTime[a].month);
        this.learntime.push(res.data.data.statisticsLearnTime[a].learningTime);
      }
      //职业统计
      for (let a in res.data.data.statisticsProfession) {
        // this.learnTime.push(
        //   res.data.data.statisticsLearnTime[a].month
        // );
        this.profession.push([
          res.data.data.statisticsProfession[a].number,
          res.data.data.statisticsProfession[a].professionName,
        ]);
      }
      this.list = res.data.data.statisticsNewsInformation;
      //党员足迹
      for (let a in res.data.data.statisticsFootprintNumber) {
        // this.learnTime.push(
        //   res.data.data.statisticsLearnTime[a].month
        // );
        this.footprint.push({
          value: res.data.data.statisticsFootprintNumber[a].number,
          name: res.data.data.statisticsFootprintNumber[a].provinceCode,
        });
      }
      //民族统计
      for (let a in res.data.data.statisticsNation) {
        this.Nation.push(res.data.data.statisticsNation[a].nation);
        this.nation.push({
          value: res.data.data.statisticsNation[a].number,
          name: res.data.data.statisticsNation[a].nation,
        });
      }
      // this.righ  this.ThreeMeetingLessontlist = res.data.rows;
      // this.total = res.data.total;
      // 党员人数
      let myChart = this.$echarts.init(document.getElementById("partyMembers"));
      // let myChart = this.$echarts.init(document.getElementById("Professional"));
      let option = {
        color: ["#18a2cd"],
        xAxis: {
          type: "category",
          data: this.membernumber,
          axisLabel: {
            interval: 0, //横轴信息全部显示
            color: "#fff",
          },
        },
        barWidth: 20,
        yAxis: {
          type: "value",
          name: "人",
          nameTextStyle: {
            color: "#fff",
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
            },
          },
          minInterval: 1,
          boundaryGap: [0, 0.1],
        },
        series: [
          {
            data: this.memberNumber,
            type: "bar",
            name: "人数",
            showBackground: true,
            backgroundStyle: {
              color: "none",
            },
          },
        ],
      };
      myChart.setOption(option);
      // 党员人数

      // 学习时长
      let myChartTime = this.$echarts.init(
        document.getElementById("learningTime")
      );
      let learningOotion = {
        xAxis: {
          type: "category",
          data: this.learnTime,
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
            },
          },
        },
        yAxis: {
          type: "value",
          nameTextStyle: {
            color: "#fff",
          },
          name: "分钟",
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            //分割线
            show: true, //控制分割线是否显示
            lineStyle: {
              //分割线的样式
              color: ["rgba(15, 61, 94)"],
              width: 2,
              type: "dashed",
            },
          },
        },
        series: [
          {
            itemStyle: {
              normal: {
                lineStyle: {
                  color: "orangered", //改变折线颜色
                },
              },
            },
            data: this.learntime,
            type: "line",
          },
        ],
      };
      myChartTime.setOption(learningOotion);
      // 学习时长

      // 民族统计
      let myChartTics = this.$echarts.init(
        document.getElementById("NationalStatistics")
      );
      let StatisticsOption = {
        title: {
          text: "",
          subtext: "",
          left: "center",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: this.Nation,
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 13,
          },
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            label: {
              //去除饼图指引值
              normal: {
                show: true,
                color: "#fff",
              },
            },
            data: this.nation,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };
      myChartTics.setOption(StatisticsOption);
      // 民族统计

      // 入党时间

      let myChartPar = this.$echarts.init(document.getElementById("partyTime"));
      let partyTimes = {
        color: ["#f4c432"],
        barWidth: 20,
        xAxis: {
          type: "category",
          data: this.parttime,
          axisLabel: {
            interval: 0, //横轴信息全部显示
            color: "#fff",
          },
        },
        yAxis: {
          type: "value",
          name: "人",
          nameTextStyle: {
            color: "#fff",
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
            },
          },
          minInterval: 1,
          boundaryGap: [0, 0.1],
        },
        series: [
          {
            data: this.partTime,
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "none",
            },
          },
        ],
      };
      myChartPar.setOption(partyTimes);
      // 入党时间

      // 信息统计下 年龄

      let myChartParAGE = this.$echarts.init(document.getElementById("age"));
      let AgeOption = {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        color: ["#fbd860", "#61c0de", "#ff8563", "#9bca62"],
        legend: {
          bottom: 0,
          orient: "horizontal",
          data: this.Age,
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
          },
        },
        series: [
          {
            name: "年龄",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 335, name: "18-35" },
              { value: 310, name: "36-50" },
              { value: 234, name: "51-65" },
              { value: 135, name: "65以上" },
            ],
          },
        ],
      };
      myChartParAGE.setOption(AgeOption);
      // 信息统计下 年龄

      // 信息统计下 学历
      let myChartParASch = this.$echarts.init(
        document.getElementById("schooling")
      );
      let SchOption = {
        color: ["#ff8563", "#9bca62", "#61c0de", "#c13430"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          bottom: 0,
          orient: "horizontal",
          data: this.educaTion,
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
          },
        },
        series: [
          {
            name: "学历",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center",
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "30",
                fontWeight: "bold",
              },
            },
            labelLine: {
              show: false,
            },
            data: this.education,
          },
        ],
      };
      myChartParASch.setOption(SchOption);
      // 信息统计下 学历

      // 信息统计下 性别
      let GenderChart = this.$echarts.init(document.getElementById("gender"));
      let FenderOption = {
        color: ["#07b4f0", "#c13430", "#9bca62"],
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          bottom: 0,
          orient: "horizontal",
          data: this.Sex,
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
          },
        },
        series: [
          {
            name: "性别",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "none",
            },
            label: {
              //去除饼图指引值
              normal: {
                show: false,
                color: "#fff",
              },
            },
            labelLine: {
              show: false,
            },
            data: this.sex,
          },
        ],
      };
      GenderChart.setOption(FenderOption);
      // 信息统计下性别

      // 会议统计
      let statisticala = this.$echarts.init(
        document.getElementById("statistical")
      );
      let statisticalaOPt = {
        tooltip: {},
        color: ["#d5e05d", "#14b0d6", "#62c1ca", "#8c84ec"],
        dataset: {
          source: this.ThreeMeetingLesson,
        },
        xAxis: {
          type: "category",
          boundaryGap: ["50%", "50%"],
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
            },
          },
        },
        grid: {
          right: "15%",
        },
        yAxis: {
          name: "次",
          nameTextStyle: {
            color: "#fff",
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
            },
          },
          splitLine: {
            //分割线
            show: true, //控制分割线是否显示
            lineStyle: {
              //分割线的样式
              color: ["rgba(15, 61, 94)"],
              width: 2,
              type: "dashed",
            },
          },
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
          { type: "bar" },
          { type: "bar" },
          { type: "bar" },
          { type: "bar" },
        ],
        legend: {
          right: 0,
          orient: "vertical",
          textStyle: {
            //图例文字的样式
            color: "#fff",
            fontSize: 12,
          },
        },
      };

      statisticala.setOption(statisticalaOPt);
      // 会议统计

      // 党员足迹
      this.mapFn();
      // 党员足迹

      // 职业统计
      let occupation = this.$echarts.init(
        document.getElementById("occupation")
      );
      let occupationOPt = {
        dataset: {
          source: this.profession,
        },
        grid: { containLabel: true },
        xAxis: {
          name: "score",
          show: false,
          width: 12,
          color: "#fff",
          splitLine: { show: false },
          nameTextStyle: {
            color: "#fff",
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          minorTick: {
            show: false,
          },
        },
        yAxis: {
          type: "category",
          color: "#fff",
          // name:'product',
          splitLine: { show: false },
          nameTextStyle: {
            color: "#fff",
          },
          axisLabel: {
            show: true,
            textStyle: {
              color: "#fff",
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          minorTick: {
            show: false,
          },
        },
        // visualMap: {
        //   orient: "horizontal",
        //   left: "center",
        //   min: 10,
        //   max: 100,
        //   show: false,
        //   // text: ["High Score", "Low Score"],
        //   // Map the score column to color
        //   dimension: 0,
        //   // inRange: {
        //   //   color: ["#D7DA8B", "#E15457"],
        //   // },
        // },
        series: [
          {
            type: "bar",
            barWidth: 20,
            naem: "product",
            itemStyle: {
              color: function (params) {
                var clist = ["#fbd860", "#f87379", "#fe6336", "#5ab2ef"];
                return clist[params.dataIndex];
              },
            },
            label: {
              normal: {
                show: true, //显示数字
                position: "", //这里可以自己选择位置
              },
            },
            encode: {
              // Map the "amount" column to X axis.
              x: "score",
              // Map the "product" column to Y axis
              y: "product",
            },
          },
        ],
      };

      occupation.setOption(occupationOPt);
      // 职业统计
    });
  },
};
</script>
<style>
.el-progress-bar__innerText {
  position: relative;
  top: -54px;
}
</style>

<style scoped>
.WidthORI {
  width: 100%;
}
.ParListDataJUn-box > div {
  margin-bottom: 0.2rem;
}
.ParListDataJUn-box {
  height: 100%;
  /*padding:  0.3rem 0.5rem;*/
  margin: 0.3rem 0 0 0.5rem;
}
.ParZhiDataClass {
  width: 80%;
  line-height: 0 !important;
  margin-left: 0.1rem;
}
.ParListDataJUn {
  display: flex;
  align-items: center;
}
.ParZhiNames {
  font-size: 0.2rem;
  color: #fff;
  min-width: 1rem;
  text-align: right;
}
#age {
  position: relative;
  top: -0.45rem;
}
#schooling {
  position: relative;
  top: -0.45rem;
}
#gender {
  position: relative;
  top: -0.45rem;
}
.partyMembersNameBox div div {
  font-size: 0.28rem;
  color: #fff;
}
.partyMembersNameBox > div {
  width: 33.3%;
  text-align: center;
}
.partyMembersNameBox {
  display: flex;
  justify-content: space-around;
}
.MargonTop40 {
  padding-top: 0.2rem;
}
.BigDataFooter {
  display: flex;
  justify-content: space-between;
  margin-top: 0.8rem;
}
.BigDataFooter_right {
  width: 30%;
  position: relative;
  max-width: 30%;
  height: 3rem;
  background: url("../assets/img/dashujukuang.png") no-repeat;
  background-size: 100% 100%;
}
.BigDataFooter_conter {
  width: 40%;
  position: relative;
  height: 3rem;
  background: url("../assets/img/dashujukuang.png") no-repeat;
  background-size: 100% 100%;
  margin: 0 0.3rem;
}
.BigDataFooter_left {
  width: 30%;
  max-width: 30%;
  position: relative;
  height: 3rem;
  background: url("../assets/img/dashujukuang.png") no-repeat;
  background-size: 100% 100%;
}
.Generalsituation ul li {
  font-size: 0.26rem;
  color: #fff;
  padding: 0.2rem;
}
.Generalsituation ul {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0.45rem;
}
.GeneralsituationDYzc {
  position: absolute;
  top: -0.25rem;
  left: 1rem;
  width: 1.9rem;
  border-radius: 20px;
  background: rgba(26, 162, 204);
  font-size: 0.28rem;
  text-align: center;
  color: #fff;
  padding: 0.05rem 0;
}
.Generalsituation {
  position: relative;
  height: 2rem;
  background: url("../assets/img/dashujukuang.png") no-repeat;
  background-size: 100% 100%;
  margin-top: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.BigDataHeader_centerDitu {
  height: 4.6rem;
}
.party_profile {
  width: 1.9rem;
  border-radius: 20px;
  background: rgba(26, 162, 204);
  font-size: 0.28rem;
  text-align: center;
  color: #fff;
  padding: 0.05rem 0;
  position: absolute;
  top: -0.3rem;
  left: 1rem;
}
.BigDataHeader_centerDj ul {
  display: flex;
  flex-wrap: wrap;
}
.BigDataHeader_centerDj ul li {
  font-size: 0.26rem;
  color: #fff;
  padding: 0.2rem 0.1rem;
  margin-left: 0.33rem;
}
.MzNtojiTop {
  margin-top: 0.8rem;
}

.partyMembersName_dazhs {
  width: 1.9rem;
  border-radius: 20px;
  background: rgba(26, 162, 204);
  font-size: 0.28rem;
  text-align: center;
  color: #fff;
  padding: 0.05rem 0;
  margin-left: 1rem;
}
.partyMembersName {
  width: 1.9rem;
  border-radius: 20px;
  background: rgba(26, 162, 204);
  font-size: 0.28rem;
  text-align: center;
  color: #fff;
  padding: 0.05rem 0;
  margin: 0 auto;
  position: relative;
  top: -0.25rem;
}
.partyMembers {
  position: relative;
  height: 3rem;
  background: url("../assets/img/dashujukuang.png") no-repeat;
  background-size: 100% 100%;
}
.BigDataHeader_right {
  width: 30%;
  max-width: 30%;
}
.BigDataHeader_center {
  width: 40%;
  padding: 0 0.3rem;
}
.BigDataHeader_left {
  width: 30%;
  max-width: 30%;
}
.BigDataHeader {
  display: flex;
  justify-content: space-between;
}
.BigDataClass {
  background: url("../assets/img/dashuju.png") no-repeat;
  background-size: 100% 100%;
  padding: 1.4rem 0.2rem 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.Bibaoid:hover {
  box-shadow: rgb(204, 204, 204) 0px 0px 0.2rem;
}
.Bibaoid {
  position: absolute;
  font-size: 20px;
  top: 10px;
  /* color: rgb(204, 204, 204); */
  /* text-decoration: none; */
  width: 65px;
  height: 25px;
  /* border-radius: 50%; */
  /* text-align: center; */
  /* background: rgba(222, 222, 222, 0.2); */
  /* line-height: 50px; */
  /* font-size: 12px; */
  /* box-shadow: 0 0 0.1rem #ccc; */
  background: url(../assets/img/comeback.png) no-repeat;
}
a {
  text-decoration: #ccc;
}
</style>
