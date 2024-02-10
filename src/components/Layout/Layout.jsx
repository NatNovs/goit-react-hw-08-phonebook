import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import UserMenu from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { selectUser } from 'store/auth/selectors';

const Layout = () => {
  const user = useSelector(selectUser);
  return (
    <>
      <Box m="10" display="flex" justifyContent="center">
        <Breadcrumb color="black" separator="|" fontWeight="medium" fontSize="md">
          {user ? (
            <UserMenu />
          ) : (
            <>
              <BreadcrumbItem p="5">
                <BreadcrumbLink as={NavLink} to="/login">
                  Login
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbItem p="5">
                <BreadcrumbLink as={NavLink} to="/register">
                  Register
                </BreadcrumbLink>
              </BreadcrumbItem>
              {/* <BreadcrumbItem p="5">
                <BreadcrumbLink as={NavLink} to="/contacts">
                  Contacts
                </BreadcrumbLink>
              </BreadcrumbItem> */}
            </>
          )}
        </Breadcrumb>
      </Box>
      <Outlet />
    </>
  );
};

export default Layout;