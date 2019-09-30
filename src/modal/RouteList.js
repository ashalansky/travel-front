import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ExploreIcon from '@material-ui/icons/Explore';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function RouteList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <ExploreIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Barcelona, Spain" />
        <IconButton edge="end" aria-label="delete">
          <DeleteOutlineIcon />
        </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <ExploreIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Lisbon, Portugal" />
        <IconButton edge="end" aria-label="delete">
          <DeleteOutlineIcon />
        </IconButton>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
          <ExploreIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Prague, Czech Republic" />
        <IconButton edge="end" aria-label="delete">
          <DeleteOutlineIcon />
        </IconButton>
      </ListItem>
    </List>
  );
}