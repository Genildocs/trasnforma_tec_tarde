
function HelloWordDev(props){ // Parametro props vai receber propriedades de fora.

    return(
        <div>
            <p>
                Salve {props.name}! Você é o nosso novo Dev!
            </p>
        </div>
    )

}

export default HelloWordDev;