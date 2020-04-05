import React from 'react';
import { getImgUrl } from '../../utils/utils';
import './charactersDetail.css';

function CharactersDetail (props) {

    const getImg = () => {
        const options = {
            image: props.selectedCharacter.thumbnail,
            size: 'large'
        };
        return getImgUrl(options);
    }

    const renderEmpty = () => {
        return (<div>Please select a character!</div>);
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
                <img src={ getImg() } alt={ props.selectedCharacter.name + '\'s image!' }/>

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
        <div className="right-column">
            {
                !props.selectedCharacter.name ?
                    renderEmpty() :
                    renderContent()
            }
        </div>
    );

}

export default CharactersDetail;