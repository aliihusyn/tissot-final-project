import Swal from "sweetalert2";

const successSwal = ( message ) => {
  const Swal = require("sweetalert2");
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
    background: "#181822",
    iconColor: "lime",
    color: "#fff",
  });
};

const errorSwal = ({ message }) => {
  const Swal = require("sweetalert2");
  Swal.fire({
    position: "top-end",
    icon: "error",
    title: message,
    showConfirmButton: false,
    timer: 1500,
    background: "#181822",
    iconColor: "#f00",
    color: "#fff",
  });
};

export { errorSwal, successSwal };
