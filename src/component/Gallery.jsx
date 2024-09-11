
// Gallery-komponent, der modtager en liste af billeder som props
export const Gallery = ({ images }) => {
  return (
    // Div med klassen "gallery" til styling af galleriet
    <div className="gallery">
      {/* Gennemgår hvert billede i 'images' og viser det i en img-tag */}
      {images.map((image, index) => (
        // Nøgle 'key' er nødvendig for at React kan holde styr på hvert element i listen
        <img key={index} src={image} alt={`gallery-img-${index}`} />
      ))}
    </div>
  );
};
