import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Produto from './pages/Produto'
import PageExampleState from './pages/PageExampleState'

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* www.google.com.br/profchines */}
                <Route
                    path='/' // primeira rota a ser chamada
                    element={<Login />}
                />

                <Route
                    path='/dashboard' // a url dashboard 
                    element={<Dashboard />} // chama o elemento Dashboard
                />

                <Route
                    path='/produto/:id' // site dinâmico
                    element={<Produto />}
                />

                <Route
                    path='/example'
                    element={<PageExampleState />}
                />

            </Routes>
        </BrowserRouter>
    )
}