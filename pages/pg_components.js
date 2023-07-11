import Menu from './pg_menu';
import {Box} from '@chakra-ui/react'
import {Components} from './pg_submenu';

export default function Main() {
  return (
    <Box m={2}>
      <Menu/>
      <Components/>
    </Box>
  )
}