import React from 'react';
import { Input, Button, Card, Container, Col, Row } from 'reactstrap';

export default function Movies(props) {
  return (
    <>
      <Container>
        {props.like.map(item => (
          <Card style={{ padding: '20px' }}  >
            <Row>
              <Col md='9' xs='7'>
                <h4>{item.Title}
                </h4>
                <h5>Year: {item.Year}</h5>
                <h5>Rating: {item.Rated}</h5>
                <h5>Runtime: {item.Runtime}</h5>
                <h5>Genre: {item.Genre}</h5>
                <h5>Director: {item.Director}</h5>
                <h5>Creator: {item.Writer}</h5>
              </Col>
              <Col>
                {item.Poster && (<img src={item.Poster} width='150' height='225' />)}
              </Col>
            </Row>
          </Card>
        )
        )}
      </Container>
    </>
  )
}