import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import VueDisqus from 'vue-disqus'
import "@/assets/code-highlight.css"

export default function(Vue, { head }) {
  Vue.use(VueDisqus)
  Vue.component("Layout", DefaultLayout);
  head.htmlAttrs = { lang: 'pl' }
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}