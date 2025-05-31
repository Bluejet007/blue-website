interface Props {
    setCentreDot: () => void;
    setDotSize: (e: any) => void;
    setGridSize: (e: any) => void;
};

function Article({setCentreDot, setDotSize, setGridSize}: Props) {
    return <div className="main-content">
        <p>From old roots<br />To new heights, to new horizons, to new skies<br />Spring new leaves</p>
        <form>
            <label htmlFor="buttn">Centre dot</label><br /><input type="checkbox" id="buttn" onChange={setCentreDot}></input><br />
            <label htmlFor="dotSize">Dot size</label><br /><input type="range" id="dotSize" max="6" min="0.25" step="any" defaultValue="1.25" onChange={setDotSize}></input><br />
            <label htmlFor="latticeSize">Lattice size</label><br /><input type="range" id="latticeSize" max="100" min="2.5" step="any" defaultValue="25" onChange={setGridSize}></input>
        </form>
    </div>
}

export default Article;