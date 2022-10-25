import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {
    const courses = useLoaderData();
    return (
        <div>
            <h3> course: {courses.length} </h3>
            
        </div>
    );
};

export default Course;