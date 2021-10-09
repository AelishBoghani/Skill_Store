import React, { useEffect, useState } from "react";
import WebCourse from "../../Courses/Computer/WebCourse";
import db from "../../../firebase";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchBar from "../../header/SearchBar";
import "../Skills.css";
import Container from "react-bootstrap/Container";
function Constructionestimation() {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const filteredCourses = courses.filter((tech) =>
      tech.data.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    useEffect(() => {
      db.collection("constructionestamation").onSnapshot((snapshot) => {
        setCourses(
          snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
        );
      });
    }, []);
    return (
      <div className="web_skills">
        <SearchBar
          type="search"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <Container>
          <Row gutter={40}>
            {filteredCourses.map((tech) => (
              <Col md={12}>
                <WebCourse
                  key={tech.data.id}
                  platform={tech.data.platform}
                  text={tech.data.text}
                  label={tech.data.name}
                  link={tech.data.link}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
}

export default Constructionestimation
