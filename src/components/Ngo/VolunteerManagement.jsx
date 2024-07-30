import { useState } from "react";
import VolunteerRegisterForm from "../form/VolunteerRegisterForm";
import VolunteersTable from "./VolunteerTable";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";

const VolunteerManagement = () => {
  const volunteerData = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      location: "New York",
      mobile: "+1 (555) 123-4567",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      location: "Los Angeles",
      mobile: "+1 (555) 234-5678",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alicejohnson@example.com",
      location: "Chicago",
      mobile: "+1 (555) 345-6789",
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bobbrown@example.com",
      location: "Houston",
      mobile: "+1 (555) 456-7890",
    },
    {
      id: 5,
      name: "Charlie Green",
      email: "charliegreen@example.com",
      location: "Phoenix",
      mobile: "+1 (555) 567-8901",
    },
    {
      id: 6,
      name: "Diana White",
      email: "dianawhite@example.com",
      location: "Philadelphia",
      mobile: "+1 (555) 678-9012",
    },
    {
      id: 7,
      name: "Edward Black",
      email: "edwardblack@example.com",
      location: "San Antonio",
      mobile: "+1 (555) 789-0123",
    },
    {
      id: 8,
      name: "Fiona Blue",
      email: "fionablue@example.com",
      location: "San Diego",
      mobile: "+1 (555) 890-1234",
    },
    {
      id: 9,
      name: "George Yellow",
      email: "georgeyellow@example.com",
      location: "Dallas",
      mobile: "+1 (555) 901-2345",
    },
    {
      id: 10,
      name: "Hannah Purple",
      email: "hannahpurple@example.com",
      location: "San Jose",
      mobile: "+1 (555) 012-3456",
    },
  ];

  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    location: "",
    mobile: "",
  });
  const handleEdit = (volunteer) => {
    setSelectedVolunteer(volunteer);
    setFormValues(volunteer);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleUpdate = () => {
    // Update the volunteer data (e.g., send a request to the server or update state)
    console.log("Updated volunteer details:", formValues);
    setIsModalOpen(false);
  };
  return (
    <div className="volunteer-management">
      <div>
        <Typography variant="h4" gutterBottom>
          Volunteer Management
        </Typography>
        <VolunteersTable data={volunteerData} handleEdit={handleEdit} />
      </div>
      <Dialog open={IsModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle>
          <p>Ngo volunteer details</p>
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            value={formValues.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            value={formValues.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="location"
            label="Location"
            type="text"
            fullWidth
            value={formValues.location}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="mobile"
            label="Mobile"
            type="tel"
            fullWidth
            value={formValues.mobile}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button color="warning" onClick={() => setIsModalOpen(false)}>
            Cancel
          </Button>
          <Button
            sx={{ color: "white" }}
            variant="contained"
            onClick={handleUpdate}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
      <div className="d-flex gap-400 flex-column">
        <VolunteerRegisterForm />
      </div>
    </div>
  );
};

export default VolunteerManagement;
