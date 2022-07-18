import Vue from "vue";
// import HelloWorld from "./HelloWorld";
import NowWeather from "./NowWeather";
import FutureWeather from "./FutureWeather";
import MessageBoard from "./MessageBoard";
import TotalWeather from "./TotalWeather";
// Vue.component('HelloWorld',HelloWorld)
Vue.component("FutureWeather", FutureWeather);
Vue.component("NowWeather", NowWeather);
Vue.component("MessageBoard", MessageBoard);
Vue.component("TotalWeather", TotalWeather);

export default new Vue();
