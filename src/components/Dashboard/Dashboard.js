import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleSearch } from '../../redux/reducer';
import vid from './running.mov';

class Dashboard extends Component {
    // handleGetPosts(MyPosts, search) {
            
    // }
    
    render() { 
        let { handleSearch, search, myPosts } = this.props;


        return ( 
            <div>
                <button className="right">right</button>
                <form>
                    <input className="bg" onChange={(e) => handleSearch(e.target.value)} type='text' placeholder='Search...' />
                    <input onChange={(e) => handleSearch(e.target.value)} type='text' placeholder='Search...' />
                    <input onChange={(e) => handleSearch(e.target.value)} className="focus" type='text' placeholder='Fixed' />
                    <input onChange={(e) => handleSearch(e.target.value)} disabled type='text' placeholder='' />
                    <button className="transition">Reset</button>
                    <button role='button'>Search</button>
                    <button className="animated">Animated</button>

                </form>
                My Posts
                <input type='checkbox' name='My Posts' value='My Posts' checked  />
                <p>Hello P tag</p>
                    <span>Hello Span Tag</span>
                    <ul>
                        <li>List item</li>
                    </ul>
                    <h1 id="h1Id">Hello H1 tag</h1>
                    <div className="diiiv">
                    </div>
                    <h2>Hello H2 tag</h2>
                    <article>Article</article>
                    <section>Section</section>
                    <footer>Footer</footer>
                    <img src="https://robohash.org/63.143.42.242.png" alt="What" />
                <video src={vid} autoPlay loop></video>
                {/* margin overlaps with inline */}

                <div class="grid-container">
                    <div class="grid-item">Hello</div>
                    <div class="grid-item">This</div>
                    <div class="grid-item">Is</div>  
                    <div class="grid-item">Grid</div>
                    <div class="grid-item">It's</div>
                    <div class="grid-item">A</div>  
                    <div class="grid-item">Block-level</div>
                    <div class="grid-item">Container</div>
                    <div class="grid-item">!!</div>  
                </div>
            </div>
         );
    }
}

const mapStateToProps = state => {
    let { search, myPosts } = state.auth;

    return {
        search,
        myPosts
    }
}
const mapDispatchToProps = {
    handleSearch
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);