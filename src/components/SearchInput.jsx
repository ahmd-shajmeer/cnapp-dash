import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import {InputBase} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { updateSearchValue } from "../redux/slices/searchSlice";


// Search Input Style
const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    fontSize: "1rem",
    backgroundColor: alpha("#cfd8dc", 0.5),
    "&:hover": {
      backgroundColor: alpha("#cfd8dc", 0.75),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "30ch",
      },
    },
  }));

function SearchInput() {
  const searchValue = useSelector(state => state.search.value)
  const dispatch = useDispatch()
  
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon sx={{width: "1.15rem"}} />
      </SearchIconWrapper>
      <StyledInputBase
       value={searchValue}
        placeholder="Search…"
        inputProps={{ "aria-label": "search" }}
        onChange={e => dispatch(updateSearchValue({value: e.target.value}))}
      />
    </Search>
  );
}

export default SearchInput;
