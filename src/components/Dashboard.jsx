import { useSelector } from "react-redux";
import DashboardCategory from "./DashboardCategory";
import DashboardOptions from "./DashboardOptions";
import { Container } from "@mui/material";

export default function Dashboard() {
  const categories = useSelector((state) => state.categories.value);

  return (
    <Container
      maxWidth="xl"
      sx={{ padding: "1rem 0" }}
      style={{backgroundColor:"#e3f2fd"}}>
      <DashboardOptions />
      {categories &&
        categories.map((category) => (
          <DashboardCategory
            category={category}
            key={category.id}
          />
        ))}
    </Container>
  );
}
