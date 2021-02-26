import React from 'react'
import {ApolloClient,InMemoryCache,ApolloProvider} from '@apollo/client'
import Product from './components/product'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import DetailProduct from './components/detailProduct'
import Home from './components/home'


const client = new ApolloClient({
  uri:'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

function App() {  
  

  // console.log(data)
  return (
      <ApolloProvider client={client}>
        <Router>
            <div className="App">
              <header>
                <div className='header_logo'><h3 className='text-center'>D vs H STORE</h3></div>
                <nav>
                  <ul  className='nav-list'>
                    <li className='nav_item'><a href='#'>Home</a></li>
                    <li className='nav_item'><a href='#'>Women</a></li>
                    <li className='nav_item'><a href='#'>Men</a></li>
                    <li className='nav_item'><a href='#'>News</a></li>
                    <li className='nav_item'><a href='#'>Featured</a></li>
                  </ul>
                </nav>
                {/* <i class="fas fa-shopping-cart"></i> */}
                <div className='header_cart'><i class="fas fa-shopping-cart"></i><i class="fas fa-bars"></i></div>
              </header>
              
              
            <Route path='/' exact><Product/></Route>
            <Route 
              path='/product/:id'><DetailProduct/></Route>
        
        <footer>
                <div className='wrap-footer'>
                    {/* mobile screen */}
                    <div className='footer-xs'>
                        <div className='footer-top'>
                            <span><i class="far fa-envelope"></i></span>
                            <p>Register by email</p>
                        </div>
                        <input className='form-control' placeholder='Enter email address' type='text'/>
                        <div className='footer-bottom'>
                            <span><i class="fas fa-phone"></i></span>
                            <p>Hotline : 0786811258</p>
                        </div>
                    </div>

                    {/* tablet , pc screen */}
                    <div className='footer-lg'>
                        <div className='footer-card-about'>
                            <div className='footer-card-header'>About</div>
                            <div className='about-body'>
                                <p>Out story</p>
                                <p>Awards</p>
                                <p>Our Team</p>
                                <p>Career</p>

                            </div>
                        </div>
                        <div className='footer-card-company'>
                            <div className='footer-card-header'>Company</div>
                            <div className='company-body'>
                                
                                <p>Our services</p>
                                <p>Clients</p>
                                <p>Contact</p>
                                <p>Press</p>
                            </div>
                        </div>
                        <div className='footer-card-resources'>
                            <div className='footer-card-header'>Resources</div>
                            <div className='resources-body'>
                                
                                <p>Blog</p>
                                <p>News Letter</p>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        </Router>
      </ApolloProvider>
        
  );
}

export default App;
