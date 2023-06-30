import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = ({ handleClose }) => {
    const [state, handleSubmit] = useForm("xleyraep");
    if (state.succeeded) {
        return (
            <>
                <p className="text-center p-3 info">Gracias por escribirme! Te responderé a la brevedad</p>
                <p className="text-center p-3 info">Te responderé a la brevedad</p>
                <button className="cancel-button" onClick={handleClose}>
                    <span className="titulo">Cerrar</span>
                </button>
            </>
        );
    }
    return (
        <form onSubmit={handleSubmit} className='p-3'>
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                id="email"
                type="email"
                name="email"
                className="form-control mb-4"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <label htmlFor="textarea" className="form-label">
                Mensaje
            </label>
            <textarea
                id="textarea"
                name="message"
                className="form-control mb-5"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button type="submit" disabled={state.submitting} className="navbar-button">
                <span className="titulo">Enviar</span>
            </button>
            <button className="cancel-button" onClick={handleClose}>
                <span className="titulo">Cancelar</span>
            </button>
        </form>
    );
}

export default ContactForm;
