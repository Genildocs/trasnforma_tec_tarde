// Retorno de uma função.
import Add from '../aula-54/Add'

function Function(){

    const addNumber = (n1,n2) =>{

        return n1 * n2;
    }
    return(
        <Add addNumber={addNumber} />
    )
}

export default Function;