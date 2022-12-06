import React from "react";
import {
  Paper,
  Grid,
  Typography,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router";
import { message } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useSelector } from "react-redux";

const ButtonGeneric = {
  margin: "2rem",
  color: "#444444",
  width: "auto",
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

const ProfileView = () => {
  const params = useParams();
  const [user, setUser] = useState({});
  const [dropdown, setDropdown] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.theme);
  const messageSuccess = () => {
    message.success({
      content: "User role modified successfully",
      className: "text",
      style: {
        zIndex: "1",
      },
      duration: 4,
    });
  };

  useEffect(() => {
    axios
      .get(`/api/users/search/${params.id}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        setUser(response.data);
      })
      .catch("");
  }, [user.userRole]);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  const handleDelete = (userId) => {
    axios.delete(`/api/users/delete/${userId}`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
    navigate("/users/all");
  };

  const handleSetUser = (userId) => {
    axios
      .put(
        `/api/users/update/${userId}`,
        { userRoleId: 3 },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(() => messageSuccess());
  };
  const handleSetAdmin = (userId) => {
    axios
      .put(
        `/api/users/update/${userId}`,
        { userRoleId: 2 },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(() => messageSuccess());
  };
  const handleSetSuperAdmin = (userId) => {
    axios
      .put(
        `/api/users/update/${userId}`,
        { userRoleId: 1 },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      )
      .then(() => messageSuccess());
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Typography mt="10px" mb="30px" align="center" variant="h5">
        PROFILE
      </Typography>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {user.id ? (
          <>
            <Paper
              sx={{
                width: "70%",
                maxWidth: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                margin: "auto",
              }}
            >
              <Grid
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  margin: "auto",
                }}
              >
                <Grid sx={{ alignItems: "left" }}>
                  <img
                    style={{
                      width: "100%",
                      maxWidth: "100px",
                      borderRadius: "10%",
                      border: "1px solid black",
                    }}
                    src={user.avatar}
                    alt="User avatar"
                  />
                </Grid>
                <Grid>
                  <Typography
                    sx={{ marginLeft: "1rem", textAlign: "center" }}
                    variant="h6"
                  >
                    {
                      <strong>
                        {user.name} {user.lastName}
                      </strong>
                    }
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                sx={{
                  width: "100%",
                  maxWidth: "450px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography variant="subtitle1" mt="10px">
                  {" "}
                  {<strong>Glober ID:</strong>} {user.id}
                </Typography>
                <Typography variant="subtitle1" mt="10px">
                  {" "}
                  {<strong>Rol:</strong>}{" "}
                  {user.userRole.id === 1 ? (
                    <>
                      <Dropdown
                        isOpen={dropdown}
                        toggle={handleDropdown}
                        direction="right"
                        size="sm"
                      >
                        <DropdownToggle caret className={
                            darkMode ? "dropdownBtnDarkMode" : "dropdownBtn"
                          }>
                          {user.userRole.name}
                        </DropdownToggle>
                        <DropdownMenu className={darkMode ? "dropdownMenuDarkMode" : null}>
                          <DropdownItem className={
                              darkMode
                                ? "dropdownItemDarkMode"
                                : "dropdown-item"
                            } header>Edit user role</DropdownItem>
                          <DropdownItem className={
                              darkMode
                                ? "dropdownItemDarkMode"
                                : "dropdown-item"
                            } diviver />
                          <DropdownItem className={
                              darkMode
                                ? "dropdownItemDarkMode"
                                : "dropdown-item"
                            } onClick={() => handleSetUser(user.id)}>
                            User
                          </DropdownItem>
                          <DropdownItem className={
                              darkMode
                                ? "dropdownItemDarkMode"
                                : "dropdown-item"
                            } onClick={() => handleSetAdmin(user.id)}>
                            Admin
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </>
                  ) : null}
                  {user.userRole.id === 2 ? (
                    <>
                      <>
                        <Dropdown
                          isOpen={dropdown}
                          toggle={handleDropdown}
                          direction="right"
                          size="sm"
                        >
                          <DropdownToggle
                            caret
                            className={
                              darkMode ? "dropdownBtnDarkMode" : "dropdownBtn"
                            }
                          >
                            {user.userRole.name}
                          </DropdownToggle>
                          <DropdownMenu
                            className={darkMode ? "dropdownMenuDarkMode" : null}
                          >
                            <DropdownItem
                              className={
                                darkMode
                                  ? "dropdownHeaderDarkMode"
                                  : "dropdown-header"
                              }
                              header
                            >
                              Edit user role
                            </DropdownItem>
                            <DropdownItem className={
                              darkMode
                                ? "dropdownItemDarkMode"
                                : "dropdown-item"
                            } diviver />
                            <DropdownItem className={
                              darkMode
                                ? "dropdownItemDarkMode"
                                : "dropdown-item"
                            }
                              onClick={() => handleSetUser(user.id)}
                            >
                              User
                            </DropdownItem>
                            <DropdownItem className={
                              darkMode
                                ? "dropdownItemDarkMode"
                                : "dropdown-item"
                            }
                              onClick={() => handleSetSuperAdmin(user.id)}
                            >
                              Super Admin
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </>
                    </>
                  ) : null}
                  {user.userRole.id === 3 ? (
                    <>
                      <>
                        <Dropdown
                          isOpen={dropdown}
                          toggle={handleDropdown}
                          direction="right"
                          size="sm"
                        >
                          <DropdownToggle caret className={
                            darkMode ? "dropdownBtnDarkMode" : "dropdownBtn"
                          }>
                            {user.userRole.name}
                          </DropdownToggle>
                          <DropdownMenu className={darkMode ? "dropdownMenuDarkMode" : null}>
                            <DropdownItem className={
                              darkMode
                                ? "dropdownItemDarkMode"
                                : "dropdown-item"
                            } header>Edit user role</DropdownItem>
                            <DropdownItem className={
                              darkMode
                                ? "dropdownItemDarkMode"
                                : "dropdown-item"
                            } diviver />
                            <DropdownItem className={
                              darkMode
                                ? "dropdownItemDarkMode"
                                : "dropdown-item"
                            }
                              onClick={() => handleSetAdmin(user.id)}
                            >
                              Admin
                            </DropdownItem>
                            <DropdownItem className={
                              darkMode
                                ? "dropdownItemDarkMode"
                                : "dropdown-item"
                            }
                              onClick={() => handleSetSuperAdmin(user.id)}
                            >
                              Super Admin
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </>
                    </>
                  ) : null}
                </Typography>
                <Typography variant="subtitle1" mt="10px">
                  {" "}
                  {<strong>Office:</strong>} {user.office.name}
                </Typography>

                <Typography variant="subtitle1" mt="10px">
                  {<strong>Location:</strong>}
                </Typography>
                <Typography variant="subtitle1" mt="10px">
                  {user.place}
                </Typography>

                {user.telephone && (
                  <Typography variant="subtitle1" mt="10px">
                    {<strong>Tel. n°:</strong>} {user.telephone}
                  </Typography>
                )}
                <Typography variant="subtitle1" mt="10px">
                  {" "}
                  {<strong>Email:</strong>} {user.email}
                </Typography>
                <Button style={ButtonGeneric} onClick={handleClickOpen}>
                  DELETE USER
                </Button>
                <div>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      {"Are you sure?"}
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        This user will be removed from our database.
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions
                      sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                      <Button
                        autoFocus
                        sx={ButtonGeneric}
                        onClick={() => handleDelete(user.id)}
                      >
                        Yes
                      </Button>
                      <Button sx={ButtonGeneric} onClick={handleClose}>
                        Cancel
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </Grid>
            </Paper>
          </>
        ) : null}
      </Grid>
      <Grid sx={{ mb: "100px" }} />
    </>
  );
};

export default ProfileView;
