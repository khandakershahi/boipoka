import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();
    const bookId = parseInt(id);
    const singleBook = data.find(book => book.bookId === bookId)


    const { bookName, image } = singleBook;


    return (
        <div className='mx-auto w-2/3'>

            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>

            <div className='flex gap-5'>
                <button className='btn btn-accent'>Read</button>
                <button className='btn btn-info'>WhishList</button>
            </div>
        </div>
    );
};

export default BookDetails;