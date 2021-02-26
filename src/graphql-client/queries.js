import {gql} from '@apollo/client'

const getShoes = gql`
    query getShoesQuery{
        shoes {
            id
            name
            price
            size
            color
            rate
            description
            image
        }
    }

`
const getOneShoe = gql`
    query getOneShoeQuery($id:ID!){
        shoe(id:$id) {
            id
            name
            price
            size
            color
            rate
            description
            image
            brandId{
                id
                name
            }
        }
    }
`

export {getShoes,getOneShoe}
