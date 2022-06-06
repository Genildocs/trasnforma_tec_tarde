import React from 'react'; // Para criar componente de Class

class HelloWordDioClass extends React.Component {

    // Toda class em orientação ao objetivo precisa ter o metodo construtor.
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <p>
                    Criando primeira Class!
                </p>
            </div>
        )
    }



}

export default HelloWordDioClass;