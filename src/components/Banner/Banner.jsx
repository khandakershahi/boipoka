import React from 'react';
import bookimage from '../../assets/book.png'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-1/3 rounded-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse p-20">
                <img
                    src={bookimage}
                    className=" max-w-full"
                />
                <div className=''>
                    <h1 className="text-5xl font-bold mb-10">Books to freshen up your bookshelf</h1>
                    <button className="btn btn-success text-white">View The List</button>
                </div>
            </div>
        </div>


    );
};

export default Banner;