import { useState } from 'react'

import './App.css'
import products from './assets/products'
import Form from './assets/components/Form'
function App() {
 const[productList, setProductList]=useState(products)
  const addProduct = (newProduct)=>{
    setProductList([...productList, newProduct])
  }
  return (
    <>
      <h1>
        Lista della spesa
        <img src="public/img/download.jpg" alt="carrello" />
      </h1>
      <ul>
        {productList.map((product, i)=>(
          <li key={i}>{product}</li>
        ))}
      </ul>
      <Form addProduct={addProduct}></Form>
    </>
  )
}

export default App
