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
{
	description: 'Scratch that last one',
	done: false,
	id: _.uniqueId(),
},
{
	description: 'Scratch that last one',
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
  _.each(todoData, function(item){
    $('.js-todo-list').prepend(todoTemplate(item))
  });
})