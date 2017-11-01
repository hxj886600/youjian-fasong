
var nodemailer = require('nodemailer');  
var transporter = nodemailer.createTransport({  
  service: 'qq',  
  auth: {  
    user: '124------37@qq.com',  
    pass: 'kldj------hdbb' //授权码,通过QQ获取  
  
  }  
  });  
  //741205360
  var mailOptions = {  
    from: '1240----7@qq.com', // 发送者  
    to: '74120---@qq.com,wj---p@163.com', // 接受者,可以同时发送多个,以逗号隔开  
    subject: 'nodemailer2.5.0邮件发送', // 标题  
    //text: 'Hello world', // 文本

    html: `<h2>nodemailer基本使用:vc</h2><h3>  
    <a href="https://github.com/hxj886600/youjian-fasong">  github </a>
  </h3>
  <img src='http://img1.imgtn.bdimg.com/it/u=454262349,220003234&fm=27&gp=0.jpg'>
  `   ,
  attachments    : 
  [
      {
          filename: 'img1.png',            // 改成你的附件名
          path: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509256985846&di=f932cfad96ae8abf9e91e834139953c6&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2014%2F289%2F01%2FIGS09651F94M.jpg',  // 改成你的附件路径
          cid : '00000001'                 // cid可被邮件使用
      }
      
  ]
  };  
 
  
  transporter.sendMail(mailOptions, function (err, info) {  
    if (err) {  
      console.log(err);  
      return;  
    }  
  
    console.log('发送成功');  
  }); 
