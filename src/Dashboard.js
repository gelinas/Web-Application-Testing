import React from 'react';

export default function Dashboard(props) {
    const { out, run, error, strike, ball, hit, foul,
        setOut, setRun, setError, setStrike, setBall, setHit, setFoul } = props;
    
    const incrementOne = (number, setter) => setter(number+1);

    const resetZero = (setter) => setter(0);

    const incrementStrike = () => {
        if (strike === 2) {
            resetZero(setStrike);
            return;
        }
        incrementOne(strike, setStrike);
    }

    const incrementBall = () => {
        if (ball === 3) {
            resetZero(setBall);
            return;
        }
        incrementOne(ball, setBall);
    }

    const incrementHit = () => {
        incrementOne(hit, setHit);
        resetZero(setStrike);
        resetZero(setBall);
    }
    
    const incrementFoul = () => {
        if (strike < 2) {
            incrementStrike();
        }
        incrementOne(foul, setFoul);
    }

    return (
        <section className="buttons">
        <div className="dashboardButtons">
          <button className="button" onClick={() => incrementOne(out, setOut)}>
            Add Out
          </button>
          <button className="button" onClick={() => incrementOne(run, setRun)}>
              Add Run
          </button>
          <button className="button" onClick={() => incrementOne(error, setError)}>
              Add Error
          </button>
        </div>
        <div className="dashboardButtons">
          <button className="button" onClick={incrementStrike}>
            Add Strike
          </button>
          <button className="button" onClick={incrementBall}>
              Add Ball
          </button>
          <button className="button" onClick={incrementFoul}>
              Add Foul
          </button>
          <button className="button" onClick={incrementHit}>
              Add Hit
          </button>
        </div>
      </section>
    );
}