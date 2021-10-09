import React, { useEffect, useState } from "react";
import CardItem from "../Cards/CardItem";
import db from "../../firebase";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "../header/SearchBar";

function Mechanical() {
    const [skills, setSkills] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredSkills = skills.filter((tech) =>
      tech.data.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    useEffect(() => {
      db.collection("mechanicalcourse").onSnapshot((snapshot) => {
        setSkills(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
      });
    }, []);
    return (
      <div className="cards">
        <SearchBar
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <Row gutter={40}>
                {filteredSkills.map((tech) => (
                  <Col md={4} sm={6} >
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
          </div>
        </div>
      </div>
    );
}

export default Mechanical
