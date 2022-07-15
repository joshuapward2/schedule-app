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

   $("#hour0800 .contentbox").val(localStorage.getItem("hour0800"));
   $("#hour0900 .contentbox").val(localStorage.getItem("hour0900"));
   $("#hour1000 .contentbox").val(localStorage.getItem("hour1000"));
   $("#hour1100 .contentbox").val(localStorage.getItem("hour1100"));
   $("#hour1200 .contentbox").val(localStorage.getItem("hour1200"));
   $("#hour1300 .contentbox").val(localStorage.getItem("hour1300"));
   $("#hour1400 .contentbox").val(localStorage.getItem("hour1400"));
   $("#hour1500 .contentbox").val(localStorage.getItem("hour1500"));
   $("#hour1600 .contentbox").val(localStorage.getItem("hour1600"));
   $("#hour1700 .contentbox").val(localStorage.getItem("hour1700"));


         
     $(".contentbox").each(function) 


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

      











  