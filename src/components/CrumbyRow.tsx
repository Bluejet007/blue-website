import "../styling/CrumbyRow.css"

interface Props {
    path?: string[];
}

function CrumbyRow({path = []}: Props) {
    if(path.length == 0)
        return <hr />;
    else {
        return (
            <>
            <hr />
            <div className="crumby-row">{path.map((step, ind) => <span key={ind}>/<a>{step}</a></span>)}</div>
            <hr />
            </>
        );
    }
}

export default CrumbyRow;