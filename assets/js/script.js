// Todays date and time will be displayed here//
   var todaysFullDate = moment().format('MMMM Do YYYY, h:mm:ss a');
   $("#currentDay").html(todaysFullDate);

//container, row, columns and buttons functionality//

$(document).ready(function(){

   $(".save-btn").on("click", function() {
      var taskContent =$(this).siblings(".contentbox").val();

      localStorage.saveT
   
   })
   
   const now = new Date();
   const hours = now.getHours();
   const timeTextEl =document.querySelector(".hour")

   let bgColor;
   if(hours === timeTextEl)
      bgColor = "green";
   else if(hours > timeTextEl)
      bgColor = "red";
   else if(hours < timeTextEl)
      bgColor = "blue";

      bgColor.innerHtml = now.toDateString();
      timeTextEl.style.bgColor = bgColor;


   


})












  