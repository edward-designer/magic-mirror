import React from 'react';
import './ImageLinkForm.styles.scss'; 

const ImageLinkForm = ({onImageChange}) => {

    return (
        <div>
            {/*<input type="file" onChange={onImageChange} />*/}
            <p>Drag your photos here...</p>
        </div>
    )
} 

export default ImageLinkForm;