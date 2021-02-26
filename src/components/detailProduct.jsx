import React from 'react';
import { useParams } from 'react-router';
import {useQuery} from '@apollo/client'
import {getOneShoe} from '../graphql-client/queries'


function DetailProduct() {
    const {id} = useParams(); // ID Shoe
    const {loading,error,data} = useQuery(getOneShoe,
        {
            variables:{
                id:id
            }
        }
    );
    
    const shoe = !loading && !error ? data.shoe : null;

    if(loading){
        return(
            <div class="spinner-border" style={{margin:'260px'}} role="status">
                <span class="visually-hidden"></span>
            </div>
        )
    }

    if(id == null && error){
        alert(error);
    }

    // var elmProduct = shoe.map((value,idx)=>{
    //     return  
    // })

    return (
        <>
            <main>
                <div className='wrapper-detail'>
                
                    <div className='product-detail'>
                        <div className='product-content'>
                            <img src={shoe.image}/>
                            <span><i class="far fa-heart"></i></span>
                        </div>
                        <div className='product-info'>
                            <h1>{shoe.name}</h1>
                            <h3>Giá : {shoe.price} đ</h3>
                            <p>Description : {shoe.description}</p>
                            <p>Size : {shoe.size}</p>
                            <p>Color : {shoe.color}</p>
                            <div className='wrap-button'>
                                <button className='btn btn-primary'>Add to cart</button>
                                <button className='btn btn-dark'>Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            
        </>
    );
}

export default DetailProduct;