import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
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

function ContactsForms() {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const dataInfo = async () => {
    try {
      const { data } = await axios.get("/contact/");
      setData(data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    dispatch(dataInfo);
  }, [dispatch]);

  return (
    <>
      <div className="bg-white mt-[40px]">
        <TableContainer>
          <Table>
            <TableHead className="bg-[#0d6efd] text-white">
              <TableRow className="text-white">
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Message</TableCell>
                <TableCell>Active</TableCell>
                {/* <TableCell>Accions</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody key="">
              {data.length !== 0 ? (
                data.map((c) => {
                  return (
                    <TableRow key={c.id}>
                      <TableCell>{c._id}</TableCell>
                      <TableCell>{c.name}</TableCell>
                      <TableCell>{c.lastname}</TableCell>
                      <TableCell>{c.emailAddress}</TableCell>
                      <TableCell>{c.message}</TableCell>
                      <TableCell>{c.active}</TableCell>
                      {/* <TableCell>
                        <Edit
                          className="cursor-pointer"
                          color="primary"
                          onClick={() => selectCar(c, "Edit")}
                        />
                        &nbsp;&nbsp;&nbsp;
                        <Delete
                          onClick={() => selectCar(c, "Delete")}
                          color="error"
                          className="cursor-pointer"
                        />
                      </TableCell> */}
                    </TableRow>
                  );
                })
              ) : (
                <img className="items-center" src={loading} alt="loading" />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

export default ContactsForms;
