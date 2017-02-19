import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsNew from './components/posts_new';
import PostsIndex from './components/posts_index'
import PostsShow from './components/posts_show'

/*
const Greeting = () => {
    return (
        <div>hi :)</div> 
    );
}
*/

const routes = (
    /**
     * route "/" renders the {App} component followed by IndexRoute
     * route "/greeting" renders the App component followed by {Greeting} component because its nested under the "/" Route tag
     * 
     * 
     * ALSO NOTE THE ORDERING OF THE ROUTES ARE IMPORTANT- THATS HOW THEYRE GOING TO GET MATCHED IN THE ORDER
     */
    <Route path='/' component={App}>
        <IndexRoute component={PostsIndex} />
       {/* <Route path="greeting" component={Greeting}/> */}
        <Route path='posts/new' component={PostsNew} />

        {/*Route component below parses the nav route in app and passes the id value into PostsShow component as 
            this.props.params.id*/}
        <Route path="/posts/:id" component={PostsShow}/>
    </Route>
);


export default routes;