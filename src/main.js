// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'vue-video-player/src/custom-theme.css'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false


import echarts from 'echarts'
import 'echarts/map/js/china'
Vue.prototype.$echarts = echarts


import axios from 'axios'
Vue.prototype.$axios = axios //全局注册，使用方法为:this.$axios
    // axios.defaults.baseURL = "http://49.232.32.126:8091/"
axios.defaults.baseURL = "http://192.168.1.2:8080/"

Vue.filter('ft', (v) => {
        return moment(v * 1000).format('YYYY-MM-DD HH:mm:ss')
    })
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})