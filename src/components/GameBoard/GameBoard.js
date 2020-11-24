import GuessRow from '../GuessRow/GuessRow';
const GameBoard = (props) => {
    return(
        <div className="component" id="gameboard">
            Game Board
            <GuessRow />
            <GuessRow />
        </div>
    )
};

export default GameBoard;
