function Navbar() {
  return (
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 32px", backgroundColor: "#333", color: "white" }}>
      <h2 style={{ margin: 0 }}>📚 BookHub</h2>
      <ul style={{ display: "flex", listStyle: "none", gap: "20px", margin: 0, padding: 0 }}>
        <li><a href="#home" style={{ color: "white", textDecoration: "none" }}>Home</a></li>
        <li><a href="#books" style={{ color: "white", textDecoration: "none" }}>Books</a></li>
        <li><a href="#about" style={{ color: "white", textDecoration: "none" }}>About</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;