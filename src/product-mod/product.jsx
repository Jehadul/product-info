import React, { useEffect, useState } from 'react';
import ProductDetails from './productDetails';

const defaultProducts = [
        {
            id: '1',
            name: 'HP Probook',
            description: 'HP Probook 450',
            price: '55,000',
            category: 'Laptop',
        },
        {
            id: '2',
            name: 'Apacer AH360',
            description: 'Apacer AH360 32GB',
            price: '700',
            category: 'Pendrive',
        },
        {
            id: '3',
            name: 'Samsung',
            description: 'Samsung S20 128GB',
            price: '78,000',
            category: 'Mobile',
        },
        {
          id: '4',
          name: 'TITAN',
          description: 'TITAN NM1701QL01',
          price: '7,690',
          category: 'Watch',
        }
      ];

const Product = () => {
    const [products, setProduct] = useState(defaultProducts);

    const [currentSelectedProduct, setCurrentSelectedProduct] = useState({});
    
    useEffect(() => {
        const response = products;
        setProduct(response)
    }, [products])
  
    const clicked = (product) => {
      setCurrentSelectedProduct(product)
    }

    return (
        <>
        <h3>Product Information</h3>
        <table className="table">
          <tbody>
            <tr>
              <th>Name</th>
              <th>Price (BDT)</th>
              <th>Action</th>
            </tr>
            {products.map(product => (
              <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>
                    <button onClick ={() => clicked(product)}> View Details </button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
        {currentSelectedProduct.hasOwnProperty('id') && <ProductDetails data={currentSelectedProduct}/>}
        </>
    )
}

export default Product