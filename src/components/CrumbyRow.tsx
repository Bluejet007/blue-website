import { Link, useLocation } from 'react-router';
import '../styling/CrumbyRow.css'

function CrumbyRow() {
  let location = useLocation();
  let path = location.pathname.split('/').slice(1);

  return (
    <>
      <div className='crumby-row'>
        {!(path.length == 0 || path[0] == '') &&
          <><Link to={'/'}><img className= 'inline-img' src='/tulip_logo_squ.png' /></Link>
          {path.map((step, ind) => <><span key={ind} className='crumb'><Link to={path.slice(0, ind + 1).join('/')}>{step}</Link></span><span className='crumby-space'></span></>)}</>
        }
      </div>
    </>
  );
}

export default CrumbyRow;