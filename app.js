
function newDate(){
  let date = new Date();
  let weekDay = new Array(7);
  weekDay[0] = 'Sunday';
  weekDay[1] = 'Monday';
  weekDay[2] = 'Tuesday';
  weekDay[3] = 'Wednesday';
  weekDay[4] = 'Thursday';
  weekDay[5] = 'Friday';
  weekDay[6] = 'Saturday';

  let theWeekDay = weekDay[date.getDay()];

  let month = new Array(12);
  month[0] = 'January';
  month[1] = 'February';
  month[2] = 'March';
  month[3] = 'April';
  month[4] = 'May';
  month[5] = 'June';
  month[6] = 'July';
  month[7] = 'August';
  month[8] = 'September';
  month[9] = 'October';
  month[10] = 'November';
  month[11] = 'December';

  let theMonth = month[date.getMonth()];

  document.getElementById('date').innerHTML = `${theWeekDay} - ${theMonth} ${date.getDate()}th`;

}

newDate();

let isMilitary;
   
function newTime(){
  setInterval(function(){
    let date = new Date();
    let hours = date.getHours();
    let hourAmPm = hours >= 12 ? 'PM' : 'AM';
    let hour = date.getHours() % 12;
    if(hour == '0'){
      hour = '12';
    }
    let min = date.getMinutes();
    let sec = date.getSeconds();
 
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;
    
   if(isMilitary) {
    const button = document.getElementById('btn-1');
    button.style.outlineColor = ' rgb(230, 100, 200)';
    button.innerHTML = '24h';
    document.querySelector('.box-3').style.marginLeft = '690px';
    document.getElementById('btn-1').style.marginLeft = '20px';
    document.getElementById('time').innerHTML = `${hour} : ${min} : ${sec} ${hourAmPm}`;
   } else {
    const button = document.getElementById('btn-1');
    button.style.outlineColor = ' rgb(230, 100, 200)';
    button.innerHTML = 'AM/PM';
    document.querySelector('.box-3').style.marginLeft = '600px';
    document.getElementById('time').innerHTML = `${hours} : ${min} : ${sec}`;
   }
  },1000);
}

newTime();

const button = document.getElementById('btn-1');
button.addEventListener('click', changeFormat);

function changeFormat(){
  isMilitary = !isMilitary;
}
  

   



   

   
   

   

     
  

  

    





  
   
   
  

 
  

 
 




 



 



  
