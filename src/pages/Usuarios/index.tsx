import { useEffect } from "react";
import { LayoutDashboard } from "../../components/LayoutDashboard";
import { IToken } from "../../interfaces/token";
import { verificaTokenExpirado } from "../../services/token";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Usuarios() {

    const navigate = useNavigate()

    useEffect(() => { // Primeira função a ser executada sem ser chamada, quando o usuário chegar na página
        let lsToken = localStorage.getItem("americanos.token")
        
        let token: IToken | null = null
        
        if (typeof lsToken === 'string') { // se o tipo for uma string
            token = JSON.parse(lsToken) // transforma o lsToken em um json visto como string
        }

        if (!token || verificaTokenExpirado(token.accessToken)) {
            navigate("/")
        }

        // trazer os usuários do backend
        axios.get('http://localhost:3001/users')
            .then((res) => {
                console.log(res.data)
            })
            .catch((e) => {
                console.log(e)
            })

    }, [])

    return(
        <>
            <LayoutDashboard>
                
                <div
                    className="d-flex justify-content-between mt-3"
                >
                    <h1>Usuários</h1>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                            // navigate('')
                        }}
                    >Adicionar</button>

                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                123
                            </th>
                            <td>Rodrigo Otavio</td>
                            <td>rodrigo@gmail.com</td>
                            <td>
                                <button
                                    className="btn btn-warning"
                                    type="button"
                                    style={{ marginRight: 5 }}
                                >
                                    Editar
                                </button>
                                <button
                                    className="btn btn-danger"
                                    type="button"

                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </LayoutDashboard>
        </>
    )
}