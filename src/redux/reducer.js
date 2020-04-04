import {
    GET_CHARACTERS_LIST,
    UPDATE_SELECTED_CHARACTER
} from './actions';

const initialState = {
    charactersList: [],
    selectedCharacter: {}
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        case GET_CHARACTERS_LIST:
            return {
                ...state,
                charactersList: action.charactersList
            };

        case UPDATE_SELECTED_CHARACTER:
            return {
                ...state,
                selectedCharacter: state.charactersList.find(item => item.id === action.selectedCharacterId )
            };

        default:
            return state;
    }
}

export default reducer;