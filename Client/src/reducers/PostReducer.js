const postReducer = (
    state = { posts: [], loading: false, error: false, uploading: false },
    action
  ) => {
    switch (action.type) {
      // belongs to PostShare.jsx
      case "UPLOAD_START":
        return { ...state, error: false, uploading: true };
      case "UPLOAD_SUCCESS":
       
        return { ...state, posts: [action.data, ...state.posts], uploading: false, errogr: false };
      case "UPLOAD_FAIL":
        return { ...state, uploading: false, error: true };
      case "DELETE_POST":
        return {...state,posts:state.posts.filter((item) => item !== action.data)}
      // belongs to Posts.jsx
      default:
        return state;
    }
  };
  
  export default postReducer;