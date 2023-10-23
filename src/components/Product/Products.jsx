import React from 'react'
import Product from './Product'
function Products() {
  const Products = [
    {id:1 , title:'Product one', desc:"this is product one", price:1000},
    {id:2 , title:'Product two', desc:"this is product two", price:2000},
    {id:3 , title:'Product three', desc:"this is product three", price:3000}
  ]

  return (
    <>
      <div className="row text-center">
        {Products.map( (ele)=>{
          return <Product {...ele} key={ele.id}/>
        })}
      </div>
    </>
  )
}

export default Products