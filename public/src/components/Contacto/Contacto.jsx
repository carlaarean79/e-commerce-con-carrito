import React, { useState } from 'react';
import './Contacto.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
   alert(`Su mensaje: -${formData.message} - ha sido enviado exitosamente. En breve responderemos a su consulta. `)
    console.log(formData);
  };

  return (
    <div className='container-contactForm'>
    <form onSubmit={handleSubmit}>
    <label  htmlFor='consulta'><h1 id='label'>Tu consulta nos interesa</h1></label>
      <input
      id='consulta'
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Nombre"
        required
        />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Apellido"
        required
        />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Correo electrónico"
        required
        />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Mensaje"
        required
        />
      <button type="submit">Enviar</button>
    </form>
        </div>
  );
};

export default ContactForm;