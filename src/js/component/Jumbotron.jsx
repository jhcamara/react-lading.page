import React from 'react';

const Jumbotron = () => {
    return (
        <>
       <div className="jumbotron container bg-light mr-3 mb-6">
        <h1 className="display-4">A warm welcome!</h1>
        <p className="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          modi quam incidunt facilis voluptas nam distinctio. Voluptatibus
          facilis doloribus repudiandae et! Non possimus reprehenderit,
          accusantium neque consequuntur tempore minima.
        </p>
        {/* <hr className="my-4"> */}
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">
            Call to action!
          </a>
        </p>
      </div>
        </>
    )
}

export default Jumbotron;