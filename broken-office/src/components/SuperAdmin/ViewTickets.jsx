import React, { useEffect, useState } from "react";
import {
  DataGrid,
  getGridSingleSelectOperators,
  getGridStringOperators,
  GridEventListener,
} from "@mui/x-data-grid";
import { useNavigate } from "react-router";
import axios from "axios";
import { useSelector } from "react-redux";
import { Button, Grid } from "@mui/material";
import { useMemo } from "react";
import { Typography } from "antd";

const ViewTickets = () => {
  const [tickets, setTickets] = useState([]);
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
        field: "date",
        headerName: "Date",
        filterOperators: getGridStringOperators().filter(
          (operator) => operator.value === "is"
        ),
        sortable: false,
        filterable: false,
      },
      {
        field: "subject",
        headerName: "Subject",
        filterOperators: getGridStringOperators().filter(
          (operator) => operator.value === "is"
        ),
        sortable: false,
        filterable: false,
      },
      {
        field: "status",
        headerName: "Status",
        valueOptions: ["ALL", "OPEN", "IN PROCESS", "PENDING", "CLOSED"],
        filterOperators: getGridSingleSelectOperators().filter(
          (a) => a.value === "is"
        ),
        sortable: false,
      },
    ],
    []
  );

  useEffect(
    () => {
      axios
        .get(`http://localhost:3001/api/incidents/all`)
        .then((response) => {
          setTickets(response.data);
        })
        .catch("");
    },
    [],
    tickets
  );

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
    if (filterValue === "ALL") {
      axios
        .get(`http://localhost:3001/api/incidents/all`, {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
        .then((response) => {
          setTickets(response.data);
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
          setTickets(response.data);
        })
        .catch("");
    }
  };

  const handleRowClick = (params) => {
    navigate(`/tickets/${params.id}`);
  };
  
  return (
    <div>
      <Grid
        container
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
            Ticket List
          </Typography>
        </Grid>

        <DataGrid
          rows={tickets}
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
        <Button
          sx={ButtonGeneric}
          type="submit"
          color="primary"
          variant="contained"
          onClick={onSubmit}
        >
          Filtro
        </Button>
      </Grid>
    </div>
  );
};

export default ViewTickets;
