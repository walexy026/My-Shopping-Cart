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

        </Row>
    </Container>
  );
};

export default Cart;
