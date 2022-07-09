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
  mounted(){
    this.getApi()
    this.today()
  },
  data() {
    return{
      howDay:'' ,
      yearMonthDay:'',
      howPlace:'',
      howTemperature:'',
      howWeather:'',
      icon:'',
      weatherInformation:[
        {
         message:'precipitation',
         messageData:'???',
         messageunit:'%'
        },
        {
         message:'humidity',
         messageData:'???',
         messageunit:'%'
        },
        {
         message:'wind',
         messageData:'???',
         messageunit:'km/h',
        },
      ],
      futureDays:[
        {
         messageIcon:'',
         messageWeek:'Three',
         messageTemperature:'29',
        },
        {
         messageIcon:'',
         messageWeek:'four',
         messageTemperature:'223',
        },
        {
         messageIcon:'',
         messageWeek:'five',
         messageTemperature:'12',
        },  
        {
         messageIcon:'',
         messageWeek:'six',
         messageTemperature:'47',
        }
      ],
        info : null,
        weekDay: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        monthDay: ['Jan','Feb','Mar','Apr','May','Jun','Aug','Sept','Oct','Nov','Dec'],
        weekAbbreviation: ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'],
        cites:[],
        api:{
          messageApi:'',
        },
        todaytoday:'', 
    }
  },
  methods: {
    today: function(){
      const NewToday = new Date()
      const day1 = NewToday.getDay()
      // this.showFutureWeek(day1)
      this.todaytoday = day1
    },
    getApi: function() {
      this.axios
      .get ( 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-093?Authorization=CWB-CEAB4C1A-D854-4B57-BB0E-0ACFB2760821&locationId=F-D0047-063' ) 
      .then ( response => { 
        // this.api.messageApi = response
        console.log(response)
        this.showCity(response)
      }) 
      .catch ( 
        function ( error ) { //請求失敗處理   
        console.log( error );
      })       
    },
    showCity(response){
      const city = response.data.records.locations[0].location
      this.api = city
      const cites = city[7].locationName
      this.howPlace = cites
    },
  },
}
</script>