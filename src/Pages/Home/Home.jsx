import React, { useState, useEffect } from "react";

import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import SearchFilter from "react-filter-search";
import ProductCard from "../../Components/ProductCard";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");

  const [productData, setProductData] = useState([]);

  async function getResponse() {
    const res = await fetch("https://fakestoreapi.com/products")
    .then((res) =>
      res.json()
    );
    setProductData(await res);
  }
  useEffect(() => {
    getResponse();
    // console.log(productData);
  }, []);

  return (
    <div style={{ height: "100%", width: "100%", background: "red", zIndex:'-100' }}>
      <Container className="py-5" style={{background: "blue", zIndex:'-100' }}>
        <Row className="justify-content-center">
          <Col
            xs={12}
            md={8}
            lg={6}
            xl={4}
            className="mb-3 mx-a to text-center"
          >
            <h1 className="text-black my-4 ">Search Product</h1>
            <InputGroup className="mb-1 ">
              <InputGroup.Text className="text-black-dark-primary ">
                <BiSearch size="2rem" />
              </InputGroup.Text>
              <FormControl
                placeholder="Username"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
            </InputGroup>
          </Col>
          <SearchFilter
            value={searchInput}
            data={productData}
            renderResults={(results) => (
              <Row className="justify-content-center">
                {results.map((items, i) => (
                  <ProductCard data={items} key={i} />
                ))}
              </Row>
            )}
          />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
