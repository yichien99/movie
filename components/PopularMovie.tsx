import {
  Box,
  Button,
  createStyles,
  Flex,
  Grid,
  Paper,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getTrending } from "../api/trending";
import { useMediaQuery } from "@mantine/hooks";
import { Carousel } from "@mantine/carousel";
import { getMoviePopular } from "../api/movieAPI";
import { IconMovie } from "@tabler/icons";
// import Popular from './TV/Popular'
// import Trending from './TV/Trending'
// import AiringToday from './TV/AiringToday'
// import OnAir from './TV/OnAir'
// import TopRated from './TV/TopRated'

export default function MoviePopular() {
  const {
    data: popularData,
    isLoading: trdIsLoading,
    isSuccess: trdIsSuccess,
  } = useQuery(["popularTV"], getMoviePopular);

//   {
//     trdIsSuccess && console.log("🏀", popularData);
//   }

  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  // const slides = trendingData.map((item) => (
  //   <Carousel.Slide key={item.title}>
  //     <Card {...item} />
  //   </Carousel.Slide>
  // ));

  return (
    <>
      <Flex w="100%" style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex" }}>
          <Text fw={700} fz={25}>
            Popular
          </Text>
          <Box
            bg="red"
            mt="auto"
            mb="auto"
            ml="md"
            px={5}
            py={2}
            fz={10}
            sx={(theme) => ({
              borderRadius: theme.radius.lg,
            })}
          >
            MOVIE
          </Box>
        </div>
        <div
          style={{ height: "100%", marginTop: "auto", marginBottom: "auto" }}
        >
          <Box
            fw={300}
            fz={15}
            style={{ color: "#32BAF5", textDecoration: "underline" }}
          >
            See More
          </Box>
        </div>
      </Flex>
      <Grid w="100%" mb="xl" grow ml="0" my="lg" gutter={10}>
        {trdIsSuccess &&
          popularData.results.slice(0, 7).map((td: any) => (
            <Grid.Col span={3}>
              <Card
                key={td.title}
                image={`https://image.tmdb.org/t/p/original/${td.poster_path}`}
                title={td.title}
                date={`${td.release_date.slice(0, 4)} | `}
                category={td.media_type ? `${td.media_type}`: 'MOVIE'}
              />
            </Grid.Col>
          ))}
      </Grid>
    </>
  );

  // return (
  //   // <Flex direction='column'>
  //   // <Trending media_type="TV SERIES"/>
  //   // <Popular media_type="TV SERIES" />
  //   // <AiringToday media_type='TV SERIES'/>
  //   // <OnAir media_type='TV SERIES'/>
  //   // <TopRated media_type='TV SERIES'/>
  //   // </Flex>
  //   <>
  //     {trdIsSuccess &&
  //       trendingData.results.map((td: any) => (
  //         <Card
  //           image={`https://image.tmdb.org/t/p/original/${td.poster_path}`}
  //           title=""
  //           category=""
  //         />
  //       ))}
  //     ;
  //   </>
  // );
}

interface CardProps {
  image: string;
  title: string;
  date: string;
  category: string;
}
const useStyles = createStyles((theme) => ({
  card: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 500,
    color: theme.white,
    fontSize: 16,
    alignItems: "flex-end",
  },

  icon: {
    color: theme.white,
    opacity: 0.7,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));
function Card({ image, title, date, category }: CardProps) {
  const { classes } = useStyles();
  return (
    <Flex direction="column">
      <Paper
        h="200px"
        shadow="md"
        p="xl"
        // pt='auto'
        radius="md"
        sx={{ backgroundImage: `url(${image})` }}
        className={classes.card}
      />
      <div style={{ marginTop: "5px" }}>
        <Flex>
          <Text className={classes.category} size="xs">
            {date}
          </Text>
          <Box pt={1} px={5}>
            <IconMovie className={classes.icon} size={14} />
          </Box>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
        </Flex>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Flex>
  );
}
