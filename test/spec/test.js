/* global describe, it */

(function () {
    'use strict';

    describe('We have todo App', function () {
        describe('when I click the add button', function () {
            it('should add a todo to an array', function () {
                $('.js-landing-todo-input').val('beer')

                $('.js-landing-todo-add').click()

                var firstTodoText = $('.todo-list').first().children('.description').text();
                
                expect(firstTodoText).to.contain('beer')
            });
        });
        describe('when I click the done button', function () {
            it('should change the done value of that object to true', function () {
                $('')

                expect()
            });
            it('should be added to the completed array', function () {

            });
        });
        describe('when I click the remove button', function () {
            it('should remove a todo from an array', function () {

            });
            it('should remove a todo template from the todo list div', function () {

            });
            it('should pop up a "are you sure" box', function () {

            });
        });
    });
})();
