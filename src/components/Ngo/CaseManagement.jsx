/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { Typography } from "@mui/material";
import { useMediaQuery, useTheme } from "@mui/material";

import CaseDetailsModal from "./CaseDetailsModal";
import CaseTabs from "./CaseTabs";
import CasesTable from "./CasesTable";
import StatusBadge from "./StatusBadge";
import { Visibility } from "@mui/icons-material";
// Example data
const initialCasesData = [
  {
    id: 1,
    animalType: "Dog",
    injuryDescription: "Broken leg",
    status: "UnderCare",
    location: { lat: 40.7128, lng: -74.006 },
    reporterInfo: {
      name: "Majid",
      email: "majid@gmail.com",
      contactNo: "03123123123",
    },
    images: [
      {
        url: "/images/animal-rescue-hero-section.jpg",
      },
      {
        url: "/images/hero-2.jpeg",
      },
      {
        url: "/images/hero-2.jpeg",
      },
      {
        url: "/images/injured-animal.jpg",
      },
      {
        url: "/images/injured-animal3.jpg",
      },
    ],
  },
  {
    id: 2,
    animalType: "Cat",
    injuryDescription: "Infected wound",
    status: "Recoverd",
    location: { lat: 37.7749, lng: -122.4194 },
    reporterInfo: {
      name: "Majid",
      email: "majid@gmail.com",
      contactNo: "03123123123",
    },
    images: [
      {
        url: "/images/animal-rescue-hero-section.jpg",
      },
      {
        url: "/images/hero-2.jpeg",
      },
    ],
  },
  {
    id: 6,
    animalType: "Horse",
    injuryDescription: "Infected wound",
    status: "New case",
    location: { lat: 51.5074, lng: -0.1278 },
    reporterInfo: {
      name: "Majid",
      email: "majid@gmail.com",
      contactNo: "03123123123",
    },
    images: [
      {
        url: "/images/animal-rescue-hero-section.jpg",
      },
      {
        url: "/images/hero-2.jpeg",
      },
    ],
  },
  {
    id: 4,
    animalType: "Horse",
    injuryDescription: "Infected wound",
    status: "New case",
    location: { lat: 51.5074, lng: -0.1278 },
    reporterInfo: {
      name: "Majid",
      email: "majid@gmail.com",
      contactNo: "03123123123",
    },
    images: [
      {
        url: "/images/animal-rescue-hero-section.jpg",
      },
      {
        url: "/images/hero-2.jpeg",
      },
    ],
  },
  // Add more cases as needed
];

function CaseManagement() {
  const [casesData, setCasesData] = useState(initialCasesData);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [currentCase, setCurrentCase] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const theme = useTheme();
  const isFullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleEdit = (caseData) => {
    setCurrentCase(caseData);
    setEditModalOpen(true);
  };
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  // Filter cases based on tab selection
  // Filter cases based on tab selection
  const filteredCasesData = useMemo(() => {
    switch (selectedTab) {
      case 0:
        return casesData; // All cases
      case 1:
        return casesData.filter((caseItem) => caseItem.status === "New case"); // New cases
      case 2:
        return casesData.filter((caseItem) => caseItem.status === "UnderCare"); // Under Care cases
      case 3:
        return casesData.filter((caseItem) => caseItem.status === "Recoverd"); // Recovered cases
      default:
        return casesData;
    }
  }, [selectedTab, casesData]);
  const handleSaveEdit = () => {
    setCasesData((prevCases) =>
      prevCases.map((caseItem) =>
        caseItem.id === currentCase.id ? currentCase : caseItem
      )
    );
    setEditModalOpen(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div className="new-case-container">
        <Typography variant="h4" gutterBottom>
          New Cases
        </Typography>
        <div className="care-card">
          <div className="badge-container">
            <StatusBadge status={initialCasesData[2].status} />
          </div>
          <img src="/images/injured-animal.jpg" />
          <div className="d-flex justify-between">
            <p>Injury Description...</p>
            <button className="btn d-flex items-center gap-400">
              <Visibility />
              view
            </button>
          </div>
        </div>
        <div className="care-card">
          <div className="badge-container">
            <StatusBadge status={initialCasesData[2].status} />
          </div>
          <img src="/images/injured-animal.jpg" />
          <div className="d-flex justify-between">
            <p>Injury Description...</p>
            <button
              onClick={() => handleEdit(initialCasesData[2])}
              className="btn d-flex items-center gap-400"
            >
              <Visibility />
              view
            </button>
          </div>
        </div>
      </div>
      <Typography variant="h4" gutterBottom>
        Manage Case
      </Typography>
      <CaseTabs selectedTab={selectedTab} handleTabChange={handleTabChange} />
      <CasesTable data={filteredCasesData} handleEdit={handleEdit} />
      <CaseDetailsModal
        open={editModalOpen}
        isFullScreen={isFullScreen}
        onClose={() => setEditModalOpen(false)}
        caseData={currentCase}
        onSave={handleSaveEdit}
      />
    </div>
  );
}

export default CaseManagement;
