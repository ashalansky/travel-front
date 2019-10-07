import React from 'react';
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
    height: 300,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tabPanel: {
    width: '100%',
    overflow: 'auto',
    maxHeight: 300
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
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0} 
        className={classes.tabPanel}
        orientation="vertical"
        variant="scrollable"
        aria-label="Vertical tabs example"
      >
        <Paper className={classes.flight}>
          <Typography variant="body2" style={{ gridColumn: 1, fontSize: 20}}>
            YYC
          </Typography>
          <ArrowForwardIosIcon style={{ gridColumn: 2, justifySelf: 'center'}}></ArrowForwardIosIcon>
          <Typography variant="body2" style={{ gridColumn: 3, fontSize: 20}}>
            YEG
          </Typography>
          <Typography style={{ fontSize: 16}}>
            23 Oct, 16:30
          </Typography>
          <Typography style={{ fontSize: 18, color: '#9b8bf7'}}>
            $450
          </Typography>
          <Button variant="outlined" className={classes.button}>
            SELECT
          </Button>
        </Paper>
        <Paper className={classes.flight}>
          <Typography variant="body2" style={{ gridColumn: 1, fontSize: 20}}>
            YYC
          </Typography>
          <ArrowForwardIosIcon style={{ gridColumn: 2, justifySelf: 'center'}}></ArrowForwardIosIcon>
          <Typography variant="body2" style={{ gridColumn: 3, fontSize: 20}}>
            YEG
          </Typography>
          <Typography style={{ fontSize: 16}}>
            23 Oct, 16:30
          </Typography>
          <Typography style={{ fontSize: 18, color: '#9b8bf7'}}>
            $500
          </Typography>
          <Button variant="outlined" className={classes.button}>
            SELECT
          </Button>
        </Paper>
        <Paper className={classes.flight}>
          <Typography variant="body2" style={{ gridColumn: 1, fontSize: 20}}>
            YEG
          </Typography>
          <ArrowForwardIosIcon style={{ gridColumn: 2, justifySelf: 'center'}}></ArrowForwardIosIcon>
          <Typography variant="body2" style={{ gridColumn: 3, fontSize: 20}}>
            YVR
          </Typography>
          <Typography style={{ fontSize: 16}}>
            23 Oct, 16:30
          </Typography>
          <Typography style={{ fontSize: 18, color: '#9b8bf7'}}>
            $600
          </Typography>
          <Button variant="outlined" className={classes.button}>
            SELECT
          </Button>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={1} className={classes.tabPanel}>
        <Paper className={classes.flight}>
          <Typography variant="body2" style={{ gridColumn: 1, fontSize: 20}}>
            YEG
          </Typography>
          <ArrowForwardIosIcon style={{ gridColumn: 2, justifySelf: 'center'}}></ArrowForwardIosIcon>
          <Typography variant="body2" style={{ gridColumn: 3, fontSize: 20}}>
            YVR
          </Typography>
          <Typography style={{ fontSize: 16}}>
            23 Oct, 16:30
          </Typography>
          <Typography style={{ fontSize: 18, color: '#9b8bf7'}}>
            $450
          </Typography>
          <Button variant="outlined" className={classes.button}>
            SELECT
          </Button>
        </Paper>
      </TabPanel>
      <TabPanel value={value} index={2} className={classes.tabPanel}>
      Item Three
      </TabPanel>
      <TabPanel value={value} index={3} className={classes.tabPanel}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4} className={classes.tabPanel}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5} className={classes.tabPanel}>
        Item Six
      </TabPanel>
    </div>
  );
}