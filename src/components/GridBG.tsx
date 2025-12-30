import '../styling/Background.css';

interface Props {
  isCentre: boolean;
  dotSize: GLfloat;
  gridSize: GLfloat;
  patternInd: number;
  id: number;
};

let isCentre: boolean = false;
let dotSize: GLfloat = 1.25;
let gridSize: GLfloat = 25;

function GridBG(props: Props) {
  isCentre = props.isCentre;
  dotSize = props.dotSize;
  gridSize = props.gridSize;
  const patternInd = props.patternInd;
  const id = props.id;

  return (
    <svg id={'background-' + id}>
      <defs>
        {pointPatternGen(props.patternInd)}
      </defs>
      <rect width='100%' height='100%' fill={'url(#bgCirclePattern-' + patternInd + ')'} />
    </svg>
  );
}

// Distribute circles in pattern
function pointPatternGen(patternInd: number) {
  const coords: { x: GLfloat, y: GLfloat }[] = [];

  // Get new size values
  const layerHeight = gridSize * Math.sin(Math.PI / 3);

  // Generate coordinates
  for (let i: GLint = 0; i < 7; i++) {
    coords.push({ x: (i % 2 == 0 ? 2.25 : 0.75) * gridSize, y: i * layerHeight })
  }

  // console.log(patterns[patternInd])
  return <pattern id={'bgCirclePattern-' + patternInd} patternUnits='userSpaceOnUse' width={3 * gridSize} height={6 * layerHeight}>
    {coords.map((item, index) => patterns[patternInd](item.x, item.y, isCentre, index))}
  </pattern>
}

const patterns = [
  function circleInstanceSVG(x: GLfloat, y: GLfloat, isCentre: boolean, i: GLint) {
    return <circle r={dotSize} className={i % 3 != 0 || isCentre ? 'bgShow' : 'bgHidden'} cx={x} cy={y} key={i} />;
  },
  function triCornerInstanceSVG(x: GLfloat, y: GLfloat, isCentre: boolean, i: GLint) {  
    const endPoints: { x: GLfloat, y: GLfloat }[] = [];
    const offset = (2.5 - Math.abs(i - 2.5)) % 2 == 0 ? 0.75 : 0.25;
    const finalSize = Math.min(dotSize * 5, gridSize);

    for(let j: GLint = 0; j < 3; j++) {
      const x2 = x + finalSize * Math.cos((j + offset) * Math.PI / 1.5);
      const y2 = y + finalSize * Math.sin((j + offset) * Math.PI / 1.5);

      endPoints.push({x: x2, y: y2});
    }

    return <>
      {endPoints.map((item, index) =>
        (<line stroke={!isCentre && i % 3 == 0 ? '' : '#A0A0A0'} className={i % 3 != 0 || isCentre ? 'bgShow' : 'bgHidden'} x1={x} y1={y} x2={item.x} y2={item.y} key={i * 3 + index} />)
      )}
    </>;
  }
];

export default GridBG;