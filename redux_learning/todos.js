const deepFreeze = require('deep-freeze');
const assert = require('chai').assert;
const expect = require('chai').expect;

const todo = (state, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return {
				id: action.id,
				text: action.text,
				completed: false,
			};
		case 'TOGGLE_TODO':
			if (state.id !== action.id) {
				return state;
			}

			return {
				...state,
				completed: !state.completed,
			};
		default:
			return state;
	}
}

const todos = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [
				...state,
				todo(undefined, action),
			];
		case 'TOGGLE_TODO':
			return state.map(t => todo(t, action));
		default:
			return state;
	}
};


describe('todos', function() {
	it('should add a todo', function() {
		const stateBefore = [];
		const action = {
			type: 'ADD_TODO',
			id: 0,
			text: 'Learn Redux',
		};
		const stateAfter = [
			{
				id: 0,
				text: 'Learn Redux',
				completed: false
			}
		];

		deepFreeze(stateBefore);
		deepFreeze(action);

		assert.deepEqual(todos(stateBefore, action), stateAfter);
	});

	it('should toggle a todo', function() {
		const stateBefore = [
			{
				id: 0,
				text: 'Learn Redux',
				completed: false,
			},
			{
				id: 1,
				text: 'Go shopping',
				completed: false,
			}
		];

		const action = {
			type: 'TOGGLE_TODO',
			id: 1,
		};

		const stateAfter = [
			{
				id: 0,
				text: 'Learn Redux',
				completed: false,
			},
			{
				id: 1,
				text: 'Go shopping',
				completed: true,
			}
		];
		
		deepFreeze(stateBefore)
		deepFreeze(action);

		assert.deepEqual(todos(stateBefore, action), stateAfter);
	});
});

