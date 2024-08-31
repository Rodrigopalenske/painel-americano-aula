
import { SyntheticEvent, useCallback, useRef, useState } from 'react'
import styles from './styles.module.css' // style.module -> apenas funciona nessa página específica que seja chamada de style.

export default function PageExampleState() {

    const refContador = useRef(0)
    const [estado, setEstado] = useState(0);
    //Não usar function nomeFuncao() {} -> ao invés usar hooks-> iniciam com use...| como no exemplo abaixo:
    // useCallback não permite usar o estado(se mantém o valor inicial)
    const submitForm = useCallback((e: SyntheticEvent) => { // cuidará do envio do formulário
        e.preventDefault(); // usa a configuração padrão, ao fazer submit do formulário ele não fará reload
        console.log('Enviou o Formulario')
        console.log(estado)
        console.log('refContador.current')
        console.log(refContador.current)
    }, [estado]) // colocando o estado aqui diz para a função usar o valor atualizado do estado

    return(
        <> {/* Permite colocar mais de uma tag */}
            <div className={styles.main}>
                <div className={styles.border}>
                    <div className='d-flex flex-column align-items-center'>
                        <h1 className='text-primary'>Contador {estado}</h1>
                        <h1 className='text-primary'>Contador Ref {refContador.current}</h1>
                        <p className='text-secundary'>
                            Preencha os campos para logar
                        </p>

                    </div>
                    <hr />

                    <form
                        className='needs-validation align-items-center'
                        noValidate // desativa a validação padrão do formulário html
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

                        <div className='col-md-12 mt-3'>
                            <button className='btn btn-warning w-100' type='button' id='botao'
                                onClick={() => {
                                    setEstado(estado+1) // força renderização
                                }}
                            >
                                Somar
                            </button>
                        </div>
                        
                        <div className='col-md-12 mt-3'>
                            <button className='btn btn-success w-100' type='button' id='botao'
                                onClick={() => {
                                    refContador.current = refContador.current+1 // não força renderização
                                }}    
                            >
                                Somar Ref
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}