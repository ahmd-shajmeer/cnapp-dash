import { useState } from "react";
import { Box, Button, Drawer, Typography } from "@mui/material";
import CategoryTabs from "../Tabs/CategoryTabs";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { styled } from "@mui/material/styles";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    minWidth: "600px",
  },
}));

const StyledButton = styled(Button)(({theme}) => ({
  color: "grey",
  border: "1px solid rgba(0, 0, 0, 0.4)",
  "&:hover": {
    border: "1px solid rgba(0, 0, 0, 0.4)",
    backgroundColor: "1px solid rgba(0, 0, 0, 0.2)",
  }
}))

function AddWidgetDrawer() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <StyledButton
        variant="outlined"
        endIcon={<AddOutlinedIcon />}
        onClick={handleOpen}>
        Add widget
      </StyledButton>
      <StyledDrawer
        anchor="right"
        open={open}
        onClose={handleClose}>
        <Box
          sx={{
            padding: "0.25rem 1rem",
            backgroundColor: "#1a237e",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}>
          <Typography
            variant="h6"
            sx={{ margin: "0" }}
            gutterBottom>
            Add widget
          </Typography>
          <CloseOutlinedIcon onClick={handleClose} />
        </Box>
        <Box sx={{ padding: "1rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
          <Typography
            sx={{ margin: "0" }}
            gutterBottom>
            Personalise your dashboard by adding the following widget
          </Typography>
          <CategoryTabs handleClose={handleClose} />
        </Box>
      </StyledDrawer>
    </>
  );
}

export default AddWidgetDrawer;
