import { create } from "zustand";

export type Movie = {
  title: string;
  image: string;
};

export const useStore = create<{
  movies: Movie[];
  addMovie: (movie: Movie) => void;
  removeMovie: (title: string) => void;
}>((set) => ({
  movies: [],
  addMovie: (movie) =>
    set((state) => ({
      movies: [...state.movies, movie],
    })),
  removeMovie: (title) =>
    set((state) => ({
      movies: state.movies.filter((movie) => movie.title !== title),
    })),
}));
