import {
  Box,
  Button,
  createStyles,
  Flex,
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
// import Popular from './TV/Popular'
// import Trending from './TV/Trending'
// import AiringToday from './TV/AiringToday'
// import OnAir from './TV/OnAir'
// import TopRated from './TV/TopRated'

export default function TV() {
  const {
    data: trendingData,
    isLoading: trdIsLoading,
    isSuccess: trdIsSuccess,
  } = useQuery(["trending"], getTrending);

  // {
  //   trdIsSuccess && console.log("🍙", trendingData);
  // }

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
            {title}
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
            {tag}
          </Box>
        </div>
        <div
          style={{ height: "100%", marginTop: "auto", marginBottom: "auto" }}
        >
          <Box
            fw={300}
            fz={15}
            style={{ color: "#32BAF5", textDecoration: "underline" }}
            onClick={() => console.log("See More")}
          >
            See More
          </Box>
        </div>
      </Flex>
      <Carousel
        w="100%"
        mb="xl"
        slideSize="40%"
        breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: 2 }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {trdIsSuccess &&
          trendingData.results.map((td: any) => (
            <Carousel.Slide key={td.title}>
              <Card
                image={`https://image.tmdb.org/t/p/original/${td.poster_path}`}
                title={td.title}
                // category={td.media_type}
                category={
                  `${td.release_date.slice(0, 4)}` + td.media_type &&
                  ` | ${td.media_type}`
                }
              />
            </Carousel.Slide>
          ))}
      </Carousel>
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
  category: string;
}
const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1,
    fontSize: 20,
    marginTop: theme.spacing.xs,
    alignItems: "flex-end",
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));
function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();
  return (
    <Paper
      h="250px"
      shadow="md"
      p="xl"
      // pt='auto'
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div style={{ marginTop: "auto" }}>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
  );
}
