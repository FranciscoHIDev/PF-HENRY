import React, { useState, useEffect } from "react";
import { Edit, Delete } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import loading from "../../../assets/loading.gif";
import axios from "axios";
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Modal,
  Button,
} from "@mui/material";
import Swal from "sweetalert2";

function Bookings() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [userSeleccionado, setUserSeleccionado] = useState({
    active: "",
    roll: "",
  });
  function handleChange(e) {
    setUserSeleccionado({
      ...userSeleccionado,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  }
  const openCloseModalEdit = () => {
    setModalEdit(!modalEdit);
  };

  const openCloseModalDelete = () => {
    setModalDelete(!modalDelete);
  };

  const seleccionarUser = (u, caso) => {
    setUserSeleccionado(u);
    caso === "Edit" ? openCloseModalEdit() : openCloseModalDelete();
  };

  const PutUsers = async () => {
    await axios
      .put("/feedback/" + userSeleccionado._id, userSeleccionado)
      .then((response) => {
        var dataNew = data;
        console.log(dataNew);
        dataNew.map((user) => {
          if (userSeleccionado._id === user._id) {
            user.active = userSeleccionado.active;
          }
        });
        setData(dataNew);
        openCloseModalDelete();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "The user has been deactivated successfully",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  const peticionPut = async () => {
    await axios
      .put("/feedback/" + userSeleccionado._id, userSeleccionado)
      .then((response) => {
        var dataNew = data;
        dataNew.map((user) => {
          if (userSeleccionado._id === user._id) {
            user.active = userSeleccionado.active;
            user.roll = userSeleccionado.roll;
          }
        });
        setData(dataNew);
        openCloseModalEdit();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "The user has been successfully modified",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  const dataInfo = async () => {
    try {
      const { data } = await axios.get("/feedback/");
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    dispatch(dataInfo);
  }, [dispatch]);

  const bodyEdit = (
    <div>
      <div className="bg-white  pl-2 pr-2">
        <h3 className="text-center pt-2 font-bold text-2xl ">MANAGER USERS</h3>
        <br />
        <fieldset>
          <legend>Active</legend>
          <RadioGroup
            row
            name="active"
            value={userSeleccionado && userSeleccionado.active}
            style={{ marginLeft: "100px" }}
            onChange={handleChange}
          >
            <FormControlLabel
              value={"valid"}
              control={<Radio size="small" />}
              label="Valid"
            />
            <FormControlLabel
              value={"invalid"}
              control={<Radio size="small" />}
              label="Invalid"
            />
          </RadioGroup>
        </fieldset>
        <br />
        <fieldset>
          <legend>Roll</legend>
          <RadioGroup
            row
            name="roll"
            value={userSeleccionado && userSeleccionado.roll}
            style={{ marginLeft: "100px" }}
            onChange={handleChange}
          >
            <FormControlLabel
              value={"user"}
              control={<Radio size="small" />}
              label="User"
            />
            <FormControlLabel
              value={"superAdmin"}
              control={<Radio size="small" />}
              label="SuperAdmin"
            />
          </RadioGroup>
        </fieldset>
        <br />
        <div className="text-center pb-6">
          <Button variant="contained" color="success" onClick={peticionPut}>
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={openCloseModalEdit}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );

  const bodyDelete = (
    <div className="bg-white  pl-2 pr-2">
      <p className="text-center pt-12 pb-10 font-bold text-2xl ">
        To confirm if you want to deactivate the user{" "}
        <b>{userSeleccionado && userSeleccionado.name}</b> select the invalid
        option
      </p>
      <fieldset>
        <RadioGroup
          row
          name="active"
          value={userSeleccionado && userSeleccionado.active}
          style={{ marginLeft: "300px" }}
          onChange={handleChange}
        >
          <FormControlLabel
            value={"invalid"}
            control={<Radio size="small" />}
            label="Invalid"
          />
        </RadioGroup>
      </fieldset>
      <div className="text-center pt-4 pb-4 ">
        <Button variant="contained" color="success" onClick={PutUsers}>
          Yes
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={openCloseModalDelete}
        >
          No
        </Button>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      <TableContainer>
        <Table>
          <TableHead className="bg-[#0d6efd] ">
            <TableRow>
              {/* <TableCell>Id</TableCell> */}
              <TableCell>Date</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status-Pay</TableCell>
              <TableCell>Status-Car</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Accions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length !== 0 ? (
              data.map((u) => {
                return (
                  <TableRow key={u.id}>
                    {/* <TableCell>{u._id}</TableCell> */}
                    <TableCell>{u.date_approved}</TableCell>
                    <TableCell>{u.picture_url}</TableCell>
                    <TableCell>{u.email}</TableCell>
                    <TableCell>{u.status}</TableCell>
                    <TableCell>{u.statusCar}</TableCell>
                    <TableCell>{u.unit_price}</TableCell>
                    <TableCell>{u.active}</TableCell>
                    <TableCell>
                      <Edit
                        className="cursor-pointer"
                        onClick={() => seleccionarUser(u, "Edit")}
                        color="primary"
                      />
                      &nbsp;&nbsp;&nbsp;
                      <Delete
                        onClick={() => seleccionarUser(u, "Delete")}
                        color="error"
                        className="cursor-pointer"
                      />
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <img className="items-center" src={loading} alt="loading" />
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        className=" mt-40  w-[400px] h-[33%] top-0 left-0 right-0 fixed m-auto scroll-m-2  border-2"
        open={modalEdit}
        onClose={() => openCloseModalEdit()}
      >
        {bodyEdit}
      </Modal>

      <Modal
        className=" mt-40  w-[700px] h-[33%] top-0 left-0 right-0 fixed m-auto scroll-m-2"
        open={modalDelete}
        onClose={() => openCloseModalDelete()}
      >
        {bodyDelete}
      </Modal>
    </div>
  );
}

export default Bookings;
