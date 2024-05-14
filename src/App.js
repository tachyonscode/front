import { useEffect, useState } from 'react';
import './App.css';
import Formulario from './usuario/Formulario';
import Tabela from './usuario/Tabela';

function App() {

    //Objeo Usuario
    const usuario = {
      idReputacao : 0,
      nome : '',
      sobrenome: '',
      endereco:'',
      ddd : 0,
      telefone: 0
    }


  //UseState
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [objUsuario, setObjUsuario] = useState(usuario);

  //UseEffect
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/streethub/usuario")
    .then(retorno => retorno.json())
    .then(retorno_convertido => setUsuarios(retorno_convertido) )
  }, []);

  //Obtendo os dados do formulario
  const aoDigitar = (e) => {
    setObjUsuario({...objUsuario, [e.target.name]:e.target.value})
  }

  //Cadastrar Usuario
  const cadastrar = () => {
    fetch('http://localhost:8080/api/v1/streethub/usuario', {
      method:"post",
      body:JSON.stringify(objUsuario),
      headers: {
        'Content-type':'application/json',
        'Accept':'application/json'
      }
    })
    .then(retorno => retorno.json())
    .then(retorno_convertido => {

      if (retorno_convertido.mensagem !== undefined) {
        alert(retorno_convertido.mensagem)
      } else {
        setUsuarios([...usuarios ,retorno_convertido ]);
        alert('Usuario cadastrado com sucesso')
      }
     
    })
  }
  

  //Retorno
  return (
    <div>
  
      <Formulario botao={btnCadastrar} eventoTeclado={aoDigitar} cadastrar={cadastrar} />
      <Tabela vetor={usuarios}/>
    </div>
  );
}

export default App;
