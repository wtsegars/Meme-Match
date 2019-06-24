import React from 'react';

function Grid(props) {
    return(
        <div className="container" onClick={() => props.shuffleArray(props.image)}>
            <img src={props.image} alt="" beenClicked= {false} />
        </div>
    );
}

export default Grid;