
import data from './data.json';
import CardComp from './card';
import './main.css';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function Main() {
  let[items, setItems]= useState(data);

      function handleSubmit(event){
       
        event.preventDefault()
        
        let SearchedValue= event.target.search.value;
        
        let filteredItems = data.filter(function(item){return item.title.toLowerCase().includes(SearchedValue.toLowerCase())})
       
        setItems(filteredItems);
    }
  return (
    <>
   <Form className="d-flex" onSubmit={handleSubmit} id='myfolder'>
    <Form.Control
    type ="search"
    placeholder="search"
    className="me-2"
    aria lable="search"
    name="search"
    
    />
    <Button variant="outline-success" type="submit">search</Button>
   </Form>
   <div id="container">
   {items.map(function(item){
        return(
          <CardComp image={item.image_url} title={item.title} description={item.description} price={item.price}/>
        )
    }
    )}
   </div>
   
   
    </>
  )
}

export default Main;