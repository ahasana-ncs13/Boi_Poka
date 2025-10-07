import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreBooks } from '../../Utilities/Utilities';

const BookDetails = () => {
    const {id}= useParams()
    const bookID = parseInt(id)
    const data = useLoaderData()
    const singleBook = data.find( book => book.bookId === bookID )
    console.log(singleBook)
    const {image,author,bookName,category,publisher,rating,review,tags,totalPages,yearOfPublishing} = singleBook

  const addToReadHandle=(id)=>{
    addToStoreBooks(id);
  }

    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 w-10/12 mx-auto p-10 gap-10'>
            <div className=" bg-gray-100">
                <img src={image} alt="" className='p-5 mx-auto h-170' />
            </div>
            <div className="">
                <h1 className='text-5xl font-bold '>{bookName}</h1>
                <p className='text-xl font-medium mt-5' >By : {author}</p>
                <div className="divider"></div>
                <p className='text-xl font-medium'>{category}</p>
                <div className="divider"></div>
                <p><span className='font-bold'>Review</span> : {review}</p>
                <div className="mt-3">
                    <span className='font-bold'>Tag</span> : <button className='border-none rounded-4xl btn  mr-5 text-[#23BE0A]'>{tags[0]}</button>
                    <button className='border-none rounded-4xl  btn text-[#23BE0A]'>{tags[1]}</button>
                </div>
                <div className="divider"></div>
                <div className="">
                    <p>Number of Pages :<span className='font-bold'> {totalPages} </span></p>
                    <p>Publisher :<span className='font-bold'> {publisher}</span> </p>
                    <p>Year of Publishing :<span className='font-bold'>{yearOfPublishing} </span> </p>
                    <p>Rating :<span className='font-bold'> {rating}</span> </p>
                </div>
                <div className="mt-3">
                <button onClick={()=>addToReadHandle(id)} className='btn mr-5'>Mark as Read</button>
                <button className='btn'>Wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;