import Vue from "vue";
import Vuex from "vuex";

import siteSettings from "./site-settings";

Vue.use(Vuex);

export default function() {
  const Store = new Vuex.Store({
    modules: {
      siteSettings
    }
  });

  return Store;
}
