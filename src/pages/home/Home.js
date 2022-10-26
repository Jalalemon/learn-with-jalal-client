import React from 'react';
import { Link, Navigate, useLoaderData } from 'react-router-dom';
import CoursesCart from '../CoursesCart/CoursesCart';
import CourseDetails from '../leftside/Course/CourseDetails';

const Home = () => {
    const allCourse = useLoaderData();
    
    return (
        <div>
           
            <h3>home {allCourse.length}</h3>
            
            {
               allCourse.map(singleCourse =><CoursesCart key={singleCourse._id} singleCourse={singleCourse} ></CoursesCart> )
            }
        </div>
    );
};

export default Home;