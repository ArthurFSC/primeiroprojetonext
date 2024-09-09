// pages/index.js (ou qualquer página onde você deseja usar o componente)
import React from 'react';
import DocumentTitleComponent from '../../components/useDocumentTitle/DocumentTitleComponent';


const HomePage = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <DocumentTitleComponent />
        </div>
    );
};

export default HomePage;
