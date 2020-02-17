import jsonPlaceholder from '../api/jsonPlaceholder';
import axios from 'axios';

export const fetchData=()=> async dispatch=>{
    const response=await jsonPlaceholder.get('/posts');
    dispatch({type:'FETCH_DATA', payload:response.data});
};

export const fetchUser=(id)=> async dispatch =>{
  const response =await jsonPlaceholder.get(`/users/${id}`);
  dispatch({type:'FETCH_USER', payload:response.data})
}
