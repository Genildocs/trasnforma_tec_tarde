// função vai add um valor

function Add(props){
    let a = 35;
    let b = 50;

    return(
        <>
            <p>
                Minha soma é: {props.addNumber(a,b)}
            </p>
        </>
    )

}

export default Add;