import React, { useEffect, useState } from "react";
import {
  DataGrid,
  getGridSingleSelectOperators,
  getGridStringOperators,
  GridEventListener
} from "@mui/x-data-grid";
import { useNavigate } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import {  Button, Grid } from "@mui/material";
import { useMemo } from "react";
import { Typography } from "antd";
import { setUser } from "../../store/users";

const ViewUsers = () => {
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();
  // const [rowId, setRowId] = useState(null);
  // const [pageSize, setPageSize] = useState(5);

  const ButtonGeneric = {
    margin: "2rem",
    color: "#444444",
    width: "auto",
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

  const columns = useMemo(
    () => [
      {
        field: "id",
        headerName: "ID",
        filterOperators: getGridStringOperators().filter(
          (operator) => operator.value === "contains"
        ),
        sortable: false,
      },
      {
        field: "fullName",
        headerName: "Fullname",
        sortable: false,
        filterable: false
      },
      {
        field: "place",
        headerName: "Place",
        filterable: false,
        sortable: false
      },
      {
        field: "userRoleId",
        headerName: "Role ID",
        sortable: false,
        filterable: false
      },
    ],
    []
  );

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/users/all`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch("");
  }, []);

  //const [columnName, setColumnName] = useState("");
  const [filterValue, setFilterValue] = useState("");
  const onFilterChange = React.useCallback((e) => {
     setFilterValue(e.items[0].value);
      //setColumnName(e.items[0].columnField);
  }, []);

  // const [sortValue, setSortValue] = useState("");
  // const handleSortModelChange = React.useCallback((e) => {
  //   setSortValue(e[0].sort);
  //   setColumnName(e.items[0].field);
  //   //console.log("ESTE ES EL SORT VALUE Y COLUMN", sortValue,columnName)

  // });

  const onSubmit = () => {
    //console.log("entró", filterValue);
      axios
      .get(`http://localhost:3001/api/users/search/${filterValue}`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      .then((response) => {
        setUsers([response.data]);
      })
      .catch("")
    }
  //console.log("ESTE ES EL SET USERS", users )

  const handleRowClick: GridEventListener<'rowClick'> = (params) => {
     navigate(`/users/${params.id}`)
  };
  return (
    <div>
      <Grid container sx={{
          width: "95%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "30px",
          margin: "auto",
        }}>
           <Grid>
          <Typography mt="10px" mb="30px" align="center" variant="h5">
            Users List
          </Typography>
        </Grid>

        <DataGrid
          rows={users}
          columns={columns}
          getRowId={(row) => row.id}
          autoHeight
          // rowsPerPageOptions={[5, 10, 20]}
          // pageSize={pageSize}
          // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          filterMode="server"
          onFilterModelChange={onFilterChange}
          onRowClick={handleRowClick}
          //onClick={alert("HOLA")}
          // sortingMode="server"
          // onSortModelChange={handleSortModelChange}
          />
        <Button  sx={ButtonGeneric}
          type="submit"
          color="primary"
          variant="contained" onClick={onSubmit}>Filtro</Button>
      </Grid>
    </div>
  );
};

export default ViewUsers;
