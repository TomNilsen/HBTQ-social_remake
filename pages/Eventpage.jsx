import React from "react";
import Events from "../components/Eventlist";

function Eventpage(props) {
  return (
    <section className="event-page">
      {Events.map((object) => {
        if (object.id == props.id) {
          return (
            <article key={Math.random()}>
              <h2>{object.title}</h2>
              <div>
                <img src={object.img} alt={object.alt} />
                <ul>
                  <li>{object.adress}</li>
                  <li>{object.city}</li>
                  <li>{object.date}</li>
                  <li>{object.time}</li>
                  <li>{object.people}</li>
                  <li>
                    <h3>About this event</h3>
                  </li>
                  <li>
                    <p>{object.description}</p>
                  </li>
                </ul>
              </div>
            </article>
          );
        }
      })}
    </section>
  );
}

export default Eventpage;
