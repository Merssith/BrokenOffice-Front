import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Button,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const [dropdown, setDropdown] = useState(false);
  const [filterValue, setFilterValue] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (filterValue === 0) {
      axios
        .get(`/api/users/all`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => {
          setUsers(response.data);
        })
        .catch("");
    } else {
      axios
        .get(
          `http://localhost:3001/api/incidents/search?status=${filterValue}`,
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        )
        .then((response) => {
          setUsers(response.data);
        })
        .catch("");
    }
  }, [users.length, filterValue]);

  const handleManage = (id) => {
    navigate(`/users/${id}`);
  };
  const handleDropdown = () => {
    setDropdown(!dropdown);
  };
  const handleDelete = (userId) => {
    axios.get(`/api/users/delete/${userId}`, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });
  };

  return (
    <>
      <Grid
        sx={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "30px",
          margin: "auto",
        }}
      >
        <Grid>
          <Typography mt="10px" mb="30px" align="center" variant="h5">
            All Users
          </Typography>
        </Grid>
        <TableContainer sx={{ width: "100%" }} component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ width: "15%", textAlign: "center", fontSize: 12 }}
                >
                  <Typography>{<strong>User ID</strong>}</Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                  <Typography>{<strong> Name </strong>}</Typography>
                </TableCell>
                <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                  <Typography>
                    {
                      <Dropdown isOpen={dropdown} toggle={handleDropdown}>
                        <DropdownToggle caret className="dropdownBtn">
                          Role
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Filter by Role</DropdownItem>
                          <DropdownItem diviver />
                          <DropdownItem onClick={() => setFilterValue(0)}>
                            All users
                          </DropdownItem>
                          <DropdownItem onClick={() => setFilterValue(3)}>
                            User
                          </DropdownItem>
                          <DropdownItem onClick={() => setFilterValue(2)}>
                            Admin
                          </DropdownItem>
                          <DropdownItem onClick={() => setFilterValue(1)}>
                            Super Admin
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    }
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, i) => (
                <TableRow onClick={() => handleManage(user.id)} key={i}>
                  <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                    {user.id}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                    {user.fullName}
                  </TableCell>
                  <TableCell sx={{ textAlign: "center", fontSize: 12 }}>
                    {user.userRole.name}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </>
  );
};

export default ViewUsers;
