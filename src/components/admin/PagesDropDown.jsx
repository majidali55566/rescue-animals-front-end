import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { styled } from "@mui/material/styles";

const StyledFormControl = styled(FormControl)(({ theme, error }) => ({
  minWidth: 120,
  margin: theme.spacing(1),
  ...(error && {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red",
      },
      "&:hover fieldset": {
        borderColor: "red",
      },
      "&.Mui-focused fieldset": {
        borderColor: "red",
      },
    },
  }),
}));

const PagesDropDown = () => {
  const [PageCategory, setPageCategory] = React.useState("");

  const handleChange = (event) => {
    setPageCategory(event.target.value);
  };

  const pagesCategories = [
    "About Us",
    "Membership and Volunteering",
    "Advocacy and Awareness",
    "Media and Achievements",
    "Donations and Fundraising",
    "Contact and Policies",
    "Project Reports",
    "Resources and Downloads",
    "Special Initiatives",
  ];

  const isError = PageCategory === "";

  return (
    <StyledFormControl error={isError} required fullWidth>
      <InputLabel id="demo-simple-select-required-label">
        Page category
      </InputLabel>
      <Select
        labelId="demo-simple-select-required-label"
        id="demo-simple-select-required"
        value={PageCategory}
        label="Page category *"
        onChange={handleChange}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 48 * 4.5 + 8,
              width: "auto",
            },
          },
        }}
      >
        {pagesCategories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>Required</FormHelperText>
    </StyledFormControl>
  );
};

export default PagesDropDown;
