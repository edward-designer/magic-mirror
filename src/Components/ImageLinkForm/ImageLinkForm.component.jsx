import React from 'react';
import './ImageLinkForm.styles.scss'; 

const ImageLinkForm = () => {

    return (
        <div>
            <p className="f3">{`This Magic Brain will detect faces in your pictures. Give it a try!`}</p>
            <div>
                <input className="f4 pa2 w-80 center bn" type="text" placeholder="enter url" />
                <button className="w-20 grow f4 link ph3 pv2 dib white bg-navy bl bw1 b--solid b--navy">Run!</button>
            </div>
        </div>
    )
} 

export default ImageLinkForm;