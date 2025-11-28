export default function BookCard(props) {
  const { image, title, author } = props;
  // favourite-toggle
  return (
    <article className="bookCard">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
      <button onClick={() => addToFavourites(props)}>
        Add to favourites ❤️
      </button>
    </article>
  );
}
