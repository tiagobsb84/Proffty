import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/imagen/logo.svg';
import logoImg from '../../assets/imagen/icons/back.svg';

import './styles.css';

interface PageHeaderProps {
    title: string;  //Se não fosse obrigatoria era title?: string.
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={logoImg} alt="Voltar" />
                </Link>
                <img src={backIcon} alt="Proffy" />
            </div>
            <div className="header-content">
                <strong>{props.title}</strong>
            {props.children}
            </div>
        </header>
    );
};

export default PageHeader;