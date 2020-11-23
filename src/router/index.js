import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '../view/home'
import projectList from '../view/projectList'
import WisdomParty from '../view/WisdomParty'
import MeetingTitle from '../view/MeetingTitle'
import Threelesson from '../view/Threelesson'
import PartyWindow from '../view/PartyWindow'
import organization from '../view/organization'
import Djtheory from '../view/Djtheory'
import party from '../view/party'
import BooksPeriodicals from '../view/BooksPeriodicals'
import nineteenDa from '../view/nineteenDa'
import GeneralAssembly from '../view/GeneralAssembly'
import course from '../view/course'
import BigData from '../view/BigData'
import dzdg from '../view/dzdg'
import item from '../view/item'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld,
            redirect: '/a'
        },
        // 首页
        {
            path: '/a',
            name: 'home',
            component: home
        },
        // 十九大专题
        {
            path: '/b',
            name: 'projectList',
            component: projectList
        },
        // 智慧党课
        {
            path: '/c',
            name: 'WisdomParty',
            component: WisdomParty
        },
        // 会议内容
        {
            path: '/d',
            name: 'MeetingTitle',
            component: MeetingTitle
        },
        // 三会一课
        {
            path: '/e',
            name: 'Threelesson',
            component: Threelesson
        },
        // 两学一做
        {
            path: '/f',
            name: 'PartyWindow',
            component: PartyWindow
        },
        // 党组织
        {
            path: '/g',
            name: 'organization',
            component: organization
        },
        //  党建理论》学术动态
        {
            path: '/h',
            name: 'Djtheory',
            component: Djtheory
        },
        // 党建之窗
        {
            path: '/i',
            name: 'party',
            component: party
        },
        //  党建理论》党内期刊
        {
            path: '/j',
            name: 'BooksPeriodicals',
            component: BooksPeriodicals
        },
        // 光辉历程
        {
            path: '/k',
            name: 'nineteenDa',
            component: nineteenDa
        },
        // 全国代表大会历史
        {
            path: '/l',
            name: 'GeneralAssembly',
            component: GeneralAssembly
        },
        // 党会视频
        {
            path: '/m',
            name: 'course',
            component: course
        },
        // 大数据
        {
            path: '/n',
            name: 'BigData',
            component: BigData
        },
        // 党章党规
        {
            path: '/o',
            name: 'dzdg',
            component: dzdg
        }
    ]
})