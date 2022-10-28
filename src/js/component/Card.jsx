import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const Card = () => {
  return (
    <layout>
      <div className="card" style={{ width: "18rem" }}>
        <img src={rigoImage} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          modi quam incidunt facilis voluptas nam distinctio. Voluptatibus
          facilis doloribus repudiandae et! Non possimus reprehenderit,
          accusantium neque consequuntur tempore minima.
          </p>
          <a href="#" className="btn btn-primary">
            Find Out More!!
          </a>
        </div>
      </div>
    </layout>
  );
};

export default Card;
