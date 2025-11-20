import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Component } from 'react';

class AddComment extends Component {
  saveData = async () => {
    try {
      const response = await fetch(
        'https://striveschool.herokuapp.com/api/comments/',
        {
          method: 'POST',
          body: JSON.stringify(this.state.reservation),
          headers: { 'Content-type': 'application/json' }
        }
      );
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
        <Form>
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
