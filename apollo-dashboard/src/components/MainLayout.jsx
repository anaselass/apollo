import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function MainLayout() {
  return (
    <>
      <Sidebar />
      <main className="flex-1 h-screen flex flex-col overflow-hidden relative">
        <Outlet />
      </main>
    </>
  );
}
