import React, { useState } from "react";
import Events from "../components/Eventlist";

function Create() {
  const [title, setTitle] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [starttime, setStarttime] = useState("");
  const [endtime, setEndtime] = useState("");
  const [people, setPeople] = useState("");
  const [description, setDescription] = useState("");

  function newEvent(e) {
    e.preventDefault();

    Events.push({
      id: Math.random(),
      img: "https://images.unsplash.com/photo-1542358935821-e4e9f3f3c15d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      alt: "pride flag",
      title: title,
      adress: adress,
      city: city,
      date: date,
      time: `${starttime} - ${endtime}`,
      people: people,
      description: description,
    });

    setTitle("");
    setAdress("");
    setCity("");
    setDate("");
    setStarttime("");
    setEndtime("");
    setPeople("");
    setDescription("");
  }
  return (
    <section className="create-page">
      <h2>Create event</h2>
      <form onSubmit={newEvent}>
        <label>Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <label>Adress:</label>
        <input
          type="text"
          required
          value={adress}
          onChange={(e) => {
            setAdress(e.target.value);
          }}
        />

        <label>City:</label>
        <input
          type="text"
          required
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />

        <label>Date:</label>
        <input
          type="date"
          required
          value={date}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />

        <label>Start time:</label>
        <input
          type="time"
          required
          value={starttime}
          onChange={(e) => {
            setStarttime(e.target.value);
          }}
        />

        <label>End time:</label>
        <input
          type="time"
          required
          value={endtime}
          onChange={(e) => {
            setEndtime(e.target.value);
          }}
        />

        <label>People:</label>
        <input
          type="text"
          required
          value={people}
          onChange={(e) => {
            setPeople(e.target.value);
          }}
        />

        <label>Description:</label>
        <textarea
          rows="5"
          required
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button type="submit">Create event</button>
      </form>
    </section>
  );
}

export default Create;
