import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import GridIcon from './GridIcon';
import ListIcon from './ListIcon';
import ViewContext from '../../contexts/ViewContext';

const useStyles = makeStyles(theme => ({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    padding: theme.spacing(1),
    transition: `border-color ${theme.transitions.duration.short}, background-color ${theme.transitions.duration.short}`,
  },
  activeView: {
    transition: `border-color ${theme.transitions.duration.short}, background-color ${theme.transitions.duration.short}`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderColor: theme.palette.primary.dark,

    '& path, rect': {
      transition: `fill ${theme.transitions.duration.short}`,
      fill: theme.palette.primary.contrastText,
    },
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

const ViewControls = () => {
  const classes = useStyles();
  const { dispatch, view } = useContext(ViewContext);

  return (
    <div className={classes.container}>
      <ButtonGroup size="small">
        <Button
          className={clsx(classes.button, view === 'grid' && classes.activeView)}
          onClick={() => dispatch({ view: 'grid' })}
        >
          <GridIcon />
        </Button>
        <Button
          className={clsx(classes.button, view === 'list' && classes.activeView)}
          onClick={() => dispatch({ view: 'list' })}
        >
          <ListIcon />
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default ViewControls;