import { Component } from 'react';
import Form from 'react-bootstrap/Form';
import SingleBook from './SingleBook';
import { Col, Row } from 'react-bootstrap';
import horror from '../data/horror.json';

class FilteredBooks extends Component {
  state = {
    inputString: ''
  };
  render() {
    return (
      <>
        <Col>
          <Form className="d-flex mb-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={this.state.inputString}
              onChange={(e) => this.setState({ inputString: e.target.value })}
            />
          </Form>
        </Col>
        <Col>
          <Col>
            <Row>
              {horror
                .filter((b) => {
                  return b.title.toLowerCase().includes(this.state.inputString);
                })
                .map((book) => (
                  <Col key={book.asin} xs={12} md={4}>
                    <SingleBook book={book} />
                  </Col>
                ))}
            </Row>
          </Col>
        </Col>
      </>
    );
  }
}
export default FilteredBooks;
