import React ,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions';

class PostList extends Component{
  componentDidMount(){
    this.props.fetchData();
  }  
  render(){
      return(
          <div>
              PostList
        </div>
      );
  }

}

export default connect(null,{fetchData})(PostList);