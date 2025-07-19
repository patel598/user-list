import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { Box, Typography } from '@mui/material';
import { People, Person, ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import Loading from './loading';
import Error from './error';




const StatCard = () => {
    const { users, loading, error } = useSelector((state) => state.user);
    const statCards = [
        { title: "Total Users", icon: <People />, value: users.length },
        { title: "Active Users", icon: <Person />, value: 6 },
        { title: "Total Orders", icon: <ShoppingCart />, value: 42 },
    ];

    if (loading) return (
        <Loading />
    )

    if (error) return (
        <Error />
    )

    return (
        <Box component={"section"} className="w-full box-border grid grid-cols-1 md:grid-cols-3 gap-4">
            {statCards.length ? statCards.map((card, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="shadow-lg rounded-2xl p-4 dark:border-white border flex items-center gap-4"
                >
                    <Box className="text-blue-500">{card.icon}</Box>
                    <Box>
                        <Typography variant="h6" className=''>{card.title}</Typography>
                        <Typography variant="subtitle1" className=''>{card.value}</Typography>
                    </Box>
                </motion.div>
            )) : ""}
        </Box>
    )
}

export default StatCard