var todoData=[{description:"Shower",done:!1,id:_.uniqueId()},{description:"Drink Coffee",done:!1,id:_.uniqueId()},{description:"Eat Breakfast",done:!1,id:_.uniqueId()},{description:"Go to town",done:!1,id:_.uniqueId()},{description:"Do WORK!!",done:!1,id:_.uniqueId()},{description:"Eat lunch",done:!1,id:_.uniqueId()},{description:"Force push to origin master",done:!1,id:_.uniqueId()},{description:"Scratch that last one",done:!1,id:_.uniqueId()},{description:"Eat Dinner",done:!1,id:_.uniqueId()},{description:"Brush teeth",done:!1,id:_.uniqueId()}];$(document).ready(function(){function a(){var a=todoData.length,b=_.where(todoData,{done:!1}),c=b.length,d=_.where(todoData,{done:!0}),e=d.length;$(".js-all-badge").empty().html(a),$(".js-active-badge").empty().html(c),$(".js-completed-badge").empty().html(e)}var b=_.template($(".todo-template").text());_.each(todoData,function(a){$(".js-todo-list").prepend(b(a))}),a(),$(".js-row").on("click",".add-button",function(){var c=$(".js-todo-input").val(),d={description:c,done:!1,id:_.uniqueId()};todoData.push(d);var e=b(d);$(".js-todo-list").prepend(e),a()}),$(".js-row").on("click",".remove",function(){var b=$(this).parent().parent().attr("id").split("-")[1];todoData=_.reject(todoData,function(a){return a.id==b}),$(this).parent().parent().remove(),a()}),$(".js-row").on("click",".completed",function(){var b=$(this).parent().parent().attr("id").split("-")[1];_.each(todoData,function(a){a.id==b&&(a.done=!0)}),$(this).parent().parent().css("background-color","#D6D6D6"),a()}),$(".js-row").on("dblclick",".description",function(){$(this).siblings(".js-edit-input").show(),$(this).siblings().children(".js-edit").focus()}),$(".js-row").on("blur",".js-edit",function(){var a=$(this).parent().parent().attr("id").split("-")[1],b=$(this).val();_.each(todoData,function(c){c.id===a&&(c.description=b)}),$(this).parent().siblings(".description").empty().html(b),$(this).parent(".js-edit-input").hide()}),$(".folder-list").on("click",".js-all-todos",function(){console.log("hey there"),$(".note-item").remove(),_.each(todoData,function(a){$(".js-todo-list").prepend(b(a))}),a()}),$(".folder-list").on("click",".js-active-todos",function(){console.log("hey there"),$(".note-item").remove();var c=_.where(todoData,{done:!1});_.each(c,function(a){$(".js-todo-list").prepend(b(a))}),a()}),$(".folder-list").on("click",".js-completed-todos",function(){$(".note-item").remove();var c=_.where(todoData,{done:!0});console.log(c),_.each(c,function(a){$(".js-todo-list").prepend(b(a))}),a()})});