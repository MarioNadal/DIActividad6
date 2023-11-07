import { useCallback, useEffect, useState } from "react"

function Formulario() {
    const [enteredName, setEnteredName] = useState('');
    const [enteredApellidos, setEnteredApellidos] = useState('');
    const [enteredEmail, setEnteredEmail] = useState(' ');
    const [enteredSexo, setEnteredSexo] = useState(' ');
    const [enteredMensaje, setEnteredMensaje] = useState('');

    const [nombreIncorrecto, setNombreIncorrecto] = useState("");
    const [apellidosIncorrecto, setApellidosIncorrecto] = useState("");
    const [emailIncorrecto, setEmailIncorrecto] = useState("");
    const [sexoIncorrecto, setSexoIncorrecto] = useState("");
    const [mensajeIncorrecto, setMensajeIncorrecto] = useState("");



    function updateName(event){
        setEnteredName(event.target.value);
    }
    function updateApellidos(event){
        setEnteredApellidos(event.target.value);
    }
    function updateEmail(event){
        setEnteredEmail(event.target.value);
    }
    function updateSexo(event){
        setEnteredSexo(event.target.value);
    }
    function updateMensaje(event){
        setEnteredMensaje(event.target.value);
    }
    
    const validateName = useCallback(
        function() {
            if(enteredName===""||enteredName.length>10){
                setNombreIncorrecto(<p>El nombre no es válido</p>)
            }else{
                setNombreIncorrecto(<span></span>)
            }
        },
        [enteredName]
    )
    const validateApellidos = useCallback(
        function() {
            if(enteredApellidos===""||enteredApellidos.length>20){
                setApellidosIncorrecto(<p>Los apellidos no son válidos</p>)
            }else{
                setApellidosIncorrecto(<span></span>)
            }
        },
        [enteredApellidos]
    )
    const validateEmail = useCallback(
        function() {
            if(enteredEmail===""||enteredEmail.length>20||!enteredEmail.includes("@")){
                setEmailIncorrecto(<p>El email no es válido</p>)
            }else{
                setEmailIncorrecto(<span></span>)
            }
        },
        [enteredEmail]
    )
    const validateSexo = useCallback(
        function() {
            if(enteredSexo===" "){
                setSexoIncorrecto(<p>Seleccione un sexo</p>)
            }else{
                setSexoIncorrecto(<span></span>)
            }
        },
        [enteredSexo]
    )
    const validateMensaje = useCallback(
        function() {
            if(enteredMensaje.length>500){
                setMensajeIncorrecto(<p>Mensaje demasiado largo</p>)
            }else{
                let caracteresRestantes = 500-enteredMensaje.length;
                setMensajeIncorrecto(<span> Carácteres restantes: {caracteresRestantes}</span>)
            }
        },
        [enteredMensaje]
    )

    useEffect(
        function(){
            validateName();
        },
        [validateName]
    );
    useEffect(
        function(){
            validateApellidos();
        },
        [validateApellidos]
    );
    useEffect(
        function(){
            validateEmail();
        },
        [validateEmail]
    );
    useEffect(
        function(){
            validateSexo();
        },
        [validateSexo]
    );
    useEffect(
        function(){
            validateMensaje();
        },
        [validateMensaje]
    );



    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form onSubmit = {handleSubmit}>
            <div>
                <label>Nombre</label>
                <input type="name" onChange={updateName} />
                {nombreIncorrecto}
                <p></p>
                <label>Apellidos</label>
                <input type="apellidos" onChange={updateApellidos} />
                {apellidosIncorrecto}
                <p></p>
                <label>Email</label>
                <input type="email" onChange={updateEmail} />
                {emailIncorrecto}
                <p></p>
                <label>Sexo</label>
                <select type="sexo" onChange={updateSexo}>
                    <option value=" "> </option>
                    <option value="No binario">No binario</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                </select>
                {sexoIncorrecto}
                <p></p>
                <label>Mensaje</label>
                <input trpe="mensaje" onChange={updateMensaje}/>
                {mensajeIncorrecto}
            </div>
            <button type = 'submit'>Click to submit</button>
        </form>
    );
}

export default Formulario