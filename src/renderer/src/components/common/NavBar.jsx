import React from "react";
import { Grid } from "@material-ui/core";
import logo from "/RIVA_NETWORK_TEXT.png";
import reducers from "../../redux/slices";
import { useDispatch } from "react-redux";

const NavBar = ({setDeltaY}) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(reducers.isSlideAnimationStarted.setIsSlideAnimationStarted({isStarted: true, up: true}));
    };

    return (
        <div className="navbar-container">
            <Grid container>
                <Grid item xs={3} md={3} lg={3}>
                    <div className="navbar-button-border clickable" onClick={handleClick}></div>
                    <button className="navbar-button clickable" onClick={handleClick}>
                        OYNA
                    </button>
                </Grid>
                <Grid item xs={3} md={3} lg={3} className="navbar-logo">
                    <img src={logo} />
                </Grid>
            </Grid>
        </div>
    );
};

export default NavBar;
