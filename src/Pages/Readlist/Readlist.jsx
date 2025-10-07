import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBookData } from '../../Utilities/Utilities';
import MarkAsRead from '../../components/MarkAsRead/MarkAsRead';
import { Book } from 'lucide-react';


const Readlist = () => {
    
    const [readList , setReadList] = useState([])
    const [sortBy , setSortBy] =useState("")
    
    const data = useLoaderData();
    useEffect(()=>{
    const storeBooks = getStoreBookData()
    const convertedData = storeBooks.map(id => parseInt(id))
    const myReadList = data.filter(boi => convertedData.includes(boi.bookId))
     setReadList(myReadList)
    },[])
    

    const handleSort = (type)=>{
        setSortBy(type)
        if(type === "pages"){
            const sortedByPages = [...readList].sort((a, b) => a.totalPages - b.totalPages);
           setReadList(sortedByPages);
        }
        if(type === "rating"){
            const sortedByrating = [...readList].sort((a, b) =>  b.rating - a.rating );
            setReadList(sortedByrating);
        }
        
    }

    return (
        <div className='w-10/12 mx-auto mb-10'>

<details className="dropdown my-5">
  <summary className="btn m-1">Sort By : {sortBy?sortBy:""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("pages")}>pages</a></li>
    <li><a onClick={()=>handleSort("rating")}>Rating</a></li>
  </ul>
</details>

            <Tabs>
    <TabList>
      <Tab>Read Books</Tab>
      <Tab>Wishlist Books</Tab>
    </TabList>

    <TabPanel>
        {
            readList.map(b => <MarkAsRead key={b.bookId} b={b}></MarkAsRead>)
        }
    </TabPanel>
    <TabPanel>
      <h2>Wishlist Books____________________________</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Readlist;