
var fakeModel = {
	description: 'feed the dog',
	done: false,
	id: _.uniqueId('id')
}

var fakeModeltwo = {
	description: 'feed the dog',
	done: false,
	id: _.uniqueId('id')
}

var fakeModelthree = {
	description: 'feed the dog',
	done: false,
	id: _.uniqueId('id')
}
var Todo = Backbone.Model.extend();

var TodoView = Backbone.View.extend({

	className: 'note-item',

	renderTemplate: _.template($('.todo-template').text()),

	events: {
		"click .js-completed": "toggleDone",
		"click .js-remove": "toggleRemove"
		// need to add this function in there
		// edit button
	},

	initialize: function(){
		console.log('hey friends');
		$('.todo-list').prepend(this.el);
		this.render();

		this.listenTo(this.model,'change', this.render)
	},

	render: function(){
		this.$el.html(this.renderTemplate(this.model.attributes));
		// make sure I get that this.model is already set up for me
			// this.$el refers only the the instance that will be created
	},

	toggleDone: function(){
		this.model.set('done', !this.model.get('done'))
	},

	toggleRemove: function(){
		this.remove()
	}

});

var modelInstance = new Todo(fakeModel)
var view = new TodoView({model: modelInstance})

var modelInstancetwo = new Todo(fakeModeltwo)
var viewtwo = new TodoView({model: modelInstancetwo})

var modelInstancethree = new Todo(fakeModelthree)
var viewthree = new TodoView({model: modelInstancethree})

