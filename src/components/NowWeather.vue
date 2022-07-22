<template>
  <div class="container_now">
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
  </div>
</template>

<script>
export default {
  props: ["api", "nowArea"],
  watch: {
    api: function (now, pre) {
      console.log(now, pre);
      const apiArea = now;
      this.allArea = apiArea;
      console.log(this.allArea);
      this.showTemperature(this.allArea); //台北市區資料
      this.showCity(this.allArea);

      this.showWeather(this.allArea);
      this.showWeatherIcon(this.allArea);
    },
    nowArea: function (now, pre) {
      this.showArea = now;
      // console.log(this.showArea);
      console.log(now, pre);
      this.showCity(this.showArea);
      console.log(this.allArea);
      this.showTemperature(this.allArea, this.showArea);
      // if (this.allArea.length > 0) {
      //   this.showTemperature(this.allArea, this.showArea);
      //   console.log(this.allArea);
      // }
    },
  },
  mounted() {
    this.showWeek();
    this.showYearMonthDays();
  },
  data() {
    return {
      showArea: "",
      allArea: [],
      howDay: "",
      yearMonthDay: "",
      howPlace: "",
      howTemperature: "",
      howWeather: "",
      icon: "",
      weekDay: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      monthDay: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "JUL",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
    };
  },
  methods: {
    /**  顯示星期 */
    showWeek: function () {
      const birthday = new Date();
      const day1 = birthday.getDay();
      this.howDay = this.weekDay[day1];
    },
    /** 顯示年月日 */
    showYearMonthDays: function () {
      const myDate = new Date();
      const yearMonthDay =
        myDate.getFullYear() +
        " " +
        this.monthDay[myDate.getMonth()] +
        " " +
        myDate.getDate();

      this.yearMonthDay = yearMonthDay;
    },
    /** 顯示地區 */
    showCity: function (nowArea) {
      this.howPlace = nowArea;
      console.log(nowArea);
      // let defaultRegion = allArea.filter((item) => item.locationName === "信義區");
      // defaultRegion = defaultRegion.shift();
      // this.howPlace = defaultRegion.locationName;
      // console.log(defaultRegion);

      // const cites = allArea[7].locationName;
      // this.howPlace = cites;
    },
    /** 顯示溫度 */
    showTemperature: function (allArea, showArea) {
      console.log(allArea, showArea);
      let getLocation = allArea
        .filter((item) => item.locationName === showArea)
        .shift();
      console.log(getLocation);
      let getweatherElement = getLocation.weatherElement
        .filter((item) => item.elementName === "T")
        .shift();
      console.log(getweatherElement);
      let getTime = getweatherElement.time.shift();
      console.log(getTime);
      let getElementValue = getTime.elementValue.shift();
      console.log(getElementValue);
      let getTemperature = getElementValue.value;
      console.log(getTemperature);
      this.howTemperature = getTemperature;
    },
    /** 顯示天氣狀況 */
    showWeather: function (allArea) {
      const howWeathers =
        allArea[7].weatherElement[6].time[0].elementValue[0].value;
      this.howWeather = howWeathers;
    },
    /** 顯示天氣圖示 */
    showWeatherIcon: function (allArea) {
      for (let index = 0; index < 4; index++) {
        let weatherIcons = Number(
          allArea[7].weatherElement[6].time[0].elementValue[1].value
        );
        if (weatherIcons <= 4) {
          weatherIcons = '<i class="fa-solid fa-sun "></i>';
        }
        if (7 >= weatherIcons && weatherIcons >= 5) {
          weatherIcons = '<i class="fa-solid fa-cloud"></i>';
        }
        if (23 >= weatherIcons && weatherIcons >= 8) {
          weatherIcons = '<i class="fa-solid fa-cloud-rain"></i> ';
        }
        if (27 >= weatherIcons && weatherIcons >= 24) {
          weatherIcons = '<i class="fa-solid fa-sun "></i>';
        }
        if (weatherIcons === 28) {
          weatherIcons = '<i class="fa-solid fa-cloud"></i>';
        }
        if (41 >= weatherIcons && weatherIcons >= 29) {
          weatherIcons = '<i class="fa-solid fa-cloud-rain"></i> ';
        }
        this.icon = weatherIcons;
      }
    },
  },
};
</script>


<style>
.container_now {
  background-image: url("@/assets/01.jpeg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 500px;
  margin-left: 0;
  border-radius: 50px;
  z-index: 2;
}
.background_city {
  width: 100%;
  height: 100%;
  border-radius: 50px;
  opacity: 0.8;
  background: #fdc830; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to left,
    #f37335,
    #fdc830
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to left,
    #f37335,
    #fdc830
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
.Target {
  padding-left: 20px;
  padding-top: 20px;
}
.current {
  padding-left: 20px;
  padding-top: 160px;
}
.icon {
  font-size: 50px;
  padding-bottom: 10px;
}
@media (min-width: 768px) {
  .container_now {
    background-image: url("@/assets/01.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 420px;
    height: 500px;
    margin-left: 40px;
    border-radius: 50px;
    z-index: 2;
  }
  .background_city {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    opacity: 0.8;
    background: #fdc830; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to left,
      #f37335,
      #fdc830
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to left,
      #f37335,
      #fdc830
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .Target {
    padding-left: 20px;
    padding-top: 20px;
  }
  .current {
    padding-left: 20px;
    padding-top: 160px;
  }
  .icon {
    font-size: 50px;
    padding-bottom: 10px;
  }
}
@media (min-width: 1024px) {
  .container_now {
    background-image: url("@/assets/01.jpeg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 400px;
    height: 500px;
    margin-left: 0px;
    border-radius: 50px;
    z-index: 2;
  }
  .background_city {
    width: 100%;
    height: 100%;
    border-radius: 50px;
    opacity: 0.8;
    background: #fdc830; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to left,
      #f37335,
      #fdc830
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to left,
      #f37335,
      #fdc830
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
  .Target {
    padding-left: 20px;
    padding-top: 20px;
  }
  .current {
    padding-left: 20px;
    padding-top: 160px;
  }
  .icon {
    font-size: 50px;
    padding-bottom: 10px;
  }
}
</style>
