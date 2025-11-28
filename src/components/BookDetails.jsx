export default function BookDetails(props) {
  const { image, title, author, downloads, category, language, summary } =
    props;
  return (
    <article className="bookDetails">
      <img src={image} />
      <h2>{title}</h2>
      <h3>{author}</h3>

      <p>{downloads}</p>
      <p>{category}</p>
      <p>{language}</p>
      <p>{summary}</p>

      <button onClick={() => addToFavourites(props)}>
        Add to favourites ❤️
      </button>
    </article>
  );
}
