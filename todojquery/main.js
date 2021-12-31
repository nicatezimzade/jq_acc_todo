$(document).ready(function () {

   $("#task-input").on("keyup", function (event) {
      if (event.keyCode == 13) {
         addTask();
      }
   });

   $("#deadline-input").on("keyup", function (event) {
      if (event.keyCode == 13) {
         addTask();
      }
   });
   $("#add-task").on("click", function () {
      addTask();
   });

   function addTask() {
      if ($("#task-input").val() == "" || $("#deadline-input").val() == "") {
         alert("You cant add an empty task.");
         return;
      }
      
      let d1 = new Date($("#deadline-input").val());
      let d2 = new Date();
      
      let newLi = $("<li>"+$("#task-input").val()+"</li>")
      $(newLi).addClass("list-group-item");
      $(newLi).on("click", function () {
         console.log($(newLi).hasClass("active"))
         if ($(newLi).hasClass("active")) {
            $(newLi).removeClass("active")
         }
         else{
            $(newLi).addClass("active")
         }
      });

      let newSpan = $("<span>"+msToMin(d1 - d2) + " minutes left."+"</span>")
      $(newSpan).addClass("badge");
      $(newSpan).addClass("rounded-pill");
      $(newSpan).addClass("bg-danger");
      
      $(newLi).append(newSpan);
      $("#task-wrapper").append(newLi);
      
      $("#task-input").val("");
      $("#deadline-input").val("");
      $("#delete-buttons").removeClass("d-none");
   }

   $("#reset").on("click", function () {
      $("#delete-buttons").addClass("d-none");
      $("#task-wrapper").html("");
   });

   $("#delete-selected").on("click", function () {
      deleteSelectedTasks();
   });

   $(document).on("keyup", function (event) {
      if (event.keyCode == 8 && event.ctrlKey == true) {
         deleteSelectedTasks();
      }
   });

   function deleteSelectedTasks() {
      $(".list-group-item.active").remove()
      if ($(".list-group-item").length == 0) {
         $("#delete-buttons").addClass("d-none");
      }
   }

   $(window).on("blur", function () {
      $("title").text("You have mutiple tasks to do!");
   });


   $(window).on("focus", function (event) {
      $("title").text("Welcome!");
   });

   function msToMin(time) {
      return Math.round(time / 60000);
   }
});