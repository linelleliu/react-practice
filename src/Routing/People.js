import React from 'react';
import { Link } from 'react-router-dom'
import {
  Container, Row, Col,
  Nav, NavItem, Card, NavLink
} from 'reactstrap';


export default function People(props) {
  const [activePill, setActivePill] = React.useState('')


  return (
    <>
      <style>
        {`
          .nav-pills .nav-link {
            border-radius: 0;
          }
        `}
      </style>
      <Container>
        <Col style={{ textAlign: 'center' }}>
          {props.items.map(i =>
            <Nav pills style={{ display: 'inline-block', border: '1px solid #007bff' }} >
              <NavItem>
                <NavLink active={activePill === i.name ? true : false} onClick={() => setActivePill(i.name)} >{i.name}</NavLink>
              </NavItem>
            </Nav>
          )}
        </Col>

        <div style={{ padding: '20px' }} />
        {props.items.filter(i => i.name === activePill).map(i =>
          <>
            <Card style={{ padding: '10px' }}>
              <Row>
                <Col md='3' >
                  <h5 style={{ fontWeight: 'bold' }}>Full Name:</h5>
                </Col>
                <Col>
                  <h5 style={{ fontWeight: 'normal' }}>{i.name}</h5>
                </Col>
              </Row>
              <br />
              <Row>
                <Col md='2'>
                  <h6>Hometown:</h6>
                </Col>
                <Col>
                  <p>{i.home}</p>
                </Col>
              </Row>
              <Row>
                <Col md='3'>
                  <h6>Favorite Coding Language:</h6>
                </Col>
                <Col>
                  <p>{i.language}</p>
                </Col>
              </Row>
              <Row>
                <Col md='2'>
                  <h6>Interesting Fact:</h6>
                </Col>
                <Col>
                  <p>{i.fact}</p>
                </Col>
              </Row>
            </Card>
          </>
        )}
        {props.items.length < 1 && (
          <h4 style={{ textAlign: 'center' }}>There are currently no people in here...<Link to='/addpeople'>Add Some</Link></h4>
        )}
      </Container>
    </>

  )
}
