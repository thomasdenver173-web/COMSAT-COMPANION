
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Timetable } from './pages/Timetable';
import { Learning } from './pages/Learning';
import { NotesHub } from './pages/NotesHub';
import { CampusMap } from './pages/CampusMap';
import { Profile } from './pages/Profile';
import { AdminDashboard } from './pages/AdminDashboard';
import { Chat } from './pages/Chat';
import { Friends } from './pages/Friends';
import { Leaderboard } from './pages/Leaderboard';
import { UserProvider, useUser } from './context/UserContext';
import { NotificationProvider } from './context/NotificationContext';
import { AuthModal } from './components/AuthModal';

const AppContent: React.FC = () => {
  const { user } = useUser();

  if (!user?.isAuthenticated) {
    return <AuthModal />;
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="timetable" element={<Timetable />} />
          <Route path="learning" element={<Learning />} />
          <Route path="notes" element={<NotesHub />} />
          <Route path="map" element={<CampusMap />} />
          <Route path="chat" element={<Chat />} />
          <Route path="friends" element={<Friends />} />
          <Route path="leaderboard" element={<Leaderboard />} />
          <Route path="profile" element={<Profile />} />
          {user.role === 'Admin' && <Route path="admin" element={<AdminDashboard />} />}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default function App() {
  return (
    <UserProvider>
      <NotificationProvider>
        <AppContent />
      </NotificationProvider>
    </UserProvider>
  );
}
