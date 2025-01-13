import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Autocomplete,
  TextField,
  Slider,
  Tabs,
  Tab,
  Tooltip,
  Menu,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


const Widgets = () => {
  const [value, setValue] = useState(30);
  const [tabValue, setTabValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedMenu, setSelectedMenu] = useState("");
  //@ts-ignore
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  //@ts-ignore
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  //@ts-ignore
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  //@ts-ignore
  const handleSelectChange = (event) => {
    setSelectedMenu(event.target.value);
  };

  return (
    <div className="  flex justify-center items-center">
      <div className="web-container bg-white p-10 rounded-lg shadow-lg">
        <h1 className=" widgets-header">Widgets Playground</h1>
        <br />

        {/* Accordion */}
        <section className="">
          <h2 className="text-box-header">Accordion</h2>
          <hr /><br />
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Accordion 1
            </AccordionSummary>
            <AccordionDetails>Content for Accordion 1</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              Accordion 2
            </AccordionSummary>
            <AccordionDetails>Content for Accordion 2</AccordionDetails>
          </Accordion>
        </section>
        <br />
        <br />
        {/* Auto Complete */}
        <section>
          <h2 className="text-box-header">Auto Complete</h2>
          <hr /><br />
          <Autocomplete
            options={["Option 1", "Option 2", "Option 3"]}
            renderInput={(params) => (
              <TextField {...params} className="auto-label " label="Auto Complete" />
            )}
          />
        </section>
        <br />
        <br />

        {/* Date Picker */}
        <section>
          <h2 className="text-box-header"> Date Picker</h2>
          <hr /><br />
          <TextField
            id="date"
            label="Date Picker"
            type="date"
            defaultValue="2024-12-29"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </section>
        <br />
        <br />

        {/* Slider */}
        <section>
          <h2 className="text-box-header">Slider</h2>
          <hr /><br />
          <Slider
            value={value}
            onChange={handleSliderChange}
            aria-labelledby="continuous-slider"
          />
        </section>
        <br />
        <br />

        {/* Progress Bar */}
        <section>
          <h2 className="text-box-header">Progress Bar</h2>
          <hr /><br />
          <CircularProgress variant="determinate" value={value} />
        </section>

        <br />
        <br />

        {/* Tabs */}
        <section>
          <h2 className="text-box-header">Tabs</h2>
          <hr /><br />
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Tab 1" />
            <Tab label="Tab 2" />
            <Tab label="Tab 3" />
          </Tabs>
          {tabValue === 0 && <div>Content for Tab 1</div>}
          {tabValue === 1 && <div>Content for Tab 2</div>}
          {tabValue === 2 && <div>Content for Tab 3</div>}
        </section>
        <br />
        <br />
        {/* Tool Tips */}
        <section>
          <h2 className="text-box-header">Tool Tips</h2>
          <hr /><br />
          <Tooltip title="Tooltip text">
            <button>Hover over me</button>
          </Tooltip>
        </section>
        <br />
        <br />

        {/* Menu */}
        <section>
          <h2 className="text-box-header">Menu</h2>
          <hr /><br />
          <button onClick={handleMenuClick}>Open Menu</button>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>Menu Item 1</MenuItem>
            <MenuItem onClick={handleMenuClose}>Menu Item 2</MenuItem>
            <MenuItem onClick={handleMenuClose}>Menu Item 3</MenuItem>
          </Menu>
        </section>
        <br />
        <br />

        {/* Select Menu */}
        <section>
          <h2 className="text-box-header">Select Menu</h2>
          <hr /><br />
          <FormControl>
            <InputLabel id="select-label">Select Menu</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={selectedMenu}
              onChange={handleSelectChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="Option 1">Option 1</MenuItem>
              <MenuItem value="Option 2">Option 2</MenuItem>
              <MenuItem value="Option 3">Option 3</MenuItem>
            </Select>
          </FormControl>
        </section>
      </div>
    </div>
  );
};

export default Widgets;
