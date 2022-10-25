import React from 'react';

const CoursesCart = ({singleCourse}) => {
    console.log(singleCourse);
    return (
        <div>
            <h2> {singleCourse.company} </h2>
        </div>
    );
};

export default CoursesCart;