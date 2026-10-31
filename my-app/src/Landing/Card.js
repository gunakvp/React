import React from "react";

const Contentdata = [
  {
    title: "Lady with a red umbrella",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0E4gSaEriDKmPePOOQXQf0EaL8o9Dhtd-Bg&s",
  },
  {
    title: "Flowers and some fruits",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0E4gSaEriDKmPePOOQXQf0EaL8o9Dhtd-Bg&s",
  },
  {
    title: "Beautiful scenery",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0E4gSaEriDKmPePOOQXQf0EaL8o9Dhtd-Bg&s",
  },
  {
    title: "Some kind of bird",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0E4gSaEriDKmPePOOQXQf0EaL8o9Dhtd-Bg&s",
  },
  {
    title: "The attack of dragons",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0E4gSaEriDKmPePOOQXQf0EaL8o9Dhtd-Bg&s",
  },
];

const Card = () => {
  return (
    <div className="card">
      {Contentdata.map((d, Index) => (
        <div className="card-block">
          <div key={Index} className="title">
            {d.title}
          </div>
          <img alt={d.title} src={d.url} />
          <p>  {d.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
