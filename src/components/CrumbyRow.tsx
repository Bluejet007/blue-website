import { useLocation } from "react-router";
import "../styling/CrumbyRow.css"

function CrumbyRow() {
  let location = useLocation();
  let path = location.pathname.split('/').slice(1);

  return (
    <>
      <div className="crumby-row">
        <hr />
        {!(path.length == 0 || path[0] == '') &&
          <>{path.map((step, ind) => <span key={ind}>/<a>{step}</a></span>)}
          <hr /></>
        }
      </div>
    </>
  );
}

export default CrumbyRow;