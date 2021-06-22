
/* const timeout = setTimeout(counter, 1000);
console.log("hello");
//clearTimeout(timeout);
function bye(){
    console.log("bye");
}
 */
// setInterval

var count = 0;
var intId = setInterval(counter, 1000);
    function counter(){
        //console.log(++count); 
        selectTimeSecond.textContent = ++count;
       // console.log(selectTimeSecond.textContent);
        
       // increase the minutes if seconds has 59
       if(selectTimeSecond.textContent >9){
           selectTimeSecond.textContent = 0; 
         //  clearTimeout(intId);
           console.log(count);
          selectTimeMinut.textContent++;
          if(selectTimeMinut.textContent> 9){
              selectTimeMinut.textContent = 0;
              selectTimeHour.textContent++;
          }
       }
 } 


  // select the elements
  let selectTimeHour = document.querySelector('.th') ;
  let selectTimeMinut = document.querySelector('.tm') ;
  let selectTimeSecond = document.querySelector('.ts') ;

  //Set the above variables as value for elements
   
  selectTimeHour.textContent = timeHour;
  selectTimeMinut.textContent = timeMinut;
  selectTimeSecond.textContent = timeSecond; 

  // Start timer 
  

