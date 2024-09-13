import { useEffect } from "react"
import { IToken } from "../../../interfaces/token"
import { verificaTokenExpirado } from "../../../services/token"
import { useNavigate } from "react-router-dom"
import { LayoutDashboard } from "../../../components/LayoutDashboard"

export default function GerenciarUsuarios() {

    const navigate = useNavigate()

    useEffect(() => { // Primeira função a ser executada sem ser chamada, quando o usuário chegar na página
        let lsToken = localStorage.getItem("americanos.token")
        
        let token: IToken | null = null
        
        if (typeof lsToken === 'string') { // se o tipo for uma string
            token = JSON.parse(lsToken) // transforma o lsToken em um objeto com json
        }

        if (!token || verificaTokenExpirado(token.accessToken)) {
            navigate("/")
        }


    }, [])

    return(
        <>
            <LayoutDashboard>
                <h1>add Usuarios</h1>
            </LayoutDashboard>
        </>
    )
}