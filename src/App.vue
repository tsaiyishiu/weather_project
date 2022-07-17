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
    
  </div>
</template>

<script>

  export default {

    mounted(){},
    data() {
      return {        
        // howDay:'' ,
        // yearMonthDay:'',
        // howPlace:'',
        // howTemperature:'',
        // howWeather:'',
        // icon:'',
        // weatherInformation:[
        //   {message:'precipitation',
        //    messageData:'???',
        //    messageunit:'%'
        //   },
        //   {message:'humidity',
        //    messageData:'???',
        //    messageunit:'%'
        //   },
        //   {message:'wind',
        //    messageData:'???',
        //    messageunit:'km/h',
        //   },
        // ],
        // futureDays:[
        //   {messageIcon:'',
        //    messageWeek:'Three',
        //    messageTemperature:'29',
        //   },
        //   {messageIcon:'',
        //    messageWeek:'four',
        //    messageTemperature:'223',
        //   },
        //   {messageIcon:'',
        //    messageWeek:'five',
        //    messageTemperature:'12',
        //   },  
        //   {messageIcon:'',
        //    messageWeek:'six',
        //    messageTemperature:'47',
        //   }
        // ],
        // info : null,
        // weekDay: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        // monthDay: ['Jan','Feb','Mar','Apr','May','Jun','Aug','Sept','Oct','Nov','Dec'],
        // weekAbbreviation: ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'],
        // cites:[],
        // api:{
        //   messageApi:'',
        // },
        // todaytoday:'',
      }
    },
    methods: {      
      // today: function(){
      //   const NewToday = new Date()
      //   const day1 = NewToday.getDay()        
      //   this.todaytoday = day1
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
    }
    .h-100{
      
    }
    .main{
      
      .container{
        align-items: center;
        justify-content: center;      
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
    }
    .h-100{
      
    }
    .main{      
      .container{
      align-items: center;
      justify-content: center;      
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
        
      }
      .btn{
      margin: 10px;
      
      }
      .h-100{
        min-height: 100vh;
      
      }
      .main{      
        .container{
        align-items: center;
        justify-content: center;          
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


