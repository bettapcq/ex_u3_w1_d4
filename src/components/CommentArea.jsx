import { Component } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import CommentsList from './CommentsList';
import AddComment from './AddComment';

class CommentArea extends Component {
  state = {
    comments: [],
    loading: true,
    error: false,
    idBook: ''
  };

  getComments = () => {
    const URL = 'https://striveschool-api.herokuapp.com/api/comments/';
    const bookId = this.props.asin;

    fetch(URL + bookId, {
      headers: {
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTFmMGVkNzIzZTc0MDAwMTVmN2ZkYjkiLCJpYXQiOjE3NjM2NDMwOTUsImV4cCI6MTc2NDg1MjY5NX0.REy03d-jT7KnlSs2hgEzmFhxfLbWzagIFRKUqUZUpeA'
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw Error('errore nella chiamata: ' + res.status);
        }
      })

      .then((commentsArray) => {
        console.log(commentsArray);

        this.setState({
          comments: commentsArray,
          loading: false,
          idBook: bookId
        });
      })
      .catch((err) => {
        console.log('errore nella chiamata: ', err);
        this.setState({
          loading: false,
          error: true
        });
      });
  };

  componentDidMount() {
    this.getComments();
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center">
          <Col>
            <h3>Book Reviews</h3>
            {this.state.loading && <Spinner animation="grow" />}
          </Col>
        </Row>
        <Row>
          <Col>
            <CommentsList comments={this.state.comments}></CommentsList>
          </Col>
        </Row>
        <Row>
          <AddComment id={this.state.idBook} />
        </Row>
      </Container>
    );
  }
}

export default CommentArea;

// da aggiungere
// {
//               // short circuit: utile quando dovete MOSTRARE una cosa oppure no
//               this.state.loading && (
//                 <div className="text-center">
//                   <Spinner animation="border" variant="success" />
//                 </div>
//               )
//             }

//             {!this.state.loading && (
//               <>
//                 {this.state.error ? (
//                   <Alert variant="danger">Errore nel caricamento</Alert>
//                 ) : (
//                   <Alert variant="success">Caricamento completato!</Alert>
//                 )}
//               </>
//             )}
