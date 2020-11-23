<template>
  <div class="PartyClass">
    <div class="PartyClassBox">
      <div class="WisdomPartyName">党建之窗</div>
      <div class="Bibaoid">
        <router-link to="/a" style="display: contents;">
          <span class="arrow"></span>
          <span class="returnx">返回</span>
        </router-link>
      </div>

      <div class="PartyClassTab">
        <ul>
          <li :class="ASHTabSHow == 1 ? 'ASHTabclass':''" @click="PartyClick(1,'党建要闻',1)">党建要闻</li>
          <li :class="ASHTabSHow == 2 ? 'ASHTabclass':''" @click="PartyClick(2,'党建理论',3)">党建理论</li>
          <li :class="ASHTabSHow == 3 ? 'ASHTabclass':''" @click="PartyClick(3,'党风廉政',8)">党风廉政</li>
          <li :class="ASHTabSHow == 4 ? 'ASHTabclass':''" @click="PartyClick(4,'先进典型',12)">先进典型</li>
          <li :class="ASHTabSHow == 5 ? 'ASHTabclass':''" @click="PartyClick(5,'党务公开','')">党务公开</li>
        </ul>
      </div>

      <div class="PartyClassListX">
        <!-- 党建要闻 -->
        <div v-if="ASHTabSHow==1" class="DangWinPad">
          <ul class="DangWinPad_left">
            <li @click="DangClick(1)" :class="DangShow == 1 ? 'ASHacademic':''">时政要闻</li>
            <li @click="DangClick(2)" :class="DangShow == 2 ? 'ASHacademic':''">单位要闻</li>
          </ul>
          <div class="DangWinPad_right">
            <div v-if="DangShow == 1">
              <div class="AcademicDynamic">
                <div class="AcademicDynamic_name">
                  <div class>时政要闻</div>
                </div>
                <div class="PartyWindowListBoxc">
                  <ul>
                    <li
                      @click="details(item1.id,'时政要闻')"
                      v-for="(item1,index1) in rightlist"
                      :key="index1"
                    >
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">{{item1.newsTitle}}</span>
                      </p>
                      <p class="PartyWindowList_date">{{item1.releasDate}}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blockPage">
                <!--  分页-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="10"
                  layout="prev, pager, next"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
            <div v-if="DangShow == 2">
              <div class="AcademicDynamic">
                <div class="AcademicDynamic_name">
                  <div class>单位要闻</div>
                </div>
                <div class="PartyWindowListBoxc">
                  <ul>
                    <li
                      @click="details(item1.id,'单位要闻')"
                      v-for="(item1,index1) in rightlist"
                      :key="index1"
                    >
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">{{item1.newsTitle}}</span>
                      </p>
                      <p class="PartyWindowList_date">{{item1.releasDate}}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blockPage">
                <!--  分页-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="10"
                  layout="prev, pager, next"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
          </div>
        </div>
        <!-- 党建要闻结束 -->
        <!--党建理论页面-->
        <div v-if="ASHTabSHow==2" class="DangWinPad">
          <ul class="DangWinPad_left">
            <li @click="DangClick(3)" :class="DangShow == 3 ? 'ASHacademic':''">党建政治</li>
            <li @click="DangClick(4)" :class="DangShow == 4 ? 'ASHacademic':''">学术动态</li>
            <li @click="DangClick(5)" :class="DangShow == 5 ? 'ASHacademic':''">党章党规</li>
            <li @click="DangClick(6)" :class="DangShow == 6 ? 'ASHacademic':''">政策法规</li>
            <li @click="DangClick1(7)" :class="DangShow == 7 ? 'ASHacademic':''">党内期刊</li>
          </ul>
          <div class="DangWinPad_right">
            <div v-if="DangShow == 3" class>
              <div class="AcademicDynamic">
                <div class="AcademicDynamic_name">
                  <div class>党建政治</div>
                </div>

                <div class="PartyWindowListBoxc">
                  <ul>
                    <li
                      @click="details(item1.id,'党建政治')"
                      v-for="(item1,index1) in rightlist"
                      :key="index1"
                    >
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">{{item1.newsTitle}}</span>
                      </p>
                      <p class="PartyWindowList_date">{{item1.releasDate}}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blockPage">
                <!--  分页-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="10"
                  layout="prev, pager, next"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
            <div v-if="DangShow == 4" class>
              <div class="AcademicDynamic">
                <div class="AcademicDynamic_name">
                  <div class>学术动态</div>
                </div>

                <div class="PartyWindowListBoxc">
                  <ul>
                    <li
                      @click="details(item1.id,'学术动态')"
                      v-for="(item1,index1) in rightlist"
                      :key="index1"
                    >
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">{{item1.newsTitle}}</span>
                      </p>
                      <p class="PartyWindowList_date">{{item1.releasDate}}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blockPage">
                <!--  分页-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="10"
                  layout="prev, pager, next"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
            <div v-if="DangShow == 5" class>
              <div class="AcademicDynamic">
                <div class="AcademicDynamic_name">
                  <div class>党章党规</div>
                </div>

                <div class="PartyWindowListBoxc">
                  <ul>
                    <li
                      @click="details(item1.id,'党章党规')"
                      v-for="(item1,index1) in rightlist"
                      :key="index1"
                    >
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">{{item1.newsTitle}}</span>
                      </p>
                      <p class="PartyWindowList_date">{{item1.releasDate}}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blockPage">
                <!--  分页-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="10"
                  layout="prev, pager, next"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
            <div v-if="DangShow == 6" class>
              <div class="AcademicDynamic">
                <div class="AcademicDynamic_name">
                  <div class>政策法规</div>
                </div>

                <div class="PartyWindowListBoxc">
                  <ul>
                    <li
                      @click="details(item1.id,'政策法规')"
                      v-for="(item1,index1) in rightlist"
                      :key="index1"
                    >
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">{{item1.newsTitle}}</span>
                      </p>
                      <p class="PartyWindowList_date">{{item1.releasDate}}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blockPage">
                <!--  分页-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="10"
                  layout="prev, pager, next"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
            <div v-if="DangShow == 7" class>
              <div class="AcademicDynamic_name">
                <div class>党内期刊</div>
              </div>
              <ul class="JournalLparty">
                <li @click="dangneiqik(1)"  >
                  <img src="../assets/img/list.png" alt />
                </li>
                <li>
                  <img src="../assets/img/list.png" alt />
                </li>
                <li>
                  <img src="../assets/img/list.png" alt />
                </li>
                <li>
                  <img src="../assets/img/list.png" alt />
                </li>
                <li>
                  <img src="../assets/img/list.png" alt />
                </li>
                <li>
                  <img src="../assets/img/list.png" alt />
                </li>
                <li>
                  <img src="../assets/img/list.png" alt />
                </li>
                <li>
                  <img src="../assets/img/list.png" alt />
                </li>
                <li>
                  <img src="../assets/img/list.png" alt />
                </li>
                <li>
                  <img src="../assets/img/list.png" alt />
                </li>
                <li>
                  <img src="../assets/img/list.png" alt />
                </li>
                <li>
                  <img src="../assets/img/list.png" alt />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--党建理论页面结束-->
        <!-- 党风廉政 -->
        <div v-if="ASHTabSHow==3" class="DangWinPad">
          <ul class="DangWinPad_left">
            <li @click="DangClick(8)" :class="DangShow == 8 ? 'ASHacademic':''">部委信息</li>
            <li @click="DangClick(9)" :class="DangShow == 9 ? 'ASHacademic':''">廉政时评</li>
            <li @click="DangClick(10)" :class="DangShow == 10 ? 'ASHacademic':''">警钟长鸣</li>
            <li @click="DangClick(11)" :class="DangShow == 11 ? 'ASHacademic':''">专题教育</li>
          </ul>
          <div class="DangWinPad_right">
            <div v-if="DangShow == 8" class>
              <div class="AcademicDynamic">
                <div class="AcademicDynamic_name">
                  <div class>部委信息</div>
                </div>

                <div class="PartyWindowListBoxc">
                  <ul>
                    <li
                      @click="details(item1.id,'部委信息')"
                      v-for="(item1,index1) in rightlist"
                      :key="index1"
                    >
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">{{item1.newsTitle}}}</span>
                      </p>
                      <p class="PartyWindowList_date">{{item1.releasDate}}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blockPage">
                <!--  分页-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="10"
                  layout="prev, pager, next"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
            <div v-if="DangShow == 9" class>
              <div class="AcademicDynamic">
                <div class="AcademicDynamic_name">
                  <div class>廉政时评</div>
                </div>

                <div class="PartyWindowListBoxc">
                  <ul>
                    <li
                      @click="details(item1.id,'廉政时评')"
                      v-for="(item1,index1) in rightlist"
                      :key="index1"
                    >
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">{{item1.newsTitle}}</span>
                      </p>
                      <p class="PartyWindowList_date">{{item1.releasDate}}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blockPage">
                <!--  分页-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="10"
                  layout="prev, pager, next"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
            <div v-if="DangShow == 10" class>
              <div class="AcademicDynamic">
                <div class="AcademicDynamic_name">
                  <div class>警钟长鸣</div>
                </div>

                <div class="PartyWindowListBoxc">
                  <ul>
                    <li
                      @click="details(item1.id,item.classifyName)"
                      v-for="(item1,index1) in rightlist"
                      :key="index1"
                    >
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">{{item1.newsTitle}}</span>
                      </p>
                      <p class="PartyWindowList_date">{{item1.releasDate}}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blockPage">
                <!--  分页-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="10"
                  layout="prev, pager, next"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
            <div v-if="DangShow == 11" class>
              <div class="AcademicDynamic">
                <div class="AcademicDynamic_name">
                  <div class>专题教育</div>
                </div>

                <div class="PartyWindowListBoxc">
                  <ul>
                    <li
                      @click="details(item1.id,item.classifyName)"
                      v-for="(item1,index1) in rightlist"
                      :key="index1"
                    >
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">{{item1.newsTitle}}</span>
                      </p>
                      <p class="PartyWindowList_date">{{item1.releasDate}}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blockPage">
                <!--  分页-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="10"
                  layout="prev, pager, next"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
          </div>
        </div>
        <!-- 党风廉政结束 -->
        <!-- 先进典型 -->
        <div v-if="ASHTabSHow==4" class="DangWinPad">
          <ul class="DangWinPad_left">
            <li @click="DangClick(12)" :class="DangShow == 12 ? 'ASHacademic':''">个人典型</li>
            <li @click="DangClick(13)" :class="DangShow == 13 ? 'ASHacademic':''">团队典型</li>
            <li @click="DangClick(14)" :class="DangShow == 14 ? 'ASHacademic':''">典型案例</li>
          </ul>
          <div class="DangWinPad_right">
            <div v-if="DangShow == 12" class>
              <div class="AcademicDynamic">
                <div class="AcademicDynamic_name">
                  <div class>个人典型</div>
                </div>

                <div class="PartyWindowListBoxc">
                  <ul>
                    <li
                      @click="details(item1.id,item.classifyName)"
                      v-for="(item1,index1) in rightlist"
                      :key="index1"
                    >
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">{{item1.newsTitle}}</span>
                      </p>
                      <p class="PartyWindowList_date">{{item1.releasDate}}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blockPage">
                <!--  分页-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="10"
                  layout="prev, pager, next"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
            <div v-if="DangShow == 13" class>
              <div class="AcademicDynamic">
                <div class="AcademicDynamic_name">
                  <div class>团队典型</div>
                </div>

                <div class="PartyWindowListBoxc">
                  <ul>
                    <li
                      @click="details(item1.id,item.classifyName)"
                      v-for="(item1,index1) in rightlist"
                      :key="index1"
                    >
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">{{item1.newsTitle}}</span>
                      </p>
                      <p class="PartyWindowList_date">{{item1.releasDate}}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blockPage">
                <!--  分页-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="10"
                  layout="prev, pager, next"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
            <div v-if="DangShow == 14" class>
              <div class="AcademicDynamic">
                <div class="AcademicDynamic_name">
                  <div class>典型案例</div>
                </div>

                <div class="PartyWindowListBoxc">
                  <ul>
                    <li
                      @click="details(item1.id,item.classifyName)"
                      v-for="(item1,index1) in rightlist"
                      :key="index1"
                    >
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">{{item1.newsTitle}}</span>
                      </p>
                      <p class="PartyWindowList_date">{{item1.releasDate}}</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blockPage">
                <!--  分页-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="10"
                  layout="prev, pager, next"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
          </div>
        </div>
        <!-- 先进典型结束 -->
        <!-- 党务公开 -->
        <div v-if="ASHTabSHow==5" class="DangWinPad">
          <ul class="DangWinPad_left">
            <li
              v-for="(item,index) in leftlist"
              :key="index"
              @click="DangClick(item.id)"
              :class="DangShow == item.id ? 'ASHacademic':''"
            >{{item.classifyName}}</li>
            <!-- <li @click="DangClick(2)" :class="DangShow == 2 ? 'ASHacademic':''">学术动态</li>
            <li @click="DangClick(3)" :class="DangShow == 3 ? 'ASHacademic':''">党章党规</li>
            <li @click="DangClick(4)" :class="DangShow == 4 ? 'ASHacademic':''">政策法规</li>
            <li @click="DangClick(5)" :class="DangShow == 5 ? 'ASHacademic':''">党内期刊</li>-->
          </ul>
          <div class="DangWinPad_right">
            <!-- <div v-if="DangShow == 1" class>1111</div> -->
            <div v-for="(item,index) in leftlist" :key="index" v-if="DangShow == item.id" class>
              <div class="AcademicDynamic">
                <div class="AcademicDynamic_name">
                  <div class>{{item.classifyName}}</div>
                </div>

                <div class="PartyWindowListBoxc">
                  <ul>
                    <li>
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">
                          各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担
                          当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛
                          一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当
                        </span>
                      </p>
                      <p class="PartyWindowList_date">2020-08-24</p>
                    </li>
                    <li>
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">
                          各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担
                          当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛
                          一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当
                        </span>
                      </p>
                      <p class="PartyWindowList_date">2020-08-24</p>
                    </li>
                    <li>
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">
                          各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担
                          当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛
                          一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当
                        </span>
                      </p>
                      <p class="PartyWindowList_date">2020-08-24</p>
                    </li>
                    <li>
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">
                          各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担
                          当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛
                          一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当
                        </span>
                      </p>
                      <p class="PartyWindowList_date">2020-08-24</p>
                    </li>
                    <li>
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">
                          各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担
                          当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛
                          一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当
                        </span>
                      </p>
                      <p class="PartyWindowList_date">2020-08-24</p>
                    </li>
                    <li>
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">
                          各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担
                          当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛
                          一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当
                        </span>
                      </p>
                      <p class="PartyWindowList_date">2020-08-24</p>
                    </li>
                    <li>
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">
                          各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担
                          当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛
                          一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当
                        </span>
                      </p>
                      <p class="PartyWindowList_date">2020-08-24</p>
                    </li>
                    <li>
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">
                          各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担
                          当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛
                          一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当
                        </span>
                      </p>
                      <p class="PartyWindowList_date">2020-08-24</p>
                    </li>
                    <li>
                      <p class="PartyWindowList_Leftx">
                        <span class="ListArrow"></span>
                        <span class="PartyWindowListName">
                          各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担
                          当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛
                          一线担当各地党组织和党员防汛一线担当各地党组织和党员防汛一线担当
                        </span>
                      </p>
                      <p class="PartyWindowList_date">2020-08-24</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="blockPage">
                <!--  分页-->
                <el-pagination
                  @size-change="handleSizeChange"
                  @current-change="handleCurrentChange"
                  :current-page="currentPage"
                  :page-size="10"
                  layout="prev, pager, next"
                  :total="total"
                ></el-pagination>
              </div>
            </div>
          </div>
        </div>
        <!-- 党务公开结束 -->
      </div>
    </div>
  </div>
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "party",
  data() {
    return {
      isFullscreen: false,
      ASHTabSHow: 1, //
      DangShow: 1, //
      //分页
      currentPage: 1, //当前页
      total: 100, //总条数
      pageSize: 5, //每页显示数量
      rightlist: [],
      leftlist: [],
    };
  },
  methods: {
    buttoncli() {
      screenfull.toggle();
    },
    // 头部列表
    PartyClick(index, title, left) {
      console.log(left);
      sessionStorage.setItem("onename", title);
      this.ASHTabSHow = index;
      this.DangShow = left;
      this.DangClick(left);
      // console.log(index);
    },
    // 头部列表 结束
    // 切换内部信息列表
    DangClick(index) {
      this.DangShow = index;
      this.$axios({
        type: "get",
        url: "/party/information/largeScreen/list",
        params: {
          lesseeId: 1,
          classifyId: this.DangShow,
          pageNum: this.currentPage,
          pageSize: 10,
        },
      }).then((res) => {
        // console.log(res.data.rows);
        this.rightlist = res.data.rows;
        this.total = res.data.total;
        // this.DangShow = res.data.rows[0].id;
        // this.DangShow = 1;
      });
    },
    DangClick1(index) {
      this.DangShow = index;
      this.$axios({
        type: "get",
        url: "/party/information/largeScreen/list",
        params: {
          classifyId: "7",
          lesseeId: "1",
        },
      })
        .then((res) => {
          console.log(res.data);
          this.rightlist = res.data.rows;
        })
        .catch((res) => {
          console.log(res);
        });
    },
    // 切换内部信息列表结束

    details(a, title2) {
      sessionStorage.setItem("twoname", title2);

      this.$router.push({
        path: "/h",
        query: { id: a, left: this.DangShow, top: this.ASHTabSHow },
      });
    },
    handleSizeChange() {},
    handleCurrentChange(a) {
      console.log(a, "当前页");
      this.currentPage = a;
      this.DangClick();
    },
    dangneiqik(id) {
      console.log(id)
      this.$router.push({
        path: "/j",
        query: {
          id:id,
          left: this.DangShow,
          top: this.ASHTabSHow,
        },
      });
    },
  },
  mounted() {
    if (this.$route.query.top !== undefined) {
      this.ASHTabSHow = this.$route.query.top;
      this.DangShow = this.$route.query.left;
      // title
    }
    this.$axios({
      type: "get",
      url: "/party/information/largeScreen/list",
      params: {
        lesseeId: 1,
        classifyId: this.DangShow,
        pageNum: this.currentPage,
        pageSize: 10,
      },
    }).then((res) => {
      console.log(res.data.rows);
      this.rightlist = res.data.rows;
      this.total = res.data.total;
    });
    //
  },
};
</script>

