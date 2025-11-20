import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';

class AddComment extends Component {
  state = {
    review: {
      comment: '',
      rate: 0
    }
  };

  saveData = async (event) => {
    if (event && event.preventDefault) event.preventDefault();
    const URL = 'https://striveschool.herokuapp.com/api/comments/';
    const urlId = this.props.id;

    try {
      const response = await fetch(URL + urlId, {
        method: 'POST',
        body: JSON.stringify(this.state.review),
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMGVkNzIzZTc0MDAwMTVmN2ZkYjkiLCJpYXQiOjE3NjM2NDMwOTUsImV4cCI6MTc2NDg1MjY5NX0.REy03d-jT7KnlSs2hgEzmFhxfLbWzagIFRKUqUZUpeA',
          'Content-type': 'application/json'
        }
      });
      if (response.ok) {
        alert('data saved successfully');
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <>
        <h3 className="mt-3">Add a comment</h3>
        <Form onSubmit={this.saveData}>
          <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
            <Form.Control type="number" placeholder="Rate number" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Insert your comment here"
            />
            <Button type="submit">Publish</Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default AddComment;
