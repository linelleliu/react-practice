import React from 'react';



export default function Display(props) {
  return (
    <div>
      <h2>Available Items ({props.availableArray.length})</h2>
      <ul>
        {props.availableArray.map((item, index) =>
          <div key={index}>
            <li >
              {item} <button onClick={(e) => props.addToWishList(item, index)}>Add To Wish List</button>
            </li>
          </div>

        )}
      </ul>
    </div>
  )
}