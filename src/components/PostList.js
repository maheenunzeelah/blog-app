import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component{
  componentDidMount(){
  this.props.fetchData();
  }  
  renderList(){
    return this.props.posts.map(post=>{
      return(
        <div key={post.id}>
          <div className="container">
          <div className="row">
           <div className="col-md-2">
            <i className="fas fa-user-circle" style={{fontSize:'70px'}}></i>
            </div>
            <div className="col-md-6">
             <div>{post.title}</div>
             <br />
             <div>{post.body}</div>
             <br />
             <UserHeader userId={post.userId} />
            </div>
           </div> 
          </div>
          <hr />
          <br /><br />
          </div>
      );
    })
    
  }
  render(){
    
      return(
          <div>
              {this.renderList()}
        </div>
      );
  }

}
const mapStateToProps=(state)=>{

  return ({posts:state.posts});
}

export default connect(mapStateToProps,{fetchData})(PostList);