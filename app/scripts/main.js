var todoData =[
{
	description: 'Go to town',
	done: false,
	id: _.uniqueId(),
},
{
	description: 'Eat lunch',
	done: false,
	id: _.uniqueId(),
},
{
	description: 'Force push to origin master',
	done: false,
	id: _.uniqueId(),
},
{
	description: 'Scratch that last one',
	done: false,
	id: _.uniqueId(),
},
]



$(document).ready(function(){
	 var todoTemplate = _.template($('.todo-template').text())

  // render preloaded data
  _.each(todoData, function(item, index){
    $('.js-todo-list').prepend(todoTemplate(item))
  });

// click events
  $('.js-row').on('click', '.add-button', function(){
  	var todoentry = $('.js-todo-input').val()

  	var todo = {
      description: todoentry,
      done: false,
      id: _.uniqueId()
    }

		todoData.push(todo);

    var renderedTodo = (todoTemplate(todo))
    $('.js-todo-list').prepend(renderedTodo)

  });

  $('.js-row').on('click','.remove', function(){
  	// this removes the item from the array.
  	var parentId = $(this).parent().parent().attr('id').split('-')[1];
  	
  	todoData = _.reject(todoData, function(item, index){ 
      return item.id == parentId;
    })

    $(this).parent().parent().remove();
  });

  $('.js-row').on('click','.completed', function(){
  	// this removes the item from the array.
  	var parentId = $(this).parent().parent().attr('id').split('-')[1];
  	
  	console.log(parentId)

  	_.each(todoData, function(item, index){ 
      if (item.id == parentId) {
      	item.done = true;
      };
    })
    $(this).parent().parent().css('background-color','#D6D6D6')
  });

///////////////////////////////////////
// This is where the problem starts....
///////////////////////////////////////

  $('.folder-list').on('click','.js-all-todos', function(){
  	console.log('hey there')
  	$('.note-item').remove();

  	_.each(todoData, function(item, index){
	    $('.js-todo-list').prepend(todoTemplate(item))
	  });

  });
 
	$('.folder-list').on('click','.js-active-todos', function(){
		console.log('hey there')
		
		$('.note-item').remove();

		var activeTodoData = _.where(todoData,{done: false})

		_.each(activeTodoData, function(item, index){
	    $('.js-todo-list').prepend(todoTemplate(item))
	  });
	});

	$('.folder-list').on('click','.js-completed-todos', function(){
		
		$('.note-item').remove();
		
		var completedTodoData = _.where(todoData,{done: true})
		console.log(completedTodoData)

		_.each(completedTodoData, function(item, index){
	    $('.js-todo-list').prepend(todoTemplate(item))
	  });
		$('.note-item').css('background-color','#D6D6D6')
	});
})



