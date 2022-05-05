import React from 'react';
import './ImageLinkForm.styles.scss'; 

const ImageLinkForm = ({onImageChange}) => {

    return (
        <div>
            <div>
                {/*<input className="f4 pa2 w-80 center bn" type="text" placeholder="enter url" />
                <button className="w-20 grow f4 link ph3 pv2 dib white bg-navy bl bw1 b--solid b--navy">Run!</button>*/}
                <input type="file" onChange={onImageChange} />
            </div>
        </div>
    )
} 

export default ImageLinkForm;