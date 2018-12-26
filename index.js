// 引用linebot SDK
var linebot = require('linebot');

// 用於辨識Line Channel的資訊
var bot = linebot({
  channelId: 'U49cd5fdc5c8ab4fa7ff4f88c137293de',
  channelSecret: 'be9a76da1d9fbbee14e4492f2f5e0ad1',
  channelAccessToken: '5jQODjW4ZMGytYyn0+1Wt4/O1TySKwycKkxbJazRsojquaeba8b0FlDymqEnpngtMsLU3VVlQ9sU4KDUvXYWBhuovNdVzAPIeCwVwnDiPWESHgJjSOp/TyZjsPQ/NDaJfON++TwntWIxdMpmRBxOGAdB04t89/1O/w1cDnyilFU='
});

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
  var replyMsg = `你為什麼要說 ${event.message.text} 吉？`;
  // event.message.text是使用者傳給bot的訊息
  // 使用event.reply(要回傳的訊息)方法可將訊息回傳給使用者
  console.log(event.message.text)
  if (event.message.text.includes('你幾歲') === true ) {
    replyMsg = '我今年3歲壓怎麼惹'
  }
  if (event.message.text.includes('男生') === true || event.message.text.includes('女生') ) {
    replyMsg = '我是女生'
  }
  if (event.message.text.includes('笑話') === true) {
    replyMsg = '你 40 公斤，我 60 公斤，棉花 60 公斤，鐵 60 公斤，哪一個重? '
  }

  if (event.message.text.includes('答案') === true || event.message.text.includes('不知道') === true) {
    replyMsg = "哈哈 答案是我最重，因為我心中多了一個你"
  }

  if (event.message.text.includes('不知道') === true) {
    replyMsg = '你 40 公斤，我 60 公斤，棉花 60 公斤，鐵 60 公斤，哪一個重? '
  }
  event.reply(replyMsg).then(function (data) {
    // 當訊息成功回傳後的處理
    console.log("回傳成功")
  }).catch(function (error) {
    // 當訊息回傳失敗後的處理
    console.log("回傳失敗")
  });
});

// Bot所監聽的webhook路徑與port
bot.listen('/linewebhook', 3000, function () {
    console.log('[BOT已準備就緒]');
});