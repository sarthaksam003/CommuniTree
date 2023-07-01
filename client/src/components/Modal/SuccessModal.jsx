import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Link from "@mui/material/Link";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: 200,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
};

/*toggleSuccesModal is accepted as props from App.jsx to make the success modal work properly
openModal value is used to decide dwhether to hide or show the modal.*/

export default function SuccessModal({ toggleSuccesModal, openModal }) {
  return (
    <div>
      <Modal
        open={openModal}
        onClose={toggleSuccesModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        componentsProps={{
          backdrop: { style: { backgroundColor: "rgba(0,0,0,0.9)" } },
        }}
      >
        <Box sx={style}>
          <CheckCircleOutlineIcon sx={{ color: "green", fontSize: "4rem" }} />
          <Typography
            id="modal-modal-description"
            sx={{ fontSize: "1rem", textAlign: "center" }}
          >
            You have successfully registered!
          </Typography>
          <Typography id="modal-modal-description" sx={{ fontSize: "1rem" }}>
            The data is stored in a MongoDb Database.&nbsp;
            <Link
              href="https://techvinform-backend.onrender.com/formdata"
              color="primary"
              target="_blank"
            >
              Click here
            </Link>
            &nbsp;to fetch all the user data entered in the form from the
            MongoDb collection. The most recent entry is appended at the end and
            is also printed in the console.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
