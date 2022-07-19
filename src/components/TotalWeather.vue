<template>
  <div class="show">
    <div class="d-flex justify-content-center h-100">
      <div class="main d-flex">
        <!-- <h1>天氣預報</h1> -->
        <div class="container d-flex align-items-center">
          <div class="container_under d-flex">
            <div>{{ name }}</div>
            <NowWeather :api="api" :nowArea="nowArea"></NowWeather>
            <FutureWeather
              :api="api"
              :today="todaytoday"
              v-on:childEvent="childEvent"
            ></FutureWeather>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.getApi();
    this.today();
  },
  data() {
    return {
      name: "",
      howDay: "",
      yearMonthDay: "",
      howPlace: "",
      howTemperature: "",
      howWeather: "",
      icon: "",
      weatherInformation: [
        {
          message: "precipitation",
          messageData: "???",
          messageunit: "%",
        },
        {
          message: "humidity",
          messageData: "???",
          messageunit: "%",
        },
        {
          message: "wind",
          messageData: "???",
          messageunit: "km/h",
        },
      ],
      futureDays: [
        {
          messageIcon: "",
          messageWeek: "Three",
          messageTemperature: "29",
        },
        {
          messageIcon: "",
          messageWeek: "four",
          messageTemperature: "223",
        },
        {
          messageIcon: "",
          messageWeek: "five",
          messageTemperature: "12",
        },
        {
          messageIcon: "",
          messageWeek: "six",
          messageTemperature: "47",
        },
      ],
      info: null,
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
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      weekAbbreviation: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
      nowArea: "",
      api: {
        messageApi: "",
      },
      todaytoday: "",
    };
  },
  methods: {
    childEvent: function (chooseArea) {
      this.nowArea = chooseArea;
      // console.log(chooseArea);
    },
    today: function () {
      const NewToday = new Date();
      const day1 = NewToday.getDay();
      this.todaytoday = day1;
    },
    getApi: function () {
      this.axios
        .get(
          "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-093?Authorization=CWB-CEAB4C1A-D854-4B57-BB0E-0ACFB2760821&locationId=F-D0047-063"
        )
        .then((response) => {
          console.log(response);
          this.showCity(response);
        })
        .catch(function (error) {
          //請求失敗處理
          console.log(error);
        });
    },
    showCity(response) {
      const city = response.data.records.locations[0].location;
      this.api = city;
      const cites = city[7].locationName;
      this.howPlace = cites;
    },
  },
};
</script>