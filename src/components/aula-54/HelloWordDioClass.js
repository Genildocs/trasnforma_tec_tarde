import React from 'react'; // Para criar componente de Class
import '../../App.css';

class HelloWordDioClass extends React.Component {

    // Toda class em orientação ao objetivo precisa ter o metodo construtor.
    constructor(props) {
        super(props);
    }

    render(){ // Necessario o metodo render para ser renderizado na tela quando for class.
        return (
            <div>
                <p className='p2'>
                    Criando primeira Class!
                </p>
            </div>
        )
    }



}

export default HelloWordDioClass;