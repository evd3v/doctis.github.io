import Vue from "vue"
import App from "./App.vue"
import router from "./router/index"
import store from "@/store"
import BootstrapVue from "bootstrap-vue"
import "./assets/styles/main.scss"
import { library } from "@fortawesome/fontawesome-svg-core"
import Vuelidate from "vuelidate"
import {
  faLongArrowAltLeft,
  faPlus,
  faChevronDown,
  faCheck
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

library.add(faLongArrowAltLeft, faPlus, faChevronDown, faCheck)
Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(Vuelidate)

new Vue({
  store,
  router: router(),
  render: h => h(App)
}).$mount("#app")
