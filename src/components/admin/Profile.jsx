import { useState } from "react";
import { ToggleOn } from "@mui/icons-material";
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  IconButton,
  Input,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Profile = () => {
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [orgInfoModalOpen, setOrgInfoModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Shahbaz Ali",
    status: "active",
    phoneNo: "9579384723",
    userEmail: "your@gmail.com",
    dashBoardPassword: "",
  });
  const [organizationalInfo, setOrganizationalInfo] = useState({
    logo: "/images/logo.png",
    name: "Raksha Animal",
    organizationalTagLine: "Rescue Made Easy!",
    regdOfficeAddress:
      "Raksha Animal - 27N1 World One, World Towers, Lower Parel, Mumbai - 400913. Maharashtra. India.",
    email: "rakshaanimal@gmail.com",
  });

  const handleInfoModalOpen = () => setInfoModalOpen(true);
  const handleInfoModalClose = () => setInfoModalOpen(false);

  const handlePasswordModalOpen = () => setPasswordModalOpen(true);
  const handlePasswordModalClose = () => setPasswordModalOpen(false);

  const handleOrgInfoModalOpen = () => setOrgInfoModalOpen(true);
  const handleOrgInfoModalClose = () => setOrgInfoModalOpen(false);

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrgInfoChange = (e) => {
    const { name, value } = e.target;
    setOrganizationalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setOrganizationalInfo((prev) => ({ ...prev, logo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-page">
      <div className="user-profile">
        <img
          src={organizationalInfo.logo}
          alt="organization logo"
          style={{ width: "100px", height: "auto" }}
        />
        <Button
          sx={{
            mt: 2,
            backgroundColor: "#3acf50",
            color: "white",
            "&:hover": { backgroundColor: "#2c8c3f" },
          }}
          variant="contained"
          onClick={handleOrgInfoModalOpen}
        >
          Update Organization Info
        </Button>
        <h3>{userInfo.name}</h3>
        <p>{userInfo.userEmail}</p>
        <div className="d-flex">
          <h4>Status</h4>
          <ToggleOn color="primary" />
        </div>
        <div className="d-flex">
          <h4>Phone no:</h4>
          <p>{userInfo.phoneNo}</p>
        </div>
        <Button
          sx={{
            color: "white",
            backgroundColor: "#3acf50",
            "&:hover": { backgroundColor: "#2c8c3f" },
          }}
          variant="contained"
          onClick={handleInfoModalOpen}
        >
          Update Info
        </Button>
        <Button
          sx={{
            backgroundColor: "gray",
            color: "white",
            "&:hover": { backgroundColor: "#5f5f5f" },
            ml: 2,
          }}
          variant="contained"
          onClick={handlePasswordModalOpen}
        >
          Change Password
        </Button>
      </div>

      {/* Update User Info Modal */}
      <Modal
        open={infoModalOpen}
        onClose={handleInfoModalClose}
        aria-labelledby="update-info-modal"
        aria-describedby="update-info-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <Typography id="update-info-modal" variant="h6" component="h2">
            Update Your Information
          </Typography>
          <IconButton
            onClick={handleInfoModalClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <form>
            <TextField
              fullWidth
              margin="normal"
              label="Name"
              variant="outlined"
              name="name"
              value={userInfo.name}
              onChange={handleUserInfoChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Phone Number"
              variant="outlined"
              name="phoneNo"
              value={userInfo.phoneNo}
              onChange={handleUserInfoChange}
            />
            <Button
              sx={{
                mt: 2,
                color: "white",
                backgroundColor: "#3acf50",
                "&:hover": { backgroundColor: "#2c8c3f" },
              }}
              variant="contained"
              fullWidth
              onClick={handleInfoModalClose}
            >
              Save Changes
            </Button>
          </form>
        </Box>
      </Modal>

      {/* Change Password Modal */}
      <Modal
        open={passwordModalOpen}
        onClose={handlePasswordModalClose}
        aria-labelledby="change-password-modal"
        aria-describedby="change-password-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <Typography id="change-password-modal" variant="h6" component="h2">
            Change Your Password
          </Typography>
          <IconButton
            onClick={handlePasswordModalClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <form>
            <TextField
              fullWidth
              margin="normal"
              label="Current Password"
              type="password"
              variant="outlined"
            />
            <TextField
              fullWidth
              margin="normal"
              label="New Password"
              type="password"
              variant="outlined"
            />
            <TextField
              fullWidth
              margin="normal"
              label="Confirm New Password"
              type="password"
              variant="outlined"
            />
            <Button
              sx={{
                mt: 2,
                color: "white",
                backgroundColor: "#3acf50",
                "&:hover": { backgroundColor: "#2c8c3f" },
              }}
              variant="contained"
              fullWidth
              onClick={handlePasswordModalClose}
            >
              Change Password
            </Button>
          </form>
        </Box>
      </Modal>

      {/* Update Organization Info Modal */}
      <Modal
        open={orgInfoModalOpen}
        onClose={handleOrgInfoModalClose}
        aria-labelledby="update-org-info-modal"
        aria-describedby="update-org-info-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            p: 4,
            borderRadius: 2,
            boxShadow: 24,
          }}
        >
          <Typography id="update-org-info-modal" variant="h6" component="h2">
            Update Organization Information
          </Typography>
          <IconButton
            onClick={handleOrgInfoModalClose}
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <form>
            <TextField
              fullWidth
              margin="normal"
              label="Organization Name"
              variant="outlined"
              name="name"
              value={organizationalInfo.name}
              onChange={handleOrgInfoChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Tag Line"
              variant="outlined"
              name="organizationalTagLine"
              value={organizationalInfo.organizationalTagLine}
              onChange={handleOrgInfoChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Registered Office Address"
              variant="outlined"
              name="regdOfficeAddress"
              value={organizationalInfo.regdOfficeAddress}
              onChange={handleOrgInfoChange}
            />
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              variant="outlined"
              name="email"
              value={organizationalInfo.email}
              onChange={handleOrgInfoChange}
            />
            <Input
              type="file"
              fullWidth
              inputProps={{ accept: "image/*" }}
              sx={{ mb: 2 }}
              onChange={handleLogoChange}
            />
            <Button
              sx={{
                mt: 2,
                color: "white",
                backgroundColor: "#3acf50",
                "&:hover": { backgroundColor: "#2c8c3f" },
              }}
              variant="contained"
              fullWidth
              onClick={handleOrgInfoModalClose}
            >
              Save Changes
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default Profile;
