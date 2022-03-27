const INITIAL_STATE = {
  userName: '',
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {

    case 'GET_POKETRAINER':
      return {
        ...state,
        userName: action.payload,
      }

    default:
      return state;
  }
}

export default reducer;