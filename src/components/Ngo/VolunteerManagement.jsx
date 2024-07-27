import { useState } from "react";
import VolunteerRegisterForm from "../form/VolunteerRegisterForm";
import VolunteersTable from "./VolunteerTable";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
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

  const [selectedVolunteer, setselectedVolunteer] = useState(null);
  const [IsModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="volunteer-management">
      <VolunteersTable data={volunteerData} />
      <VolunteerRegisterForm />
      {/* <Dialog open onClose={() => setIsModalOpen(false)}></Dialog> */}
    </div>
  );
};

export default VolunteerManagement;
