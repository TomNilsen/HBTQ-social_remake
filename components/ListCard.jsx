import React from "react";

function ListCard(props) {
  return (
    <article className="list-card">
      <img src={props.object.img} alt={props.object.alt} />
      <h3>{props.object.title}</h3>
      <ul>
        <li>{props.object.city}</li>
        <li>|</li>
        <li>{props.object.date}</li>
      </ul>
      <button onClick={props.info} id={props.object.id}>
        More info
      </button>
    </article>
  );
}

export default ListCard;
