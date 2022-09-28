import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
// import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';

interface HeaderProps {
  sections: ReadonlyArray<{
    title: string;
    url: string;
  }>;
  title: string;
}

export default function Header(props: HeaderProps) {
  const { sections, title } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Box sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="100"
            image="./transparent-turuncu.png"
            alt="amber logo"
          />
        </Box>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
        <a
          href="https://api.whatsapp.com/send?phone="
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Whatsapp
        </a>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}