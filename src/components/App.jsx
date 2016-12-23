import React from 'react';
import Header from './Header';

export default function App() {
  return (
    <div id="app">
      <Header />
      <main>
        <p>paragraph...</p>
      </main>
    </div>
  );
}

App.displayName = 'App';
