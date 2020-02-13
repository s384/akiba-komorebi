var dow_kor = new Array("일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일");
var dow_eng = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var dow_jpn = new Array("日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日");

function tick_eng() {
    var date;
    date = new Date();

    var hh = date.getHours();
    if (hh > 12) hh -= 12;
    if (hh < 10) hh = '0' + hh;

    var mm = date.getMinutes();
    if (mm < 10) mm = '0' + mm;

    document.getElementById("time").innerHTML = hh + ' : ' + mm;
    document.getElementById("dow").innerHTML = dow_eng[date.getDay()];
}

function tick_kor() {
    var date;
    date = new Date();

    var hh = date.getHours();
    if (hh > 12) hh -= 12;
    if (hh < 10) hh = '0' + hh;

    var mm = date.getMinutes();
    if (mm < 10) mm = '0' + mm;
    
    document.getElementById("time").innerHTML = hh + '시 ' + mm + '분';
    document.getElementById("dow").innerHTML = dow_kor[date.getDay()];
}

function tick_jpn() {
    var date;
    date = new Date();

    var hh = date.getHours();
    if (hh > 12) hh -= 12;
    if (hh < 10) hh = '0' + hh;

    var mm = date.getMinutes();
    if (mm < 10) mm = '0' + mm;

    document.getElementById("time").innerHTML = hh + ' : ' + mm;
    document.getElementById("dow").innerHTML = dow_jpn[date.getDay()];
}