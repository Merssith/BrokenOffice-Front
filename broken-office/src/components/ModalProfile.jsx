import { Button, TextField } from "@mui/material";
import { Modal } from "antd";
import { useEffect, useState } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import ExploreIcon from "@mui/icons-material/Explore";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setModalBool } from "../store/modalBool";
import { Loading3QuartersOutlined, LoadingOutlined } from "@ant-design/icons";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
function ModalProfile() {
  const dispatch = useDispatch();
  const avatarForm = new FormData();
  const user = useSelector((state) => state.user);
  const modalBool = useSelector((state) => state.modalBool);
  const [checkConfirm, setCheckConfirm] = useState("none");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [telPhone, setTelPhone] = useState("");

  const emailOnChange = (e) => {
    setEmail(e.target.value);
  };
  const passwordOnChange = (e) => {
    setPassword(e.target.value);
  };

  const nameOnChange = (e) => {
    setName(e.target.value);
  };

  const telPhoneOnChange = (e) => {
    setTelPhone(e.target.value);
  };

  ////////

  const handleOk = () => {
    dispatch(setModalBool(false));
  };
  const handleCancel = () => {
    dispatch(setModalBool(false));
  };

  const handleImage = async (e) => {
    const avatarUser = e.target.files[0];

    avatarForm.append("avatar", avatarUser);

    axios({
      method: "put",
      url: `/api/users/avatar/${user.id}`,
      data: avatarForm,
      headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {});
    return new Promise(function (resolve, reject) {
      setCheckConfirm("spin");
      setTimeout(resolve, 2000);
    }).then(function () {
      setCheckConfirm("checked");
    });
  };

  const handleSubmit = () => {};
  ///////////////////////
  const changes = {
    email: email,
    name: name,
    telephone: telPhone,
  };
  // console.log(changes);
  return (
    <Modal
      title="Edit profile"
      open={modalBool}
      onCancel={handleCancel}
      style={{
        textAlign: "center",
      }}
      footer={[
        <Button onClick={handleCancel}>Cancel</Button>,
        <Button color="primary" onClick={handleOk}>
          Submit
        </Button>,
        ,
      ]}
    >
      <TextField
        defaultValue={user.name}
        label="Name"
        variant="filled"
        onChange={nameOnChange}
      />
      <TextField
        sx={{ marginTop: "1rem" }}
        label="Email"
        defaultValue={user.email}
        variant="filled"
        onChange={emailOnChange}
      />
      <TextField
        sx={{ marginTop: "1rem" }}
        label="Telephone number"
        defaultValue={user.telephone}
        variant="filled"
        onChange={telPhoneOnChange}
      />

      <div style={{ height: "0.8rem" }}></div>
      <Button
        variant="contained"
        sx={{
          overflow: "hidden",
          backgroundColor: "#BFD732",
          color: "white",
          textAlign: "center",
          width: "9.2rem",
          justifyContent: "space-around",
        }}
      >
        GEOLOCATION
        <ExploreIcon />
      </Button>

      <div style={{ height: "0.8rem" }}></div>

      <Button
        variant="contained"
        sx={{
          overflow: "hidden",
          backgroundColor: "#BFD732",
          color: "white",
          justifyContent: "space-around",
          width: "9.2rem",
        }}
      >
        EDIT PHOTO
        {/* <div style={{ width: "0.5rem" }}></div> */}
        <AddAPhotoIcon />
        <input
          type="file"
          style={{
            position: "absolute",
            transform: "scale(2)",
            marginLeft: "2rem",
            opacity: "0",
            cursor: "pointer",
          }}
          onChange={handleImage}
        />
      </Button>
      {checkConfirm == "none" ? null : checkConfirm == "spin" ? (
        <Loading3QuartersOutlined
          style={{
            color: "#444444",
            position: "absolute",
            marginTop: "0.2rem",
            marginLeft: "0.5rem",
            fontSize: "2rem",
          }}
          spin
        />
      ) : checkConfirm == "checked" ? (
        <CheckCircleIcon
          sx={{
            color: "#BFD732",
            position: "absolute",

            marginTop: "0.2rem",
            marginLeft: "0.5rem",
            fontSize: "2rem",
          }}
        />
      ) : null}
    </Modal>
  );
}

export default ModalProfile;
