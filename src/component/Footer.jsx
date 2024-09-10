// Footer.jsx


export const Footer = () => {
  return (
    <footer className="footer">
    <p>Links: <a href="/about">Om os</a> | <a href="/contact">Kontakt</a></p>
    <p>Adresse: Eksempelgade 1, By</p>
    <form>
      <label>
        Tilmeld dig vores nyhedsbrev:
        <input type="email" placeholder="Din e-mail" />
      </label>
      <button type="submit">Tilmeld</button>
    </form>
  </footer>
  
  );
};


