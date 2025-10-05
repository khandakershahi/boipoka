import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {
    // wrost case
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");

    const data = useLoaderData();


    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);



    }, [])

    const handleSort = (type) => {
        setSort(type)
        if (type === 'year') {
            const sortedByPage = [...readList].sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            setReadList(sortedByPage)
        }
        if (type === 'rating') {
            const sortedByRating = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedByRating)
        }
    }


    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Sort by : {sort ? sort : ""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={() => handleSort('year')}><a>Year</a></li>
                    <li onClick={() => handleSort('rating')}><a>Rating</a></li>
                </ul>
            </details>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book I have read {readList.length}</h2>
                    <div className='flex flex-col gap-4'>
                        {
                            readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>My Wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;