import React from 'react';

function Grid(props) {
    return (
        <div className="container" >
            <form>
                {
                    props.memeArray.map(meme => (
                        <img key={meme.img} onClick={props.shuffleArray} src={meme.img} alt="" data-clicked={meme.clicked} data-img={meme.img}/>
                    ))
                }
            </form>

            {/* <img src={props.memeArray[0]} alt="" beenclicked= 'false' /> */}
        </div>
    );
}

export default Grid;