<template>
  <div id="app">
    <div class="menu">
      <router-link to="/board" >
        <b-button  variant="outline-warning">留言</b-button>
      </router-link>
      <router-link to="/" >
        <b-button  variant="outline-warning">Home</b-button>
      </router-link>  
    </div>
    <router-view></router-view>
    <!-- <TotalWeather></TotalWeather>
    
    <MessageBoard></MessageBoard> -->
  </div>
  

  <!--
    1.分頁 轉換頁面 路由器router （vue router後續）
    2.首頁漂亮練切版，天氣預報為主題 皆天氣預報api
    3.副頁欄位 輸入名字電話信箱地址 送入localstrogi
    看30天接api
    授權碼：CWB-CEAB4C1A-D854-4B57-BB0E-0ACFB2760821
    <i class="fa-solid fa-location-dot"></i> 太陽
    <i class="fa-solid fa-cloud-rain"></i> 下雨
    <i class="fa-solid fa-cloud"></i> 雲
    <i class="fa-solid fa-cloud-sun-rain"></i> 太陽雨    
   -->
</template>

<script>
/**此行為原components寫法 但使用了router所以此行可以不用寫 components會從router-view出來 */
// import MessageBoard from './components/MessageBoard.vue' 
  export default {
  // components: { MessageBoard },
    mounted(){
      // this.getApi()
      // this.today()
      // const Home = { template: '<div>Home</div>' }
      // const About = { template: '<div>About</div>' }

      // const routes = [
      //   {path: '/', component: Home },
      //   {path: '/about', component: About }
      // ]

      // const router = VueRouter.createRouter({
      //   history: VueRouter.createWebhistory(),
      //   routes: routes,
      // });

      // const app = Vue.createApp({});

      // app.use(router);
      // app.mount('#app')
      // this.showWeek()
      // this.showYearMonthDays()
    },
    data() {
      return {        
        howDay:'' ,
        yearMonthDay:'',
        howPlace:'',
        howTemperature:'',
        howWeather:'',
        icon:'',
        weatherInformation:[
          {message:'precipitation',
           messageData:'???',
           messageunit:'%'
          },
          {message:'humidity',
           messageData:'???',
           messageunit:'%'
          },
          {message:'wind',
           messageData:'???',
           messageunit:'km/h',
          },
        ],
        futureDays:[
          {messageIcon:'',
           messageWeek:'Three',
           messageTemperature:'29',
          },
          {messageIcon:'',
           messageWeek:'four',
           messageTemperature:'223',
          },
          {messageIcon:'',
           messageWeek:'five',
           messageTemperature:'12',
          },  
          {messageIcon:'',
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
      // changeHandler: function(){
      //   this.change = !this.change
      // },
      /**  顯示星期 */
      // showWeek: function() {         
      // const birthday = new Date();
      // const day1 = birthday.getDay();
      // this.showFutureWeek(day1)
      // this.howDay = this.weekDay[day1]
      // },
      today: function(){
        const NewToday = new Date()
        const day1 = NewToday.getDay()
        // this.showFutureWeek(day1)
        this.todaytoday = day1
      },
      /** 顯示未來星期 */
      // showFutureWeek: function(day1) {
        // let day2 = day1 +1
        // if(day2 >= 7){
        //   day2 = day2 - 7
        // }
        // let day3 = day1 +2
        // if(day3 >= 7){
        //   day3 = day3 - 7
        // }
        // let day4 = day1 +3
        // if(day4 >= 7){
        //   day4 = day4 - 7
        // }
        // let day5 = day1 +4
        // if(day5 >= 7){
        //   day5 = day5 - 7
        // }
        // this.futureDays[0].messageWeek = this.weekAbbreviation[day2]
        // this.futureDays[1].messageWeek = this.weekAbbreviation[day3] 
        // this.futureDays[2].messageWeek = this.weekAbbreviation[day4]
        // this.futureDays[3].messageWeek = this.weekAbbreviation[day5]
      //   for (let index = 0; index < 4; index++) {
      //     let newDay = day1 + (index+1)
      //     if(newDay >= 7){
      //       newDay = newDay - 7
      //     }
      //     this.futureDays[index].messageWeek = this.weekAbbreviation[newDay]
      //   }
      // },
      /** 顯示年月日 */
      // showYearMonthDays: function() { 
      //   const myDate = new Date(); 
      //   const yearMonthDay = myDate.getFullYear()+' '+ this.monthDay[myDate.getMonth()] +' '+myDate.getDate()
      //   this.yearMonthDay = yearMonthDay
      // },
      // getApi: function() {
      //   this.axios
      //   .get ( 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-093?Authorization=CWB-CEAB4C1A-D854-4B57-BB0E-0ACFB2760821&locationId=F-D0047-063' ) 
      //   .then ( response => { 
      //     // this.api.messageApi = response
      //     console.log(response)
      //     this.showCity(response)
      //   }) 
      //   .catch ( 
      //     function ( error ) { //請求失敗處理   
      //     console.log( error );
      //   }) 
        
      // },
      /** 顯示地區 */
      // showCity(response){ 
      //   const city = response.data.records.locations[0].location
      //   this.api = city
        // this.showTemperature(city)
        // this.showWeather(city)
        // this.showPrecipitation(city)
        // this.showHumidity(city)
        // this.showWind(city)
        // this.showFutureTemperature(city)
        // this.showFutureIcon(city)
        // this.showWeatherIcon(city)
      //   const cites = city[7].locationName
      //   this.howPlace = cites
      // },
      /** 顯示溫度 */
      // showTemperature: function(city){
      //   const temperatures = city[7].weatherElement[1].time[0].elementValue[0].value
      //   this.howTemperature = temperatures
      //   //console.log(temperatures)
      // },
      /** 顯示天氣圖示 */
      // showWeatherIcon: function(city){
      //   for (let index = 0; index < 4; index++) {
      //     let weatherIcons = Number(city[7].weatherElement[6].time[0].elementValue[1].value)  
      //     if (weatherIcons <= 4){
      //       weatherIcons = '<i class="fa-solid fa-sun "></i>'
      //     }
      //     if( 7 >= weatherIcons && weatherIcons >= 5 ){
      //       weatherIcons = '<i class="fa-solid fa-cloud"></i>'
      //     }
      //     if(23 >= weatherIcons && weatherIcons >= 8){
      //       weatherIcons = '<i class="fa-solid fa-cloud-rain"></i> '
      //     }
      //     if(27 >= weatherIcons && weatherIcons >= 24){
      //       weatherIcons = '<i class="fa-solid fa-sun "></i>'
      //     }
      //     if( weatherIcons === 28){
      //       weatherIcons = '<i class="fa-solid fa-cloud"></i>'
      //     }
      //     if( 41 >= weatherIcons && weatherIcons >= 29){
      //       weatherIcons = '<i class="fa-solid fa-cloud-rain"></i> '
      //     }
      //     this.icon = weatherIcons
      //   }
      // },
      /** 顯示天氣 */
      // showWeather: function(city){
      //   const howWeathers = city[7].weatherElement[6].time[0].elementValue[0].value
      //   this.howWeather = howWeathers 
      // },
      /** 顯示降雨率 */
      // showPrecipitation: function(city){ 
      //   const cipitations = city[7].weatherElement[0].time[0].elementValue[0].value
      //   this.weatherInformation[0].messageData = cipitations + ' '
      // },
      /** 顯示濕度 */
      // showHumidity: function(city){ 
      //   const humiditys = city[7].weatherElement[2].time[0].elementValue[0].value
      //   this.weatherInformation[1].messageData = humiditys+ ' '
      // },
      /** 顯示風速 */
      // showWind: function(city){ 
      //   const winds = city[7].weatherElement[4].time[0].elementValue[0].value
      //   this.weatherInformation[2].messageData = winds * 3600 / 1000 + ' '
      // },
      /**顯示未來溫度 */
      // showFutureTemperature: function(city){
      //   const futureTemperaturesOne = city[7].weatherElement[1].time[2].elementValue[0].value
      //   const futureTemperaturesTwo = city[7].weatherElement[1].time[4].elementValue[0].value
      //   const futureTemperaturesThree = city[7].weatherElement[1].time[6].elementValue[0].value
      //   const futureTemperaturesFour = city[7].weatherElement[1].time[8].elementValue[0].value
      //   this.futureDays[0].messageTemperature = futureTemperaturesOne
      //   this.futureDays[1].messageTemperature = futureTemperaturesTwo
      //   this.futureDays[2].messageTemperature = futureTemperaturesThree
      //   this.futureDays[3].messageTemperature = futureTemperaturesFour
      // },
      /** 顯示未來天氣圖示 */
      // showFutureIcon: function(city){
        // let futureIconOne = Number(city[7].weatherElement[6].time[2].elementValue[1].value)
        // console.log(futureIconOne)
        
        // if (futureIconOne <= 4){
          
        //   futureIconOne = '<i class="fa-solid fa-sun "></i>'
        // }
        // if( 7 >= futureIconOne >= 5 ){
        //   futureIconOne = '<i class="fa-solid fa-cloud"></i>'
        // }
        // if(23 >= futureIconOne >= 8){
          
        //   futureIconOne = '<i class="fa-solid fa-cloud-rain"></i> '
        // }
        // if(27 >= futureIconOne >= 24){
        //   futureIconOne = '<i class="fa-solid fa-sun "></i>'
        // }
        // if( futureIconOne === 28){
        //   futureIconOne = '<i class="fa-solid fa-cloud"></i>'
        // }
        // if( 41 >= futureIconOne >= 29){
        //   futureIconOne = '<i class="fa-solid fa-cloud-rain"></i> '
        // }
        // this.futureDays[0].messageIcon = futureIconOne
        // let futureIconTwo = Number(city[7].weatherElement[6].time[4].elementValue[1].value)
        // if (futureIconTwo <= 4){
          
        //   futureIconTwo = '<i class="fa-solid fa-sun "></i>'
        // }
        // if( 7 >= futureIconTwo >= 5 ){
        //   futureIconTwo = '<i class="fa-solid fa-cloud"></i>'
        // }
        // if(23 >= futureIconTwo >= 8){
          
        //   futureIconTwo = '<i class="fa-solid fa-cloud-rain"></i> '
        // }
        // if(27 >= futureIconTwo >= 24){
        //   futureIconTwo = '<i class="fa-solid fa-sun "></i>'
        // }
        // if( futureIconTwo === 28){
        //   futureIconTwo = '<i class="fa-solid fa-cloud"></i>'
        // }
        // if( 41 >= futureIconTwo >= 29){
        //   futureIconTwo = '<i class="fa-solid fa-cloud-rain"></i> '
        // }
        // this.futureDays[1].messageIcon = futureIconTwo
        // let futureIconThree = Number(city[7].weatherElement[6].time[6].elementValue[1].value)
        // if (futureIconThree <= 4){
          
        //   futureIconThree = '<i class="fa-solid fa-sun "></i>'
        // }
        // if( 7 >= futureIconThree >= 5 ){
        //   futureIconThree = '<i class="fa-solid fa-cloud"></i>'
        // }
        // if(23 >= futureIconThree >= 8){
          
        //   futureIconThree = '<i class="fa-solid fa-cloud-rain"></i> '
        // }
        // if(27 >= futureIconThree >= 24){
        //   futureIconThree = '<i class="fa-solid fa-sun "></i>'
        // }
        // if( futureIconThree === 28){
        //   futureIconThree = '<i class="fa-solid fa-cloud"></i>'
        // }
        // if( 41 >= futureIconThree >= 29){
        //   futureIconThree = '<i class="fa-solid fa-cloud-rain"></i> '
        // }
        // this.futureDays[2].messageIcon = futureIconThree
        // let futureIconFour = Number(city[7].weatherElement[6].time[8].elementValue[1].value)
        // if (futureIconFour <= 4){
          
        //   futureIconFour = '<i class="fa-solid fa-sun "></i>'
        // }
        // if( 7 >= futureIconFour >= 5 ){
        //   futureIconFour = '<i class="fa-solid fa-cloud"></i>'
        // }
        // if(23 >= futureIconFour >= 8){
          
        //   futureIconFour = '<i class="fa-solid fa-cloud-rain"></i> '
        // }
        // if(27 >= futureIconFour >= 24){
        //   futureIconFour = '<i class="fa-solid fa-sun "></i>'
        // }
        // if( futureIconFour === 28){
        //   futureIconFour = '<i class="fa-solid fa-cloud"></i>'
        // }
        // if( 41 >= futureIconFour >= 29){
        //   futureIconFour = '<i class="fa-solid fa-cloud-rain"></i> '
        // }
        // this.futureDays[3].messageIcon = futureIconFour
      //   for (let index = 0; index < 4; index++) {
      //     let futureIconOne = Number(city[7].weatherElement[6].time[(index+1)*2].elementValue[1].value)
      //     if (futureIconOne <= 4){
      //       futureIconOne = '<i class="fa-solid fa-sun "></i>'
      //     }
      //     if( 7 >= futureIconOne && futureIconOne >= 5 ){
      //       futureIconOne = '<i class="fa-solid fa-cloud"></i>'
      //     }
      //     if(23 >= futureIconOne && futureIconOne >= 8){      
      //       futureIconOne = '<i class="fa-solid fa-cloud-rain"></i> '
      //     }
      //     if(27 >= futureIconOne && futureIconOne >= 24){
      //       futureIconOne = '<i class="fa-solid fa-sun "></i>'
      //     }
      //     if( futureIconOne === 28){
      //       futureIconOne = '<i class="fa-solid fa-cloud"></i>'
      //     }
      //     if( 41 >= futureIconOne && futureIconOne >= 29){
      //       futureIconOne = '<i class="fa-solid fa-cloud-rain"></i> '
      //     }
      //     this.futureDays[index].messageIcon = futureIconOne
      //   }
      // },
    },
    
  }
</script>

<style lang="scss">
   #app{
    max-width: 1440px;
    width: 100%;
    height: 100%;
    background-color: rgb(61, 50, 57);
    margin: auto;
    .btn{
      margin: 10px;
      // position: relative;
      // z-index: 1;
    }
    .h-100{
      // position: relative;
    }
    .main{
      // height:100vh;
      .container{
        align-items: center;
        justify-content: center;
        // .container_now{
        //   background-image: url('@/assets/01.jpeg');
        //   background-repeat:no-repeat;
        //   background-size: cover;
        //   width: 100%;
        //   height: 500px;
        //   margin-left: 0;
        //   border-radius: 50px;
        //   z-index: 2;
        //   .background_city{
        //     width: 100%;
        //     height: 100%;
        //     border-radius: 50px;
        //     opacity: 0.8;
        //     background: #FDC830;  /* fallback for old browsers */
        //     background: -webkit-linear-gradient(to left, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
        //     background: linear-gradient(to left, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        //     .Target{
        //       padding-left:20px ;
        //       padding-top:20px ;
        //     }
        //     .current{
        //       padding-left:20px ;
        //       padding-top:160px ;
        //       .icon{
        //         font-size: 50px;
        //         padding-bottom: 10px;
        //       }
        //     }  
        //   }
        // }
        // .container_future{
        //   width: 100%;
        //   height: 500px;
        //   background:#2c1725;
        //   border-radius: 10% 10% 10% 10%;
        //   .info_current{
        //     padding-left: 40px;
        //     padding-top: 20px;
        //     color:#c6a8a8;
        //     font-weight: 700;
        //     .precipitation span:nth-child(2){
        //       float: right;
        //       padding-right: 60px;
        //     }
        //     .humidity span:nth-child(2){
        //       float: right;
        //       padding-right: 60px;
        //     }
        //     .wind span:nth-child(2){
        //       float: right;
        //       padding-right: 60px;
        //     }
        //   }
        //   .forecast_weather{
        //     margin: 20px 40px 0px 40px;
        //     height: 250px;
        //     .forecast_items{
        //       color: #f18a45;
        //       background-color:#241a27;
        //       height: 100%;
        //       text-align: center;
        //       font-size: 30px;

        //       .dayone:hover{
        //         color: #2c1725;
        //         background-color:#c6a8a8;
        //         transition: 0.4s;
        //       }
        //       .dayone{
        //         background-color:#241a27;
        //         border-radius: 20px;
        //       }
        //       .daytwo:hover{
        //         color: #2c1725;
        //         background-color: #c6a8a8;
        //         transition: 0.4s;
        //       }
        //       .daytwo{
        //         background-color: #241a27;
        //         border-radius: 20px;
        //       }
        //       .daythree:hover{
        //         color: #2c1725;
        //         background-color: #c6a8a8;
        //         transition: 0.4s;
        //       }
        //       .daythree{
        //         background-color: #241a27;
        //         border-radius: 20px;
        //       }
        //       .dayfour:hover{
        //         color: #2c1725;
        //         background-color: #c6a8a8;
        //         transition: 0.4s;
        //       }
        //       .dayfour{
        //         background-color: #241a27;
        //         border-radius: 20px;
        //       }
        //     }
        //   }
        //   .place_items{
        //     text-align: center;
        //     padding: 40px;
        //     .place_item{
        //       background: #FDC830;  /* fallback for old browsers */
        //       background: -webkit-linear-gradient(to top, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
        //       background: linear-gradient(to top, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        //       width: 80%;
        //       height: 40px; 
        //     }
        //   }
        // }
      }
    }
  }
  .container_under{
    background-color:#2c1725;
    flex-direction: column;
    border-radius: 60px 60px 35px 35px;
  }
@media (min-width: 768px){  
  #app{
    max-width: 1440px;
    width: 100%;
    height: 100%;
    background-color: rgb(61, 50, 57);
    margin: auto;
    .btn{
      margin: 10px;
      // position: relative;
      // z-index: 1;
    }
    .h-100{
      // position: relative;
    }
    .main{
      // height:100vh;
      .container{
      align-items: center;
      justify-content: center;
        // .container_now{
        //   background-image: url('@/assets/01.jpeg');
        //   background-repeat:no-repeat;
        //   background-size: cover;
        //   width: 420px;
        //   height: 500px;
        //   margin-left: 40px;
        //   border-radius: 50px;
        //   z-index: 2;
        //   .background_city{
        //     width: 100%;
        //     height: 100%;
        //     border-radius: 50px;
        //     opacity: 0.8;
        //     background: #FDC830;  /* fallback for old browsers */
        //     background: -webkit-linear-gradient(to left, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
        //     background: linear-gradient(to left, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        //     .Target{
        //       padding-left:20px ;
        //       padding-top:20px ;
        //     }
        //     .current{
        //       padding-left:20px ;
        //       padding-top:160px ;
        //       .icon{
        //         font-size: 50px;
        //         padding-bottom: 10px;
        //       }
        //     }  
        //   }
        // }
        // .container_future{
        //   width: 500px;
        //   height: 500px;
        //   background:#2c1725;
        //   border-radius: 10% 10% 10% 10%;
        //   .info_current{
        //     padding-left: 40px;
        //     padding-top: 20px;
        //     color:#c6a8a8;
        //     font-weight: 700;
        //     .precipitation span:nth-child(2){
        //       float: right;
        //       padding-right: 60px;
        //     }
        //     .humidity span:nth-child(2){
        //       float: right;
        //       padding-right: 60px;
        //     }
        //     .wind span:nth-child(2){
        //       float: right;
        //       padding-right: 60px;
        //     }
        //   }
        //   .forecast_weather{
        //     margin: 20px 40px 0px 40px;
        //     height: 250px;
        //     .forecast_items{
        //       color: #f18a45;
        //       background-color:#241a27;
        //       height: 100%;
        //       text-align: center;
        //       font-size: 30px;
        //       .dayone:hover{
        //         color: #2c1725;
        //         background-color:#c6a8a8;
        //         transition: 0.4s;
        //       }
        //       .dayone{
        //         background-color:#241a27;
        //         border-radius: 20px;                
        //       }
        //       .daytwo:hover{
        //         color: #2c1725;
        //         background-color: #c6a8a8;
        //         transition: 0.4s;
        //       }
        //       .daytwo{
        //         background-color: #241a27;
        //         border-radius: 20px;                
        //       }
        //       .daythree:hover{
        //         color: #2c1725;
        //         background-color: #c6a8a8;
        //         transition: 0.4s;
        //       }
        //       .daythree{
        //         background-color: #241a27;
        //         border-radius: 20px;                
        //       }
        //       .dayfour:hover{
        //         color: #2c1725;
        //         background-color: #c6a8a8;
        //         transition: 0.4s;
        //       }
        //       .dayfour{
        //         background-color: #241a27;
        //         border-radius: 20px;                
        //       }
        //     }
        //   }
        //   .place_items{
        //     text-align: center;
        //     padding: 40px;
            
        //     .place_item{
        //       background: #FDC830;  /* fallback for old browsers */
        //       background: -webkit-linear-gradient(to top, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
        //       background: linear-gradient(to top, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        //       width: 80%;
        //       height: 40px; 
        //     }
        //   }
        // }
      }
    }
  }
  .container_under{    
    background-color:#2c1725;
    flex-direction: column;
    border-radius: 35px;    
  }
}    
@media (min-width: 1024px){  
    #app{
      max-width: 1440px;
      width: 100%;    
      min-height: 100vh;
      background-color: rgb(61, 50, 57);
      margin: auto;
      .homebtn.btn{
        // position: relative;
      }
      .btn{
      margin: 10px;
      // position: absolute;
      // z-index: 1;
      }
      .h-100{
        min-height: 100vh;
      // position: relative;
      }
      .main{
        // height:100vh;
        .container{
        align-items: center;
        justify-content: center;
          // .container_now{
          //   background-image: url('@/assets/01.jpeg');
          //   background-repeat:no-repeat;
          //   background-size: cover;
          //   width: 400px;            
          //   height: 500px;
          //   margin-left: 0px;
          //   border-radius: 50px;
          //   z-index: 2;
          //   .background_city{
          //     width: 100%;
          //     height: 100%;
          //     border-radius: 50px;
          //     opacity: 0.8;
          //     background: #FDC830;  /* fallback for old browsers */
          //     background: -webkit-linear-gradient(to left, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
          //     background: linear-gradient(to left, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          //     .Target{
          //       padding-left:20px ;
          //       padding-top:20px ;
          //     }
          //     .current{
          //       padding-left:20px ;
          //       padding-top:160px ;
          //       .icon{
          //         font-size: 50px;
          //         padding-bottom: 10px;
          //       }
          //     }  
          //   }
          // }
          // .container_future{          
          //   width: 500px;
          //   height: 500px;
          //   background:#2c1725;
          //   border-radius: 0 10% 10% 0;            
          //   .info_current{
          //     padding-left: 40px;
          //     padding-top: 20px;
          //     color:#c6a8a8;
          //     font-weight: 700;
          //     .precipitation span:nth-child(2){
          //       float: right;
          //       padding-right: 60px;
          //     }
          //     .humidity span:nth-child(2){
          //       float: right;
          //       padding-right: 60px;
          //     }
          //     .wind span:nth-child(2){
          //       float: right;
          //       padding-right: 60px;
          //     }
          //   }
          //   .forecast_weather{              
          //     margin: 20px 40px 0px 40px;
          //     height: 250px;
          //     .forecast_items{                
          //       color: #f18a45;
          //       background-color:#241a27;
          //       height: 100%;
          //       text-align: center;
          //       font-size: 30px;
          //       .dayone:hover{
          //         color: #2c1725;
          //         background-color:#c6a8a8;
          //         transition: 0.4s;
          //       }
          //       .dayone{
          //         background-color:#241a27;
          //         border-radius: 20px;                  
          //       }
          //       .daytwo:hover{
          //         color: #2c1725;
          //         background-color: #c6a8a8;
          //         transition: 0.4s;
          //       }
          //       .daytwo{
          //         background-color: #241a27;
          //         border-radius: 20px;                  
          //       }
          //       .daythree:hover{
          //         color: #2c1725;
          //         background-color: #c6a8a8;
          //         transition: 0.4s;
          //       }
          //       .daythree{
          //         background-color: #241a27;
          //         border-radius: 20px;                  
          //       }
          //       .dayfour:hover{
          //         color: #2c1725;
          //         background-color: #c6a8a8;
          //         transition: 0.4s;
          //       }
          //       .dayfour{
          //         background-color: #241a27;
          //         border-radius: 20px;                  
          //       }
          //     }
          //   }
          //   .place_items{
          //     text-align: center;
          //     padding: 40px;              
          //     .place_item{
          //       background: #FDC830;  /* fallback for old browsers */
          //       background: -webkit-linear-gradient(to top, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
          //       background: linear-gradient(to top, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          //       width: 80%;
          //       height: 40px; 
          //     }
          //   }
          // }
        }
      }
    }
    .container_under{
      border-radius: 10%;
      background-color:#2c1725;
      flex-direction: row
    }
}
</style>


