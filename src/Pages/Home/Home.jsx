import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';
import BookContainer from '../BookContainer/BookContainer';

const Home = () => {
      const data = useLoaderData();
      console.log(data)
    return (
    <>
        <Banner></Banner>   
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 w-10/12 mx-auto my-30">
            {
            data.map(books =><BookContainer books={books} key={books.bookId}></BookContainer> )
        }
        </div>
    </>
    );
};

export default Home;