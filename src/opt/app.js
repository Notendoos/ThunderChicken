"use strict";!function(){var a=0,s={init:function(){var e=document.querySelector(".solar-box");s.timer(),s.mode(),"true"==localStorage.getItem("thunder-mode")&&(document.body.classList.add("dark"),document.querySelector("#mode span").innerText="Light mode"),window.addEventListener("resize",function(t){a=e.clientWidth>window.innerWidth&&window.innerWidth/e.clientWidth}),window.onload=function(){a=e.clientWidth>window.innerWidth&&window.innerWidth/e.clientWidth}},timer:function(){var t=document.querySelector("#time"),e=t.querySelector(".clock"),n=t.querySelector(".day"),o=new Date,r=o.getHours(),c=o.getMinutes(),d=o.getDay(),a=o.getSeconds(),i=o.getMonth(),u=o.getDate();n.innerText="".concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][d]," ").concat(1==u?"1th":2==u?"2nd":3==u?"3rd":u+"th"," ").concat(["January","February","March","April","May","June","July","August","September","October","November","December"][i]),e.innerText="".concat(r<10?"0"+r:r,":").concat(c<10?"0"+c:c,".").concat(a<10?"0"+a:a),r<=6||18<=r?document.body.classList.add("night"):document.body.classList.remove("night"),s.sundial(r/23),setTimeout(s.timer,100)},mode:function(){var t=document.querySelector("#mode").querySelector("button");t.addEventListener("click",function(){document.body.classList.toggle("dark"),t.querySelector("span").textContent=document.body.classList.contains("dark")?"Light mode":"Dark mode",localStorage.setItem("thunder-mode",document.body.classList.contains("dark"))})},sundial:function(t){var e=document.querySelector(".solar-box .line path"),n=document.querySelector(".solar-box .icon"),o=Math.floor(e.getTotalLength()),r=o*(0!=a?.6*a:.8),c=(o-r)/2,d=e.getPointAtLength(c+t*r);n.style.transform="translate(".concat(Math.floor(d.x-24),"px,").concat(Math.floor(d.y-24),"px)"),n.style.opacity=1}};s.init()}();