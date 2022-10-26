import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Fulldetails from './Fulldetails';
import SingleDetail from './SingleDetail';


const CourseDetails = () => {
    const details = useLoaderData();
    console.log(details);
   return(
    <div>
        <h2>details{details.length} </h2>
        {
            details.map(fullData => <Fulldetails key={fullData.id} fullData={fullData}></Fulldetails>)
        }
    </div>
   )}
export default CourseDetails;