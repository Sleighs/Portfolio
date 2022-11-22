import React from 'react';
import mintPic from '../../Resources/Images/portfolio-mint2048.png';
import cashflowPic from '../../Resources/Images/portfolio-cashflowjs.png';
import heromatchupsPic from '../../Resources/Images/portfolio-heromatchups.png';
import realityCalcPic from '../../Resources/Images/portfolio-realitycalc03.png';
import './style.css'

const Projects = (props) => {
    return (
        <div id="projects-container">
            <div className="row" id="project2">
                <div className="col-md-7">
                    <h3  className="projects-row-title"><strong>CashFlow JS</strong></h3>
                    <p><a target="_blank" href="https://sleighs.github.io/CashFlowJs/" rel="noreferrer">CashFlow JS</a> is an adaptation of the CashFlow 101 board game with additional gameplay options and rule customization that allows for many unique ways to play.</p>
                    <p>
                        <a target="_blank" href="https://github.com/Sleighs/CashFlowJs/" rel="noreferrer">Check out CashFlowJs</a>  
                    </p>
                </div>
                <div className="col-md-5">
                    <a className="projects-pic-container-cashflow" target="_blank" href="https://github.com/Sleighs/CashFlowJs"rel="noreferrer" title="Play">
                        <img className="img-responsive rounded projects-pic mx-auto d-block" alt="CashFlow JS" src={cashflowPic}/>
                    </a>
                </div>
            </div>
            <hr/>
            <div className="row"  id="project3">
                <div className="col-md-7">
                    <h3  className="projects-row-title"><strong>Hero Matchups API</strong></h3>
                    <p>The <a target="_blank" href="https://github.com/Sleighs/hero-matchups-api/" rel="noreferrer">Hero Matchups API</a> is a character matchup and counter resource created for e-sports training and practice applications. Check out a live demo using resources for Blizzard's team-based first person shooter Overwatch 2 <a target="_blank" href="https://hero-pick-app.web.app/" rel="noreferrer">here</a>.</p>                    
                    <p><a target="_blank" href="https://github.com/Sleighs/hero-matchups-api/" rel="noreferrer">Visit the repository</a></p>
                </div>
                <div className="col-md-5">
                    <a className="projects-pic-container-heromatchups" target="_blank" href="https://github.com/sleighs/heromatchups" rel="noreferrer" title="Visit">
                        <img className="img-responsive rounded projects-pic d-block mx-auto" alt="HeroMatchups" src={heromatchupsPic}/>
                    </a>
                </div>
            </div>
            <hr/>
            <div className="row"  id="project4">
                <div className="col-md-7">
                    <h3 className="projects-row-title"><strong>Mint 2048</strong></h3>
                    <p><a target="_blank" href="https://mint2048.com/" rel="noreferrer">Mint</a> is a sliding tile puzzle game where players combine tiles, perform combos and use abilities to create the 2048 tile.</p>
                    <p>
                        <a target="_blank" href="https://github.com/Sleighs/Mint-2048" rel="noreferrer">Check out Mint 2048 </a>    
                    </p>
                </div>
                <div className="col-md-5">
                    <a className="projects-pic-container-mint" target="_blank" href="https://github.com/sleighs/mint-2048" rel="noreferrer" title="Play">
                        <img className="img-responsive rounded projects-pic d-block mx-auto" alt="Mint 2048" src={mintPic}/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects;