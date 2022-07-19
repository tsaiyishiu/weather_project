<template>
  <div class="container_future">
    <div class="info_current d-flex flex-column">
      <div
        v-for="(item, index) in weatherInformation"
        :key="'item' + index"
        class="precipitation"
      >
        <span>{{ item.message }}</span>
        <span>{{ item.messageData }}{{ item.messageunit }}</span>
      </div>
    </div>
    <div class="forecast_weather">
      <div class="forecast_items d-flex justify-content-center">
        <div
          v-for="(futureitem, index) in futureDays"
          :key="'futureitem' + index"
          class="dayone d-flex flex-column col-3 justify-content-around"
        >
          <div v-html="futureitem.messageIcon"></div>
          <span>{{ futureitem.messageWeek }}</span>
          <span>{{ futureitem.messageTemperature }}°C</span>
        </div>
      </div>
    </div>
    <div class="place_items">
      <div>
        <select name="" id="" v-model="chooseArea" @change="changeArea">
          <option
            v-for="(area, index) in areaItems"
            :key="'area' + index"
            :value="area"
          >
            {{ area }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.changeArea();
  },
  props: ["api", "today"],
  watch: {
    api: function (future, pre) {
      console.log(future, pre);
      const apiCity = future;
      // this.areaItems = apiCity;
      this.showPrecipitation(apiCity);
      this.showHumidity(apiCity);
      this.showWind(apiCity);
      this.showFutureTemperature(apiCity);
      this.showFutureIcon(apiCity);
      this.changeCities(apiCity);
    },
    today: function (day, pre) {
      console.log(day, pre);
      const newToday = day;
      this.showFutureWeek(newToday);
    },
  },
  computed: {},
  data() {
    return {
      chooseArea: "信義區",
      areaItems: [],
      weekAbbreviation: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
      weatherInformation: [
        { message: "precipitation", messageData: "???", messageunit: "%" },
        { message: "humidity", messageData: "???", messageunit: "%" },
        { message: "wind", messageData: "???", messageunit: "km/h" },
      ],
      futureDays: [
        { messageIcon: "", messageWeek: "Three", messageTemperature: "29" },
        { messageIcon: "", messageWeek: "four", messageTemperature: "223" },
        { messageIcon: "", messageWeek: "five", messageTemperature: "12" },
        { messageIcon: "", messageWeek: "six", messageTemperature: "47" },
      ],
    };
  },
  methods: {
    changeArea: function () {
      this.$emit("childEvent", this.chooseArea);
    },
    /** 抓出區域 */
    changeCities: function (city) {
      const changecity = city.map((item) => item.locationName);
      this.areaItems = changecity;
    },
    /** 顯示降雨率 */
    showPrecipitation: function (city) {
      const cipitations =
        city[7].weatherElement[0].time[0].elementValue[0].value;
      this.weatherInformation[0].messageData = cipitations + " ";
    },
    /** 顯示濕度 */
    showHumidity: function (city) {
      const humiditys = city[7].weatherElement[2].time[0].elementValue[0].value;
      this.weatherInformation[1].messageData = humiditys + " ";
    },
    /** 顯示風速 */
    showWind: function (city) {
      const winds = city[7].weatherElement[4].time[0].elementValue[0].value;
      this.weatherInformation[2].messageData = (winds * 3600) / 1000 + " ";
    },
    /**顯示未來溫度 */
    showFutureTemperature: function (city) {
      const futureTemperaturesOne =
        city[7].weatherElement[1].time[2].elementValue[0].value;
      const futureTemperaturesTwo =
        city[7].weatherElement[1].time[4].elementValue[0].value;
      const futureTemperaturesThree =
        city[7].weatherElement[1].time[6].elementValue[0].value;
      const futureTemperaturesFour =
        city[7].weatherElement[1].time[8].elementValue[0].value;
      this.futureDays[0].messageTemperature = futureTemperaturesOne;
      this.futureDays[1].messageTemperature = futureTemperaturesTwo;
      this.futureDays[2].messageTemperature = futureTemperaturesThree;
      this.futureDays[3].messageTemperature = futureTemperaturesFour;
    },
    /** 顯示未來天氣圖示 */
    showFutureIcon: function (city) {
      for (let index = 0; index < 4; index++) {
        let futureIconOne = Number(
          city[7].weatherElement[6].time[(index + 1) * 2].elementValue[1].value
        );
        if (futureIconOne <= 4) {
          futureIconOne = '<i class="fa-solid fa-sun "></i>';
        }
        if (7 >= futureIconOne && futureIconOne >= 5) {
          futureIconOne = '<i class="fa-solid fa-cloud"></i>';
        }
        if (23 >= futureIconOne && futureIconOne >= 8) {
          futureIconOne = '<i class="fa-solid fa-cloud-rain"></i> ';
        }
        if (27 >= futureIconOne && futureIconOne >= 24) {
          futureIconOne = '<i class="fa-solid fa-sun "></i>';
        }
        if (futureIconOne === 28) {
          futureIconOne = '<i class="fa-solid fa-cloud"></i>';
        }
        if (41 >= futureIconOne && futureIconOne >= 29) {
          futureIconOne = '<i class="fa-solid fa-cloud-rain"></i> ';
        }
        this.futureDays[index].messageIcon = futureIconOne;
      }
    },
    showFutureWeek: function (day1) {
      for (let index = 0; index < 4; index++) {
        let newDay = day1 + (index + 1);
        if (newDay >= 7) {
          newDay = newDay - 7;
        }
        this.futureDays[index].messageWeek = this.weekAbbreviation[newDay];
      }
    },
  },
};
</script>
<style lang="scss">
.container_future {
  width: 350px;
  height: 500px;
  background: #2c1725;
  border-radius: 10% 10% 10% 10%;
  .info_current {
    padding-left: 40px;
    padding-top: 20px;
    color: #c6a8a8;
    font-weight: 700;
    .precipitation span:nth-child(2) {
      float: right;
      padding-right: 60px;
    }
    .humidity span:nth-child(2) {
      float: right;
      padding-right: 60px;
    }
    .wind span:nth-child(2) {
      float: right;
      padding-right: 60px;
    }
  }
  .forecast_weather {
    margin: 20px 40px 0px 40px;
    height: 250px;
    .forecast_items {
      color: #f18a45;
      background-color: #241a27;
      height: 100%;
      text-align: center;
      font-size: 20px;

      .dayone:hover {
        color: #2c1725;
        background-color: #c6a8a8;
        transition: 0.4s;
      }
      .dayone {
        background-color: #241a27;
        border-radius: 20px;
      }
      .daytwo:hover {
        color: #2c1725;
        background-color: #c6a8a8;
        transition: 0.4s;
      }
      .daytwo {
        background-color: #241a27;
        border-radius: 20px;
      }
      .daythree:hover {
        color: #2c1725;
        background-color: #c6a8a8;
        transition: 0.4s;
      }
      .daythree {
        background-color: #241a27;
        border-radius: 20px;
      }
      .dayfour:hover {
        color: #2c1725;
        background-color: #c6a8a8;
        transition: 0.4s;
      }
      .dayfour {
        background-color: #241a27;
        border-radius: 20px;
      }
    }
  }
  .place_items {
    text-align: center;
    padding: 40px;
    .place_item {
      background: #fdc830; /* fallback for old browsers */
      background: -webkit-linear-gradient(
        to top,
        #f37335,
        #fdc830
      ); /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(
        to top,
        #f37335,
        #fdc830
      ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      width: 80%;
      height: 40px;
    }
  }
}
@media (min-width: 768px) {
  .container_future {
    width: 500px;
    height: 500px;
    background: #2c1725;
    border-radius: 10% 10% 10% 10%;
    .info_current {
      padding-left: 40px;
      padding-top: 20px;
      color: #c6a8a8;
      font-weight: 700;
      .precipitation span:nth-child(2) {
        float: right;
        padding-right: 60px;
      }
      .humidity span:nth-child(2) {
        float: right;
        padding-right: 60px;
      }
      .wind span:nth-child(2) {
        float: right;
        padding-right: 60px;
      }
    }
    .forecast_weather {
      margin: 20px 40px 0px 40px;
      height: 250px;
      .forecast_items {
        color: #f18a45;
        background-color: #241a27;
        height: 100%;
        text-align: center;
        font-size: 30px;
        .dayone:hover {
          color: #2c1725;
          background-color: #c6a8a8;
          transition: 0.4s;
        }
        .dayone {
          background-color: #241a27;
          border-radius: 20px;
        }
        .daytwo:hover {
          color: #2c1725;
          background-color: #c6a8a8;
          transition: 0.4s;
        }
        .daytwo {
          background-color: #241a27;
          border-radius: 20px;
        }
        .daythree:hover {
          color: #2c1725;
          background-color: #c6a8a8;
          transition: 0.4s;
        }
        .daythree {
          background-color: #241a27;
          border-radius: 20px;
        }
        .dayfour:hover {
          color: #2c1725;
          background-color: #c6a8a8;
          transition: 0.4s;
        }
        .dayfour {
          background-color: #241a27;
          border-radius: 20px;
        }
      }
    }
    .place_items {
      text-align: center;
      padding: 40px;

      .place_item {
        background: #fdc830; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to top,
          #f37335,
          #fdc830
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to top,
          #f37335,
          #fdc830
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        width: 80%;
        height: 40px;
      }
    }
  }
}
@media (min-width: 1024px) {
  .container_future {
    width: 500px;
    height: 500px;
    background: #2c1725;
    border-radius: 0 10% 10% 0;
    .info_current {
      padding-left: 40px;
      padding-top: 20px;
      color: #c6a8a8;
      font-weight: 700;
      .precipitation span:nth-child(2) {
        float: right;
        padding-right: 60px;
      }
      .humidity span:nth-child(2) {
        float: right;
        padding-right: 60px;
      }
      .wind span:nth-child(2) {
        float: right;
        padding-right: 60px;
      }
    }
    .forecast_weather {
      margin: 20px 40px 0px 40px;
      height: 250px;
      .forecast_items {
        color: #f18a45;
        background-color: #241a27;
        height: 100%;
        text-align: center;
        font-size: 30px;
        .dayone:hover {
          color: #2c1725;
          background-color: #c6a8a8;
          transition: 0.4s;
        }
        .dayone {
          background-color: #241a27;
          border-radius: 20px;
        }
        .daytwo:hover {
          color: #2c1725;
          background-color: #c6a8a8;
          transition: 0.4s;
        }
        .daytwo {
          background-color: #241a27;
          border-radius: 20px;
        }
        .daythree:hover {
          color: #2c1725;
          background-color: #c6a8a8;
          transition: 0.4s;
        }
        .daythree {
          background-color: #241a27;
          border-radius: 20px;
        }
        .dayfour:hover {
          color: #2c1725;
          background-color: #c6a8a8;
          transition: 0.4s;
        }
        .dayfour {
          background-color: #241a27;
          border-radius: 20px;
        }
      }
    }
    .place_items {
      text-align: center;
      padding: 40px;
      .place_item {
        background: #fdc830; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to top,
          #f37335,
          #fdc830
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to top,
          #f37335,
          #fdc830
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        width: 80%;
        height: 40px;
      }
    }
  }
}
</style>
