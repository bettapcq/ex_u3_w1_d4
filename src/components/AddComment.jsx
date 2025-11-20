import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';

class AddComment extends Component {
  state = {
    review: {
      comment: '',
      rate: '',
      elementId: ''
    }
  };

  saveData = async () => {
    const URL = 'https://striveschool-api.herokuapp.com/api/comments/';
    const urlId = this.props.id;
    console.log(urlId);

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
        this.setState({
          review: {
            comment: '',
            rate: '',
            elementId: ''
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { review } = this.state;
    return (
      <>
        <h3 className="mt-3">Add a comment</h3>
        <Form onSubmit={this.saveData}>
          <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
            <Form.Control
              value={review.rate}
              type="number"
              placeholder="Rate number"
              onChange={(e) =>
                this.setState({
                  review: { ...review, rate: e.target.value }
                })
              }
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              as="textarea"
              rows={3}
              value={review.comment}
              placeholder="Insert your comment here"
              onChange={(e) =>
                this.setState({
                  review: { ...review, comment: e.target.value }
                })
              }
            />
            <Button type="submit">Publish</Button>
          </Form.Group>
        </Form>
      </>
    );
  }
}

export default AddComment;
