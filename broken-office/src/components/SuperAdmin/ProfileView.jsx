import React from "react";
import { Paper, Grid, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { useParams } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

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
  }, [params.id]);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  const handleDelete = (userId) => {
    axios.delete(`/api/users/delete/${userId}`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
  };

  const handleSetUser = (userId) => {
    axios.put(
      `/api/users/update/${userId}`,
      { userRoleId: 3 },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
  };
  const handleSetAdmin = (userId) => {
    axios.put(
      `/api/users/update/${userId}`,
      { userRoleId: 2 },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
  };
  const handleSetSuperAdmin = (userId) => {
    axios.put(
      `/api/users/update/${userId}`,
      { userRoleId: 1 },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
  };

  return (
    <>
      <Typography mt="10px" mb="30px" align="center" variant="h5">
        Profile
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
                  {user.userRole.id == 1 ? (
                    <>
                      <Dropdown
                        isOpen={dropdown}
                        toggle={handleDropdown}
                        direction="right"
                        size="sm"
                      >
                        <DropdownToggle caret className="dropdownBtn">
                          {user.userRole.name}
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Edit user role</DropdownItem>
                          <DropdownItem diviver />
                          <DropdownItem onClick={() => handleSetUser(user.id)}>
                            User
                          </DropdownItem>
                          <DropdownItem onClick={() => handleSetAdmin(user.id)}>
                            Admin
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </>
                  ) : null}
                  {user.userRole.id == 2 ? (
                    <>
                      <>
                        <Dropdown
                          isOpen={dropdown}
                          toggle={handleDropdown}
                          direction="right"
                          size="sm"
                        >
                          <DropdownToggle caret className="dropdownBtn">
                            {user.userRole.name}
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>Edit user role</DropdownItem>
                            <DropdownItem diviver />
                            <DropdownItem
                              onClick={() => handleSetUser(user.id)}
                            >
                              User
                            </DropdownItem>
                            <DropdownItem
                              onClick={() => handleSetSuperAdmin(user.id)}
                            >
                              Super Admin
                            </DropdownItem>
                          </DropdownMenu>
                        </Dropdown>
                      </>
                    </>
                  ) : null}
                  {user.userRole.id == 3 ? (
                    <>
                      <>
                        <Dropdown
                          isOpen={dropdown}
                          toggle={handleDropdown}
                          direction="right"
                          size="sm"
                        >
                          <DropdownToggle caret className="dropdownBtn">
                            {user.userRole.name}
                          </DropdownToggle>
                          <DropdownMenu>
                            <DropdownItem header>Edit user role</DropdownItem>
                            <DropdownItem diviver />
                            <DropdownItem
                              onClick={() => handleSetAdmin(user.id)}
                            >
                              Admin
                            </DropdownItem>
                            <DropdownItem
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
                <Button
                  style={ButtonGeneric}
                  onClick={() => handleDelete(user.id)}
                >
                  {" "}
                  DELETE USER{" "}
                </Button>
              </Grid>
            </Paper>
          </>
        ) : null}
      </Grid>
    </>
  );
};

export default ProfileView;
