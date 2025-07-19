
import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export default function LoginPage() {
    const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", duration: 1 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        className="w-full max-w-md"
        initial="hidden"
        animate="visible"
        variants={formVariant}
      >
        <Paper
          elevation={4}
          className="rounded-xl shadow-lg p-8 bg-white"
        >
          <Typography variant="h4" align="center" className="mb-6 font-bold text-slate-800">
            Sign In
          </Typography>
          <form
            onSubmit={e => {
              e.preventDefault();
              navigate('/dashboard')
            }}
            className="flex flex-col gap-6"
            autoComplete="off"
          >
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="bg-white"
              fullWidth
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="bg-white"
              fullWidth
            />
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                variant="contained"
                fullWidth
                className="!bg-indigo-600 !text-white !py-3 !rounded-lg !text-lg"
              >
                Login
              </Button>
            </motion.div>
          </form>
          <div className="mt-4 flex justify-between items-center text-sm">
            {/* <a href="#" className="text-indigo-600 hover:underline">Forgot Password?</a>
            <a href="#" className="text-indigo-600 hover:underline">Sign Up</a> */}
          </div>
        </Paper>
      </motion.div>
    </div>
  );
}
