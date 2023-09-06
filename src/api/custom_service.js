export default {
  // 获取用户详情
  getUserProfile: (userId) => {
    // 根据用户 id 获取用户信息，包括昵称，手机号，头像等

    if (userId === 'ligoudan') {
      return Promise.resolve({
        id: 'ligoudan',
        name: 'ligoudan',
        displayName: '李狗蛋',
        portraitUri: 'https://i0.hdslb.com/bfs/face/cf988f462b3e50d0b6e55c81807f6a956f9a8e0f.jpg@150w_150h.jpg',
      })
    }
    if (userId === 'wanghuahua') {
      return Promise.resolve({
        id: 'ligoudan',
        name: 'ligoudan',
        displayName: '王花花',
        portraitUri: 'https://ts1.cn.mm.bing.net/th/id/R-C.716f7061537a503bcbf4ede0400763aa?rik=vb5Zkv1GEVxkyQ&riu=http%3a%2f%2fwww.mianfeiwendang.com%2fpic%2fa46cff06d2c147ef648ebdc1%2f1-768-png_6_0_0_135_117_462_378_892.979_1262.879-1024-0-0-1024.jpg&ehk=RzJLMOkBbG5uF9%2bVak%2bl8fR6nnFBn0p84%2fKV8FqNQUU%3d&risl=&pid=ImgRaw&r=0',
      })
    }
  },

  // 获取会话详情
  // (会话 targetId 和会话类型 conversationType ) - 包括头像，会话(单聊和群聊)名称，群组头像
  getConversationProfile: (conversations) => {
    const promises = [];
    conversations.forEach((conversation) => {
      let param = {
        ...conversation,
        name: conversation.targetId,
        portraitUri: 'https://i0.hdslb.com/bfs/face/cf988f462b3e50d0b6e55c81807f6a956f9a8e0f.jpg@150w_150h.jpg',
      }
      if(conversation.conversationType == 3){
        param.memberCount = 10;// 客户应用服务器返回群组内成员数量。
      }
      promises.push(
        Promise.resolve(param)
      );
    });
    return Promise.all(promises);
  },

  // 获取群组详情
  getGroupMembers: (conversation) => {
    // 根据会话获取群成员信息，包括昵称，头像等
    // 测试数据
    return Promise.resolve([
      {
        id: `【群组】用户 id`,
        groupNickname: `【群组】昵称`,
        name: `【群组】名称`,
        portraitUri: 'https://i0.hdslb.com/bfs/face/cf988f462b3e50d0b6e55c81807f6a956f9a8e0f.jpg@150w_150h.jpg',
      },
    ]);
  },
};
