import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { grey, indigo } from "@mui/material/colors";
import SearchInput from "./SearchInput";
import {
  Box,
  Breadcrumbs,
  Container,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";



export default function Header() {
  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/">
      Home
    </Link>,
    <Typography
      key="2"
      sx={{ fontSize: "0.925rem", fontWeight: "700", color: indigo[700] }}>
      Dashboard V2
    </Typography>,
  ];

  return (
    <Box
      component="header"
      sx={{ padding: "0.25rem 0", backgroundColor: grey["A100"], position: "sticky", top: 0, zIndex: 100 }}>
      <Container
        component="nav"
        maxWidth="xl"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        <Breadcrumbs
          separator="›"
          component="div"
          sx={{ fontSize: "0.875rem" }}
          aria-label="breadcrumb">
          {breadcrumbs}
        </Breadcrumbs>
        <Stack
          spacing={1}
          direction="row">
          <SearchInput />
          <IconButton aria-label="notification">
            <NotificationsActiveOutlinedIcon />
          </IconButton>
          <IconButton aria-label="user">
            <AccountCircleOutlinedIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
