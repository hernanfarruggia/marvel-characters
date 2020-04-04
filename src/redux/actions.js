import mockData from '../mocks/marvel-characters';

export const GET_CHARACTERS_LIST = 'GET_CHARACTERS_LIST';
export const UPDATE_SELECTED_CHARACTER = 'UPDATE_SELECTED_CHARACTER';

export const getCharactersList = () => {

    console.log(mockData);

    return {
        type: GET_CHARACTERS_LIST,
        charactersList: mockData.data.results
    };
}

export const updateSelectedCharacter = (selectedCharacterId) => {
    return {
        type: UPDATE_SELECTED_CHARACTER,
        selectedCharacterId
    }
}