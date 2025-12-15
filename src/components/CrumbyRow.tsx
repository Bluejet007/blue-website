import { useLocation } from "react-router";
import "../styling/CrumbyRow.css"

function CrumbyRow() {
  let location = useLocation();
  let path = location.pathname.split('/').slice(1);
  console.log(path);

  if (path.length == 0 || path[0] == '') {
    return <hr />;
  }
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