<style scoped>
.JournalLparty {
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  padding-left: 0.25rem;
}
.JournalLparty li img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.JournalLparty li {
  width: 2.4rem;
  height: 3rem;
  border-radius: 10px;
  margin-top: 0.3rem;
  padding: 0 0.1rem;
}
.blockPage {
  text-align: right;
  height: 0.5rem;
  margin-top: 0.2rem;
}
.PartyWindowList_Leftx {
  min-width: 80%;
  max-width: 80%;
}
.PartyWindowList_date {
  font-size: 0.26rem;
  color: #888;
  text-align: right;
}
.ListArrow {
  margin-right: 0.14rem;
  border-top: 7px solid transparent;
  border-bottom: 7px solid transparent;
  border-left: 10px solid red;
  display: inline-block;
}
.PartyWindowListBoxc ul li {
  margin-top: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
.PartyWindowListBoxc ul li p {
  display: flex;
  align-items: center;
}
.PartyWindowListName {
  font-size: 0.28rem;
  color: #333;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  letter-spacing: 1px;
  overflow: hidden;
}
.AcademicDynamic_name > div {
  width: 2.2rem;
  background: url("../assets/img/hong.png") no-repeat;
  background-size: 100% 100%;
  font-size: 0.28rem;
  color: #fff;
  padding: 0.1rem 0.3rem;
}
.AcademicDynamic_name {
  width: 100%;
  border-bottom: 1px solid orangered;
  padding-bottom: 10px;
}
.AcademicDynamic {
  width: 100%;
  border-bottom: 1px solid orangered;
  padding-bottom: 30px;
}
.DangWinPad_right {
  margin-left: 0.6rem;
  margin-top: 0.3rem;
  width: 100%;
}
.DangWinPad_left li {
  width: 2rem;
  padding: 0.2rem 0;
  color: #333;
  font-size: 0.28rem;
  text-align: center;
  background: #fff;
  text-align: center;
  border-radius: 10px;
  margin-top: 0.3rem;
  cursor: pointer;
  box-shadow: 1px 3px 2px #ccc;
}
.ASHacademic {
  background: red !important;
  color: #fff !important;
}
.DangWinPad_left {
  min-width: 2rem;
}
.DangWinPad {
  display: flex;
  justify-content: start;
}
.ASHTabclass {
  background: #fcb10e !important;
  color: #fff;
  border: none !important;
}
.PartyClassListX {
  background: url("../assets/img/fff.png") no-repeat;
  background-size: 100% 100%;
  border-radius: 10px;
  height: 7.7rem;
  max-height: 7.7rem;
  padding: 0.2rem 0.5rem;
}
.PartyClassTab {
  margin: 0.3rem 0;
}
.PartyClassTab ul li {
  padding: 0.2rem 0.7rem;
  border-radius: 10px;
  border: 2px solid #fff;
  text-align: center;
  font-size: 0.3rem;
  color: #fff;
  cursor: pointer;
}
.PartyClassTab ul {
  display: flex;
  justify-content: space-around;
}
.PartyClass {
  background: url("../assets/img/proBack.png") no-repeat;
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
}
.PartyClassBox {
  padding: 0 1rem;
}
.WisdomPartyName {
  font-size: 0.48rem;
  color: #fff;
  text-align: center;
  margin: 0.6rem 0 0;
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
.Bibaoid {
  display: flex;
  align-items: center;
  border-bottom: 1px solid #fff;
  padding-bottom: 0.2rem;
}
a {
  text-decoration: none;
  /* color: #333; */
}
</style>
