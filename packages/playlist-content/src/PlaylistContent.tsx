import { MovieCard } from "@repo/card";
import { useStore } from "@repo/store";

export const PlaylistContent = () => {
  const { movies } = useStore();

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {movies.map((movie) => (
        <MovieCard key={movie.title} title={movie.title} image={movie.image} />
      ))}
    </div>
  );
};
