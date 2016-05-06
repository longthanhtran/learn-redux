// Seperate concert to sub todo - one thing at a time

const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };

    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });

    default:
      state;
  }
};

// Can either use 'inline' or delegated control
const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, todo(undefined, action));
      // return Object.assign({}, state, {
      //   id: action.id,
      //   text: action.text,
      //   completed: false
      // });

    case 'TOGGLE_TODO':
      return state.map(t => todo(t, action));
      // return state.map(todo => {
      //   if (todo.id !== action.id) {
      //     return todo;
      //   }

      //   return Object.assign({}, todo, {
      //     completed: !todo.completed
      //   });
      // });

    default:
      return state;
  }
}
