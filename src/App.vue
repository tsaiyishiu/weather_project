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
                <div class="dayone d-flex flex-column col-3 justify-content-around">
                  <i class="fa-solid fa-sun "></i>
                  <span>Three</span>
                  <span>29°C</span>
                </div>
                <div class="daytwo d-flex flex-column col-3 justify-content-around">
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
                </div>
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
        howPlace:'???',
        howTemperature:'?',
        howWeather:'???',
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
        info : null,
        weekDay: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        monthDay: ['Jan','Feb','Mar','Apr','May','Jun','Aug','Sept','Oct','Nov','Dec'],
        city:[]
      }
    },
    methods: {
      day: function() {   //顯示星期
        const birthday = new Date();
        const day1 = birthday.getDay();
        // Sunday - Saturday : 0 - 6
        this.howDay = this.weekDay[day1]
      },
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
      cityApi: function(response){
        const citys = response.data.records.locations[0].location 
        // const city =  citys.filter(city =>{
        //   city.geocode = 63000020
        // })
        console.log(citys)  
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


