import { useSelector, useDispatch } from 'react-redux';

import { useState } from 'react'

function Students() {
  const [ titleName, setTitleName ] = useState('');
  const [ stateTest, setStateTest ] = useState(false)

  const students = useSelector( state => state.data )
  const dispatch = useDispatch()

  const ComponentExample = (
                            <>
                              <div>
                                <img src="https://inglesnarede.com.br/wp-content/uploads/2016/07/somebody-ingles-na-rede.jpg"/>
                              </div>
                            </>
                            )

  function addStudents(){
    dispatch({ type: 'ADD_STUDENT', title: titleName })
  }


  function LocalStorageContent(valorSetado){
    localStorage.setItem('Parametro01', valorSetado)
    alert('info adicionada ao localstorage!')
  }


  function TesteDeFuncao(){
    console.log('Disparou!!!')
  }

  const GetLocStorage = localStorage.getItem('Parametro01')

  const ObjectTest = {
    type: 'Product',
    name: 'Iphone',
    price: 9000
  }
  
  localStorage.setItem('Teste', JSON.stringify(ObjectTest))

  const getLocalStorageContent = JSON.parse(localStorage.getItem('Teste'))


  return (
      <>
        { students.map( (student, index) => ( <><p key={index}>{'Nome: ' + student}</p><br/></> )) }
        <input type="text" onChange={ e => setTitleName( e.target.value )} placeholder="Informe o nome do aluno"/>
        <button onClick={addStudents}> Adicionar aluno </button>

        <h1>Trabalhando com o LocalStorage</h1>
        { GetLocStorage ? GetLocStorage : 'Sem informações no Storage!!!' }
          <br/>
        <button onClick={ () => LocalStorageContent('Hello GamaAcademy') }> Setando o Localstorage </button>
          <br/>
        <button onClick={ () => localStorage.clear() }> Limpar o Localstorage </button>
          <br/>
        <button onClick={ () => window.location.reload() }> Recarregar a página </button>
          <br/>
        <button onClick={ () => TesteDeFuncao() }> Console </button>
          <hr/>
        <h2>{getLocalStorageContent.price}</h2>

          <hr/>

          { stateTest ? ComponentExample : 'Sem retorno!!!'}
          <hr/>
          <button onClick={ () => setStateTest(true) }> Clique para ver a novidade </button>
        
      </>
  );
}

export default Students;

