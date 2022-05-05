import React, { useState, useReducer } from 'react';

import Navigation from './Components/Navigation/Navigation.component';
import Logo from './Components/Logo/Logo.component';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm.component';
import Rank from './Components/Rank/Rank.component';
import UploadedImage from './Components/UploadedImage/UploadedImage.component';
import DropUpload from './Components/DropUpload/DropUpload.component';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import './App.css';

const USER_ID = 'gracedward';
// Your PAT (Personal Access Token) can be found in the portal under Authentification
const PAT = '6c9261a0e4f94094853624fa54d898bc';
const APP_ID = 'ec699fe83f2c4411b2c942f7724500fd';
const MODEL_ID = 'age-demographics-recognition';
const MODEL_VERSION_ID = 'fb9f10339ac14e23b8e960e74984401b';


function App() {

  const [imageUrl, setImageUrl] = useState('https://upload.wikimedia.org/wikipedia/en/4/48/Blank.JPG');
  const [msg, setMsg] = useState('Mirror, mirror, what is my age?');

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const onImageChange = async ( event ) => {
    
    const getBase64 = async (file) => {
        return new Promise((resolve, reject) => {
          let reader = new FileReader();     
          reader.onload = () => {
            resolve(reader.result);
          };      
          reader.onerror = reject;     
          reader.readAsDataURL(file);
        })
      }
    const processFile = async (file) => {
        try {
          let contentBuffer = await getBase64(file);
          contentBuffer = contentBuffer.replace(/data:image\/.{3,4};base64,/,'');
          const raw = JSON.stringify({
                "user_app_id": {
                    "user_id": USER_ID,
                    "app_id": APP_ID
                },
                "inputs": [
                    {
                        "data": {
                            "image": {
                                "base64": contentBuffer
                            }
                        }
                    }
                ]
            });
        
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Key ' + PAT
                },
                body: raw
            };
            fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
            .then(response => response.text())
            .then(result => {setMsg("The age is around "+JSON.parse(result).outputs[0].data.concepts[0].name)})
            .catch(error => console.log('error', error));
        } catch(err) {
          console.log(err);
        }
    }
    let fileUpload = '';
    if (event.target){
      fileUpload = event.target.files[0];
    } else {
      fileUpload = event[0];
    }
    if(!fileUpload.type.match(/image/)) {
      setMsg("Sorry, file is not an image. Please try again!");
      setImageUrl("https://upload.wikimedia.org/wikipedia/en/4/48/Blank.JPG");
      return;
    }
    processFile(fileUpload);
    setImageUrl(URL.createObjectURL(fileUpload));  
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DROP_DEPTH':
      return { ...state, dropDepth: action.dropDepth }
    case 'SET_IN_DROP_ZONE':
      return { ...state, inDropZone: action.inDropZone };
    case 'ADD_FILE_TO_LIST':
      return { ...state, fileList: state.fileList.concat(action.files) };
    default:
      return state;
  }
};
const [data, dispatch] = useReducer(
  reducer, { dropDepth: 0, inDropZone: false, fileList: [] }
)



  return (
    <div className="App">
      <DropUpload data={data} dispatch={dispatch} onImageChange={onImageChange}/>
      <Navigation />
      <Logo>
        <UploadedImage url={imageUrl} />
        <Rank msg={msg}/>
      </Logo>
      <ImageLinkForm onImageChange={onImageChange} />
      <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.2,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
    </div>
  );
}

export default App;