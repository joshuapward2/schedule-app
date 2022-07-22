// Todays date and time will be displayed here//

   var todaysFullDate = moment().format('MMMM Do YYYY, h:mm:ss a');
   $("#currentDay").html(todaysFullDate);

//planner text elements and their functionality//

 $(document).ready(function(){

    $(".saveBtn").on("click", function() {
  
    var boxContent = $(this).siblings(".contentbox").val();
    var timeSlot = $(this).parent().attr("id");
     
    // Saves items to local storage

       localStorage.setItem(timeSlot, boxContent);
   
 })
 
// Variables to be used 

   var currentT = moment().hour();
   var allBlocks = $(".time-block")
   var block8 = $("#8").attr('id');
   var textAreaEl = $(".contentbox")

   
  // Retrieve items from local storage

   $("#8").children('.contentbox').val(localStorage.getItem("8"));
   $("#9").children('.contentbox').val(localStorage.getItem("9"));
   $("#10").children('.contentbox').val(localStorage.getItem("10"));
   $("#11").children('.contentbox').val(localStorage.getItem("11"));
   $("#12").children('.contentbox').val(localStorage.getItem("12"));
   $("#13").children('.contentbox').val(localStorage.getItem("13"));
   $("#14").children('.contentbox').val(localStorage.getItem("14"));
   $("#15").children('.contentbox').val(localStorage.getItem("15"));
   $("#16").children('.contentbox').val(localStorage.getItem("16"));
   $("#17").children('.contentbox').val(localStorage.getItem("17"));


   //Iteration through array//

   

         for(var i=0;i < allBlocks.length;i++) {
            

    if(currentT === allBlocks[i].id){
     textAreaEl[i].classList.add("present")
    }

   if(currentT > allBlocks[i].id) {
      textAreaEl[i].classList.add("past")


   }

   if(currentT < allBlocks[i].id) {
      textAreaEl[i].classList.add("future")
    }
         }
 });