<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'

function updateConversation() {
  console.log('updateConversation')
}
function tapConversation() {
  console.log('tapConversation')
}
function deleteConversation() {
  console.log('deleteConversation')
}

function tapMessage() {
  console.log('tapMessage')
}
</script>

<template>
  <div class="chat-page-con">
    <div class="wrapper-left">
      <conversation-list
        class="conversation-list"
        @updateConversation="updateConversation"
        @tapConversation="tapConversation"
        @deleteConversation="deleteConversation"
        base-size="10px"
      />
    </div>
    <div class="wrapper-right">
      <div class="chat-top">
        <message-list class="message-list" @tapMessage="tapMessage" base-size="10px" />
      </div>
      <div class="chat-bottom">
        <message-editor class="message-editor" base-size="10px" />
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.chat-page-con {
  flex: 1;
  display: flex;
  height: 100%;
  .conversation-list, .message-list, .message-editor {
    box-sizing: content-box;
  }
  .wrapper-left {
    width: 300px;
    height: 100%;
  }
  .wrapper-right {
    flex: 1;
    display: flex;
    flex-flow: column nowrap;
    .chat-top {
      width: 100%;
      height: calc(100% - 220px);
    }
    .chat-bottom {
      width: 100%;
      height: 220px;
    }
  }
}
</style>
