import TextField from "@mui/material/TextField";

function Search() {
  return (
      <div className="search">
      <TextField
        id="outlined-basic"
        variant="outlined"
        fullWidth
        label="Search"
      />

      </div>
  );
}

export default Search;
