import Menu from './pg_menu';
import {Box} from '@chakra-ui/react'
import {SpecialTopics} from './pg_submenu';

export default function Main() {
  return (
    <Box m={2}>
      <Menu/>
      <SpecialTopics/>
    </Box>
  )
}