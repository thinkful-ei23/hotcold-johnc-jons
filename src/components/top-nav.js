import React from 'react';
import './top-nav.css';
import {InfoConsumer} from './game'

export default function TopNav(props) {

    return (

        <InfoConsumer>
            {({infoChange})=>
                <nav>
                    <ul className="clearfix">
                        <li>
                            <a className="what" href="#" onClick={()=>infoChange(true)}>
                                What?
                            </a>
                        </li>
                        <li>
                            <a className="new" href="#" onClick={props.newGame}>
                                + New Game
                            </a>
                        </li>
                    </ul>
                </nav>
            
            }


        </InfoConsumer>

        
    );
}

