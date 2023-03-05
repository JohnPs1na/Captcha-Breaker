var svgCaptcha = require('svg-captcha');
const fs = require('fs')

for (let i = 0;i<4000;i++){
    var captcha = svgCaptcha.create();
    fs.writeFile(`./captchas/labels/${i}.txt`, captcha.text,(err) =>{
        if (err) throw err
    })

    fs.writeFile(`./captchas/images/${i}.txt`, captcha.data,(err) =>{
        if (err) throw err
    })
}


