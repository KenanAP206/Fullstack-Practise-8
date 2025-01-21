import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Add.css';

function Index() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
   
      const response = await axios.get('http://localhost:3000/products');
      setProducts(response.data);
  
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async (values) => {
      const response = await axios.post('http://localhost:3000/products', values);
      console.log('Success:', response.data);
      fetchProducts(); 
  
  };

  const handleDelete = async (id) => {
    
      await axios.delete(`http://localhost:3000/products/${id}`);
      fetchProducts(); 

  };


  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Product name is required'),
    price: Yup.number()
      .required('Price is required')
      .positive('Price must be positive')
      .integer('Price must be an integer'),
    image: Yup.string()
      .url('Must be a valid URL')
      .required('Image URL is required'),
    desc: Yup.string()
      .required('Description is required'),
  });

  return (
    <section id='add'>
         <div className="container">
      <h1>Add Product</h1>
      <Formik
        initialValues={{ name: '', price: '', image: '', desc: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form">
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <Field id="name" name="name" placeholder="Product name" />
            <ErrorMessage name="name" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <Field id="price" name="price" placeholder="Price" type="number" />
            <ErrorMessage name="price" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image URL</label>
            <Field id="image" name="image" placeholder="Image URL" />
            <ErrorMessage name="image" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="desc">Description</label>
            <Field id="desc" name="desc" placeholder="Description" />
            <ErrorMessage name="desc" component="div" className="error" />
          </div>
          <button type="submit" className="submit-button">Add</button>
        </Form>
      </Formik>
      <h2>Products</h2>
      <table className="product-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.desc}</td>
              <td>
                <button onClick={() => handleDelete(product._id)} className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </section>
  );
}

export default Index;

