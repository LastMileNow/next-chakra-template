import {Box} from "@chakra-ui/react";
import Menu from './pg_menu';
import NoSSR from "../util/NoSSR";
import ScreenCenter from '../util/widgets';
import AboutMe from './about';

function Content() {
  return <NoSSR><ScreenCenter><AboutMe/></ScreenCenter></NoSSR>
}
export default function Main() {
  return (
    <Box m={2}>
      <Menu/>
      <Content />
    </Box>
  )
}