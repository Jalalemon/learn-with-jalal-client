import React from 'react';

const Blog = () => {
    return (
      <div>
        <div mx-auto>
          <h3 className="text-danger">What is cors?</h3>
          <h6>
            localhost server allows to permit user any other place server data
            In that preflight,Cors (Cross-Origin Resource Sharing) the browser
            sends headers that indicate the HTTP method and headers that will be
            used in the actual request.the browser sends headers that indicate
            the HTTP method and headers that will be used in the actual request.
            The service responses using the same headers with different or the
            same values. The client decides, based on a CORS preflight response,
            if he can or cannot send the main request to the service.
          </h6>
        </div>
      </div>
    );
};

export default Blog;