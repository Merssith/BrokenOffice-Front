import React from "react";
import { useDispatch,  } from "react-redux";
import { useNavigate } from "react-router";
import Webcam from "react-webcam";
import { setPhoto } from "../store/photo";

const Photo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const webcamRef = React.useRef(null);
  
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
   
    dispatch( setPhoto(imageSrc))
    navigate("/ticket/create");
    console.log("ESTA ES LA FOTO", imageSrc)
  }, [webcamRef]);

 

  return (
    <>
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capture photo</button>
      {/* {imgSrc && <img src={imageSrc} />} */}
    </div>
    </>
  );
};


export default Photo;
