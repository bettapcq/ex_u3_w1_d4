import Card from 'react-bootstrap/Card';
import { Component } from 'react';
import CommentArea from './CommentArea';

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
      <Card>
        <Card.Img
          variant="top"
          src={this.props.book.img}
          onClick={() => this.setState({ selected: !this.state.selected })}
          className={
            this.state.selected ? 'border border-1 border-primary' : ''
          }
        />
        <Card.Body>
          <Card.Title>{this.props.book.title}</Card.Title>
        </Card.Body>
        {this.state.selected && (
          <>
            <CommentArea asin={this.props.book.asin}></CommentArea>
          </>
        )}
      </Card>
    );
  }
}

export default SingleBook;
