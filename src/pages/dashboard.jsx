import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Pagination,
  Box,
  CircularProgress,
  Alert,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/userSlice";
import useDebounce from "../Hooks/useDebounce";
import StatCard from "../components/statCard";

const rowsPerPage = 5;
const Dashboard = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector((state) => state.user);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [debounceValue] = useDebounce(search, 500)

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);



  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(debounceValue.toLowerCase()) ||
      user.email.toLowerCase().includes(debounceValue.toLowerCase())
  );


  const paginatedUsers = debounceValue ?
    filteredUsers.slice(
      0,
      page * rowsPerPage
    ) :
    filteredUsers.slice(
      (page - 1) * rowsPerPage,
      page * rowsPerPage
    );




  return (
    <div className="space-y-6 ">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold"
      >
        Welcome, John!
      </motion.h1>

      {/* Stat Cards */}
      <StatCard />

      {/* Search and Table */}
      <div className="space-y-4">
        <TextField
          fullWidth
          label="Search by name or email"
          variant="outlined"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {loading ? (
          <Box display="flex" justifyContent="center" mt={4}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Alert severity="error">{error}</Alert>
        ) : (
          <>
            <TableContainer component={Paper} className="mt-4 rounded-2xl">
              <Table className=" ">
                <TableHead>
                  <TableRow>
                    <TableCell className="">Name</TableCell>
                    <TableCell className="">Email</TableCell>
                    <TableCell className="">Phone</TableCell>
                    <TableCell className="">Company</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {paginatedUsers.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="">{user.name}</TableCell>
                      <TableCell className="">{user.email}</TableCell>
                      <TableCell className="">{user.phone}</TableCell>
                      <TableCell className="">{user.company.name}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box display="flex" justifyContent="center" mt={2}>
              {
                paginatedUsers.length ?
                  <Pagination
                    count={Math.ceil(filteredUsers.length / rowsPerPage)}
                    page={page}
                    onChange={(e, value) => setPage(value)}
                    color="primary"
                  /> : <Typography component={"h1"} className="space-y-8 flex justify-center">No data found</Typography>
              }
            </Box>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
