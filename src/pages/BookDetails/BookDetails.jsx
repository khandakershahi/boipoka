import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';

// const MySwal = withReactContent(Swal)

const BookDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();
    const bookId = parseInt(id);
    const singleBook = data.find(book => book.bookId === bookId)


    const { bookName, image } = singleBook;

    const handleMarkAsRead = id => {
        // store with id
        // where to store
        // array or collection
        // if book already exist then show alrart
        // if book not exist then push to array



        // MySwal.fire({
        //     title: "Good job!",
        //     text: "You clicked the button!",
        //     icon: "success"
        // })

        toast("Wow so easy!")

        addToStoredDB(id)


    }


    return (
        <div className='mx-auto w-2/3'>

            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>

            <div className='flex gap-5'>
                <ToastContainer />
                <button onClick={() => handleMarkAsRead(id)} className='btn btn-accent'>Read</button>
                <button className='btn btn-info'>WhishList</button>
            </div>
        </div>
    );
};

export default BookDetails;