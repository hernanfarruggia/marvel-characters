import Crypto from 'crypto-js';
import configs from '../configs';
import mockDdata from '../utils/mock-characters';

export const GET_CHARACTERS_LIST = 'GET_CHARACTERS_LIST';
export const GET_CHARACTERS_LIST_ERROR = 'GET_CHARACTERS_LIST_ERROR';
export const UPDATE_SELECTED_CHARACTER = 'UPDATE_SELECTED_CHARACTER';

// There are some issues with Marvel API when trying to fetch information.
// Is complaining about the timestamp and hash passed through the call.
// I'll keep this piece of code commented, and replace the fetch data with a
// mocked service with a response data from the example interactive Marvel's documentation
//
// export const getCharactersList = () => {
//     return async dispatch => {
//         const ts = new Date().getTime();
//         const hash = Crypto.MD5(ts + configs.privateKey + configs.publicKey).toString();
//         const url = `${ configs.baseUrl }/characters?ts=${ ts }&apikey=${ configs.publicApiKey }&hash=${ hash }`;
//         const options = {
//             headers: configs.headers,
//             method: 'GET'
//         };

//         try {
//             let response = await fetch(url, options);
//             let data = await response.json();
//             dispatch(getCharactersListSuccess(data.data.results));
//         }
//         catch (err) {
//             dispatch(getCharactersListFailure(err));
//         }
//     }
// }

export const getCharactersList = () => {
    return {
        type: GET_CHARACTERS_LIST,
        charactersList: mockDdata.data.results
    };
}

const getCharactersListSuccess = (charactersList) => {
    return {
        type: GET_CHARACTERS_LIST,
        charactersList
    };
}

const getCharactersListFailure = (err) => {
    return {
        type: GET_CHARACTERS_LIST_ERROR,
        err
    };
}

export const updateSelectedCharacter = (selectedCharacterId) => {
    return {
        type: UPDATE_SELECTED_CHARACTER,
        selectedCharacterId
    }
}