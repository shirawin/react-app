import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { GetAllUsers, changeActivity } from '../Api/Users_Api';

const TableUsers = () => {
  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const columns = [
    { id: 'code', label: 'קוד', minWidth: 170 ,backgroundColor:'red'},
    { id: 'fullname', label: 'שם', minWidth: 100 },
    { id: 'email', label: 'מייל', minWidth: 170, align: 'center' },
    { id: 'phone', label: 'פלאפןן', minWidth: 170, align: 'center' },
    { id: 'activestatus', label: 'פעיל?', minWidth: 170, align: 'center' },
    { id: 'password', label: 'סיסמא', minWidth: 170, align: 'center' },
    { id: 'city', label: 'עיר', minWidth: 170, align: 'center' },
    { id: 'street', label: 'רחוב', minWidth: 170, align: 'center' },
    { id: 'housenumber', label: 'מספר בית', minWidth: 170, align: 'center' },
  ];

  function createData(code, fullname, email, phone, activestatus, password, city, street, housenumber) {
    return { code, fullname, email, phone, activestatus, password, city, street, housenumber };
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let data = await GetAllUsers();
    console.log(data);
    setRows(
      data.map((item) =>
        createData(
          item.code,
          item.fullname,
          item.email,
          item.phone,
          item.activestatus,
          item.password,
          item.city,
          item.street,
          item.housenumber
        )
      )
    );
  };

  const openModal = (row) => {
    setSelectedRow(row);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmation = () => {
    closeModal();

    const updatedRow = { ...selectedRow, activestatus: !selectedRow.activestatus };

    changeActivity(updatedRow.code, updatedRow.activestatus).then(() => {
      debugger;
      fetchData();
    });
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div style={{ height:'100vh',color: 'gray',fontSize:'2.5em' }}> <h2>טבלת משתמשים</h2>
      <Box sx={{ marginTop: '6px' }}>
       
        <Paper sx={{ width: '100%', overflow: 'hidden', backgroundColor: 'lightgray', boxShadow: '0px 0px 10px black' }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table" sx={{ backgroundColor: 'white' }}>
            <TableHead>
  <TableRow >
    {columns.map((column) => (
      <TableCell
        key={column.id}
        align={column.align}
        style={{ minWidth: column.minWidth, color: 'orange' ,backgroundColor: 'gray',fontWeight:'bolder'}}
      >
        {column.label}
      </TableCell>
    ))}
  </TableRow>
</TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                        onClick={() => openModal(row)}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align} style={{ color: 'orange' }}>
                              {column.id === 'activestatus' ? (
                                value.toString() // Render the boolean value as a string
                              ) : column.format && typeof value === 'number' ? (
                                column.format(value)
                              ) : (
                                value
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />

          <Modal
            open={isModalOpen}
            onClose={closeModal}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <Box
              sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
              }}
            >
              <h2 id="modal-title" style={{ color: 'orange' }}>
                {selectedRow && selectedRow.activestatus ? 'Are you sure you want to cancel?' : 'Are you sure you want to confirm?'}
              </h2>
              <Button onClick={handleConfirmation} style={{ color: 'orange' }}>
                {selectedRow && selectedRow.activestatus ? 'Cancel' : 'Confirmation'}
              </Button>
              <Button onClick={closeModal} style={{ color: 'orange' }}>
                Cancellation
              </Button>
            </Box>
          </Modal>
        </Paper>
      </Box>
    </div>
  );
};

export default TableUsers;
