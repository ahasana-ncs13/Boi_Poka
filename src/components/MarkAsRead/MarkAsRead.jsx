import React from 'react';

const MarkAsRead = ({b}) => {
    const {image,author,bookName,category,publisher,rating,tags,totalPages,yearOfPublishing}=b
    // console.log(b)
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-sm mt-5 border border-gray-200">
  <figure>
    <img
      src={image}
      alt="Movie" className='p-5 mx-auto h-70'/>
  </figure>
  <div className="card-body">
     <div className="">
                <h1 className='text-5xl font-bold '>{bookName}</h1>
                <p className='text-xl font-medium mt-5' >By : {author}</p>
                
                <div className="mt-3 flex gap-5 items-center">
                    <span className='font-bold'>Tag</span> : <button className='border-none rounded-4xl btn  mr-5 text-[#23BE0A]'>{tags[0]}</button>
                    <button className='border-none rounded-4xl  btn text-[#23BE0A]'>{tags[1]}</button>
                    <p>Year of Publishing :<span className='font-bold'>{yearOfPublishing} </span> </p>
                </div>
                <div className="flex">
                    <p>Publisher : {publisher} </p>
                     <p>Pages :{totalPages} </p> 
                </div>
<div className="divider"></div>
                <div className="mt-3">
                    <button className='border-none rounded-4xl btn  mr-5 text-[#23BE0A]'>Category:   {category}</button>
                    <button className='border-none rounded-4xl btn  mr-5 text-[#23BE0A]'>Rating:   {rating}</button>
                </div>
            </div>
  </div>
</div>
        </div>
    );
};

export default MarkAsRead;