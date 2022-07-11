// Todays date and time will be displayed here//
   var todaysFullDate = moment().format('MMMM Do YYYY, h:mm:ss a');
   $("#currentDay").html(todaysFullDate);

//container, row, columns and buttons functionality//

$(document).ready(function(){

   $(".saveBtn").on("click", function() {
    $(".col-md-10 contentbox").val(textvalue);
   

      localStorage.setItem(".saveBtn", JSON. stringify(textvalue)
   
   );})

      
         
   const currentTime = moment().hour
   var currentBlock = document.getElementsByClassName(".col-md-1 hour")


   if(currentTime === currentBlock){
      currentBlock = $(currentBlock).addClass(".present")

   }
   
   






   
   

})












  