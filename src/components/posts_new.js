import React,{ Component,PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router'

class PostsNew extends Component {

    // context is another object that sits in this object of the class in the same level as that of props
    // context is automatically passed into a component unlike props. It is passed into a component by its parent
    // context is nothing but data about the parent that the parent passes to its children

    // we are using context to get the router that handles this PostsNew component to push a new route into it so it 
    // redirects to home page after clicking submit button

    // the static field object right here goes through this components properties and the next component up 
    // its chain and fetches the first 'router' component it encounters
    // The key value 'router' comes from the 
    static contextTypes = {
        router: PropTypes.object
    }

    onSubmit (props) {
        
        this.props.createPost(props).then(
            () => {
                this.context.router.push("/");
            }
        );

    }

    render () {

        const { fields: { title,categories,content }, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Create a New Post</h3>

                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>Title</label>
                    <input type="text" className="form-control" {...title} />
                    <div className="text-help">
                    {/*The title below comes from the const declaration above before the return statement */}
                        {title.touched ? title.error : ''}
                    </div>
                </div>

                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>Categories</label>
                    <input type="text" className="form-control" {...categories} />
                    <div className="text-help">
                    {/*The categories below comes from the const declaration above before the return statement */}
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>

                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>Content</label>
                    <textarea className="form-control" {...content} />
                    <div className="text-help">
                    {/*The content below comes from the const declaration above before the return statement */}
                        {content.touched ? content.error : ''}
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
}


const validate = (values) => {
    const errors = {};

    if(!values.title) {
        errors.title = 'Enter a Name';
    }

    if(!values.categories) {
        errors.categories = "Enter Categories"
    }

    if(!values.content) {
        errors.content = "Enter some Content"
    }

    return errors
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ createPost },dispatch)
}

export default reduxForm({
    form: 'PostsNew',
    fields: ['title','categories','content'],
    validate
},null,mapDispatchToProps)(PostsNew);