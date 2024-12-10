import React from 'react';

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h1 style={styles.title}>SuperAdmin</h1>
      <ul style={styles.navLinks}>
        <li><a href="/superadmin">Dashboard</a></li>
        <li><a href="/superadmin/createSpace">Espacios Comunes</a></li>
        <li><a href="/superadmin/createResident">Residentes</a></li>
        <li><a href="/superadmin/createCondo">Condominios</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: { display: 'flex', justifyContent: 'space-between', padding: '10px', backgroundColor: '#A020F0', color: 'white' },
  title: { fontSize: '20px' },
  navLinks: { display: 'flex', gap: '15px', listStyle: 'none' },
};

export default Navbar;
