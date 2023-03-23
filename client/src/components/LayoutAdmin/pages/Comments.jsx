import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Edit, Delete } from "@mui/icons-material";
import axios from "axios";
import loading from "../../../assets/loading.gif";
import {
  FormControlLabel,
  MenuItem,
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
  TextField,
} from "@mui/material";
import Swal from "sweetalert2";

function Comments() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [commentSeleccionado, setCommentSeleccionado] = useState({
    comment: "",
    email: "",
    idCar: "",
    status: "",
    request: "",
  });
  function handleChange(e) {
    setCommentSeleccionado({
      ...commentSeleccionado,
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

  const seleccionarComment = (u, caso) => {
    setCommentSeleccionado(u);
    caso === "Edit" ? openCloseModalEdit() : openCloseModalDelete();
  };

  const ResposonseComment = async () => {
    await axios
      .post("/review/request/" + commentSeleccionado._id, commentSeleccionado)
      .then((response) => {
        var dataNew = data;
        dataNew.map((e) => {
          if (commentSeleccionado._id === e._id) {
            e.request = commentSeleccionado.request;
            e.email = commentSeleccionado.email;
            e.idCar = commentSeleccionado.idCar;
          }
        });
        setData(dataNew);
        openCloseModalEdit();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "The comment response",
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };
  const DeleteComment = async () => {
    await axios
      .delete("/review/" + commentSeleccionado._id)
      .then((response) => {
        setData(data.filter((c) => c.id !== commentSeleccionado._id));
      });
    openCloseModalDelete();
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Comment delete",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const dataInfo = async () => {
    try {
      const { data } = await axios.get("/review/");
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
        <h3 className="text-center pt-2 font-bold text-2xl ">
          RESPONSE COMMENT
        </h3>
        <br />
        <TextField
          name="email"
          margin="normal"
          fullWidth
          label="Email"
          onChange={handleChange}
          value={commentSeleccionado && commentSeleccionado.email}
        />
        <br />
        <TextField
          name="idCar"
          margin="normal"
          fullWidth
          label="Id Car"
          onChange={handleChange}
          value={commentSeleccionado && commentSeleccionado.idCar}
        />
        <br />
        <TextField
          name="comment"
          margin="normal"
          fullWidth
          label="Comments"
          onChange={handleChange}
          value={commentSeleccionado && commentSeleccionado.comment}
        />
        <br />
        <TextField
          name="request"
          margin="normal"
          fullWidth
          label="Request"
          onChange={handleChange}
          value={commentSeleccionado && commentSeleccionado.request}
        />
        <br />
        <br />
        {/* 
        <fieldset>
          <legend>STATUS COMMENTS</legend>
          <RadioGroup
            row
            name="status"
            value={commentSeleccionado && commentSeleccionado.status}
            style={{ marginLeft: "100px" }}
            onChange={handleChange}
          >
            <FormControlLabel
              value={"pendding"}
              control={<Radio size="small" />}
              label="Pendding"
            />
            <FormControlLabel
              value={"answered"}
              control={<Radio size="small" />}
              label="Answered"
            />
          </RadioGroup>
        </fieldset>

        <br /> */}
        <div className="text-center pb-6">
          <Button
            variant="contained"
            color="success"
            onClick={ResposonseComment}
          >
            RESPONSE
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

  const bodyDelete = (
    <div className="bg-white  pl-2 pr-2">
      <p className="text-center pt-12 pb-10 font-bold text-2xl ">
        To confirm if you want to delete the comment{" "}
        <b>{commentSeleccionado && commentSeleccionado.comment}</b>
      </p>

      <div className="text-center pt-4 pb-4 ">
        <Button variant="contained" color="success" onClick={DeleteComment}>
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
    <>
      <div className="bg-white mt-[40px]">
        <TableContainer>
          <Table>
            <TableHead className="bg-[#0d6efd] text-white">
              <TableRow className="text-white">
                {/* <TableCell>Id</TableCell> */}
                <TableCell>Email</TableCell>
                {/* <TableCell>IdCar</TableCell> */}
                <TableCell>Comments</TableCell>
                <TableCell>Request</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Accions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody key="">
              {data.length !== 0 ? (
                data.map((c) => {
                  return (
                    <TableRow key={c.id}>
                      {/* <TableCell>{c._id}</TableCell> */}
                      <TableCell>{c.email}</TableCell>
                      <TableCell>{c.idCar}</TableCell>
                      <TableCell>{c.comment}</TableCell>
                      <TableCell>{c.request}</TableCell>
                      <TableCell>{c.status}</TableCell>
                      <TableCell>
                        <Edit
                          className="cursor-pointer"
                          onClick={() => seleccionarComment(c, "Edit")}
                          color="primary"
                        />
                        &nbsp;&nbsp;&nbsp;
                        <Delete
                          onClick={() => seleccionarComment(c, "Delete")}
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
          className=" mt-14  w-[400px] h-[33%] top-0 left-0 right-0 fixed m-auto scroll-m-2  border-2"
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
    </>
  );
}

export default Comments;
