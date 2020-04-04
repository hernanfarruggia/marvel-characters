import React, { useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import './app.css';

import {
    getCharactersList,
    updateSelectedCharacter
} from '../../redux/actions';

import CharactersList from '../charactersList';
import CharactersDetail from '../charactersDetail';

function App () {
    const dispatch = useDispatch();
    const charactersList = useSelector(state => state.charactersList);
    const selectedCharacter = useSelector(state => state.selectedCharacter);

    useEffect(() => {
        dispatch(getCharactersList());
    }, [dispatch])

    const handleUpdateSelectedCharacter = (id) => {
        dispatch(updateSelectedCharacter(id));
    }

    return (
        <div className="app">

            <CharactersList
                charactersList={ charactersList }
                selectedCharacter={ selectedCharacter }
                handleUpdateSelectedCharacter={ handleUpdateSelectedCharacter } />
            
            <CharactersDetail selectedCharacter={ selectedCharacter }/>
        </div>
    );
}

export default App;
