import React from 'react';

import Image from '../image';

import './charactersDetail.css';

const CharactersDetail = (props) => {

    const renderEmpty = () => {
        return (<div className="empty">&lt;------ Please select a character first!</div>);
    }

    const renderBio = () => {
        return (
            <div>
                <div className="title">Character's Bio</div>
                <div className="biography">{ props.selectedCharacter.description }</div>
            </div>
        );
    }

    const renderLinks = () => {
        const links = props.selectedCharacter.urls;

        if (links.length === 0) return null;
        
        return (
            <div>
                <div className="title">External Links</div>
                <div className="links">
                    {
                        links.map((link, key) => {
                            link.type = link.type.toUpperCase();
                            return (
                                <a
                                    href={ link.url }
                                    key={ key }
                                    rel="noopener noreferrer"
                                    target="_blank">
                                    { link.type }
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        )
    }

    const renderContent = () => {
        return (
            <div className="content">
                <div className="title">{ props.selectedCharacter.name }</div>
                <Image
                    charactersName={ props.selectedCharacter.name }
                    image={ props.selectedCharacter.thumbnail }
                    type='regular' />

                { 
                    props.selectedCharacter.description ?
                        renderBio() : 
                        null 
                }

                { 
                    props.selectedCharacter.urls ?
                        renderLinks() : 
                        null 
                }
            </div>
        );
    }

    return (
        <div className="character-detail">
            {
                !props.selectedCharacter.name ?
                    renderEmpty() :
                    renderContent()
            }
        </div>
    );

}

export default CharactersDetail;