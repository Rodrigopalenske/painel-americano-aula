
interface IProps { // Criar Propriedades para o componente
    visible: boolean
}

export const Loading = (props: IProps) => {
    return(
        props.visible && // Condição, se visible for verdadeiro ele mostra a div
        <div 
            className={"d-flex justify-content-center align-items-center"}
                                                                    // zIndex: '99' coloca o elemento no topo de tudo
            style={{ width: '100%', height: '100%', position: 'fixed', zIndex: '99', backgroundColor: 'rgb(0,0,0,0.3)' }}
        >
            <div
                className="spinner-border"
                role="status"
                style={{ width: '3rem', height: '3rem' }}
            />

        </div>
    )
}