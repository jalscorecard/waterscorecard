import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import sections from './sections'; 

function Preview({ form, onEdit, onSubmit }) {
  const [confirmOpen, setConfirmOpen] = useState(false);

  const getAnswerLabel = (q, value) => {
    if (q.notApplicableValue !== undefined && value === q.notApplicableValue) {
      return 'Not Applicable';
    }
    if (!isNaN(value) && value >= 0 && value <= 3) {
      return `${value} - ${q.options?.[value] || ''}`;
    }
    return '-';
  };

  const userDetails = [
    { label: 'Full Name', value: form.fullName },
    { label: 'Email', value: form.email },
    { label: 'Whatsapp', value: form.whatsapp },
    { label: 'Date of Assessment', value: form.date },
    { label: 'Apartment Name', value: form.apartmentName },
    { label: 'Google Map Link', value: form.mapLink },
    { label: 'Units', value: form.units }
  ];

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6, mb: 6 }}>
      <Paper elevation={3} sx={{ p: 5, width: '100%', maxWidth: '1200px', borderRadius: 3 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
          Preview Your Submission
        </Typography>

        {/* User Details Section */}
        <Box sx={{ mb: 5 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 500 }}>
            Contact & Apartment Details
          </Typography>
          <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
            <Table size="small">
              <TableBody>
                {userDetails.map((item) => (
                  <TableRow key={item.label}>
                    <TableCell sx={{ fontWeight: 600, width: '30%' }}>{item.label}</TableCell>
                    <TableCell>{item.value !== undefined && item.value !== null ? item.value : '-'}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* Sections & Answers */}
        {sections.map((section) => (
          <Box key={section.title} sx={{ mb: 5 }}>
            <Typography variant="h6" sx={{ color: '#1976d2', mb: 2, fontWeight: 500 }}>
              {section.title}
            </Typography>
            <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
              <Table size="small">
                <TableHead>
                  <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                    <TableCell sx={{ fontWeight: 600 }}>Question</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>Selected Answer</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {section.questions.map((q) => (
                    <TableRow key={q.key}>
                      <TableCell>{q.label}</TableCell>
                      <TableCell>{getAnswerLabel(q, Number(form[q.key]))}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        ))}

        {/* Buttons */}
        <Box sx={{ mt: 10, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined" color="primary" onClick={onEdit}>
            Edit your response
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => {
              console.log("Preview.jsx: Opening confirm dialog");
              setConfirmOpen(true);
            }}
          >
            Submit
          </Button>
        </Box>

        {/* Confirm Submission Dialog */}
        <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
          <DialogTitle>Confirm Submission</DialogTitle>
          <DialogContent sx={{ mt: 1, mb: 1 }}>
            Are you sure you want to submit and view your results?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setConfirmOpen(false)}>Cancel</Button>
            <Button
              color="success"
              variant="contained"
              onClick={() => {
                console.log("Preview.jsx: Confirmed, submitting...");
                setConfirmOpen(false);
                onSubmit(); 
              }}
            >
              Yes, Submit
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </Box>
  );
}

export default Preview;
