import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    backgroundColor: '#FAF3FF',
    borderTop: '1px solid #F2E0FF',
    display: 'flex',
    alignItems: 'center',
    height: ({ height }) => height,
    position: 'sticky',
    bottom: 0,
    padding: theme.spacing(0, 4),
  },
}));

const StatusBar = (props) => {
  const { data, height } = props;
  const classes = useStyles({ height });

  return (
    <div className={classes.container}>
      Total books:
      {' '}
      {data.length}
    </div>
  );
};

StatusBar.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  height: PropTypes.number.isRequired,
};

export default StatusBar;
