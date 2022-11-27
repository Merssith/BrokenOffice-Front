import { Button, useMediaQuery } from "@mui/material";
import { message, Modal } from "antd";
import Webcam from "react-webcam";
import React from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { useDispatch, useSelector } from "react-redux";
import { setModalBool } from "../store/modalBool";
import { setPhoto } from "../store/photo";

const ButtonGeneric = {
  margin: "2rem",
  color: "#444444",
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

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();

    dispatch(setPhoto(imageSrc));
    messageSuccess();
    handleCancel();
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

  return (
    <Modal
      open={modalBool}
      onCancel={handleCancel}
      sx={{
        textAlign: "center",
      }}
      footer={[<Button onClick={handleCancel}>Cancel</Button>]}
    >
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
            sx={ButtonGeneric}
            onClick={capture}
            endIcon={<AddAPhotoIcon />}
          >
            Capture photo
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
    </Modal>
  );
}

export default ModalPhoto;
