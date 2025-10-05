
import { IoIosStarHalf } from "react-icons/io";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {

    // const data = use(bookPromise);
    // console.log(data);

    const { bookId, bookName, author, image, rating, category, tags, yearOfPublishing, publisher } = singleBook;


    return (

        <Link to={`/bookDetails/${bookId}`} >
            <div className="card bg-base-100 w-90 shadow-sm border-2 border-gray-300 p-5">
                <figure className='p-3 bg-gray-300 rounded-2xl'>
                    <img
                        className='w-[134px] h-[166px]'
                        src={image} />
                </figure>
                <div className="card-body">
                    <div className='flex gap-3'>
                        {
                            tags.map((tag, index) => <div className="badge badge-secondary" key={index}>{tag}</div>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>By: {author}</p>
                    <p>Publisher: {publisher}</p>
                    <div className='border-t-1 border-dashed'></div>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <IoIosStarHalf /></div>
                    </div>
                </div>
            </div>

        </Link >
    );
};

export default Book;