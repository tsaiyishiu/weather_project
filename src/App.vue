<template>
  <div id="app">
    <div class="main d-flex">
      <div class="container d-flex align-items-center">
        <div class="container_under d-flex ">
          <div class="container_now">
            <div class="background_city">
              <div class="Target">
                <h2 class="worship">{{ howDay }}</h2>  
                <h3 class="year month day">{{ yearMonthDay }}</h3>
                <h3 class="Place">{{ howPlace }}</h3>
              </div>
              <div class="current">
                <i class="fa-solid fa-sun"></i>
                <h3 class="temperature">{{ howTemperature }} &#8451;</h3>
                <h3 class="weather-desc">{{ howWeather }}</h3>
              </div> 
            </div>
          </div>
          <div class="container_future ">
            <div class="info_current d-flex flex-column">
              <div v-for="item in items" :key='item.message' class="precipitation">
                <span>{{ item.message }}</span>
                <span>{{ item.messageData }}{{ item.messageunit}}</span>
              </div>
              <!-- <div class="humidity">
                <span>humidity</span>
                <span>34%</span>
              </div>
              <div class="wind">
                <span>wind</span>
                <span>0 km/h</span>
              </div> -->
            </div>
            <div class="forecast_weather">
              <div class="forecast_items d-flex justify-content-center">
                <div v-for="(futureitem, index) in futureitems" :key='"futureitem"+index' class="dayone d-flex flex-column col-3 justify-content-around">
                  <!-- <i class="fa-solid fa-sun "></i> -->
                  <!-- {{ futureitem.messageIcon }} -->
                  <div v-html="futureitem.messageIcon"></div>
                  <span>{{ futureitem.messageWeek }}</span>
                  <span>{{ futureitem.messageTemperature }}°C</span>
                </div>
                <!-- <div class="daytwo d-flex flex-column col-3 justify-content-around">
                  <i class="fa-solid fa-cloud-rain"></i>
                  <span>Four</span>
                  <span>29°C</span>
                </div>
                <div class="daythree d-flex flex-column col-3 justify-content-around">
                  <i class="fa-solid fa-cloud-sun"></i>
                  <span>Five</span>
                  <span>29°C</span>
                </div>
                <div class="dayfour d-flex flex-column col-3 justify-content-around">
                  <i class="fa-solid fa-cloud-sun-rain"></i>
                  <span>Six</span>
                  <span>29°C</span>
                </div> -->
              </div>
            </div>
            <div class="place_items">
              <button class="place_item">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>Change location</span>
              </button>
            </div>
          </div>  
        </div>
      </div>
    </div>
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
    10 > a > 3
   -->
</template>

