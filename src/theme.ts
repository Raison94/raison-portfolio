import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Palette {
    portfolio: {
      navbar: string
      navbarText: string
      greeting: string
      portrait: string
      portraitBorder: string
      decorationBorder: string
      avatar: string
      avatarBorder: string
      name: string
      role: string
      highlightHeading: string
      highlightText: string
    }
  }
  interface PaletteOptions {
    portfolio?: Palette['portfolio']
  }
}

const baseTheme = createTheme({
  palette: {
    primary: {
      main: '#31583c',
      dark: '#24432d',
      light: '#eaf2e6',
      contrastText: '#fff',
    },
    secondary: { main: '#9ebc88' },
    text: { primary: '#18261d', secondary: '#59635c' },
    background: { default: '#fff', paper: '#fafcf8' },
    divider: '#e0e7dc',
    portfolio: {
      navbar: '#0D1117',
      navbarText: '#ccc',
      greeting: '#536258',
      portrait: '#edf2e9',
      portraitBorder: '#dce5d7',
      decorationBorder: '#d2ddcc',
      avatar: '#d3e2c7',
      avatarBorder: '#ffffffb3',
      name: '#263b2c',
      role: '#596b5e',
      highlightHeading: '#243b2b',
      highlightText: '#606b63',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: {
      fontSize: '2.4rem',
      lineHeight: 1.12,
      fontWeight: 700,
      letterSpacing: '-0.045em',
      textWrap: 'balance',
    },
    h5: { fontSize: '1.5rem', fontWeight: 600, letterSpacing: '-0.025em' },
    body1: { fontSize: '1.1rem', lineHeight: 1.85 },
    body2: { fontSize: '0.95rem', lineHeight: 1.7 },
    subtitle1: { fontSize: '1.2rem', fontWeight: 600, lineHeight: 1.5 },
    subtitle2: { fontSize: '1rem', fontWeight: 500, lineHeight: 1.5 },
    caption: { fontSize: '0.9rem', lineHeight: 1.5 },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.portfolio.navbar,
          color: theme.palette.portfolio.navbarText,
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: { '&.active': { fontWeight: 700 } },
        contained: {
          borderRadius: 8,
          textTransform: 'none',
          boxShadow: 'none',
          '&:hover': { boxShadow: 'none' },
        },
        sizeLarge: { padding: '11.2px 24px' },
      },
    },
    MuiChip: {
      styleOverrides: {
        colorPrimary: ({ theme }) => ({
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.main,
          fontWeight: 600,
        }),
      },
    },
    MuiPaper: {
      styleOverrides: { outlined: { borderRadius: 12 } },
    },
  },
})

const theme = createTheme(baseTheme, {
  typography: {
    h1: {
      [baseTheme.breakpoints.up('sm')]: { fontSize: '3.2rem' },
      [baseTheme.breakpoints.up('md')]: { fontSize: '3.8rem' },
    },
    h5: { [baseTheme.breakpoints.up('lg')]: { fontSize: '1.65rem' } },
  },
})

export default theme
