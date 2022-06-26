// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (props) => {
    const {data} = props;

    return (
        <div className="card center">
            <img src={data.photo} alt="pics"></img>
            <div className="description">
                <h4>{data.name}</h4>
                <p>{data.phone}</p>
                <p>{data.email}</p>
            </div>
        </div>
    )
}

export default Contact;
