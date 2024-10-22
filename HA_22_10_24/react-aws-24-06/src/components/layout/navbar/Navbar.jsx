import styles from "./Navbar.module.css";

function Navbar() {
  // Funktion für den Klick auf den Home-Button
  const handleHomeClick = () => {
    alert("Hallo vom Homebutton");
  };

  return (
    <div className={styles.navbar}>
      <button 
        className={styles.homebtn} 
        onClick={handleHomeClick} // Event-Handler für Klick
      >
        Home
      </button>
    </div>
  );
}


export default Navbar;
