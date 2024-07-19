import React, { useContext, useEffect, useState } from 'react';
import { AppBar, IconButton, Toolbar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material'; import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useStyles from "./styles";
import Sidebar from "../Sidebar/Sidebar"
import Search from '../Search/Search';
import { fetchToken, createSessionId, moviesApi } from '../utils';
import { useDispatch, useSelector } from 'react-redux';
import { setUser, userSelector } from "../../features/auth"
import { ColorModeContext } from "../utils/ToggleColorMode"

const NavBar = () => {
    const { isAuthenticated, user } = useSelector(userSelector);
    const [mobileOpen, setmobileOpen] = useState(false);
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)');
    const theme = useTheme();
    const dispatch = useDispatch();
    const token = localStorage.getItem('request_token');
    const sessionIdFromLoacalStorage = localStorage.getItem('session_id');

    const colorMode = useContext(ColorModeContext);

    useEffect(() => {
        const loginUser = async () => {
            if (token) {
                if (sessionIdFromLoacalStorage) {

                    const { data: userData } = await moviesApi.get(`/account?session_id=${sessionIdFromLoacalStorage}`);

                    dispatch(setUser(userData));
                } else {
                    const sessionId = await createSessionId();
                    const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);
                    dispatch(setUser(userData));
                }
            }
        }
        loginUser();
    }, [token]);


    return (
        <>
            <AppBar position='fixed'>
                <Toolbar className={classes.toolbar} >
                    {isMobile && (
                        <IconButton
                            color='inherit'
                            edge="start"
                            style={{
                                outline: 'none'
                            }}
                            onClick={() => setmobileOpen((previousMobileOpen) => !previousMobileOpen)}
                            className={classes.menuButton}>
                            <Menu />
                        </IconButton>
                    )}
                    <IconButton
                        color="inherit"
                        sx={{ ml: 1 }}
                        onClick={colorMode.toggleColorMode}
                    >
                        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}

                    </IconButton>

                    {!isMobile && <Search />}

                    <div>
                        {!isAuthenticated ? (
                            <Button color='inherit' onClick={fetchToken}>
                                Login &nbsp;<AccountCircle />
                            </Button>
                        ) : (
                            <Button color='inherit' component={Link} to={`/profile/${user.id}`} className={classes.linkButton} onClick={() => { }}>
                                {!isMobile && <>My Movies &nbsp;</>}
                                <Avatar src='data:image/jpeg;base64,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' style={{ width: 30, height: 30 }} alt='profile' />
                            </Button>
                        )}

                    </div>
                    {isMobile && <Search />}
                </Toolbar>

            </AppBar >
            <div>

                <nav className={classes.drwer}>
                    {isMobile ? (
                        <Drawer
                            variant='temperary'
                            anchor='right'
                            open={mobileOpen}
                            onClose={() => setmobileOpen((previousMobileOpen) => !previousMobileOpen)}
                            classes={{ paper: classes.drawerPaper }}
                            ModalProps={{ keepMounted: true }}>
                            <Sidebar setmobileOpen={setmobileOpen} />
                        </Drawer>
                    ) : <Drawer classes={{ paper: classes.drawerPaper }} variant='permanent' open>
                        <Sidebar setmobileOpen={setmobileOpen} />
                    </Drawer>}
                </nav>

            </div>
        </>
    )
}

export default NavBar
