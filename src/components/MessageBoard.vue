<template>
  <div class="message_board">
    <div class="banner">
      <h1>Message Board</h1>
    </div>
    <div class="message_form">
      <label for="name">Name</label>
      <input v-model="inputName" type="text" id="name" />
      <label for="comment">Comment</label>
      <textarea
        v-model="inputComment"
        name="comment"
        id="comment"
        cols="30"
        rows="10"
      ></textarea>
    </div>
    <div class="send">
      <input v-on:click="handleSubmit()" type="submit" value="submit" />
      <ul class="message_area">
        <li
          v-for="(item, index) in input"
          :key="index + 'input'"
          :checked="item.done"
        >
          <label :for="'item' + index"
            >{{ item.messageName }}----------{{ item.messageTime }}</label
          >
          <label :for="'item' + index">{{ item.messageComment }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    const getItems = JSON.parse(localStorage.getItem("items")) || [];
    this.input = getItems;
  },
  data() {
    return {
      props: ["change"],
      input: [],
      inputName: "",
      inputComment: "",
      inputTime: "",
    };
  },
  mounted() {},
  methods: {
    handleSubmit: function () {
      this.messageTime();
      const nameText = this.inputName;
      const commentItem = this.inputComment;
      const timeItem = this.inputTime;
      const item = {
        messageName: nameText,
        messageComment: commentItem,
        messageTime: timeItem,
        done: false,
      };
      this.input.push(item);
      localStorage.setItem("items", JSON.stringify(this.input));
      this.inputName = "";
      this.inputComment = "";
    },
    messageTime: function () {
      const myDay = new Date();
      const nowTime = myDay.toLocaleString();
      this.inputTime = nowTime;
    },
  },
};
</script>
<style lang="scss">
@media (min-width: 1024px) {
  .message_board {
    .banner {
      h1 {
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
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
    }
    .message_form {
      margin: 0 200px 0 200px;
      label {
        display: block;
        color: #c6a8a8;
        font-size: 25px;
        text-align: center;
        padding-top: 50px;
      }
      input:nth-child(2) {
        width: 100%;
        font-size: 10px;
      }
      textarea:nth-child(4) {
        width: 100%;
        height: 200px;
        font-size: 10px;
      }
    }
    .send {
      input {
        margin: 15px 0 0 200px;
      }
      ul {
        list-style: none;
        color: #c6a8a8;
        padding-top: 30px;
        margin: 0;
        li {
          label {
            display: block;
          }
        }
      }
      .message_area {
        height: 100%;
      }
    }
  }
}
@media (min-width: 768px) {
  .message_board {
    height: 100vh;
    .banner {
      h1 {
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
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
    }
    .message_form {
      margin: 0 100px 0 100px;
      label {
        display: block;
        color: #c6a8a8;
        font-size: 25px;
        text-align: center;
        padding-top: 50px;
      }
      input:nth-child(2) {
        width: 100%;
        font-size: 10px;
      }
      textarea:nth-child(4) {
        width: 100%;
        height: 200px;
        font-size: 10px;
      }
    }
    .send {
      input {
        margin: 15px 0 0 100px;
      }
      ul {
        list-style: none;
        color: #c6a8a8;
        padding-top: 30px;
        margin: 0;
        li {
          label {
            display: block;
          }
        }
      }
      .message_area {
        height: 100%;
      }
    }
  }
}
.message_board {
  height: 100%;
  .banner {
    h1 {
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
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
  }
  .message_form {
    margin: 0 50px 0 50px;
    label {
      display: block;
      color: #c6a8a8;
      font-size: 25px;
      text-align: center;
      padding-top: 50px;
    }
    input:nth-child(2) {
      width: 100%;
      font-size: 10px;
    }
    textarea:nth-child(4) {
      width: 100%;
      height: 200px;
      font-size: 10px;
    }
  }
  .send {
    input {
      margin: 15px 0 0 50px;
    }
    ul {
      list-style: none;
      color: #c6a8a8;
      padding-top: 30px;
      padding-right: 35px;
      margin: 0;
      li {
        padding: 15px;
        margin: 10px;
        border: 2px solid #c6a8a8;
        label {
          display: block;
        }
      }
    }
    .message_area {
      height: 100%;
    }
  }
}
</style>