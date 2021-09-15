/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, Box, Text, useColorMode } from 'theme-ui'
import ThemeSwitch from './theme-switch'

// const rootPath = `${__PATH_PREFIX__}/`

export default ({ title }) => {
  return (
    <header
      sx={{
        '@media print': { display: 'none' },
        display: 'flex',
        pb: 4,
        justifyContent: 'space-between',
        flexGrow: 4,
      }}
    >
      <Link to="/">
        <Text
          sx={{
            fontSize: 6, fontWeight: 'bold',
            px: 3,
            py: 1,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
          }}
        >
          {title}
        </Text>
        <br />
        <Text
          sx={{ px: 3 }}
        >
          Blockchain Infrastructure & Architecture
        </Text>
      </Link>
      <Box>
        <Link to="https://lucid.rizome.io" sx={{ mr: '2em' }}>
          Pool
        </Link>
        <Link to="https://rizome.io" sx={{ mr: '2em' }}>
          About
        </Link>
        <ThemeSwitch />
      </Box>
    </header>
  )
}
