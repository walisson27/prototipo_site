import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGavel,
  faBriefcase,
  faTree,
  faBan,
  faPiggyBank,
  faUniversity,
  faGlobeAmericas,
  faGlobe,
  faGem,
  faMale,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faGavel,
  faBriefcase,
  faTree,
  faBan,
  faPiggyBank,
  faUniversity,
  faGlobeAmericas,
  faGlobe,
  faGem,
  faMale
);

Vue.config.productionTip = false;

Vue.component("fa", FontAwesomeIcon);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
