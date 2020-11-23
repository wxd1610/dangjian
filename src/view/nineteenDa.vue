<template>
  <div class="NineteenDaClass">
    <div class="Bibaoid">
      <router-link to="/a" style="display:contents">
        <span class="arrow"></span>
        <span  class="returnx">返回</span>
      </router-link>
    </div>

    <ul class="ListDatav">
      <li>
        <img class="guanghuis" src="../assets/img/guanghui.png" alt />
      </li>
      <li v-for="(item,index) in list" :key="index" class="DataListyi" @click="a(item.id)">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">{{item.yearMonthDay}}</div>
          <div class="DataListyiName">{{item.abbreviation}}</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
            <!-- <img class="DataListyiImg" :src="item.relatedPictures" alt /> -->
          </div>
          <div class="DataListyiText">
            {{item.content}}
          </div>
        </div>
      </li>
      <!-- <li class="DataLister" @click="a(2,'二')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li>
      <li class="DataListsan" @click="a(3,'三')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li>
      <li class="DataListsi" @click="a(4,'四')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li>
      <li class="DataListwu" @click="a(5,'五')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li>
      <li class="DataListliu" @click="a(6,'六')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li>
      <li class="DataListqi" @click="a(7,'七')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li>
      <li class="DataListba" @click="a(8,'八')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li>
      <li class="DataListjiu" @click="a(9,'九')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li>
      <li class="DataListshi" @click="a(10,'十')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li>
      <li class="DataListshiy" @click="a(11,'十一')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li>
      <li class="DataListshie" @click="a(12,'十二')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li>
      <li class="DataListshis" @click="a(13,'十三')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li>
      <li class="DataListshis" @click="a(14,'十四')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li>
      <li class="DataListshiw" @click="a(15,'十五')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li>
      <li class="DataListshil" @click="a(16,'十六')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li>
      <li class="DataListshiq" @click="a(17,'十七')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li>
      <li class="DataListshib" @click="a(18,'十八')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li>
      <li class="DataListshij" @click="a(19,'十九')">
        <div class="DataListyimmBox">
          <div class="DataListyiDate">1927.07</div>
          <div class="DataListyiName">中共一大</div>
        </div>
        <div class="DataListyiBox">
          <div>
            <img class="DataListyiImg" src="../assets/img/list.png" alt />
          </div>
          <div class="DataListyiText">
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
            连接器为卡拉奇王嘉尔卡拉瓦乔而来块钱王嘉尔卡拉瓦乔
          </div>
        </div>
      </li> -->
    </ul>
  </div>
</template>

<script>
import screenfull from "screenfull";

export default {
  name: "nineteenDa",
  data() {
    return {
      isFullscreen: false,
      list:[]
    };
  },
  methods: {
    Fanhui() {
      screenfull.toggle();
    },
    a(w) {
      this.$router.push({
        path: "/l",
        query: {
          FooterBtnxShow: w,
        },
      });
    },
  },
  mounted(){
    this.$axios({
      type:'get',
      url:'/party/congress/largeScreen/list'
    }).then((res)=>{
      console.log(res.data.rows)
      this.list = res.data.rows
    })
  },
};
</script>

<style scoped>
.guanghuis {
  width: 53%;
  position: relative;
  top: 0.2rem;
  left: 0.2rem;
}
.DataListyimmBox {
  padding: 0.3rem 0.3rem 0;
  position: relative;
  top: 0.7rem;
  left: 0.1rem;
}
.DataListyiBox {
  background: #fff;
  border-radius: 10px;
  max-width: 1.8rem;
  padding: 0.1rem 0.1rem 0.1rem 0.1rem;
  border: 1px solid sandybrown;
  margin-left: 0.25rem;
  margin-top: 0.8rem;
  box-shadow: 1px 1px 3px orangered;
}
.DataListyiImg {
  width: 100%;
  height: 0.7rem;
  display: inherit;
  border-radius: 10px;
  box-shadow: 0px 1px 3px orangered;
}
.DataListyiText {
  padding-top: 0.1rem;
  text-indent: 0.4rem;
  font-size: 0.2rem;
  color: #333;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  line-height: 0.35rem;
}
.DataListyiName {
  font-size: 0.3rem;
  color: #fff;
}
.DataListyiDate {
  font-size: 0.2rem;
  color: #fff;
}
.DataListyi {
  background: url("../assets/img/1.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataLister {
  background: url("../assets/img/2.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataListsan {
  background: url("../assets/img/3.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataListsi {
  background: url("../assets/img/4.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataListwu {
  background: url("../assets/img/5.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataListliu {
  background: url("../assets/img/6.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataListqi {
  background: url("../assets/img/7.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataListba {
  background: url("../assets/img/8.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataListjiu {
  background: url("../assets/img/9.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataListshi {
  background: url("../assets/img/10.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataListshiy {
  background: url("../assets/img/11.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataListshie {
  background: url("../assets/img/12.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataListshis {
  background: url("../assets/img/13.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataListshis {
  background: url("../assets/img/14.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataListshiw {
  background: url("../assets/img/15.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataListshil {
  background: url("../assets/img/16.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataListshiq {
  background: url("../assets/img/17.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataListshib {
  background: url("../assets/img/18.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.DataListshij {
  background: url("../assets/img/19.png") no-repeat;
  background-size: 100% 110%;
  width: 2.3rem;
}
.ListDatav {
  display: flex;
  flex-wrap: wrap;
}
.ListDatav li {
  width: 9%;
  margin-right: 0.16rem;
  height: 5.1rem;
  margin-bottom: 0.3rem;
}
.NineteenDaClass {
  background: url("../assets/img/shijiuda.png") no-repeat;
  background-size: 100% 100%;
  padding: 0.5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* height: 3000px; */
}
.returnx {
  font-size: 0.34rem;
  color: orangered;
  margin-left: 0.1rem;
}
.arrow {
  width: 0.15rem;
  height: 0.15rem;
  border-right: 2px solid orangered;
  border-bottom: 2px solid orangered;
  transform: rotate(135deg);
  display: inline-block;
}
.Bibaoid {
  display: flex;
  align-items: center;
  padding-bottom: 0.2rem;
}
a {
  text-decoration: none;
}
</style>
