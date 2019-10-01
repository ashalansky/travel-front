import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ExploreIcon from '@material-ui/icons/Explore';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import ListItemText from '@material-ui/core/ListItemText';
import { tsConditionalType } from "@babel/types";


export default function RoutListItem(props){

return(
<ListItem>
<ListItemAvatar>
  <Avatar>
  <ExploreIcon />
  </Avatar>
</ListItemAvatar>
<ListItemText primary={props.name} />
<IconButton edge="end" aria-label="delete">
  <DeleteOutlineIcon />
</IconButton>
</ListItem>

)
}