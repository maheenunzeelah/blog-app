import jsonPlaceholder from '../api/jsonPlaceholder';
import _ from 'lodash';

//Action Creators in Action Creators
export const fetchPostsAndUser=()=>async (dispatch,getState)=>{
  //we dispatch the inner function returned by fetchData action creator so that this inner 
  //function is going to show inside redux-thunk to get invoked with disptched
  await dispatch(fetchData());
  const userIds= _.uniq(_.map(getState().posts,'userId'));
  userIds.forEach(id=>dispatch(fetchUser(id)));
  // when inner function is called tgis wait will make sure that we wait for this api request to
  // be completed 
}

export const fetchData=()=> async dispatch=>{
    const response=await jsonPlaceholder.get('/posts');
    dispatch({type:'FETCH_DATA', payload:response.data});
};

export const fetchUser=(id)=>async dispatch=>{
   const response= await  jsonPlaceholder.get(`/users/${id}`);
     dispatch({type:'FETCH_USER', payload:response.data})
}

// One time memoization to fetch the user only once 
// export const fetchUser=(id)=> dispatch => _fetchUser(id,dispatch);

// const _fetchUser=_.memoize(async (id, dispatch)=>{
//   const response =await jsonPlaceholder.get(`/users/${id}`);
//   dispatch({type:'FETCH_USER', payload:response.data})
// })
