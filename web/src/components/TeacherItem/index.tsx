import React from 'react';

import whatsappIcon from '../../assets/imagen/icons/whatsapp.svg';

import './styles.css';

function TeacherItem(){
    return(
        <article className="teacher-item">
        <header>
            <img src="https://ichef.bbci.co.uk/news/1024/media/images/47104000/jpg/_47104670_homer_226other.jpg" alt="HomeSimpsons" />
            <div>
                <strong>Home Simpson</strong>
                <span>Química</span>
            </div>
        </header>
        
        <p>
            Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado em explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 20,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="whatsapp" />
                Entra em contato
            </button>
        </footer>
    </article>
    );
};

export default TeacherItem;