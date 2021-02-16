import { useState, useEffect } from 'react'

import { Input, Button, Row, Col, Container } from 'reactstrap';

import api from '../../services/api';

import LoadContent from '../Components/loadContent'

function ChuckNorris() {

  const [ jokes, setJoke ] = useState([{}])
  const [ jokeValue, setJokeValue ] = useState('')
  const [ jokeCategory, setJokeCategory ] = useState('dev')
  const [ load, setLoad ] = useState(false)
  
  useEffect(() =>{
    setLoad(true)
    api.get(`jokes/search?query=${jokeCategory}`).then(
      res => {
        setJoke(res.data.result)
        setLoad(false)
      }
    ).catch( e => console.log('Oops, algo deu errado'))
  }, [jokeCategory])
  
  return (
        <Container>
            <h1>ChuckNorris Joker | Gama</h1>
              <hr/>
              <h2>Selecione uma categoria</h2>
              <Input type="text" onChange={ e => setJokeValue(e.target.value) } placeholder="Escolha um tema"/>
              <Button onClick={ e => { setJokeCategory(jokeValue) } }> Pesquisar</Button>
            
            <hr/>

            <Col>
              { !load ? jokes.map((joke, index) => (
                <Row md={3} key={index}>
                  <img src={joke.icon_url} alt={joke.value}/>
                  <p>{joke.value}</p>
                </Row>
              )) : <LoadContent/> }
              </Col>
        </Container>
  );
}

export default ChuckNorris;