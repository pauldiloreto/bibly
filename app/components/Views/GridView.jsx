import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(0, 4),
  },
}));

const GridView = (props) => {
  const { data } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      Grid!!
      <br />
      {data.map(book => (
        <span key={book}>{book}</span>
      ))}
    </div>
  );
};

GridView.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default GridView;
