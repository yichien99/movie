import { createStyles, Flex, Grid, Paper, Text } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getGenres } from "../api/genres";

export default function Movie() {
  const {
    data: genres,
    isLoading: genreIsLoading,
    isSuccess: genreIsSuccess,
  } = useQuery(["genres"], getGenres);
  // {
  //   genreIsSuccess && console.log("🍙", genres);
  // }

  return (
    <>
      <Flex direction="column" mx="50px">
        {/* <Text fw={700} fz={25}>
          TV
        </Text> */}
        <Flex
          style={{
            gap: 20,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {genreIsSuccess &&
            genres.genres.map((genre: any) => (
              <Card key={genre.id} title={genre.name} />
            ))}
        </Flex>
      </Flex>
    </>
  );
}

interface CardProps {
  title: string;
}

const useStyles = createStyles((theme) => ({
  card: {
    height: 200,
    width: 250,
    backgroundColor: "#0D7490",

    "&:hover": {
        opacity: 1,
        backgroundColor: theme.fn.lighten(
          theme.fn.variant({ variant: "filled", color: theme.primaryColor })
            .background!,
          0.1
        ),
      },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 700,
    color: theme.white,
    fontSize: 20,
    paddingTop:'30%',
    textAlign:'center',
  },
}));

function Card({ title }: CardProps) {
  const { classes } = useStyles();
  return (
    <Paper shadow="xs" p="xl" radius="md" className={classes.card}>
      <div style={{ height: "100%" }}>
        <Text className={classes.title}>{title}</Text>
      </div>
    </Paper>
  );
}
