import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route,Link, Switch } from "react-router-dom";
import DetailProduct from './detailProduct'
import {useQuery} from '@apollo/client'
import {getShoes,getOneShoe} from '../graphql-client/queries'
import Home from './home'

function Product() {

    const {loading,error,data} = useQuery(getShoes)
    const [shoesData,setDataShoes] = useState([])
    
    const [selectedProduct,setSelectedProduct] = useState(null)

    useEffect(()=>{
      // check data exist
      if(data){
        setDataShoes(data.shoes)
      }
    },[data])



    var emlProduct = shoesData.map((value,idx) =>{
      return <div className='product' key={value.id}>
                <div className='product-img'>
                  <Link to={`/product/${value.id}`}><img src={value.image}/></Link>
                </div>

                <div className='product-info'>
                    <div className='product-info-top'>
                      <h2>{value.name}</h2>
                      <div className='rating'>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        <span><i class="fas fa-star"></i></span>
                        {/* <span><i class="fas fa-star-half-alt"></i></span> */}
                        <span><i class="far fa-star"></i></span>
                      </div>
                      <p>{value.price}đ</p>
                      <button className='btn btn-dark'>Add to cart</button>
                    </div>
                </div>         
              </div>        
    })


    if(loading){
        return <alert>Page is loading .....</alert>
    }

    if(error){
        return <alert>Page is crash!!!</alert>
    }


    return (
          <main>
            <div className='wrapper'>
                <div className='wrap-content'>
                  <div className='line'></div>
                  <h1>WOMEN SNEAKERS</h1>
                </div>

                <div className='product-items'>
                  {/* single product */}
                    {emlProduct}
                  {/* end single product */}
                  
                  

                </div>
            </div>
          </main>
    );
}

export default Product;