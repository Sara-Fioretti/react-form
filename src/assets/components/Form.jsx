import { useState } from "react";

function Form({addProduct}) {
    const [newProduct, setNewProduct] = useState ("")
    const handleInputChange= (e) =>{
        setNewProduct (e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        addProduct(newProduct)
       setNewProduct ("")
    }
    return (
        <form onSubmit={handleSubmit} className="bg-success col-6 text-center rounded-2 align-self-center">
            <div className="mb-3">
                <label for="productInput" className="form-label text-white">Prodotto</label>
                <input onChange={handleInputChange} type="text" name="prodotto" className="form-control" id="productInput"/>
            </div>
            <button type="submit" className="btn btn-primary">Aggiungi prodotto</button>
        </form>
    )
}

export default Form;