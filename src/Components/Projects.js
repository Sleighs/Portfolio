import React, { Component } from 'react';
import '../App.css';
import mintPic from '../Resources/Images/portfolio-mint2048.png';
import cashflowPic from '../Resources/Images/portfolio-cashflowjs.png';

class Projects extends Component {
    render (){
        return (
            <div id="projects-container">
                <div id="projects-title">
                    <h3 className=""><strong>WHAT HAVE I BUILT?</strong></h3>
                </div>
                <div className="row">
                    <div className="col-md-5">
                        <a className="projects-pic-container-mint" target="_blank" href="https://github.com/sleighs/mint-2048" rel="noreferrer" title="Play">
                            <img className="img-responsive rounded projects-pic d-block mx-auto" alt="Mint 2048" src={mintPic}/>
                        </a>
                    </div>
                    <div className="col-md-7">
                        <h3><strong>Mint 2048</strong></h3>
                        <p><a target="_blank" href="https://plus-7ed02.firebaseapp.com/" rel="noreferrer">Mint</a> is a sliding tile puzzle game where players combine tiles, perform combos and use abilities to create the 2048 tile.</p>
                        <p>
                            <a target="_blank" href="https://github.com/Sleighs/Mint-2048" rel="noreferrer">View the site yourself</a>
                        </p>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <div className="col-md-7">
                        <h3><strong>CashFlow JS</strong></h3>
                        <p><a target="_blank" href="https://sleighs.github.io/CashFlowJs/" rel="noreferrer">CashFlow JS</a> is an adaptation of the CashFlow 101 board game with additional gameplay options and rule customization that allows for many unique ways to play.</p>
                        <p>
                            <a target="_blank" href="https://github.com/Sleighs/CashFlowJs/" rel="noreferrer">View the site yourself</a>
                        </p>
                    </div>
                    <div class="col-md-5">
                        <a className="projects-pic-container-cashflow" target="_blank" href="https://github.com/Sleighs/CashFlowJs"rel="noreferrer" title="Play">
                            <img className="img-responsive rounded projects-pic mx-auto d-block" alt="CashFlow JS" src={cashflowPic}/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;