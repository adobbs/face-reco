import React from "react";

const FaceRecognition = ({ imageUrl }) => {
    return (
        <div className='center ma'>
            <img className='faceCheck' src={imageUrl} alt={''} />
        </div>
    );
}

export default FaceRecognition;
