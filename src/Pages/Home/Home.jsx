import React, { useState, useEffect } from "react";

import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import SearchFilter from "react-filter-search";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");

  const [productData, setProductData] = useState([]);

  async function getResponse() {
    const res = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    setProductData(await res);
  }
  useEffect(() => {
    getResponse();
    // console.log(productData);
  }, []);

  return (
    <div style={{ height: "100vh", width: "100%", background: "red" }}>
      <Container className="py-4">
        <Row className="justify-content-center">
          <Col
            xs={10}
            md={7}
            lg={6}
            xl={4}
            className="mb-3 mx-a to text-center"
          >
            <h1 className="text-black my-5 ">Search Product</h1>
            <InputGroup className="mb-3 ">
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
            renderResults={results => (
              <Row className="justify-content-center">
                {results.map((items, i) => (
                  <h1>{items.title}</h1>
  ))}
              </Row>
            )}
          />
        </Row>
        {/* <p>{searchInput}</p> */}
      </Container>
    </div>
  );
};

export default Home;
