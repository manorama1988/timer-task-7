
/* const timeout = setTimeout(counter, 1000);
console.log("hello");
//clearTimeout(timeout);
function bye(){
    console.log("bye");
}
 */

 //var intReset = clearTimeout(intId);

 let timeHour = 00;
 let timeMinut = 00;
 let timeSecond = 00;
 let count = 0;


 let newHours = 0;
let newMinutes = 0;
let newSeconds = 0 ;
;
  // select the elements


  let countdownDisplay = document.querySelector('.countdown_timer');
  let startBtn = document.querySelector('.btn-start');
  let resetBtn  = document.querySelector('.btn-reset'); ;

  startBtn.addEventListener('click', ()=>{
      if(count === 0){
          count = setInterval(()=> {
              if(timeSecond >= 60){
                  timeSecond = 0;
                  timeMinut++;
              }else{
                  timeSecond++;
              }
              if(timeMinut >= 60){
                  timeMinut = 0;
                  timeHour++;
              }
              newSeconds = timeSecond;
              newMinutes = timeMinut;
              newHours   = timeHour;

              if(timeSecond<10){
                  newSeconds = '0'+ timeSecond;
              }
              if(timeMinut<10){
                newMinutes = '0'+ timeMinut;
            }
            if(timeHour<10){
                newHours = '0'+ timeHour;
            }
            countdownDisplay.innerHTML=`${newHours}:${newMinutes}:${newSeconds}`;
          }, 1000)

          startBtn.innerHTML = 'STOP';
      }
      else{
        
            startBtn.innerHTML="START";
            clearInterval(count);
            count=0;
        
      }
  })

  
resetBtn.addEventListener('click',()=>{

    window.clearInterval(count);
     timeSecond = 00;
     timeMinut = 00;
     timeHour = 00;
    countdownDisplay.innerHTML = "00:00:00";
    startBtn.innerHTML = "START";
    count = 0 ;



})
