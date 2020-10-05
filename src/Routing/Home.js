import React from 'react';
import { Container, Card } from 'reactstrap'

export default function Home(props) {
  return (
    <>
      <Container>
        <Card>
          Summary
          <div style={{ padding: '12px 30px ' }}>
            <div>
              <h6 style={{ display: 'inline-block', fontWeight: 'bold' }}>Number of People: </h6>
              <h6 style={{ display: 'inline-block' }}>   {props.items.length}</h6>
            </div>
            <h6 style={{ fontWeight: 'bold' }}>Favorite Coding Languages:</h6>
            <ul>
              {props.items.map(i =>
                <li>{i.language}</li>
              )}
            </ul>
          </div>
        </Card>
      </Container>
    </>
  )
}

