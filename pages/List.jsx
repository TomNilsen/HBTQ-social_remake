import React from "react";
import ListCard from "../components/ListCard";
import Events from "../components/Eventlist";

function List(props) {
  return (
    <section className="list-page">
      {Events.map((event) => {
        return (
          <ListCard object={event} info={props.info} key={Math.random()} />
        );
      })}
    </section>
  );
}

export default List;
