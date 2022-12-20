import { useState } from "react";
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
} from "@mantine/core";
import {
  TablerIcon,
  IconMovie,
  IconHome2,
  IconCategory,
  IconDeviceTv,
} from "@tabler/icons";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  link: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.md,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.white,
    opacity: 0.85,

    "&:hover": {
      opacity: 1,
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background!,
        0.1
      ),
    },
  },

  active: {
    opacity: 1,
    "&, &:hover": {
      backgroundColor: "#B8F1FB60",
      color: "#FFEA00",
    },
  },
  br: {
    borderRadius: 20,
  },
}));

interface NavbarLinkProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?(): void;
}

function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionDuration={0}>
      <UnstyledButton
        onClick={onClick}
        className={cx(classes.link, { [classes.active]: active })}
      >
        <Icon stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home", path: "/" },
  { icon: IconCategory, label: "Category", path: "/" },
  { icon: IconMovie, label: "Movie", path: "movie" },
  { icon: IconDeviceTv, label: "TV", path: "tv" },
];

export function NavbarMinimalColored() {
  const router = useRouter();
  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => {
        setActive(index);
        router.push(link.path);
      }}
    />
  ));

  const { classes } = useStyles();

  return (
    <Navbar
      className={classes.br}
      width={{ base: 80 }}
      p="md"
      mx="lg"
      mah="700px"
      sx={() => ({
        backgroundColor: "#B8F1FB60",
      })}
    >
      <Navbar.Section grow my={85}>
        <Stack justify="center" spacing={100}>
          {links}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
