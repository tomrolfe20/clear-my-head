import React, { useState } from "react";
import "./PubForm.css";
import db from "../firebase/firebase.js";
import firebase from "firebase/compat/app";

const PubForm = () => {
  const [pubNameInput, setPubNameInput] = useState("");
  const [cityInput, setCityInput] = useState("");
  const [isPubFormOpen, setIsPubFormOpen] = useState(false);
  const [beerGarden, setBeerGarden] = useState(false);
  const [dogFriendly, setDogFriendly] = useState(false);
  const [onTap, setOnTap] = useState(false);
  const [inCan, setInCan] = useState(false);

  // Beer garden, dog friendly, Clear Head on tap, Clear Head in a can, Location

  const addPub = (e) => {
    e.preventDefault();
    db.collection("clearheadPubs").add({
      pubName: pubNameInput,
      cityName: cityInput,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      beerGarden: beerGarden,
      dogFriendly: dogFriendly,
      onTap: onTap,
      inCan: inCan,
    });
    setIsPubFormOpen(false);
    setPubNameInput("");
    setCityInput("");
    setBeerGarden(false);
    setDogFriendly(false);
    setInCan(false);
    setOnTap(false);
    alert("Pub added!");
  };
  return (
    <div className='pub-form-container'>
      <form className='form' action=''>
        <div className='form-input'>
          <label for='pubName'>Pub Name</label>
          <input
            value={pubNameInput}
            id='pubName'
            onChange={(e) => setPubNameInput(e.target.value)}
            required
          />
        </div>

        <div className='form-input'>
          <label for='city'>City</label>
          <input
            value={cityInput}
            id='city'
            onChange={(e) => setCityInput(e.target.value)}
            required
          />
        </div>

        <div className='form-input'>
          <label for='beerGarden'>Beer garden</label>
          <input
            id='beerGarden'
            type='checkbox'
            checked={beerGarden}
            onChange={() => {
              setBeerGarden(!beerGarden);
            }}
          />
        </div>

        <div className='form-input'>
          <label for='dogFriendly'>Dog Friendly</label>
          <input
            id='dogFriendly'
            type='checkbox'
            checked={dogFriendly}
            onChange={() => {
              setDogFriendly(!dogFriendly);
            }}
          />
        </div>

        <div className='form-input'>
          <label for='clearheadCan'>Clear Head in a can</label>
          <input
            onTap
            id='clearheadCan'
            type='checkbox'
            checked={inCan}
            onChange={() => {
              setInCan(!inCan);
            }}
          />
        </div>

        <div className='form-input'>
          <label for='clearheadTap'>Clear Head on tap</label>
          <input
            id='clearheadTap'
            type='checkbox'
            checked={onTap}
            onChange={() => {
              setOnTap(!onTap);
            }}
          />
        </div>

        <button
          className='button-53-form'
          type='submit'
          onClick={
            pubNameInput && cityInput
              ? addPub
              : (e) => {
                  e.preventDefault();
                  alert("Name and city required!");
                }
          }
        >
          Add pub
        </button>
      </form>
    </div>
  );
};

export default PubForm;
