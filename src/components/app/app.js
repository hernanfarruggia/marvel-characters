import React from 'react';
import './app.css';

import CharactersList from '../charactersList';
import CharactersDetail from '../charactersDetail';

function App () {
    return (
        <div className="app">

            <CharactersList />
            
            <CharactersDetail />
        </div>
    );
}

export default App;
