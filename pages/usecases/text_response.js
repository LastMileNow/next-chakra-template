import React from 'react';
import {Input, Text, VStack,Spacer } from '@chakra-ui/react'
import {MenuPage} from '../pg_menu';

export default function Example() {
    let [value, setValue] = React.useState('');
    let [msg, setMsg] = React.useState('');

    const fetchData = () => {
        fetch('/api/echome?msg='+value) // use '/api/echome?msg=' or 'http://localhost/?msg=' when testing locally 
        .then(function(response) {
            if (!response.ok) {
                setMsg('Error with Status Code: ' + response.status);
                return;
            }
            response.json().then(function(data) {
                setMsg(data.reply);
            });
        }).catch(function(err) {setMsg('Error: ' + err);});
        setValue('');
        return ;
    };
    // https://stackoverflow.com/questions/31272207/to-call-onchange-event-after-pressing-enter-key
    let handleKeyDown = (e) => {
        if (e.key === 'Enter') { // when user presses enter, fetch data from API server
            setMsg("["+value+ "] sent!")
            fetchData();
        }
    }
    let handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }
    return (
    <MenuPage>
        <VStack spacing={2} m={4}>
            <Text>  This calls the backend </Text>
            <Spacer/>
            <Input  value={value} size='sm' w='100%' onKeyDown={handleKeyDown} 
            onChange={handleInputChange} placeholder='Please enter your message here'/>
            <Text size='sm' w='100%'>{msg}</Text>
        </VStack>
    </MenuPage>
    )
  }