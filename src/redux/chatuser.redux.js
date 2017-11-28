import axios from 'axios';

const USER_LIST = 'USER_LIST';

const initState = {
  userList: []
};

export const chatUser = (state = initState, action) => {
  switch (action.type) {
    case USER_LIST:
      return {...state, userList: action.payload};
    default:
      return state;
  }
};

const userList = data => ({type: USER_LIST, payload:data});

export const getUserList = type => {
  return async dispatch => {
    const res = await axios.get('user/list?type=' + type);
    if (res.data.code === 0) {
      dispatch(userList(res.data.data));
    }
  }
};