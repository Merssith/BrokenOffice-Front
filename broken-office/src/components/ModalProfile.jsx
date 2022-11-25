import { Button, TextField } from "@mui/material";
import { Modal } from "antd";
import { useState } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setModalBool } from "../store/modalBool";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useNavigate } from "react-router";
import { isEmail } from "../utils/validation";
import { FormHelperText } from "@mui/material";

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

function ModalProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const avatarForm = new FormData();
  const user = useSelector((state) => state.user);
  const modalBool = useSelector((state) => state.modalBool);
  const [checkConfirm, setCheckConfirm] = useState("none");
  const [email, setEmail] = useState(user.email);
  const [name, setName] = useState(user.name);
  const [telPhone, setTelPhone] = useState(user.telephone);
  const [lastName, setLastName] = useState(user.lastName);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const emailOnChange = (e) => {
    const emailInput = e.target.value;
    setEmail(emailInput);
    isEmail(emailInput) ? setIsValidEmail(true) : setIsValidEmail(false);
  };

  const nameOnChange = (e) => {
    setName(e.target.value);
  };
  const lastNameOnChange = (e) => {
    setLastName(e.target.value);
  };

  const telPhoneOnChange = (e) => {
    setTelPhone(e.target.value);
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
      setTimeout(resolve, 1000);
    }).then(function () {
      setCheckConfirm("checked");
    });
  };

  const changes = {
    email: email,
    name: name,
    lastName: lastName,
    telephone: telPhone,
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    if (isValidEmail) {
      axios.put(`/api/users/update/${user.id}`, changes).then(() => {
        dispatch(setModalBool(false));
        navigate("/user/profile");
      });
    } else {
      alert("The data entered is not correct");
    }
  };

  ///////////////////////

  console.log(changes);
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
        <Button color="primary" onClick={handleSubmit}>
          Save
        </Button>
      ]}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{ marginTop: "1rem" }}
          defaultValue={user.name}
          label="Name"
          variant="filled"
          onChange={nameOnChange}
        />
        <TextField
          sx={{ marginTop: "1rem" }}
          defaultValue={user.lastName}
          label="Lastname"
          variant="filled"
          onChange={lastNameOnChange}
        />
        <TextField
          sx={{ marginTop: "1rem" }}
          label="Email"
          defaultValue={user.email}
          variant="filled"
          onChange={emailOnChange}
        />
        {isValidEmail ? null : (
          <FormHelperText error>Invalid email address</FormHelperText>
        )}
        <TextField
          sx={{ marginTop: "1rem" }}
          label="Telephone number"
          defaultValue={user.telephone}
          variant="filled"
          onChange={telPhoneOnChange}
        />

        <div style={{ height: "0.8rem" }}></div>

        <div style={{ height: "0.8rem" }}></div>

        <Button
          variant="contained"
          sx={ButtonGeneric}
          endIcon={ <AddAPhotoIcon />}
        >
          EDIT PHOTO
         
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

        {checkConfirm === "none" ? null : checkConfirm === "spin" ? (
          <Loading3QuartersOutlined
            style={{
              color: "#444444",
              position: "absolute",
              marginTop: "19.5rem",
              marginLeft: "15rem",
              fontSize: "2rem",
            }}
            spin
          />
        ) : checkConfirm === "checked" ? (
          <CheckCircleIcon
            sx={{
              color: "#BFD732",
              position: "absolute",

              marginTop: "19.5rem",
              marginLeft: "15rem",
              fontSize: "2rem",
            }}
          />
        ) : null}
      </div>
    </Modal>
  );
}

export default ModalProfile;
