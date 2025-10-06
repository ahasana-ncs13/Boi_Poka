import React from 'react';
import herobg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='w-10/12 mx-auto my-10'>
            <div className="hero bg-base-200 p-15  rounded-2xl">
  <div className="hero-content flex-col lg:flex-row-reverse gap-20">
    <img
      src={herobg}
      className="w-lg rounded-lg shadow-2xl"
    />

    <div>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
      <button className="btn btn-primary mt-5">View The List</button>
    </div>

  </div>
</div>
        </div>
    );
};

export default Banner;