<script>    
  export default {
    mounted(){
      this.getApi()
      this.day()
      this.yearmonthday()
      
      //this.cityApi()
    },
    data() {
      return {
        howDay:'' ,
        yearMonthDay:'',
        howPlace:'',
        howTemperature:'',
        howWeather:'',
        icon:'<i class="fa-solid fa-sun "></i>',
        items:[
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
        futureitems:[
          {messageIcon:'',
           messageWeek:'Three',
           messageTemperature:'29',
          },
          {messageIcon:'<i class="fa-solid fa-sun "></i>',
           messageWeek:'four',
           messageTemperature:'223',
          },
          {messageIcon:'<i class="fa-solid fa-sun "></i>',
           messageWeek:'five',
           messageTemperature:'12',
          },  
          {messageIcon:'<i class="fa-solid fa-sun "></i>',
           messageWeek:'six',
           messageTemperature:'47',
          }
        ],
        info : null,
        weekDay: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        monthDay: ['Jan','Feb','Mar','Apr','May','Jun','Aug','Sept','Oct','Nov','Dec'],
        futureDay: ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'],
        city:[]
      }
    },
    methods: {
      /**  顯示星期 */
      day: function() {   
        const birthday = new Date();
        const day1 = birthday.getDay();
        // const day1 = 6;
        this.futureday(day1)
        // Sunday - Saturday : 0 - 6
        this.howDay = this.weekDay[day1]
      },
      /** 顯示未來星期 */
      futureday: function(day1) {
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
        // this.futureitems[0].messageWeek = this.futureDay[day2]
        // this.futureitems[1].messageWeek = this.futureDay[day3] 
        // this.futureitems[2].messageWeek = this.futureDay[day4]
        // this.futureitems[3].messageWeek = this.futureDay[day5]


        for (let index = 0; index < 4; index++) {
          let newDay = day1 + (index+1)
          if(newDay >= 7){
            newDay = newDay - 7
          }
          this.futureitems[index].messageWeek = this.futureDay[newDay]
        }
      },
      /** 顯示年月日 */
      yearmonthday: function() { 
        const myDate = new Date(); 
        const yearMonThday = myDate.getFullYear()+' '+ this.monthDay[myDate.getMonth()] +' '+myDate.getDate()
        // const yearMonThday = `${myDate.getFullYear()} ${this.monthDay[myDate.getMonth()]} ${myDate.getDate()}`
        //console.log(yearmonthday)
        this.yearMonthDay = yearMonThday
      },
      getApi: function() {
        this.axios
          // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
          // .then(response => (this.info = response.data.bpi))
          // .catch(error => console.log(error)) 
        .get ( 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-093?Authorization=CWB-CEAB4C1A-D854-4B57-BB0E-0ACFB2760821&locationId=F-D0047-063' ) 
        .then ( response => { 
          console.log(response)
          this.cityApi(response)
        } ) 
        .catch ( 
        function ( error ) { //請求失敗處理   
        console . log ( error ) ;
        } ) 
        
      },
      /** 顯示地區 */
      cityApi(response){ 
        const citys = response.data.records.locations[0].location 
        this.Temperature(citys)
        this.Weather(citys)
        this.precipitation(citys)
        this.humidity(citys)
        this.wind(citys)
        this.futureTemperature(citys)
        this.futureIcon(citys)
        const city =  citys[7].locationName
        this.howPlace = city 
        // console.log(city)
      },
      /** 顯示溫度 */
      Temperature: function(citys){
        const temperatures = citys[7].weatherElement[1].time[0].elementValue[0].value
        this.howTemperature = temperatures
        //console.log(temperatures)
      },
      /** 顯示天氣 */
      Weather: function(citys){
        const howWeathers = citys[7].weatherElement[6].time[0].elementValue[0].value
        this.howWeather = howWeathers 
      },
      /** 顯示降雨率 */
      precipitation:function(citys){ 
        const cipitations = citys[7].weatherElement[0].time[0].elementValue[0].value
        this.items[0].messageData = cipitations + ' '
      },
      /** 顯示濕度 */
      humidity:function(citys){ 
        const humiditys = citys[7].weatherElement[2].time[0].elementValue[0].value
        this.items[1].messageData = humiditys+ ' '
      },
      /** 顯示風速 */
      wind: function(citys){ 
        const winds = citys[7].weatherElement[4].time[0].elementValue[0].value
        this.items[2].messageData = winds * 3600 / 1000 + ' '
      },
      /**顯示未來溫度 */
      futureTemperature:function(citys){
        const futureTemperaturesOne = citys[7].weatherElement[1].time[2].elementValue[0].value
        const futureTemperaturesTwo = citys[7].weatherElement[1].time[4].elementValue[0].value
        const futureTemperaturesThree = citys[7].weatherElement[1].time[6].elementValue[0].value
        const futureTemperaturesFour = citys[7].weatherElement[1].time[8].elementValue[0].value
        this.futureitems[0].messageTemperature = futureTemperaturesOne
        this.futureitems[1].messageTemperature = futureTemperaturesTwo
        this.futureitems[2].messageTemperature = futureTemperaturesThree
        this.futureitems[3].messageTemperature = futureTemperaturesFour
        // console.log(futureTemperaturesOne)
      },
      futureIcon:function(citys){
        // let futureIconOne = Number(citys[7].weatherElement[6].time[2].elementValue[1].value)
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
        // this.futureitems[0].messageIcon = futureIconOne
        // let futureIconTwo = Number(citys[7].weatherElement[6].time[4].elementValue[1].value)
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
        // this.futureitems[1].messageIcon = futureIconTwo
        // let futureIconThree = Number(citys[7].weatherElement[6].time[6].elementValue[1].value)
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
        // this.futureitems[2].messageIcon = futureIconThree
        // let futureIconFour = Number(citys[7].weatherElement[6].time[8].elementValue[1].value)
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
        // this.futureitems[3].messageIcon = futureIconFour
        for (let index = 0; index < 4; index++) {
          let futureIconOne = Number(citys[7].weatherElement[6].time[(index+1)*2].elementValue[1].value)
          console.log(futureIconOne)
        
          if (futureIconOne <= 4){
            
            futureIconOne = '<i class="fa-solid fa-sun "></i>'
          }
          if( 7 >= futureIconOne >= 5 ){
            futureIconOne = '<i class="fa-solid fa-cloud"></i>'
          }
          if(23 >= futureIconOne >= 8){
            
            futureIconOne = '<i class="fa-solid fa-cloud-rain"></i> '
          }
          if(27 >= futureIconOne >= 24){
            futureIconOne = '<i class="fa-solid fa-sun "></i>'
          }
          if( futureIconOne === 28){
            futureIconOne = '<i class="fa-solid fa-cloud"></i>'
          }
          if( 41 >= futureIconOne >= 29){
            futureIconOne = '<i class="fa-solid fa-cloud-rain"></i> '
          }
          this.futureitems[index].messageIcon = futureIconOne

        }
      },
    },
    
  }


  
</script>

<style lang="scss">
  #app{
    max-width: 1440px;
    width: 100%;
    height: 100vh;
    background-color: rgb(61, 50, 57);
    margin: auto;
    .main{
      height:100vh;
      .container{
      align-items: center;
      justify-content: center;
        .container_now{
          background-image: url('@/assets/01.jpeg');
          background-repeat:no-repeat;
          background-size: cover;
          width: 400px;
          /* max-width: 100%; */
          height: 500px;
          border-radius: 50px;
          z-index: 2;
          .background_city{
            width: 100%;
            height: 100%;
            border-radius: 50px;
            opacity: 0.8;
            background: #FDC830;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to left, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to left, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            .Target{
              padding-left:20px ;
              padding-top:20px ;
            }
            .current{
              padding-left:20px ;
              padding-top:160px ;
              .fa-sun{
                font-size: 50px;
                padding-bottom: 10px;
              }
            }  
          }
        }
        .container_future{
        /* max-width: 100%; */
          width: 500px;
          height: 500px;
          background:#2c1725;
          border-radius: 0 10% 10% 0;
          //transform: translate(-40px, 0px);
          .info_current{
            padding-left: 40px;
            padding-top: 20px;
            color:#c6a8a8;
            font-weight: 700;
            .precipitation span:nth-child(2){
              float: right;
              padding-right: 60px;
            }
            .humidity span:nth-child(2){
              float: right;
              padding-right: 60px;
            }
            .wind span:nth-child(2){
              float: right;
              padding-right: 60px;
            }
          }
          .forecast_weather{
            //background: red;
            margin: 20px 40px 0px 40px;
            height: 250px;
            .forecast_items{
              //padding: 40px 0px 40px 0px;
              color: #f18a45;
              background-color:#241a27;
              height: 100%;
              text-align: center;
              font-size: 30px;

              .dayone:hover{
                color: #2c1725;
                background-color:#c6a8a8;
                transition: 0.4s;
              }
              .dayone{
                background-color:#241a27;
                border-radius: 20px;
                .fa-sun{
                  font-size: 50px;
                }
              }
              .daytwo:hover{
                color: #2c1725;
                background-color: #c6a8a8;
                transition: 0.4s;
              }
              .daytwo{
                background-color: #241a27;
                border-radius: 20px;
                .fa-cloud-rain{
                  font-size: 50px;
                }
              }
              .daythree:hover{
                color: #2c1725;
                background-color: #c6a8a8;
                transition: 0.4s;
              }
              .daythree{
                background-color: #241a27;
                border-radius: 20px;
                .fa-cloud-sun{
                  font-size: 50px;
                }
              }
              .dayfour:hover{
                color: #2c1725;
                background-color: #c6a8a8;
                transition: 0.4s;
              }
              .dayfour{
                background-color: #241a27;
                border-radius: 20px;
                .fa-cloud-sun-rain{
                  font-size: 50px;
                }
              }
            }
          }
          .place_items{
            text-align: center;
            padding: 40px;
            
            .place_item{
              background: #FDC830;  /* fallback for old browsers */
              background: -webkit-linear-gradient(to top, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
              background: linear-gradient(to top, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
              width: 80%;
              height: 40px; 
            }
          }
        }
      }
    }
  }
  .container_under{
    border-radius: 10%;
    background-color:#2c1725;
  }
  
  
  
  
  
  
  
  
</style>


