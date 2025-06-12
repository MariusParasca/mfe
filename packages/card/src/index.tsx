import { Card } from "@mantine/core";
import { useStore } from "@repo/store";

export const MovieCard = ({
  title,
  image,
  showAddButton = true,
}: {
  title: string;
  image: string;
  showAddButton?: boolean;
}) => {
  const { addMovie } = useStore();

  return (
    <Card>
      <Card.Section>
        <img src={image} alt={title} style={{ width: "200px", height: "100%", borderRadius: "8px" }} />
      </Card.Section>

      <Card.Section>
        <h3 style={{ fontSize: "1.2em", margin: "8px 0" }}>{title}</h3>
        {showAddButton && (
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            type='button'
            onClick={() => addMovie({ title, image })}
          >
            Add to Playlist
          </button>
        )}
      </Card.Section>
    </Card>
  );
};
