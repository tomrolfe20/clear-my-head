import React, { useEffect, useState } from "react";
import db from "../firebase/firebase";
import Map from "../map/Map";
import "./PubList.css";
import beer from "../images/beer.svg";
import dog from "../images/dog.svg";
import can from "../images/can.svg";
import garden from "../images/garden.svg";

const PubList = () => {
  const [pubs, setPubs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    db.collection("clearheadPubs")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPubs(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            pubName: doc.data().pubName,
            cityName: doc.data().cityName,
            beerGarden: doc.data().beerGarden,
            dogFriendly: doc.data().dogFriendly,
            inCan: doc.data().inCan,
            onTap: doc.data().onTap,
          }))
        );
      });
  }, []);

  return (
    <>
      <div className='searchBar'>
        <input
          type='text'
          placeholder='Search by city'
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </div>
      <div className='pub-container'>
        {pubs
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (
              val.cityName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((pub) => (
            <div className='pub' key={pub.id}>
              <span>{pub.pubName}</span>
              <span>{pub.cityName}</span>
              <div className='pub-icons'>
                {pub.beerGarden ? (
                  <div className='icon-stack'>
                    <img src={garden} alt='' />
                    <span>Beer Garden</span>
                  </div>
                ) : (
                  ""
                )}

                {pub.dogFriendly ? (
                  <div className='icon-stack'>
                    <img src={dog} alt='' />
                    <span>Dog Friendly</span>
                  </div>
                ) : (
                  ""
                )}

                {pub.inCan ? (
                  <div className='icon-stack'>
                    <img src={can} alt='' />
                    <span>Served in a can</span>
                  </div>
                ) : (
                  ""
                )}

                {pub.onTap ? (
                  <div className='icon-stack'>
                    <img src={beer} alt='' />
                    <span>On tap!</span>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <Map name={pub.pubName} city={pub.cityName} />
            </div>
          ))}
      </div>
    </>
  );
};

export default PubList;
