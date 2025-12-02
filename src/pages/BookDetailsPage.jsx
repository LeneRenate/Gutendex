/** 
Boktittel
Coverbilde
Forfatter
Antall nedlastninger
Kategori
Språk
Lenke til boka i digitalt format
En knapp for "Legg til i Favoritter"
**/

export default function BookDetailsPage() {
  return (
    <section className="flex flex-row">
      <div className="flex flex-col">
        <img src={book.img} alt={book.title} />
        <button onClick={addToFavourites}>Add to favourites ❤️</button>
        <button>Download/Read</button>
      </div>
      <div className="flex flex-col">
        <h1>{book.title}</h1>
        <h2>by: {book.authors.name}</h2>
        <p>Downloads: {book.download_count}</p>
        <p>Language: {book.language}</p>
        <div className="flex flex-row flex-wrap">
          {/* <h4>Subjects</h4>
        {subjects.length ? (
          <ul>
            {subjects.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        ) : (
          <p>—</p>
        )} */}
        </div>
      </div>
    </section>
  );
}
