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

    document.getElementsByClassName("page-container")[0].addEventListener("resize", scaleBG);
    

    return (
    <svg id="background" style={{height: document.body.scrollHeight}}>
        <defs>
            {pointPatternGen()}
        </defs>
        <rect width="100%" height="100%" fill="url(#bgCirclePattern)" />
    </svg>
    );
}

// Distribute ciclres in pattern
function pointPatternGen() {
    let coords: {x: GLfloat, y: GLfloat}[] = [];

	// Get new size values
	let layerHeight = gridSize * Math.sin(Math.PI / 3);

	// Generate coordinates
	for(let i: GLint = 0; i < 6; i++) {
		coords.push({x: (i % 2 == 0 ? 2.25 : 0.75) * gridSize, y: i * layerHeight})
	}

    return <pattern id="bgCirclePattern" patternUnits="userSpaceOnUse" width={3 * gridSize} height={6 * layerHeight}>
        {coords.map((item, index) => circleInstanceSVG(item.x, item.y, isCentre, index))}
    </pattern>
}

// Create a circle
function circleInstanceSVG (x: GLfloat, y: GLfloat, isCentre: boolean,i: GLint) {
	return <circle r={dotSize} className={i % 3 != 0 || isCentre ? "bgCircle" : "bgHidden"} cx={x} cy={y} key={i} />
}

// Rescale background to page content
function scaleBG() {
    const elementBG = document.getElementById("background");
    elementBG && (elementBG.style.height = `${document.body.scrollHeight}px`);
    console.log(document.body.scrollHeight);
}

export default GridBG;