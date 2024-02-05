import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import MyNav from "./components/MyNavComponent";
import MyFooter from "./components/MyFooterComponent";
import Welcome from "./components/WelcomeComponent";
import CardBooks from "./components/AllTheBooks";
import horror from "./data/horror.json";
import romance from "./data/romance.json";
import history from "./data/history.json";
import fantasy from "./data/fantasy.json";
import scifi from "./data/scifi.json";
import { Col, Container, Row } from "react-bootstrap";
import CommentArea from "./components/CommentArea";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="App">
      <header className="">
        <MyNav title="Magic" handleSearch={handleSearch} />
      </header>
      <main className="">
        <Welcome />
        <Container>
          <Row>
            <Col>
              <Row className="justify-content-evenly justify-content-sm-between g-4 m-1">
                <CardBooks films={horror} searchTerm={searchTerm} />
                <CardBooks films={romance} searchTerm={searchTerm} />
                <CardBooks films={history} searchTerm={searchTerm} />
                <CardBooks films={fantasy} searchTerm={searchTerm} />
                <CardBooks films={scifi} searchTerm={searchTerm} />
              </Row>
            </Col>
            <Col>
              <CommentArea />
            </Col>
          </Row>
        </Container>
      </main>
      <MyFooter
        tit1="NOI"
        tit2="I NOSTRI PRODOTTI"
        tit3="HOME"
        tit4="PROVA"
      ></MyFooter>
    </div>
  );
}

export default App;
