import React from 'react';
import { Flex, IconButton, Box, Text, Link, Image } from '@chakra-ui/react';
import { Link as RouterLink, } from 'react-router-dom';
import { Chat, Home, Memo, ProfileNav } from '../common/import';

const BottomNavBar: React.FC = () => {
    return (
        <Flex
            as="nav"
            position="fixed"
            bottom="0"
            left="0"
            width="100%"
            h={"12%"}
            bg="white"
            borderTop="1px solid #e2e8f0"
            zIndex="1000"
            justify="space-around"
            align="center"
            padding="8px 0"
            boxShadow="md"
        >
            <NavItem to="/home" source={Home} />
            <NavItem to="/chat" source={Chat} />
            <NavItem to="/memo" source={Memo} />
            <NavItem to="/profile" source={ProfileNav} />
        </Flex>
    );
};

interface NavItemProps {
    to: string;
    source: any
}

const NavItem: React.FC<NavItemProps> = ({ to, source }) => {
    return (
        <Link as={RouterLink} to={to} _hover={{ textDecoration: 'none' }}>
            <Box textAlign="center">
                <Image src={source} />
            </Box>
        </Link>
    );
};

export default BottomNavBar;
