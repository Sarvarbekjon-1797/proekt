const initialState = {
    users: [],
    filters: {
      name: '',
      username: '',
      email: '',
      phone: ''
    }
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USERS':
        return {
          ...state,
          users: action.payload
        };
      case 'SET_FILTER':
        return {
          ...state,
          filters: {
            ...state.filters,
            [action.payload.field]: action.payload.value
          }
        };
      default:
        return state;
    }
  };
  