import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import Header from './Header/Header';
import SideBar from './SideBar/SideBar';
import View from './View';
import { Provider } from '../contexts/ViewContext';

const drawerWidth = 150;

const useStyles = makeStyles({
  content: {
    marginLeft: drawerWidth,
  },
});

const MainWindow = (props) => {
  const { data } = props;
  const classes = useStyles();

  return (
    <Provider>
      <SideBar drawerWidth={drawerWidth} />

      <div className={classes.content}>
        <Header />

        <View data={data} />
      </div>
    </Provider>
  );
};

MainWindow.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
};
MainWindow.defaultProps = {
  data: [],
};

export default MainWindow;