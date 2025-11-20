import { Component } from 'react';

import FilteredBooks from './FilteredBooks';
import { Container, Row } from 'react-bootstrap';

class BooksList extends Component {

  render() {
    return (
      <Container>
        <Row className="flex-column">
          <FilteredBooks />
        </Row>
      </Container>
    );
  }
}

export default BooksList;
