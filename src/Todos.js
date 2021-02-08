import React from 'react';
import { Button, Container, Card, Col, Row, Input } from 'reactstrap';

export default function Todos() {
  const [userInput, setUserInput] = React.useState('');
  const [addToDo, setAddToDo] = React.useState([]);
  const [show, setShow] = React.useState('all');
  const [hover, setHover] = React.useState(false);

  const addToDoList = () => {
    if (userInput === '' || addToDo.find(i => i.name === userInput)) {
      return
    }
    let item = {
      name: userInput,
      type: 'active'
    }
    let newArray = [...addToDo]
    newArray.unshift(item)
    setAddToDo(newArray)
    setUserInput('')
  }

  const checkOff = (item, type) => {
    let newArray = [...addToDo]
    let index = newArray.findIndex(i => i.name === item.name)
    newArray[index].type = type
    setAddToDo(newArray)
  }

  const clearComplete = () => {
    let newArray = [...addToDo]
    let activeArray = []
    newArray.map(item => item.type === 'active' ? newArray.push(item) : null)
    setAddToDo(activeArray)
  }

  // const changeStatus = (item) => {
  //   console.log('help', item)
  //   if (item.type === 'active') {
  //     let newArray = [...addToDo]
  //     let index = newArray.findIndex(i => i.name === item.name)
  //     newArray[index].type = 'done'
  //     setAddToDo(newArray)
  //   }
  //   else {
  //     let newArray = [...addToDo]
  //     let index = newArray.findIndex(i => i.name === item.name)
  //     newArray[index].type = 'active'
  //     setAddToDo(newArray)
  //   }
  // }


  return (
    <div style={{ textAlign: 'center', padding: '30px 0' }}>
      <Container>
        <h3>To Dos</h3>
        <Input textAlign='center' placeholder='What needs to be done'
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' ? addToDoList() : null}
        />

        {show === 'all' && (
          <>
            {addToDo.filter(i => i.type === 'active').map(i =>
              <div style={{ paddingTop: '10px' }} key={i}>
                <Card onClick={() => { checkOff(i, 'done') }} style={{ cursor: 'pointer' }}>
                  <Row>
                    <Col md='2'>
                      <Input type='checkbox' />
                    </Col>
                    <Col>
                      <h4 style={{ textAlign: 'left' }}>{i.name}</h4>
                    </Col>
                    <Col style={{ textAlign: 'right' }} >
                      <Button>X</Button>
                    </Col>
                  </Row>
                </Card>
              </div>
            )}

            {addToDo.filter(i => i.type === 'done').map(item =>
              <div style={{ paddingTop: '10px' }} >
                <Card style={{ cursors: 'pointer', backgroundColor: 'green' }}>
                  <Row>
                    <Col md='2'>
                      <Input type='checkbox' checked />
                    </Col>
                    <Col>
                      <i><h4 style={{ textDecorationLine: 'line-through', textAlign: 'left' }}>{item.name}</h4></i>
                    </Col>
                  </Row>
                </Card>
              </div>
            )}
          </>
        )}

        {show === 'active' && (
          <>
            {addToDo.filter(i => i.type === 'active').map(i =>
              <div style={{ paddingTop: '10px' }} key={i}>
                <Card onClick={() => { checkOff(i, 'done') }} style={{ cursor: 'pointer' }}>
                  <Row>
                    <Col md='2'>
                      <Input type='checkbox' />
                    </Col>
                    <Col>
                      <h4 style={{ textAlign: 'left' }}>{i.name}</h4>
                    </Col>
                    <Col style={{ textAlign: 'right' }}>
                      <Button>X</Button>
                    </Col>
                  </Row>
                </Card>
              </div>
            )}
          </>
        )}

        {show === 'done' && (
          <>
            {addToDo.filter(i => i.type === 'done').map(item =>
              <div style={{ paddingTop: '10px' }} >
                <Card style={{ cursos: 'pointer', backgroundColor: 'green' }}>
                  <Row>
                    <Col md='2'>
                      <Input type='checkbox' checked />
                    </Col>
                    <Col>
                      <i><h4 style={{ textDecorationLine: 'line-through', textAlign: 'left' }}>{item.name}</h4></i>
                    </Col>
                  </Row>
                </Card>
              </div>
            )}
          </>
        )}


        <div style={{ paddingTop: '30px' }}>
          <Card>
            <Row style={{ padding: '6px' }}>
              <Col md='3' sm='2'>
                {addToDo.length} item left
            </Col>
              <Col md='6' sm='6'>
                <Button onClick={() => setShow('all')}>All</Button>
                <Button onClick={() => setShow('active')} >Active</Button>
                <Button onClick={() => setShow('done')}>Complete</Button>
              </Col>
              <Col>
                <Button onClick={() => clearComplete()}>Clear Completed</Button>
              </Col>
            </Row>
          </Card>
        </div>
      </Container>
    </div>
  )

}