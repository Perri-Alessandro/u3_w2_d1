import { Component } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

class AddComment extends Component {
  state = {
    comment: {
      rate: "1",
      comment: "",
      elementId: this.props.asin,
    },
  };

  sendComment = () =>
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiYWRiMzViMjYxNTAwMTk4YTY5NzAiLCJpYXQiOjE3MDY3OTg1MTUsImV4cCI6MTcwODAwODExNX0.hLINTXir2hji55caKKw6jHmN-AGmTh_1VyORaXMJgVA",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state.comment),
    })
      .then((response) => {
        if (response.ok) {
          alert("RECENSIONE SALVATA");
          return response.json();
        } else {
          alert("LA RECENSIONE NON è STATA SALVATA");
        }
      })
      //   SAPPIAMO GIà COSA ABBIAMO MANDATO, NON SERVE DATO DI RITORNO, BASTA SAPERE CHE LA RISPSOTA è OK
      .catch((err) => {
        console.log("POST, ERRORE NELLA COMUNICAZIONE CON IL SERVER");
      });

  render() {
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(this.state.comment);
          this.sendComment();
        }}
      >
        <Form.Label className="my-2">
          Lascia qui sotto una recensione ed un voto
        </Form.Label>
        {/* Input qua sotto*/}
        <Form.Control
          className="border-secondary rounded-3"
          value={this.state.comment.comment}
          onChange={(e) =>
            this.setState({
              comment: {
                ...this.state.comment,
                comment: e.target.value,
              },
            })
          }
        />

        <Form.Select
          className="mt-1 border-secondary rounded-3"
          value={this.state.comment.rate}
          onChange={(e) =>
            this.setState({
              comment: {
                ...this.state.comment,
                rate: e.target.value,
              },
            })
          }
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Form.Select>
        <Button
          className="rounded-4 mt-3 border-warning border-2"
          type="submit"
        >
          INVIA RECENSIONE
        </Button>
      </Form>
    );
  }
}
export default AddComment;
