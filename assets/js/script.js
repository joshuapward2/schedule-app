// Todays date and time will be displayed here//
   var todaysFullDate = moment().format('MMMM Do YYYY, h:mm:ss a');
   $("#currentDay").html(todaysFullDate);

//container, row, columns and buttons functionality//

$(document).ready(function(){

   $(".saveBtn").on("click", function() {

      var boxContent = $(this).siblings(".contentbox").val;
      var timeSlot = $(this).parent().attr("id");
    
      
   

      localStorage.setItem(timeSlot, boxContent);
   
   })

   function timelooper(){

      

      
         
   var currentTime = moment().hour
   var currentBlock = $(".col-md-1 hour")
   var textAreaEl = $("col-md-10 contentbox")


   if(currentTime === currentBlock){
     $(textAreaEl).addClass(".present")

   }

   if(currentTime > currentBlock) {
      $(textAreaEl).addClass(".future")


   }

   if(currentTime < currentBlock) {
      $(textAreaEl).addClass(".past")
   }


}
   timelooper();

   

})












  