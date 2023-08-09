import {Link} from 'react-router-dom'

// import {Ci, Cn, Li} from './style'

import './index.css'

const Item = props => {
  const {details} = props
  const {id, name, logoUrl} = details

  return (
    <li className="list-container">
      <Link to={`/courses/${id}`} className="link-el">
        <img className="images" src={logoUrl} alt={name} />
        <p className="paras">{name}</p>
      </Link>
    </li>
  )
}

export default Item
