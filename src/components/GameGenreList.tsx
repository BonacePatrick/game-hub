import useGenre from "../hooks/useGenre"


const GameGenreList = () => {

   const {genres} = useGenre()

  return (
    <>

    <ul>
        {genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
    </ul>

    </>
  )
}

export default GameGenreList