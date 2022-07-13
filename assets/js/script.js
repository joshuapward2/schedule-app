// Todays date and time will be displayed here//
   var todaysFullDate = moment().format('MMMM Do YYYY, h:mm:ss a');
   $("#currentDay").html(todaysFullDate);

//container, row, columns and buttons functionality//

$(document).ready(function(){

   $(".saveBtn").on("click", function() {
      console.log($(this))
      // var boxContent = $(this).siblings(".contentbox").val;
      var timeSlot = $(this).parent().attr("id");
    
      
   

      localStorage.setItem(JSON.stringify(timeSlot, boxContent));
   
   })
   var currentTime = moment().hour();
   var currentBlock = $(".col-md-1 hour")
   var textAreaEl = $(".col-md-10 contentbox")


   function timelooper(){

         
     $(".contentbox").each(function(){}) 


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
timelooper()
})

      











  