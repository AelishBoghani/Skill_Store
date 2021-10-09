import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  function truncate(string,n){
    return string?.length>n ? string.substr(0,n-1)+'.....': string;
}
  return (
    <li className="cards__item">
      <Link className="cards__item__link" to={props.path}>
        <figure className="cards__item__pic-wrap" data-category={props.label}>
          <img className="cards__item__img" alt="" src={props.src} />
        </figure>
        <div className="cards__item__info">
          <h5 className="cards__item__text">{truncate(props.text,60)}</h5>
        </div>
      </Link>
    </li>
  );
}

export default CardItem;
