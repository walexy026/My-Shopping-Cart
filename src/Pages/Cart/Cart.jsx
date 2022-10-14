import React from "react";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { BsCartCheck, BsCart } from "react-icons/bs";

const Cart = () => {
  const {
    isEmpty,
    totalItems,
    totalUniqueItems,
    items,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <Container className="py-4 ">
      <h1 className="my-5 text-center">
        {isEmpty? 'Your Cart is Empty': 'The Cart'}
        </h1>
        <Row className="justify-content-center">
        <Table responsive="sm" className="mb-5"  striped bordered hover variant="dark">
      <tbody>
        {
          items.map((items, index)=>{
            return(
              <tr key={index}>
              <td>
                <div style={{ background:'white',overflow:'hidden',display:'flex', justifyContent:'center', alignItems:'center', height:'8rem'}}
    >
                  <div style={{padding:'.5rem'}}>
<img src={items.image} style={{width:'5rem'}} alt={items.title} />
                  </div>
                </div>
              </td>
              <td>
                <h6 style={{whiteSpace:'nowrap', width:'14rem', overflow:'hidden'}}>{items.title}</h6>
              </td>
              <td>
                $. {items.price}
              </td>
              <td>Quantity({items.quantity}) </td>
              <td>
                <button onClick={()=>updateItemQuantity(items.id, items.quantity - 1)} className='ms-2'>-
                </button>
                <button onClick={()=>updateItemQuantity(items.id, items.quantity +1)} className='ms-2'>+
                </button>
              </td>
                {/* <h6 style={{whiteSpace:'nowrap', width:'14rem', overflow:'hidden'}}>{items.title}</h6> */}
            </tr>
            )
          })
        }
       
      </tbody>
    </Table>
        </Row>
    </Container>
  );
};

export default Cart;
