const MAN_UP = "MAN_UP";
const MAN_DOWN = "MAN_DOWN";
const CHILD_UP = "CHILD_UP";
const CHILD_DOWN = "CHILD_DOWN";

const initState = {
  man: 1,
  child:0
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case MAN_UP:
      return {
        ...state,
        man: state.man + 1
      };
    case MAN_DOWN:
      return {
        ...state,
        man: state.man - 1
      };
      case CHILD_UP:
      return {
        ...state,
        child: state.child + 1
      };
      case CHILD_DOWN:
      return {
        ...state,
        child: state.child - 1
      };

    default:
      return state;
  }
};

export default reducer
