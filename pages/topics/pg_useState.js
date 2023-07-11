import React from 'react';
import {Center, Box, Button,Text} from '@chakra-ui/react'
import {MenuPage} from '../pg_menu';
export default function Count() {
    const [count, setCount] = React.useState(0);

    return (
        <MenuPage>
            <Center>
                <Box verticalAlign='middle'>
                <Button onClick={() => setCount(count + 1)}>
                    Like
                </Button>
                <Button onClick={() => setCount(count - 1)}>
                    Dislike
                </Button>
                </Box>
                <Text>You liked {count} times</Text>
            </Center>
        </MenuPage>
    );
}