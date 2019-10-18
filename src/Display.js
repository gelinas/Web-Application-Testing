import React from 'react';

export default function Display(props) {
    
    const { out, run, error, strike, ball, hit, foul } = props;

    return (
        <section className="scoreboard">
            <div className="baseball">
                <h1>WE PLAYING BASEBALL NOW</h1>
            </div>
            <div className="topRow">
            <div className="home">
                <h2 className="home__name">Lions</h2>
                <div className="home__score">0</div>
            </div>
            <div className="timer">00:03</div>
            <div className="away">
                <h2 className="away__name">Tigers</h2>
                <div className="away__score">0</div>
            </div>
            </div>
            <div className="middleRow">
                <div className="outs">
                    <h3 className="title">Outs</h3>
                    <div className="value">{out}</div>
                </div>
                <div className="runs">
                    <h3 className="title">Runs</h3>
                    <div className="value">{run}</div>
                </div>
                <div className="errors">
                    <h3 className="title">Errors</h3>
                    <div className="value">{error}</div>
                </div>
            </div>
            <div className="bottomRow">
                <div className="strike">
                    <h3 className="title">Strike</h3>
                    <div className="value">{strike}</div>
                </div>
                <div className="ball">
                    <h3 className="title">Ball</h3>
                    <div className="value">{ball}</div>
                </div>
                <div className="foul">
                    <h3 className="title">Foul</h3>
                    <div className="value">{foul}</div>
                </div>
                <div className="hit">
                    <h3 className="title">Hit</h3>
                    <div className="value">{hit}</div>
                </div>
            </div>
        </section>
    );
}