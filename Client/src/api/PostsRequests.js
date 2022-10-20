import API  from "../axios";


export const getTimelinePosts= (id)=> API.get(`/posts/${id}/timeline`);
export const likePost=(id, userId)=>API.post(`/posts/${id}/like`, {userId: userId})
export const deleteUserPost=(id)=>API.delete(`/posts/${id}`);
