import { createApp, h } from 'vue'
import './style.css'
import App from './App.vue'
import './samples/node-api'

// 融云
import * as RongIMLib from '@rongcloud/imlib-next'
import { CoreEvent, defineCustomElements, imkit } from '@rongcloud/imkit'
import custom_service from "@/api/custom_service";
import custom_message from "@/api/custom_message";
import custom_conversation from "@/api/custom_conversation";
import customDisplayMessage from "@/api/will_message";

defineCustomElements()

const APPKEY = "bmdehs6pb20ns";
const TOKEN = "OrYu7mNIbOunoASpfIccPFST5hKwaLiVunBTPcuiu4s=@i2zy.cn.rongnav.com;i2zy.cn.rongcfg.com"; //ligoudan
// const TOKEN = "JrknkErN9KzLd0QEZOS+z7jiN7os0H96zt62AqYgyPk=@i2zy.cn.rongnav.com;i2zy.cn.rongcfg.com"; //wanghuahua
// window.APPKEY = APPKEY;
// window.TOKEN = TOKEN;

const app = createApp({
  render: () => h(App),
  async beforeCreate() {
    // 初始化imkit
    // let libOption = {appkey: APPKEY,logOutputLevel: 4}
    let libOption = {appkey: APPKEY}

    RongIMLib.init(libOption);
    imkit.init({
      appkey: APPKEY,
      service: custom_service,
      libOption: libOption,
      // customIntercept: custom_conversation,
      // customMessage: custom_message,
      // customDisplayMessage: customDisplayMessage
    });

    const PersonMessage = imkit.registerMessageType('kit:person', true, true, [], false)
    const GroupMessage = imkit.registerMessageType('kit:GrpNtf', true, true, [], false)

    RongIMLib.connect(TOKEN).then((res) => {
      console.info('连接结果打印：', res);
      // 加载会话列表 CoreEvent 可通过 import { CoreEvent } from '@rongcloud/imkit' 获取
      imkit.emit(CoreEvent.CONVERSATION, true);
    })
  }
})


app.mount('#app').$nextTick(() => {
  postMessage({ payload: 'removeLoading' }, '*')
})
