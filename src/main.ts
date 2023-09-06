import { createApp, h } from 'vue'
import './style.css'
import App from './App.vue'
import './samples/node-api'

// 融云
import * as RongIMLib from '@rongcloud/imlib-next'
import { defineCustomElements, imkit } from '@rongcloud/imkit'

defineCustomElements()

const APPKEY = "bmdehs6pb20ns";
const TOKEN = "OrYu7mNIbOunoASpfIccPFST5hKwaLiVunBTPcuiu4s=@i2zy.cn.rongnav.com;i2zy.cn.rongcfg.com"; //ligoudan
window.APPKEY = APPKEY;
window.TOKEN = TOKEN;

const app = createApp({
  render: () => h(App),
  async beforeCreate() {
    // 初始化imkit
    let libOption = {appkey: APPKEY,logOutputLevel: 4}

    RongIMLib.init(libOption);
    imkit.init({
      appkey: APPKEY,
      // service: custom_service,
      libOption: libOption,
      // customIntercept: custom_conversation,
      // customMessage: custom_message,
      // customIntercept: custom_conversation,
      // customDisplayMessage: customDisplayMessage
    });

    const PersonMessage = imkit.registerMessageType('kit:person', true, true, [], false)
    const GroupMessage = imkit.registerMessageType('kit:GrpNtf', true, true, [], false)
    window.PersonMessage = PersonMessage
    window.GroupMessage = GroupMessage
  }
})

app.mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})
