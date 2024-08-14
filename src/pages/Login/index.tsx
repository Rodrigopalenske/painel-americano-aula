
import { SyntheticEvent } from 'react'
import styles from './styles.module.css' // style.module -> define um estilo como global

export default function Login() {

    const submitForm = (e: SyntheticEvent) => {
        e.preventDefault(); // usa a configuração padrão, ao fazer submit do formulário ele não fará reload
        console.log('Enviou o Formulario')
    }

    return(
        <> {/* Permite colocar mais de uma tag */}
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
                        noValidate // desativa a validação padrão do formulário
                        onSubmit={submitForm}
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