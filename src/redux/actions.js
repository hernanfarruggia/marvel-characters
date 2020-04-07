import Crypto from 'crypto-js';
import configs from '../configs';
import mockDdata from '../utils/mock-characters';

export const GET_CHARACTERS_LIST = 'GET_CHARACTERS_LIST';
export const GET_CHARACTERS_LIST_ERROR = 'GET_CHARACTERS_LIST_ERROR';
export const UPDATE_SELECTED_CHARACTER = 'UPDATE_SELECTED_CHARACTER';

export const getCharactersList = () => {
    return {
        type: GET_CHARACTERS_LIST,
        charactersList: mockDdata.data.results
    };
}

export const updateSelectedCharacter = (selectedCharacterId) => {
    return {
        type: UPDATE_SELECTED_CHARACTER,
        selectedCharacterId
    }
}

// There are some issues with Marvel API when trying to fetch information.
// Is complaining about the timestamp and hash passed through the call and
// throwing an authentication error code.
// I'll keep this piece of code commented as reference for fetch calls, it should even work if
// the API allows you to authenticate (make sure to change the public/private api key's), but
// for the sake of this demo app, I'll replace the fetched data with a mocked response json data
// from the Marvel's interctive documentation examples
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

// const getCharactersListSuccess = (charactersList) => {
//     return {
//         type: GET_CHARACTERS_LIST,
//         charactersList
//     };
// }

// const getCharactersListFailure = (err) => {
//     return {
//         type: GET_CHARACTERS_LIST_ERROR,
//         err
//     };
// }