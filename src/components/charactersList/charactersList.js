import React from 'react';
import './charactersList.css';

function CharactersList (props) {

    const renderComicsFlag = (comics) => {
        if (comics.vailable === 0) return null;

        return (<div className="flag">C</div>);
    }

    const renderSeriesFlag = (series) => {
        if (series.vailable === 0) return null;

        return (<div className="flag">SE</div>);
    }

    const renderEventsFlag = (events) => {
        if (events.vailable === 0) return null;

        return (<div className="flag">E</div>);
    }

    const renderStoriesFlag = (stories) => {
        if (stories.vailable === 0) return null;

        return (<div className="flag">ST</div>);
    }

    const renderItem = (item) => {
        return (
            <li
                key={ item.id }
                onClick={ () => props.handleUpdateSelectedCharacter(item.id) }>
                <div className="avatar">Av</div>
                <span>
                    { props.selectedCharacter.id === item.id ? '# ' : null }
                    { item.name }
                </span>
                <div className="flags">
                    { renderComicsFlag(item.comics) }
                    { renderSeriesFlag(item.series) }
                    { renderEventsFlag(item.events) }
                    { renderStoriesFlag(item.stories) }
                </div>
            </li>
        )
    } 

    return (
        <div className="left-column">
            <ul>
                { props.charactersList.map(renderItem) }
            </ul>
        </div>
    );
}

export default CharactersList;