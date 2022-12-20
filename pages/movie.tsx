import { Box } from "@mantine/core";
import Head from "next/head";
import Image from "next/image";
import { HeaderSearch } from "../components/Header";
import Movie from "../components/Movie";
import { NavbarMinimalColored } from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Movie />
    </>
  );
}
