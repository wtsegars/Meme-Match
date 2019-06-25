import React from 'react';

function Header() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">Meme Match Game</h1>
            <p className="lead">A Game of Matching Memes to Memes.</p>
            <button className="btn btn-primary btn-lg">How to Play</button>
        </div>
    );
}

export default Header;