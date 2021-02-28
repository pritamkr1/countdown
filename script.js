var days = document.querySelector('.days');
var hours = document.querySelector('.hour');
var min = document.querySelector('.min');
var sec = document.querySelector('.sec');
var newYear = '1 Jan 2022';

function showCount(){
    const newYearDate = new Date(newYear);
    var currentDate = new Date();
    const totalSecond = (newYearDate - currentDate) / 1000;
    
    const getDays = Math.floor(totalSecond / 3600 / 24);
    const getHour = Math.floor(totalSecond / 3600 ) % 24;
    const getMinitue = Math.floor(totalSecond / 60) % 60;
    const getSecond = Math.floor(totalSecond % 60);


    days.innerHTML = getDays;
    hours.innerHTML = timeFormate(getHour);
    min.innerHTML = timeFormate(getMinitue);
    sec.innerHTML = timeFormate(getSecond);


    //call back function

    function timeFormate(time){
        return time < 10 ? ` 0${time}` : time;
    }

}

showCount();
setInterval(showCount, 1000 )
