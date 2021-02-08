import React, { useState } from 'react';
import { Input, Button, Card, Container, Col, Row } from 'reactstrap';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Home(props) {
  const [userInput, setUserInput] = useState('')
  const [result, setResult] = useState('');
  // const [like, setLike] = useState([]);

  const getSearch = () => {
    axios({
      method: 'GET',
      url: `http://www.omdbapi.com/?apikey=7d43c41&t=${userInput}`
    }).then(res => setResult(res.data))
      .catch(err => console.log(err))
  }

  // const likeButton = () => {
  //   let item = result
  //   let newArray = [...like]
  //   newArray.push(item)
  //   setLike(newArray)
  // }

  return (
    <>
      <Container>
        <div style={{ textAlign: 'center', paddingTop: '20px' }}>
          <input placeholder='Search'
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' ? getSearch() : null} />
          <button onClick={() => getSearch()}>Search</button>
        </div>
        <div style={{ padding: '20px' }} />
        {result.Title && (
          <Card style={{ padding: '20px' }}  >
            <Row>
              <Col md='9' xs='7'>
                <h4>{result.Title}
                  <Link to='/movies'><button onClick={() => props.likeButton(result)}>Like</button></Link>
                </h4>
                <h5>Year: {result.Year}</h5>
                <h5>Rating: {result.Rated}</h5>
                <h5>Runtime: {result.Runtime}</h5>
                <h5>Genre: {result.Genre}</h5>
                <h5>Director: {result.Director}</h5>
                <h5>Creator: {result.Writer}</h5>
              </Col>
              <Col>
                {result.Poster && (<img src={result.Poster} width='150' height='225' />)}
              </Col>
            </Row>
          </Card>
        )}

        {/* <Card>
          <h5 style={{ textAlign: 'center' }}>Dang, we couldn't find that movie</h5>
        </Card> */}

      </Container>
    </>
  )
}