import './App.css'; 

function App() {
  // Variable für den aktuellen Tag oder eine Begrüßung
  const greeting = 'Schönen Tag noch!';

  //  Berechnung
  const sum = 5 + 3;

  return (
    <>
      {/* H1-Überschrift */}
      <h1>Willkommen zu meiner ersten React-App</h1>

      {/* H2-Überschrift mit der Variable */}
      <h2>{greeting}</h2>

      {/* H3-Tag mit einer Berechnung */}
      <h3>Das Ergebnis von 5 + 3 ist: {sum}</h3>
    </>
  );
}

export default App;
