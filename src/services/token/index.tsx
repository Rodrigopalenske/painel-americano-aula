import { jwtDecode } from "jwt-decode"

export const verificaTokenExpirado = (
    token?: string
) => {
    if (token) {
        let decodedToken = jwtDecode(token)
        // se não existir ou o tempo de expiração for menor que o tempo atual
        if (!decodedToken.exp || decodedToken.exp < new Date().getTime() / 1000) {
            // token expirado
            return true
        }
        // token ok
        return false

    }
}

export const excluiToken = () => {
    localStorage.removeItem("americanos.token")
}

export const validaPermissao = (
    permissao: Array<string>,
    permissaoToken?: string
) => {

    if (permissaoToken) {

        if (typeof permissaoToken === 'string') {
            const temAltumaPermissao = permissao.includes(permissaoToken)

            return temAltumaPermissao
        }
        return false
    }
    return false
    
}