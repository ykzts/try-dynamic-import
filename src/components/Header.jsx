import React from 'react';
import pkg from '../../package.json';

export default function Header() {
  return (
    <header>
      <h1>{pkg.name}</h1>
    </header>
  );
}

Header.displayName = 'Header';
