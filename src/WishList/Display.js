import React from 'react';
import { Button } from 'reactstrap';


export default function Display(props) {
  return (
    <div>
      <h2 style={{ paddingTop: '10px' }}>Available Items ({props.availableArray.length})</h2>
      <ul>
        {props.availableArray.map((item, index) =>
          <div key={index}>
            <li style={{ padding: '5px 0' }}>
              {item} <Button onClick={(e) => props.addToWishList(item, index)}>Add To Wish List</Button>
            </li>
          </div>
        )}
      </ul>
    </div>
  )
}