import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return this.props.posts.map(
            (post) => {
                return (
                    <li className="list-group-item" key={post.id}>
                        <Link to={`/posts/${post.id}`}>
                        <span className="pull-xs-right">{post.categories}</span>
                        <strong>{post.title}</strong>
                        </Link>
                    </li>
                );
            }
        );
    }

    render () {

        return (
            <div>
            <div className="text-xs-right">
                <Link to="/posts/new" className="btn btn-primary">
                    Add a Post
                </Link>
            </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }


};


const mapStateToProps = (state, ownProps) => {
    return {
        posts: state.posts.all
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchPosts },dispatch);
}



/*
Short note on bindActionCreators

bind action creators basically takes in an object where values contains action creators with keys of the same name 
and returns a similar object with same keys and values except that the value is now wrapped in dispatch function so that every 
reducer attached to the store now receives the action that is created by the action creator

see https://github.com/reactjs/redux/blob/master/src/bindActionCreators.js for source

it basically returns...

return {
        actionCreator1: () => {
            dispatch(actionCreator1)
        },
        actionCreator2: () => {
            dispatch(actionCreator2)
        },
        ...so on
    }

A small scale implementation of bindActionCreator is as follows 

const bindActionCreators2 = (actionCreators,dispatch) => {
    const mapped = {};
    for(const key in actionCreators){
        
        //check if property is not from prototype
        if (!actionCreators.hasOwnProperty(key)) continue;
        
        mapped[key] = dispatch(actionCreators[key]);

    }
    return mapped;
}


// an alternate mapDispatchToProps
const mapDispatchToProps2 = (dispatch) => {
    return bindActionCreators2({ fetchPosts },dispatch)
}


*/




export default connect(mapStateToProps,mapDispatchToProps)(PostsIndex);