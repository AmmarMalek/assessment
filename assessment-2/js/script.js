    // for date
    var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var monthName = ["Jan","Feb","march","April","may","june","july","Aug","Sep","Oct","Nov","Dec"];

    var obj = new Date();
    var day = weekday[obj.getDay()];
    var month = monthName[obj.getMonth()];
    var date = obj.getDate();
    var year = obj.getFullYear();


    var fullDate = day +", "+ month + " " + date +", "+ year 

    document.getElementById("date").innerHTML = fullDate;

    // for time
    var obj2 = new Date();
    var hours = obj2.getHours();
    var minutes = obj2.getMinutes();
    var seconds = obj2.getSeconds();
    
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    hours = hours < 10 ? '0'+hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    seconds = seconds < 10 ? '0'+seconds : seconds;

    var fullTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;

    document.getElementById("time").innerHTML = fullTime;