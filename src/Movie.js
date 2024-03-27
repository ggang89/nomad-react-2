function Movie({coverImg,title,summary,genres}) {
  //props의 이름은 자유롭게 정할 수 있다
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
export default Movie;
