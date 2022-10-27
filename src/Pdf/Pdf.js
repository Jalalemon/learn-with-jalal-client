import React from 'react';
const ref = React.createRef();

const Pdf = () => {
    return (
      <div>
        <ReactToPdf targetRef={ref} filename="div-blue.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Generate pdf</button>}
        </ReactToPdf>
        <div
          style={{ width: 500, height: 500, background: "blue" }}
          ref={ref}
        />
      </div>
    );
};

export default Pdf;