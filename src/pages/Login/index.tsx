
import { SyntheticEvent, useCallback, useRef, useState } from 'react'
import styles from './styles.module.css' // style.module -> apenas funciona nessa página específica que seja chamada de style.
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { Toast } from '../../components/Toast';

export default function Login() {

    const navigate = useNavigate() //usado para navegar entre as páginas

    const refForm = useRef<any>() //caso específico do uso do any, evitar ao máximo

    const [isLoading, setIsLoading] = useState(false)
    const [isToast, setIsToast] = useState(false)

    const submitForm = useCallback((e: SyntheticEvent) => { // cuidará do envio do formulário
        e.preventDefault(); // usa a configuração padrão, ao fazer submit do formulário ele não fará reload
        if (refForm.current.checkValidity()) {
            setIsLoading(true)
            const target = e.target as typeof e.target & {
                email: {value: string},
                senha: {value: string}
            }

            console.log(target.email.value)
            console.log(target.senha.value)
            
            // consumir rotas do BackEnd
            axios.post("http://localhost:3001/login", // Promise deve ser usado o then e catch, código continua sem esperar a resposta
                // Parâmetros enviados
                {
                    email: target.email.value,
                    password: target.senha.value
                }
            ).then((res) => {
                console.log(res.data)
                
                // Salvar dados no local storage do navegador, 
                // definimos uma chave(nome) e o que queremos salvar em forma de json, 
                // no caso as informações do token e do usuário.
                localStorage.setItem('americanos.token', JSON.stringify(res.data))

                navigate('/dashboard')
            })
            .catch((e) => {
                console.log(e)
                setIsLoading(false)
                setIsToast(true)
            })

        } else {
            refForm.current.classList.add('was-validated') // Não permite a entrada de valores vazios
        }

    }, [])

    return(
        <> {/* Permite colocar mais de uma tag */}
            <Loading
                visible={isLoading}
            />
            <Toast
                onClose={() => { setIsToast(false) }}
                show={isToast}
                message='Credenciais invalidas'
                color='danger'
            />
            <div className={styles.main}>
                <div className={styles.border}>
                    <div className='d-flex flex-column align-items-center'>
                        <h1 className='text-primary'>Login</h1>
                        <p className='text-secundary'>
                            Preencha os campos para logar
                        </p>

                    </div>
                    <hr />

                    <form
                        className='needs-validation align-items-center'
                        noValidate // desativa a validação padrão do formulário html
                        onSubmit={submitForm}
                        ref={refForm} // refere tudo o que tem dentro do formulário no refForm criado
                    >
                        <div className='col-md-12'>
                            <label htmlFor='email' className='form-label'>
                                Email
                            </label>
                            <input type='email' className='form-control' placeholder='Digite seu email' id='email' required />
                            <div className='invalid-feedback'>
                                Por favor digite seu email
                            </div>
                        </div>
                        <div className='col-md-12 mt-1'>
                            <label htmlFor='senha' className='form-label'>
                                Senha
                            </label>
                            <input type='password' className='form-control' placeholder='Digite sua senha' id='senha' required/>
                            <div className='invalid-feedback'>
                                Por favor digite sua senha
                            </div>
                        </div>
                        <div className='col-md-12 mt-3'>
                            <button className='btn btn-primary w-100' type='submit' id='botao'>
                                Enviar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}