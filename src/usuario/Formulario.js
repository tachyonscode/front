function Formulario({botao, eventoTeclado, cadastrar}){
    return (
       
       <form>
            <input type='text' onChange={eventoTeclado} name="idReputacao" placeholder='Reputacao' className="form-control" />
            <input type='text' onChange={eventoTeclado} name="nome" placeholder='Nome' className="form-control" />
            <input type='text' onChange={eventoTeclado} name="sobrenome" placeholder='Sobrenome' className="form-control" />
            <input type='text' onChange={eventoTeclado} name="endereco" placeholder='Endereco' className="form-control" />
            <input type='text' onChange={eventoTeclado} name="ddd" placeholder='DDD' className="form-control" />
            <input type='text' onChange={eventoTeclado} name="telefone" placeholder='Telefone' className="form-control" />

            {
                 botao
                 ?
                 <input type='button' value='Cadastrar' onClick={cadastrar} className="btn btn-primary" />
                 :
                 <div>
                     <input type='button' value='Alterar' className="btn btn-warning" />
                     <input type='button' value='Remover' className="btn btn-danger" />
                     <input type='button' value='Cancelar' className="btn btn-secondary" />
                 </div>
            }
                    
            
           
        </form>
    )
}

export default Formulario;