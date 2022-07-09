<template>
    <div  class="show">
      
      <div class="d-flex justify-content-center h-100">      
        <div class="main d-flex">
          <!-- <h1>天氣預報</h1> -->
          <div class="container d-flex align-items-center">
            <div class="container_under d-flex ">
              <NowWeather :api='api'></NowWeather>
              <!-- <div class="container_now">
                <div class="background_city">
                  <div class="Target">
                    <h2 class="worship">{{ howDay }}</h2>  
                    <h3 class="year_month_day">{{ yearMonthDay }}</h3>
                    <h3 class="place">{{ howPlace }}</h3>
                  </div>
                  <div class="current">
                    <div class="icon" v-html="icon"></div>
                    <h3 class="temperature">{{ howTemperature }} &#8451;</h3>
                    <h3 class="weather-desc">{{ howWeather }}</h3>
                  </div> 
                </div>
              </div> -->
              <FutureWeather :api='api' :today='todaytoday'></FutureWeather>
              <!-- <div class="container_future ">
                <div class="info_current d-flex flex-column">
                  <div v-for="(item, index) in weatherInformation" :key='"item"+index' class="precipitation">
                    <span>{{ item.message }}</span>
                    <span>{{ item.messageData }}{{ item.messageunit}}</span>
                  </div>
                </div>
                <div class="forecast_weather">
                  <div class="forecast_items d-flex justify-content-center">
                    <div
                      v-for="(futureitem, index) in futureDays" :key='"futureitem"+index'
                      class="dayone d-flex flex-column col-3 justify-content-around"
                    >
                      <div v-html="futureitem.messageIcon"></div>
                      <span>{{ futureitem.messageWeek }}</span>
                      <span>{{ futureitem.messageTemperature }}°C</span>
                    </div>
                  </div>
                </div>
                <div class="place_items">
                  <button class="place_item">
                      <i class="fa-solid fa-location-dot"></i>
                      <span>Change location</span>
                  </button>
                </div>
              </div>   -->
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
// import NowWeather from './NowWeather.vue'
// import FutureWeather from './FutureWeather.vue'
export default {
  // props:['today'],
  // watch:{
  //   api: function(now, pre){
  //     console.log(now, pre)
  //     // const apiCity = now;
  //   },
  //   today: function(day, pre){
  //     console.log(day, pre)
  //   },
  // },
  data() {
    return{
      
    }
  }
}
</script>