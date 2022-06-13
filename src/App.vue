<template>
  <div id="app">
    <div class="main d-flex">
      <div class="container d-flex">
        <div class="wathercontent_today ">
          <div class="weather-gradient">
            <div class="date-container">
              <h2 class="worship">Tuesday</h2>  
              <h3 class="year month day">15 Jan 2022</h3>
              <h3 class="Place">taipei</h3>
            </div>
            <div class="weather-container">
              <i class="fa-solid fa-sun"></i>
              <h3 class="temperature">29°C</h3>
              <h3 class="weather-desc">weather-desc</h3>
            </div> 
          </div>
        </div>
        <div class="info_today_content ">
          <div class="info_today">
            <div class="precipitation">
              <span>precipitation</span>
              <span>0%</span>
            </div>
            <div class=""></div>
            <div class=""></div>
          </div>
        </div>
      </div>
    </div>
    
  </div>

  <!--
    1.分頁 轉換頁面 路由器router （vue router後續）
    2.首頁漂亮練切版，天氣預報為主題 皆天氣預報api
    3.副頁欄位 輸入名字電話信箱地址 送入localstrogi
    
    
   -->
</template>

<script>
  export default {
    data() {
      return {
       
      }
    },
     methods: {
      
    },
  }
</script>

<style>
  #app{
    max-width: 1440px;
    width: 100%;
    height: 100vh;
    background-color: rgb(61, 50, 57);
    margin: auto;
  }
  .main{
    height:100vh;
  }
  .container{
    align-items: center;
    justify-content: center;
  }
  .info_today_content{
    /* max-width: 100%; */
    width: 500px;
    height: 500px;
    background:rgb(25, 19, 23);
    border-radius: 0 10% 10% 0;
    transform: translate(-40px, 0px);

  }
  .wathercontent_today{
    background-image: url('@/assets/01.jpeg');
    background-repeat:no-repeat;
    background-size: cover;
    width: 400px;
    /* max-width: 100%; */
    height: 500px;
    border-radius: 50px;
    z-index: 2;
  }
  .weather-gradient{
    width: 100%;
    height: 100%;
    border-radius: 50px;
    opacity: 0.8;
    background: #FDC830;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #F37335, #FDC830);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #F37335, #FDC830); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .date-container{
    padding-left:20px ;
    padding-top:20px ;
  }
  .weather-container{
    padding-left:20px ;
    padding-top:160px ;
  }  
  .fa-sun{
    font-size: 50px;
    padding-bottom: 10px;
  }
</style>


