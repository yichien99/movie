import { Box, Text } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import { HeaderSearch } from "../components/Header";
import { NavbarMinimalColored } from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Trending from "../components/Trending";
import MoviePopular from "../components/PopularMovie";
import MovieNow from "../components/NowPlaying";

export default function Home() {
  return (
    <Box w="90%">
      <Trending />
      <MoviePopular />
      <MovieNow />
    </Box>
  );
}
