import { Button, useMediaQuery, CircularProgress } from "@mui/material";
import { message, Modal } from "antd";
import Webcam from "react-webcam";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useDispatch, useSelector } from "react-redux";
import { setModalBool } from "../store/modalBool";
import { setPhoto } from "../store/photo";
import { setIncidentPhoto } from "../store/photo";

const ButtonGeneric = {
  margin: 0,
  color: "#444444",
  boxShadow: 4,
  transform: "scale(1.2)",
  backgroundColor: "#BFD732",
  borderRadius: "20px",
  "&:hover": {
    backgroundColor: "#BFD732",
  },
  "&:active": {
    color: "white",
  },
};

function ModalPhoto() {
  const modalBool = useSelector((state) => state.modalBool);
  const dispatch = useDispatch();
  const webcamRef = React.useRef(null);
  const [loadingPhoto, setLoadingPhoto] = useState(false);
  const [level, setLevel] = useState(0);
  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    dispatch(setPhoto(imageSrc));
    setLoadingPhoto(true);
    axios
      .post(
        "/api/incidents/photo",
        {
          incidentPhoto: imageSrc,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then((res) => {
        dispatch(setIncidentPhoto(res.data));
        setLoadingPhoto(false);
        handleCancel();
      });
    // messageSuccess();
    
  }, [webcamRef]);
  const isActive = useMediaQuery("(max-width: 800px)");

  const handleCancel = () => {
    dispatch(setModalBool(false));
  };

  const messageSuccess = () => {
    message.success({
      content: "Photo uploaded successfully!",
      className: "text",
      style: {
        zIndex: "1",
      },
      duration: 4,
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setLevel((newLevel) => (newLevel >= 100 ? 0 : newLevel + 10));
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <Modal
        open={modalBool}
        onCancel={handleCancel}
        sx={{
          textAlign: "center",
        }}
        footer={[<Button onClick={handleCancel}>Cancel</Button>]}
      >
        {isActive ? (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                margin: "auto",
                alignItems: "center",
              }}
            > 
              <Webcam
                style={{ margin: "15px" }}
                width={320}
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
              />
              
              <Button
                variant="contained"
                sx={ButtonGeneric}
                onClick={capture}
                endIcon={<AddAPhotoIcon />}
              >
                Capture photo
              </Button>
              <div style={{ width:'auto', marginTop:'40%', position:'absolute', left: '50%', transform: 'translate(-50%, 0)'}}>{loadingPhoto && <CircularProgress variant="determinate" color='primary' value={level} />}</div>
            </div>
          </>
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
              style={{ margin: "15px" }}
              width={420}
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
            <Button
              variant="contained"
              sx={{
                color: "#444444",
                backgroundColor: "#BFD732",
                width: "20vw",
              }}
              onClick={capture}
            >
              Capture photo
              <div style={{ width: "1rem" }}></div>
              <AddAPhotoIcon />
            </Button>
            <div style={{ width:'auto', position:'absolute', left: '50%', transform: 'translate(-50%, 0)'}}>{loadingPhoto && <CircularProgress variant="determinate" color='primary' value={level} />}</div>
          </div>
        )}
      </Modal>
    </>
  );
}

export default ModalPhoto;
