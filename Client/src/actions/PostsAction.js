import * as PostsApi from "../api/PostsRequests";

export const getTimelinePosts = (id) => async (dispatch) => {
  dispatch({ type: "RETREIVING_START" });
  try {
    const { data } = await PostsApi.getTimelinePosts(id);
    dispatch({ type: "RETREIVING_SUCCESS", data: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "RETREIVING_FAIL" });
  }
};

export const deleteUserPost=((id)=>async(dispatch)=>{
  try{
    dispatch({type:"DELETE_POST",data:id})
    await PostsApi.deleteUserPost(id);
    
  }catch(error){
    console.log(error);
    dispatch({ type: "DELETE_FAIL" });
  }
  
})