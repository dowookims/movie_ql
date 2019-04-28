export let movies = [
  {
    id: "0",
    name: "dowookims",
    score: 25,
  },
  {
    id: "1",
    name: "hans",
    score: 21,
  },
  {
    id: "2",
    name: "jay",
    score: 23,
  },
  {
    id: "3",
    name: "dora",
    score: 24,
  },
  {
    id: "4",
    name: "kim",
    score: 20,
  },
]
export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => id === movie.id);
  return filteredMovies[0]
};

export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter(movie => movie.id !==String(id));
  if(movies.length > cleanedMovies.length){
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length +1}`,
    name,
    score
  };
  movies.push(newMovie);
  return newMovie;
}