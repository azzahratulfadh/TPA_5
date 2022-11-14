import {
    ADD_TODO,
    DELETE_TODO,
    UPDATE_TODO,
  } from '../action/todoAction';
  
  const initialState = {
    data: [
      { nameTodo: 'Olahraga', status: 'active' },
      { nameTodo: 'Diskusi Grup', status: 'completed' },

    ],
  };
  
  function todoReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_TODO:
        return {
          data: [...state.data, action.payload],
        };
      case UPDATE_TODO:
        const { id } = req.params;
        const { name, email, password } = req.body;
        const index = users.findIndex((user) => user.id == id);
        users[index].name = name;
        users[index].email = email;
        users[index].password = password;
        return {
          data: 'test',
        };
      case DELETE_TODO:
        return {
          data: state.data.filter((item, index) => index !== action.payload),
        };
      default:
        return state;
    }
  }
  export default todoReducer;