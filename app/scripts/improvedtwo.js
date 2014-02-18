var todoModel = {
	description: 'Take a shower',
	done: false,
	id: _.uniqueId('id')
};

var Todo = Backbone.Model.extend();

/////////////////////////////
// DONT FORGET COMMAS!!!!! //
/////////////////////////////

var TodoView = Backbone.View.extend({
	className: 'note-item',

	renderTemplate: _.template($('.todo-template').text()),

	events: {
		"click .js-completed": 	"toggleDone",
		"click .js-remove": 		"toggleRemove",
	},

// below here are the basic methods for creation and rendering
	initialize: function (){
		$('.todo-list').prepend(this.el);
		this.render();

		this.listenTo(this.model,'change', this.render)
	},

	render: function(){
		this.$el.html(this.renderTemplate(this.model.attributes));
	},
	// below this I have any other methods that I want to add to the views

	toggleDone: function(){
		this.model.set('done', !this.model.get('done'))
	},

	toggleRemove: function(){
		this.remove()
	}
});

var modelInstance = new Todo(todoModel)
var viewone = new TodoView({model: modelInstance})