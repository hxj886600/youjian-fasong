
var nodemailer = require('nodemailer');  
var transporter = nodemailer.createTransport({  
  service: 'qq',  
  auth: {  
    user: '124------37@qq.com',  
    pass: 'kldj------hdbb' //授权码,通过QQ获取  
  
  }  
  });  
  var mailOptions = {  
    from: '124----337@qq.com', // 发送者  
    to: '845---04@qq.com', // 接受者,可以同时发送多个,以逗号隔开  
    subject: 'nodemailer2.5.0邮件发送', // 标题  
    //text: 'Hello world', // 文本  
    html: `<h2>nodemailer基本使用:</h2><h3>  
    <a href="https://github.com/hxj886600/youjian-fasong">github</a></h3>`   
  };  
  
  transporter.sendMail(mailOptions, function (err, info) {  
    if (err) {  
      console.log(err);  
      return;  
    }  
  
    console.log('发送成功');  
  }); 
