import React from "react";

const Contentdata = [
  {
    description: "Lady with a red umbrella sss",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0E4gSaEriDKmPePOOQXQf0EaL8o9Dhtd-Bg&s",
  },
  {
    description: "Flowers and some fruits",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0E4gSaEriDKmPePOOQXQf0EaL8o9Dhtd-Bg&s",
  },
  {
    description: "Beautiful scenery",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0E4gSaEriDKmPePOOQXQf0EaL8o9Dhtd-Bg&s",
  },
  {
    description: "Some kind of bird",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0E4gSaEriDKmPePOOQXQf0EaL8o9Dhtd-Bg&s",
  },
  {
    description: "The attack of dragons",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0E4gSaEriDKmPePOOQXQf0EaL8o9Dhtd-Bg&s",
  },
];

const Card = () => {
  return (
    <div className="card">
      {Contentdata.map((d, Index) => (
        <div className="card-block">
          <div key={Index} className="title">
            {d.description}
          </div>
          <img alt={d.description} src={d.url} />
        </div>
      ))}
    </div>
  );
};

export default Card;
