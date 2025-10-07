import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import App from '../App';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import BookDetails from '../Pages/BookDetails/BookDetails';
import Readlist from '../Pages/Readlist/Readlist';

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
       {
         index : true,
         path:"/",
         loader : ()=>fetch("../../public/data/booksData.json"),
         Component : Home
        },

        {
          path:"/about",
          Component: About
        },
        {
          path:'/readlist',
          loader : ()=>fetch("../../public/data/booksData.json"),
          Component:Readlist
        },
        {
          path:'/bookDetails/:id',
          loader : ()=>fetch("../../public/data/booksData.json"),
          Component: BookDetails,
        }
    ]
  },
]); 