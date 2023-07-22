import {Box, Breadcrumb,  BreadcrumbItem,  BreadcrumbLink} from '@chakra-ui/react';


export default function Menu() {

    return (
    <Box bg='grey' w='100%' p={2} color='white'>
        <Breadcrumb fontWeight='medium' fontSize='sm'>
            <BreadcrumbItem>
                <BreadcrumbLink href='/'>Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/pg_templates'>Templates</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/pg_topics'>Special Topics</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/pg_components'>Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/pg_usecases'>Use Cases</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='/pg_databases'>Databases</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    </Box>
    )
}


// https://bobbyhadz.com/blog/react-pass-component-as-prop
export function MenuPage({children}) {
    return  (
        <Box>
            <Menu/>
            {children}
        </Box>
    );
}