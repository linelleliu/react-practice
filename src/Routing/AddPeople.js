import React from 'react';
import {
  Container, Input,
  FormGroup, Label, Button, Col
} from 'reactstrap'
import Select from "react-select";
import { Link } from 'react-router-dom'
export default function AddPeople(props) {
  const selectOptions = [
    { value: '', label: 'Chose a Language' },
    { value: 'JS', label: 'JS' },
    { value: 'C#', label: 'C#' },
    { value: 'C++', label: 'C++' }
  ]

  return (
    <>
      <Container>
        <Col md='6'>
          <h5>Full Name</h5>
          <Input value={props.userName}
            onChange={(e) => props.setUserName(e.target.value)} />
          {props.setUserName !== '' && (
            <p style={{ color: 'red' }}>This is a required field and cannot be left blank.</p>
          )}
          <div style={{ padding: '20px' }} />
          <h5>Hometown</h5>
          <Input value={props.userHome}
            onChange={(e) => props.setUserHome(e.target.value)} />
        </Col>
        <div style={{ padding: '20px' }} />
        <Col md='6'>
          <h5>Favorite Coding Language</h5>
          <Select options={selectOptions} placeholder='Chose a Language'
            onChange={(e) => props.setUserLanguage(e.value)} />
        </Col>
        <div style={{ padding: '20px' }} />
        <Col>
          <h5>Interesting Fact</h5>
          <FormGroup>
            <Label for="exampleText">Text Area</Label>
            <Input type="textarea" name="text" id="exampleText" value={props.userFact} onChange={(e) => props.setUserFact(e.target.value)} />
          </FormGroup>
          <Link to='/people'><Button block onClick={() => props.addPeople()}>Add</Button></Link>
          <div style={{ padding: '8px' }} />
          <p style={{ color: '#0ab70a', backgroundColor: '#77ff7738' }}>{props.userName} was successfully added!</p>
        </Col>


      </Container>

    </>

  )
}
