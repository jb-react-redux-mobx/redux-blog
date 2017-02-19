import React,{ Component,PropTypes } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPost,deletePost } from '../actions/index';
import { Link } from 'react-router'

class PostsShow extends Component {

    static contextTypes = {
        router: PropTypes.object
    }


    componentWillMount () {
        
        this.props.getPost(this.props.params.id);
    }

    onDelete (){
        this.props.deletePost(this.props.params.id).then(
            () => {
                this.context.router.push("/");
            }
        );
    }

    render () {


        // THIS IS HOW YOU HANDLE null PROPs
        if(!this.props.post){
            return <div>waiting</div>
        }
        
        const { id,title,categories,content } = this.props.post;

        return (
            <div>
                <button onClick={this.onDelete.bind(this)} className="btn btn-danger pull-xs-right">Delete this</button>
                <Link to="/" className="btn btn-warning">back to index</Link>
                <h1>{title}</h1>
                <h4>categories : {categories}</h4>
                <div>{content}</div>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        post: state.posts.post
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getPost,deletePost },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PostsShow);