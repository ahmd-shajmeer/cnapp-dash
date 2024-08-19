import { useSelector, useDispatch } from "react-redux";
import {
  addChartFields,
  updatedFieldValue,
  updateChartField,
} from "../../redux/slices/widgetFormSlice";
import { addWidget } from "../../redux/slices/categoriesSlice";
import { styled } from "@mui/material/styles";

import {
  Box,
  Button,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& input": { width: "100%", fontSize: "0.875rem", padding: "0.3rem 0.5rem" },
}));

function AddWidgetForm({ categoryId, handleClose }) {
  const widgetFormData = useSelector((state) => state.widgetForm.value);
  const dispatch = useDispatch();

  const handleInputChange = (item) => {
    dispatch(updatedFieldValue(item));
  };

  const handleChartFieldInputChange = (item) => {
    dispatch(updateChartField(item));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(addWidget({ categoryId, widget: widgetFormData }));
    handleClose();
  };

  return (
    <Box
      component="form"
      sx={{
        padding: "1rem",
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
      }}
      onSubmit={handleFormSubmit}
      noValidate
      autoComplete="off">
      <Box sx={{marginBottom: "0.6rem"}}>
        <InputLabel htmlFor="name" sx={{color: "#000000DE"}}>Name:</InputLabel>
        <StyledTextField
          id="name"
          sx={{width: "100%"}}
          size="small"
          placeholder="Enter the widget name..."
          variant="outlined"
          value={widgetFormData.name}
          onChange={(e) =>
            handleInputChange({ key: "name", value: e.target.value })
          }
          required
        />
      </Box>
      <Box>
        <Typography>Chart Data:</Typography>
        {widgetFormData.chartData &&
          widgetFormData.chartData.map((field) => (
            <Stack
              key={field.id}
              direction="row"
              sx={{marginBottom: "0.6rem"}}
              gap={1}>
              <StyledTextField
                size="small"
                placeholder="Enter label..."
                variant="outlined"
                onChange={(e) =>
                  handleChartFieldInputChange({
                    chartFieldId: field.id,
                    key: "label",
                    value: e.target.value,
                  })
                }
              />
              <StyledTextField
                size="small"
                sx={{ width: "8rem" }}
                placeholder="Enter value..."
                variant="outlined"
                onChange={(e) =>
                  handleChartFieldInputChange({
                    chartFieldId: field.id,
                    key: "value",
                    value: parseInt(e.target.value),
                  })
                }
              />
              <StyledTextField
                type="color"
                sx={{ width: "2rem" }}
                size="small"
                variant="outlined"
                onChange={(e) =>
                  handleChartFieldInputChange({
                    chartFieldId: field.id,
                    key: "color",
                    value: e.target.value,
                  })
                }
              />
            </Stack>
          ))}
        <Button
          variant="contained"
          size="small"
          sx={{ marginLeft: "auto", display: "block" }}
          onClick={() => dispatch(addChartFields())}>
          Add Chart Fields
        </Button>
      </Box>
      <Stack
        direction="row"
        gap={1}
        justifyContent="end"
        sx={{ marginTop: "auto" }}>
        <Button
          variant="outlined"
          onClick={handleClose}>
          Cancel
        </Button>
        <Button
          type="submit"
          variant="contained">
          Add Widget
        </Button>
      </Stack>
    </Box>
  );
}

export default AddWidgetForm;
