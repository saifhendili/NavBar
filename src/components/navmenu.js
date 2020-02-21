import React from 'react';
import "./navmenu.css";





function navmenu(props) {
    return (
      
<ul className="first-nav">
  {
      
  props.liste.map((el,i)=>
 <li key={i} className={el.drop ?'haveDrop' : 'havnt' }><a href="#">{el.title}</a>
  {
      !el.drop ? null :
      <ul className="dropdown">
  {   el.drop.map(el=>
 <li className="last-list">{el}</li>
        )} </ul>
  }
  </li>)
  }
</ul>

    )
}
export default navmenu