import React from 'react';

import Image from '../image';
import Pill from '../pill';

import './charactersList.css';

const CharactersList = (props) => {

    const renderComicsFlag = (comics) => {
        if (comics.vailable === 0) return null;

        return (<Pill type="comics" text="COMICS" />);
    }

    const renderSeriesFlag = (series) => {
        if (series.vailable === 0) return null;

        return (<Pill type="series" text="SERIES" />);
    }

    const renderEventsFlag = (events) => {
        if (events.vailable === 0) return null;

        return (<Pill type="events" text="EVENTS" />);
    }

    const renderStoriesFlag = (stories) => {
        if (stories.vailable === 0) return null;

        return (<Pill type="stories" text="STORIES" />);
    }

    const renderItem = (item) => {
        let selectedClass = '';
        if (props.selectedCharacter?.id === item.id) selectedClass = 'selected';

        return (
            <li
                className={ selectedClass }
                key={ item.id }
                onClick={ () => props.handleUpdateSelectedCharacter(item.id) }>
                <Image
                    charactersName={ item.name }
                    image={ item.thumbnail }
                    type='avatar' />
                <span>
                    { item.name }
                </span>
                <div className="flags">
                    { renderComicsFlag(item.comics) }
                    { renderEventsFlag(item.events) }
                    { renderStoriesFlag(item.stories) }
                    { renderSeriesFlag(item.series) }
                </div>
            </li>
        )
    } 

    return (
        <div className="characters-list">
            <ul>
                { props.charactersList.map(renderItem) }
            </ul>
        </div>
    );
}

export default CharactersList;