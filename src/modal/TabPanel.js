import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Paper, Typography } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    fontFamily: 'Ubuntu',
    borderRadius: 15,
    marginLeft: 10,
    height: "60vh"
  },
  tabs: {
    minWidth: "200px",
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabPanel: {
    overflow: 'auto',
    width: "100%",
  },
  flight: {
    display: 'grid',
    gridTemplateColumns: '40% auto 40%',
    gridTemplateRows: '50% 50%',
    textAlign: "center",
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    marginRight: 10,
    marginBottom: 5,
    height: 90,
    fontFamily: 'Ubuntu',
    border: '1px solid #8d9ae8',
    borderRadius: 15,
    color: '#a5a0aa',
    '&:hover': {
      boxShadow: '-5px 0px 1px 0px rgba(155,139,247,1);'
    }
  },
  selectedTab: {
    display: 'grid',
    gridTemplateColumns: '40% auto 40%',
    gridTemplateRows: '50% 50%',
    textAlign: "center",
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    marginRight: 10,
    marginBottom: 5,
    height: 90,
    fontFamily: 'Ubuntu',
    border: '1px solid #8d9ae8',
    borderRadius: 15,
    color: '#a5a0aa',
    '&:hover': {
      boxShadow: '-5px 0px 1px 0px rgba(155,139,247,1);'
    },
    background: "#f3e5f5"
  },
  button: {
    // margin: theme.spacing(1),
    background: 'white',
    cursor: 'pointer',
    border: '2px solid #f29e92',
    color: '#a5a0aa',
    fontSize: 20,
    width: '50%',
    margin: 'auto',
    padding: '2px 8px',
    borderRadius: 15,
    '&:hover': {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: 'white',
      boxShadow: '0 2px 5px 2px rgba(255, 105, 135, .3)',
    }
  },
  selectedButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    cursor: 'pointer',
    border: '2px solid #f29e92',
    color: '#fff',
    fontSize: 20,
    width: '50%',
    margin: 'auto',
    padding: '2px 8px',
    borderRadius: 15,
  }
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [state, setState] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const createTabs = function () {
    let tabs = [];
    for (let i = 0; i < props.cities.length - 1; i++) {
      let message = `${props.cities[i].cityCode} > ${props.cities[i + 1].cityCode}`
      tabs.push(
        <Tab label={message} {...a11yProps(i)} />
      )
    }
    return tabs;
  }

  const selectFlight = function(flightPlan, cityCode) {
    let currentState = {...state};
    currentState[cityCode] = flightPlan.iden;
    setState(currentState) ;
    props.selectedFlight(flightPlan, cityCode);
  }

  const tabsContent = function() {
    let totalTabContent = [];
    for (let i = 0; i < props.flightPlans.length; i++) {
      let tabContent = []
      for (let j = 0; j < props.flightPlans[i].length; j++) {
        // let selectedTab = (state[props.cities[i].cityCode] === props.flightPlans[i][j].iden) ? classes.selectedTab : classes.flight;
        let selectedButton = (state[props.cities[i].cityCode] === props.flightPlans[i][j].iden) ? classes.selectedButton : classes.button;
        tabContent.push(
          <Paper className={classes.flight}>
            <Typography variant="body2" style={{ gridColumn: 1, fontSize: 20}}>
              {props.cities[i].cityCode}
            </Typography>
            <ArrowForwardIosIcon style={{ gridColumn: 2, justifySelf: 'center'}}></ArrowForwardIosIcon>
            <Typography variant="body2" style={{ gridColumn: 3, fontSize: 20}}>
              {props.cities[i+1].cityCode}
            </Typography>
            <Typography style={{ fontSize: 16}}>
              {props.cities[i].departureDate}
            </Typography>
            <Typography style={{ fontSize: 18, color: '#9b8bf7'}}>
              ${props.flightPlans[i][j].unrounded_price}
            </Typography>
            <Button variant="outlined" className={selectedButton} onClick={() => selectFlight(props.flightPlans[i][j], props.cities[i].cityCode)}>
              SELECT
            </Button>
          </Paper>
        )
      }
      totalTabContent.push(tabContent);
    }
    return totalTabContent;
  }
  const tabPanels = function () {
    let tabPanels = [];
    for (let i = 0; i < props.flightPlans.length; i++) {
      tabPanels.push(
        <TabPanel value={value} index={i} 
          className={classes.tabPanel}
          orientation="vertical"
          variant="scrollable"
          aria-label="Vertical tabs example"
        >
          {tabsContent()[i]}
        </TabPanel>
        )
    }
    return tabPanels
  }

  if (props.cities[props.cities.length - 1].cityCode){
    return (
      <Paper className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          {createTabs()}
        </Tabs>
        {tabPanels()}
      </Paper>
    );
  }
  return (
    <Paper className={classes.root}></Paper>
  )
}