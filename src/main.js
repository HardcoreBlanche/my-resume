import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// 创建应用实例，并将路由插件添加到应用中
const app = createApp(App);

// 使用路由
app.use(router);

// 挂载应用
app.mount("#app");
