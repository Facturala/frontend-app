import React, {useState}from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegistroCadena from './registroCadena';
import RegistroEstablecimiento from './registroEstablecimiento';


export default function Registro() {

    const [form, setForm] = useState(false)

    const changeComponent = (e) => {
        e.preventDefault();
        setForm(true);
        console.log('the form state will change to true');
        console.log(form);
    }

    return (
        <div>
            {form === false ? <RegistroCadena changeComponent={changeComponent} /> : <RegistroEstablecimiento />}
        </div >
    )
}