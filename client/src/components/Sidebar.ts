import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <Drawer variant="permanent">
      <List>
        <ListItem button component={Link} to="/generate-quote">
          <ListItemText primary="Generate Quote" />
        </ListItem>
        <ListItem button component={Link} to="/online-payment">
          <ListItemText primary="Online Payment" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
