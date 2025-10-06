import React from 'react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';

const BookContainer = ({books}) => {
    console.log(books)
    return (
       <Link to={`./bookDetails/${books.bookId}`}>
        <div className=''>
            <div className="card bg-base-100 shadow-sm">
 
    <img
      src={books.image}
      alt="Shoes" className='p-7 bg-gray-200 h-150 rounded-xl' />
  
  <div className="card-body">
    <div>
        <button className="btn mr-10 badge badge-outline">{books.tags[0]}</button>
        <button className="btn badge badge-outline">{books.tags[1]}</button>
    </div>
    <div>
    <h2 className="card-title">{books.bookName}</h2>
    <p>By : {books.author}</p>
    </div>
    <div className=" flex justify-between  border-t border-dashed border-t-gray-300 ">

            <p>{books.category}</p>
            <p className='flex gap-2 items-center'>{books.rating} <Star /></p>
    </div>
  </div>
</div>
        </div>
       </Link>
    );
};

export default BookContainer;