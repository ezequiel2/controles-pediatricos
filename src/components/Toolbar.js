import { withStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

export const styles = (theme) => ({
  root: {
    height: 100,
    [theme.breakpoints.up('md')]: {
      height: 80,
    },
  },
});

export default withStyles(styles)(Toolbar);
