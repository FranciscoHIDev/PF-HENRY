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
  const [bookSeleccionado, setBookSeleccionado] = useState({
    statusCar: "",
  });
  function handleChange(e) {
    setBookSeleccionado({
      ...bookSeleccionado,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  }
  const openCloseModalEdit = () => {
    setModalEdit(!modalEdit);
  };

  const seleccionarShop = (u, caso) => {
    setBookSeleccionado(u);
    caso === "Edit" ? openCloseModalEdit() : null;
  };

  const UpdateDelivery = async () => {
    await axios
      .put("/feedback/" + bookSeleccionado._id, bookSeleccionado)
      .then((response) => {
        var dataNew = data;
        dataNew.map((e) => {
          if (bookSeleccionado._id === e._id) {
            e.statusCar = bookSeleccionado.statusCar;
          }
        });
        setData(dataNew);
        openCloseModalEdit();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "The car has been delivered",
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
        <h3 className="text-center pt-2 font-bold text-2xl ">CAR DELIVERY</h3>
        <br />
        <fieldset>
          <legend>STATUS CAR</legend>
          <RadioGroup
            row
            name="statusCar"
            value={bookSeleccionado && bookSeleccionado.statusCar}
            style={{ marginLeft: "100px" }}
            onChange={handleChange}
          >
            <FormControlLabel
              value={"undelivered"}
              control={<Radio size="small" />}
              label="Undelivered"
            />
            <FormControlLabel
              value={"delivered"}
              control={<Radio size="small" />}
              label="Delivered"
            />
          </RadioGroup>
        </fieldset>

        <br />
        <div className="text-center pb-6">
          <Button variant="contained" color="success" onClick={UpdateDelivery}>
            DELIVER
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={openCloseModalEdit}
          >
            CANCEL
          </Button>
        </div>
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
              <TableCell>Order</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status-Pay</TableCell>
              <TableCell>Status-Car</TableCell>
              <TableCell>Accions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length !== 0 ? (
              data.map((u) => {
                return (
                  <TableRow key={u.id}>
                    {/* <TableCell>{u._id}</TableCell> */}
                    <TableCell>{u.order[0].id}</TableCell>
                    <TableCell>{u.date_approved}</TableCell>
                    <TableCell>{u.email}</TableCell>
                    <TableCell>{u.items[0].unit_price}</TableCell>
                    {/* <TableCell>{u.order[0].type}</TableCell> */}
                    <TableCell>{u.status}</TableCell>
                    <TableCell>{u.statusCar}</TableCell>
                    <TableCell>
                      <Edit
                        className="cursor-pointer"
                        onClick={() => seleccionarShop(u, "Edit")}
                        color="primary"
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
    </div>
  );
}

export default Bookings;
