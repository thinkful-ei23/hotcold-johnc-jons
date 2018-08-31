import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';
import './header.css';
import {InfoConsumer} from './game'

export default function Header(props) {

    return (
        <InfoConsumer>
            {({info}) => 
                (!info) ? 
                (
                    <header>
                        <TopNav newGame={props.newGame} />
                        <h1>HOT or COLD</h1>
                    </header>)
                :
                (
                    <header>
                        <InfoModal/>
                    </header>
                )
            }
        </InfoConsumer>
    )



};
