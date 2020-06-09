function showdate(){
    var d = new Date();
    var year = d.getFullYear()
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var week = d.getDay();
    if(week == 0){
        week = "日";
    }else if(week == 1){
        week = "一";
    }else if(week == 2){
        week = "二";
    }else if(week == 3){
        week = "三";
    }else if(week == 4){
        week = "四";
    }else if(week == 5){
        week = "五";
    }else{
        week = "六";
    }
    var hour = d.getHours();
    if(hour < 10){
        hour = "0" + hour;
    }
    var min = d.getMinutes();
    if(min < 10){
        min = "0" + min;
    }
    var sec = d.getSeconds();
    if(sec < 10){
        sec = "0" + sec;
    }
    return year + "年" + month + "月" + date + "日 星期" + week + " " + hour + ":" + min + ":" + sec;                
}
setInterval(window.onload = function(){
    var time1 = document.getElementById("ttt");
    time1.innerHTML = showdate();
}, 1000);