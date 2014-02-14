var todoData =[
{
  description: 'Shower',
  done: false,
  id: _.uniqueId(),
},
{
  description: 'Drink Coffee',
  done: false,
  id: _.uniqueId(),
},
{
  description: 'Eat Breakfast',
  done: false,
  id: _.uniqueId(),
},
{
  description: 'Go to town',
  done: false,
  id: _.uniqueId(),
},
{
  description: 'Do WORK!!',
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
{
  description: 'Eat Dinner',
  done: false,
  id: _.uniqueId(),
},
{
  description: 'Brush teeth',
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

// count function that gets called through out the app
  updateCount()

  function updateCount(){
    var allCount = todoData.length
    var activeCount = _.where(todoData, {done: false}).length
    var completedCount = _.where(todoData, {done: true}).length

    $('.js-all-badge').empty().html(allCount)
    $('.js-active-badge').empty().html(activeCount)
    $('.js-completed-badge').empty().html(completedCount)
  }

// click events
///////////////

// add a todo function
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

    $('.js-todo-input').val('')

    updateCount()

  });

// this removes the item from the array.
  $('.js-row').on('click','.remove', function(){
  	var parentId = $(this).parent().parent().attr('id').split('-')[1];
  	
  	todoData = _.reject(todoData, function(item, index){ 
      return item.id == parentId;
    })

    $(this).parent().parent().remove();
    updateCount()
  });

  $('.js-row').on('click','.completed', function(){
  	// this marks an item as completed the array.
  	var parentId = $(this).parent().parent().attr('id').split('-')[1];
    var newClass

    var todo = _.findWhere(todoData, {id: parentId})
    todo.done = !todo.done

    newClass = todo.done

    console.log(newClass)

    $(this).parent().parent().removeClass('false','true')
    $(this).parent().parent().addClass(newClass.toString())
    updateCount()
  });

/////////////////////////////
// THIS IS THE EDIT FUNCTION
  $('.js-row').on('dblclick','.description', function(){
      $(this).siblings('.js-edit-input').show();
      $(this).siblings().children('.js-edit').focus();
  });
  
  // this hides edit and impacts the array as well as the div with the correct edit
  $('.js-row').on('blur','.js-edit', function(){
      var parentId = $(this).parent().parent().attr('id').split('-')[1];
      var editInput = $(this).val()

      _.each(todoData, function(item, index){ 
        if (item.id === parentId) {
          item.description = editInput;
        };
      });

      $(this).parent().siblings('.description').empty().html(editInput)
      
      $(this).parent('.js-edit-input').hide();
  });
// THIS IS THE END OF THE EDIT FUNCTION
/////////////////////////////


  $('.folder-list').on('click','.js-all-todos', function(){
  	console.log('hey there')
  	$('.note-item').remove();

  	_.each(todoData, function(item, index){
      $('.js-todo-list').prepend(todoTemplate(item))
    });
    updateCount()
  });
 
	$('.folder-list').on('click','.js-active-todos', function(){
		console.log('hey there')
		
		$('.note-item').remove();

		var activeTodoData = _.where(todoData,{done: false})

		_.each(activeTodoData, function(item, index){
	    $('.js-todo-list').prepend(todoTemplate(item))
    });
    updateCount()
	});

	$('.folder-list').on('click','.js-completed-todos', function(){
		
		$('.note-item').remove();
		
		var completedTodoData = _.where(todoData,{done: true})
		console.log(completedTodoData)

		_.each(completedTodoData, function(item, index){
	    $('.js-todo-list').prepend(todoTemplate(item))
    });
    updateCount()
	});
})



