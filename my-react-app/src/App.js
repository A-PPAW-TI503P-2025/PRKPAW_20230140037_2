import React, { useEffect, useState } from 'react';

function App() {
  // state untuk nama pengguna
  const [nama, setNama] = useState('');

  // state untuk pesan dari server Node.js
  const [message, setMessage] = useState('');

  // ambil data dari backend saat komponen pertama kali dimuat
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error('Error:', err));
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <h1>Hello, {nama || 'Pengguna'}!</h1>
      <input
        type="text"
        placeholder="Pradipta"
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        style={{
          padding: '8px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
        }}
      />
      <p style={{ marginTop: '30px', fontSize: '18px', color: 'green' }}>
        Pesan dari server: {message || 'Menghubungkan...'}
      </p>
    </div>
  );
}

export default App;
