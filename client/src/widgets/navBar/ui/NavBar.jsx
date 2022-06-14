import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from 'shared/auth';
import BaseButton from 'shared/ui/BaseButton';

const NavBar = () => {
  const { logout } = useAuth();
  const handleLogOut = async() => {
    await logout()
  }

  return (
    <nav className="navbar" style={{ backgroundColor: '#e3f2fd' }}>
      <div className="container-fluid">
        <Link to='/' className="navbar-brand">Taskin MS</Link>
        <BaseButton onClick={handleLogOut}>Log out</BaseButton>
      </div>
    </nav>
  )
}

export default NavBar