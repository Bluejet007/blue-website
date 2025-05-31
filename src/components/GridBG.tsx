interface Props {
    isCentre: boolean;
    dotSize: GLfloat;
    gridSize: GLfloat;
};

let isCentre: boolean = false;
let dotSize: GLfloat = 1.25;
let gridSize: GLfloat = 25;

function GridBG(props: Props) {
    isCentre = props.isCentre;
    dotSize = props.dotSize;
    gridSize = props.gridSize;

    return <svg id="background" width={document.body.scrollWidth} height={document.body.scrollHeight}>
        <defs>
            {pointPatternGen()}
        </defs>
        <rect width="100%" height="100%" fill="url(#bgCirclePattern)" />
    </svg>
}

//Pattern
function pointPatternGen() {
    let coords: {x: GLfloat, y: GLfloat}[] = [];

	//Get new size values
	let layerHeight = gridSize * Math.sin(Math.PI / 3);

	//Generate coordinates
	for(let i: GLint = 0; i <= 5; i++) {
		coords.push({x: (i % 2 == 0 ? 2.25 : 0.75) * gridSize, y: (i + 0.5) * layerHeight})
	}

    return <pattern id="bgCirclePattern" patternUnits="userSpaceOnUse" width={3 * gridSize} height={6 * layerHeight}>
        {coords.map((item, index) => circleInstSVG(item.x, item.y, isCentre, index))}
    </pattern>
}

//Circles
function circleInstSVG (x: GLfloat, y: GLfloat, isCentre: boolean,i: GLint) {
	return <circle r={dotSize} className={i % 3 != 0 || isCentre ? "bgCircle" : "bgHidden"} cx={x} cy={y} key={i} />
}

export default GridBG;