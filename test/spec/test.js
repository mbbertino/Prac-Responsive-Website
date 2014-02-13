/* global describe, it */

(function () {
    'use strict';

    describe('We have todo App', function () {
        describe('when I click the add button', function () {
            it('should add a todo to a div', function () {
                var todoData =[]
                var todoTemplate = _.template($('.todo-template').text())

                $('.js-todo-input').val('apples');

                $('.js-landing-todo-add').click();

                var firstTodoText = $('.todo-list').first().children().first().children('.description').children().text();
                
                expect(firstTodoText).to.contain("apples");
            });
        });
        describe('when I click the done button', function () {
            it('should change the done value of that object to true', function () {

            });
        });
        describe('when I click the remove button', function () {
            it('should remove a todo from an array', function () {
                var todoData =[]
                $('.js-todo-input').val('beer');

                $('.js-landing-todo-add').click();

                $('.remove').click()

            });
            it('should pop up a "are you sure" box', function () {

            });
        });
    });
})();
