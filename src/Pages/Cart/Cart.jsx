import React from "react";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import { useCart } from "react-use-cart";
import { BsCartCheck, BsCart, BsCartX } from "react-icons/bs";

const Cart = () => {
  const {
    isEmpty,
    totalItems,
    totalUniqueItems,
    items,
    cartTotal,
    updateItem,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  return (
    <Container className="py-4 ">
      <h1 className="my-5 text-center">
        {isEmpty ? "Your Cart is Empty" : "The Cart"}
      </h1>
      <Row className="justify-content-center">
        <Table
          responsive
          className="mb-5"
          striped
          bordered
          hover
          variant="dark"
        >
          <tbody>
            {items.map((items, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div
                      style={{
                        background: "white",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "8rem",
                      }}
                    >
                      <div style={{ padding: ".5rem" }}>
                        <img
                          src={items.image}
                          style={{ width: "5rem" }}
                          alt={items.title}
                        />
                      </div>
                    </div>
                  </td>
                  <td>
                    <h6
                      style={{
                        whiteSpace: "nowrap",
                        width: "14rem",
                        overflow: "hidden",
                      }}
                    >
                      {items.title}
                    </h6>
                  </td>
                  <td>$. {items.price}</td>
                  <td>Quantity({items.quantity}) </td>
                  <td>
                    <Button
                      onClick={() =>
                        updateItemQuantity(items.id, items.quantity - 1)
                      }
                      className="ms-2"
                    >
                      -
                    </Button>
                    <Button
                      onClick={() =>
                        updateItemQuantity(items.id, items.quantity + 1)
                      }
                      className="ms-2"
                    >
                      +
                    </Button>
                    <Button
                      variant="danger"
                      onClick={() => removeItem(items.id)}
                      className="ms-2"
                    >
                      Remove Item
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {!isEmpty && (
          <Row
            style={{ position: "fixed", bottom: 0, background:'yellow' }}
            className={`justify-content-center, w-100`}
          >
            <Col className="py-2">
              {" "}
              <h4>Total Price: $. {cartTotal}</h4>
            </Col>
            <Col className="p-0" md={4}>
              <Button
                variant="danger"
                className="m-2"
                onClick={() => emptyCart()}
              >
                <BsCartX size="1.7rem" />
                Clear Cart
              </Button>
              <Button
                variant="success"
                className="m-2"
                onClick={() => updateItem()}
              >
                <BsCartCheck size="1.7rem" />
                Update Cart
              </Button>
            </Col>
          </Row>
        )}
      </Row>
    </Container>
  );
};

export default Cart;
