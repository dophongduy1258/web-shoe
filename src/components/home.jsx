import React from 'react';

function Home(props) {
    return (
        <>
            <main>
                <div className='wrapper-detail'>
                
                    <div className='product-detail'>
                        <div className='product-content'>
                            <img src='https://static.nike.com/a/images/w_1536,c_limit/9de44154-c8c3-4f77-b47e-d992b7b96379/image.jpg'/>
                            <span><i class="far fa-heart"></i></span>
                        </div>
                        <div className='product-info'>
                            <h1>Name shoe</h1>
                            <h3>price : 120.000 d</h3>
                            <p>Description : Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</p>
                            <form className='check-size'>
                                <label className='mr-3' for="male">Size : </label>
                                <div className='form-check-inline'>
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label class="form-check-label" for="inlineRadio1">30</label>
                                </div>
                                <div className='form-check-inline'>
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label class="form-check-label" for="inlineRadio1">35</label>
                                </div>
                                <div className='form-check-inline'>
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label class="form-check-label" for="inlineRadio1">38</label>
                                </div>
                                <div className='form-check-inline'>
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label class="form-check-label" for="inlineRadio1">40</label>
                                </div>
                            </form>
                            
                            <form className='check-color'>
                                <label className='mr-3' for="male">Color : </label>
                                <div className='form-check-inline mr-5'>
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label className="form-check-label" style={{fontSize:'1rem',fontWeight:'bold',color:'red'}} for="inlineRadio1">Red</label>
                                </div>
                                <div className='form-check-inline mr-5'>
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label className="form-check-label" style={{fontSize:'1rem',fontWeight:'bold',color:'blue'}} for="inlineRadio1">Blue</label>
                                </div>
                                <div className='form-check-inline mr-5'>
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                    <label className="form-check-label" style={{fontSize:'1rem',fontWeight:'bold',color:'black'}} for="inlineRadio1">Black</label>
                                </div>
                            </form>
                            
                            <div className='wrap-button'>
                                <button className='btn btn-primary'>Add to cart</button>
                                <button className='btn btn-dark'>Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
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
        </>
    );
}

export default Home;