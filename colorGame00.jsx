const Square = ({id, player }) => {
    const [color, setColor] = React.useState('green');
    const palet = ['red', 'blue', 'green'];
    const getRandomColor = () => palet[Math.floor(Math.random()*3)];
    React.useEffect(() => {
        console.log(`Render ${id}`);
        return () => console.log(`unmounting Square ${id}`);
    });
  // keep track of state of Square
  return (
  // change color of square on click
    <button 
      onClick={e => {
          setColor(getRandomColor());
         e.target.style.background = color;
    }}
    >
      <h1>{id}</h1>
    </button>
  );
};

const Board = () => {
  const [player, setPlayer] = React.useState(1);
  const [mounted, setMounted] = React.useState(true);
  let status = `Player ${player}`;
  const toggle = () => setMounted(!mounted);
  function renderSquare(i) {
    return <Square id={i} player={player}></Square>;
  }
  return (
    <div
      className="game-board">
      <div className="grid-row">
      {mounted && renderSquare(0)}
      {mounted && renderSquare(1)}
      {mounted && renderSquare(2)}
      </div>
      <div id="info">
      <button onClick={toggle}>Show/Hide Row</button>
        <h1>Turn of Player {player}</h1>
      </div>
    </div>
  );
};

// ========================================

ReactDOM.render(<Board />, document.getElementById("root"));
