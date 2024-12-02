// Header.jsx
"use client";

import { UserButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import React from 'react';
import SearchBar from './SearchBar';
import './Header.css';

const Header = () => {
  const { user } = useUser();
  const router = useRouter();

  return (
    <header className='header-container'>
      <SearchBar />
      {!user ? (
        <button onClick={() => router.push('/sign-in')}>Login</button>
      ) : (
        <UserButton />
      )}
    </header>
  );
};

export default Header;
