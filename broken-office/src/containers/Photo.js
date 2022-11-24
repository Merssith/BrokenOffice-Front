import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import Webcam from "react-webcam";
import { setPhoto } from "../store/photo";
import { Button, useMediaQuery } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const Photo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    dispatch(setPhoto(imageSrc));
    navigate("/ticket/create");
  }, [webcamRef]);
  const isActive = useMediaQuery("(max-width: 800px)");
  return (
    <>
      {isActive ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Webcam
            style={{ height: "15rem", marginTop: "5rem" }}
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
          <Button
            variant="contained"
            sx={{
              marginTop: "1rem",
              color: "#444444",
              backgroundColor: "#BFD732",
              fontSize: "1.3rem",
              width: "20rem",
            }}
            onClick={capture}
          >
            Capture photo
            <div style={{ width: "1rem" }}></div>
            <AddAPhotoIcon />
          </Button>
          {/* {imgSrc && <img src={imageSrc} />} */}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Webcam
            style={{ height: "50vh" }}
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
          />
          <Button
            variant="contained"
            sx={{ color: "#444444", backgroundColor: "#BFD732", width: "20vw" }}
            onClick={capture}
          >
            Capture photo
            <div style={{ width: "1rem" }}></div>
            <AddAPhotoIcon />
          </Button>
          {/* {imgSrc && <img src={imageSrc} />} */}
        </div>
      )}
    </>
  );
};

export default Photo;
