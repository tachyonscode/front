function Tabela({vetor}){
    return (
        <form>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Reputacao</th>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>Endereco</th>
                        <th>DDD</th>
                        <th>Telefone</th>
                        <th>Selecionar</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        vetor.map((obj, indice) => (

                            <tr key={indice}>
                                <td>{indice + 1}</td>
                                <td>{obj.idReputacao}</td>
                                <td>{obj.nome}</td>
                                <td>{obj.sobrenome}</td>
                                <td>{obj.endereco}</td>
                                <td>{obj.ddd}</td>
                                <td>{obj.telefone}</td>
                                <td><button className="btn btn-success" onClick={}>Selecionar</button></td>
                            </tr>
                        ))
                    }

                   
                </tbody>
            </table>

        </form>
    )
}

export default Tabela;