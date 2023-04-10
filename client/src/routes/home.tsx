import React from 'react';
import { Navigate } from 'react-router-dom';
import getCurrentUser from "../utils/getCurrentUser";

export default function Home() {
    if (getCurrentUser()) return <Navigate to="/feed" />;
    return <Navigate to="/trending" />;
}