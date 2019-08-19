import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import GoogleDriveIcon from 'mdi-material-ui/GoogleDrive';
import DropboxIcon from 'mdi-material-ui/Dropbox';
import AmazonIcon from 'mdi-material-ui/Amazon';

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(4),
    display: 'grid',
  },
  library: {
    display: 'flex',
    alignItems: 'center',
  },
  libraryPath: {
    flexGrow: 1,
    marginRight: theme.spacing(1),
  },
  sync: {
    marginTop: theme.spacing(2),
  },
}));

const syncServices = [
  { label: 'Dropbox', Component: DropboxIcon },
  { label: 'Google Drive', Component: GoogleDriveIcon },
  { label: 'Amazon S3', Component: AmazonIcon },
];

const General = () => {
  const classes = useStyles();
  const [libraryPath, setLibraryPath] = useState('');

  return (
    <div className={classes.container}>
      <div className={classes.library}>
        <div className={classes.libraryPath}>
          <TextField
            fullWidth
            value={libraryPath}
            onChange={event => setLibraryPath(event.target.value)}
            label="Library Path"
          />
        </div>
        <div>
          <Button
            variant="contained"
            onClick={() => {}}
          >
        Browse
          </Button>
        </div>
      </div>

      <div className={classes.sync}>
        <Typography variant="h6">Sync</Typography>
        {syncServices.map(({ label, Component }) => (
          <IconButton key={label}>
            <Component />
          </IconButton>
        ))}
      </div>
    </div>
  );
};

export default General;