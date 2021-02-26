import React from 'react'
import Product from './components/product'
import Detail from './components/detailProduct'


const routers = [
    {
        path:'/',
        exact:true,
        main:()=><Product/>
    },
    {
        path:'/product/:id',
        exact:false,
        main:({match,history})=><Detail history={history} match={match}/>
    }
]

export default routers;