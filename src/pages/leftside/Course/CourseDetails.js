import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleDetail from './SingleDetail';


const CourseDetails = () => {
    const detail = useLoaderData();
    console.log(detail);
   return(
    <div>
        {
            detail.map(singleData => <SingleDetail key={singleData.id} singleData={singleData}></SingleDetail>)
        }
    </div>
   )}
export default CourseDetails;