import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useCart } from 'react-use-cart';

const ProductCard = (props) => {
    let {image,price,title}= props.data
    const {addItem}= useCart()

    const addToCart = () =>{
        addItem(props.data);
    }
  return (
    <Card style={{ width: '18rem', height:'auto'}}
    className={`text-center p-0 overflow-hidden shadow mx-auto mb-4`}
    >
        <div style={{background:'white', height:'15rem', overflow:'hidden', display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div>
      <Card.Img variant="top" src={image} />
            </div>
        </div>
      <Card.Body>
        <Card.Title>{title}
        </Card.Title>
        <Card.Title>
            $.<span className='h4'>{price}</span>
        </Card.Title>
        
        
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard