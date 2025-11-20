import Card from 'react-bootstrap/Card';
import { Component } from 'react';

// const SingleBook = function (props) {
//   return (
//     <Card>
//       <Card.Img variant="top" src={props.img} />
//       <Card.Body>
//         <Card.Title>{props.title}</Card.Title>
//       </Card.Body>
//     </Card>
//   );
// };

// export default SingleBook;

class SingleBook extends Component {
  state = {
    selected: false
  };

  render() {
    return (
      <Card
        onClick={() => this.setState({ selected: !this.state.selected })}
        className={this.state.selected ? 'border border-1 border-primary' : ''}
      >
        <Card.Img variant="top" src={this.props.book.img} />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
