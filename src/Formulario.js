import { useCallback, useEffect, useState } from "react"

function Formulario() {
    const [enteredName, setEnteredName] = useState('');


    function updateName(event){
        setEnteredName(event.target.value);
    }
    const validateName = useCallback(
        function(){
            if(validateName===null||validateName.length>10){
                console.log('Invalid name!')
            }
        },
        [enteredName]
    )

    useEffect(
        function () {
            validateName();
        },
        [validateName]
    );

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form onSubmit = {handleSubmit}>
            <div>
                <label>Nombre</label>
                <input type="name" onChange={updateName} />
            </div>
            <button type = 'submit'>Click to submit</button>
        </form>
    );
}

export default Formulario