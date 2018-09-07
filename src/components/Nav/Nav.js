import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Nav = (props) => {
//    return  props.location.pathname = '/' ? <div></div> :
return( 
        <nav>
            <Link to='/'>Logout</Link>
            <Link to='/dashboard'>Home</Link>
            <Link to='/new'>New Post</Link>
        </nav>
        
     );
}
 
export default withRouter(Nav);