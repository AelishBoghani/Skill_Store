import React, { useEffect, useState } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import db from "../../firebase";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "../header/SearchBar";


function Cards() {
  const [technology, setTechnology] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
 
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTechnologies = technology.filter((tech) =>
    tech.data.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    db.collection("technologies").onSnapshot((snapshot) => {
      setTechnology(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      );
    });
  }, []);

  return (
    <div className="cards">
      <h1>Skills you want to like explore!!</h1>
      <div className="app__header">
        <SearchBar
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
      </div>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Row gutter={40}>
              {filteredTechnologies.map((tech) => (
                <Col md={4} sm={6}>
                  <CardItem
                    key={tech.data.id}
                    src={tech.data.image}
                    text={tech.data.text}
                    label={tech.data.name}
                    path={tech.data.path}
                  />
                </Col>
              ))}
            </Row>
          </ul>
          <ul className="cards__items"></ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
