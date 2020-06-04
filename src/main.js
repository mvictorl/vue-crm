import Vue from "vue";
import Vuelidate from "vuelidate";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

import dateFilter from "@/filters/date.filter";
import messagePlugin from "@/utils/message.plugin";

import "materialize-css/dist/js/materialize.min";

Vue.config.productionTip = false;

Vue.use(Vuelidate);
Vue.use(messagePlugin);

Vue.filter("dateFilter", dateFilter);

// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCPC7r3p7xZiRvB-flankrRMQHiqTtHTLs",
  authDomain: "mvl-vue-crm.firebaseapp.com",
  databaseURL: "https://mvl-vue-crm.firebaseio.com",
  projectId: "mvl-vue-crm",
  storageBucket: "mvl-vue-crm.appspot.com",
  messagingSenderId: "727202270713",
  appId: "1:727202270713:web:644b7bde5948ccf4d44128"
});

let app = null;
// Инициализирует объект Vue с данными об авторизации пользователя или без них
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
