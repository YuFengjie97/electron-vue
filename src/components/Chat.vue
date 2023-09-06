<script lang="ts" setup>
import { onMounted, ref } from 'vue'

function tapConversation() {
  console.log('tapConversation');
}
function tapMessage() {
  console.log('tapMessage');
}
const conversationRef = ref<HTMLElement>()
const messageListRef = ref<HTMLElement>()
onMounted(() => {
  conversationRef.value?.addEventListener('tapConversation', tapConversation)
  messageListRef.value?.addEventListener('tapMessage', tapMessage)
})
</script>

<template>
  <div class="chat-page-con">
    <div class="wrapper-left">
      <conversation-list ref="conversationRef" base-size="10px" />
    </div>
    <div class="wrapper-right">
      <div class="chat-top">
        <message-list ref="messageListRef" base-size="10px" />
      </div>
      <div class="chat-bottom">
        <message-editor base-size="10px" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.chat-page-con {
  flex: 1;
  display: flex;
  height: 100%;
  border: 10px solid red;
  .wrapper-left {
    width: 300px;
    border: 10px solid blue;
  }
  .wrapper-right {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    .chat-top {
      flex: 1;
      width: 100%;
      border: 10px solid yellow;
    }
    .chat-bottom {
      width: 100%;
      height: 100px;
      border: 10px solid purple;
    }
  }
}
</style>
