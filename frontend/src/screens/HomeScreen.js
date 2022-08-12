//import data from "../data";

import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import logger from "use-reducer-logger";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"; 
import Product from '../components/Product';
import { Helmet } from "react-helmet-async";

const reducer=(state, action)=>{
  switch(action.type){
    case 'FETCT_REQUEST':
      return{...state, loading:true};
    case 'FETCH_SUCCESS':
      return{...state, products:action.payload, loading:false};
    case 'FETCH_FAIL':
      return{...state, loading:false, error:action.payload};
    default:
      return state;
  }
}

function HomeScreen()
{
  const[{loading,error, products}, dispatch]=useReducer(logger(reducer),{
    products:[],
    loading:true,
    error:'',
  });
  //  const[products, setProducts]=useState([]);
    useEffect(()=>{
      const fetchData=async()=>{
        dispatch({type:'FETCH_REQUEST'});
        try{
          const result= await axios.get('/api/products');
          dispatch({type:'FETCH_SUCCESS', payload: result.data});
        }catch(err){
          dispatch({type:'FETCH_FAIL', payload:err.message});
        }
        
        //setProducts(result.data);
      };
      fetchData();
    },[]);
    return (
    <div> 
      <Helmet>
        <title>The Publishers</title>
      </Helmet>
      <div className="gif-parent">
      <iframe className="gif" src="https://giphy.com/embed/DMMeqg6leGtES5ZqOm" width="100%" height="100%"  frameBorder="0"></iframe>
      </div>
    <h1 className='books'>Featured Books</h1>
    <ul className="products">
    {loading? (
    <div>Loading..</div>
    ): error? (
      <div>{error}</div>
    ) : (
    <Row>
    {products.map(product=>(
      <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">
      <Product product={product}></Product>
    </Col>
     ))}
     </Row>
)}
    </ul>
    </div>);
    }

export default HomeScreen;