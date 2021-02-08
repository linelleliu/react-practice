import React from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';

export default function Unplash() {
  const [userInput, setUserInput] = React.useState('')
  const [resultArray, setResultArray] = React.useState([])

  const goFindSomePhotos = () => {
    //go to Unplash and get photos
    axios({
      method: 'GET',
      url: `https://api.unsplash.com/search/photos?client_id=bdAEVby0BvDKPreZ3VtD-iqsze4VkB-ltYfuwsf-lII&query=${userInput}`
    }).then(res => {
      console.log(res.data)
      setResultArray(res.data.results)
    })
      .catch(err => console.log(err))
    setUserInput('')
  }


  return (
    <div style={{ padding: '30px' }}>
      <Container>
        <h3>Search Images</h3>
        <input placeholder='search'
          value={userInput}
          onChange={e => setUserInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' ? goFindSomePhotos() : null} />
        <button onClick={() => goFindSomePhotos()}>Search</button>
        {resultArray.map(i =>
          <img src={i.urls.small} />
        )}
      </Container>
    </div>
  )
}