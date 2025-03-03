import { FaMedium } from 'react-icons/fa';
import Header from './Header.jsx';
import blogsData from './Card/data/blogsData.js';
import { useState } from 'react';
import './styles/blog.css';

export default function Blog() {
    return (
        <>

            <div id='blog' >
                <Header />
            </div>
            <div className="blog-container">
                <h1 className="blog-title">Blog</h1>
                <section className="blog-list">
                    {blogsData.map((blog, index) => (
                        <div key={index} >
                            <div className="blog-header">
                                <p className="blog-date">{blog.date || "No Date"}</p>

                            </div>
                            <p className="blog-heading">{blog.name}
                                <a href={blog.link} target="_blank" rel="noopener noreferrer" className="medium-icon">
                                    <FaMedium />
                                </a>
                            </p>
                            <p className='blog-description'> {blog.descritpion} </p>
                        </div>
                    ))}
                </section>
            </div>

        </>
    );
}
