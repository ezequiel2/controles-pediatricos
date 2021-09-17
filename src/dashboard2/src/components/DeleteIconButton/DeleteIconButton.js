import React from 'react'
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Close from "@material-ui/icons/Close";
import styles from "../../assets/jss/material-dashboard-react/components/tasksStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const DeleteIconButton = () => {
    const classes = useStyles();
    return (
        <div>
            <Tooltip
                id="tooltip-top-start"
                title="Eliminar"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton
                  aria-label="Close"
                  className={classes.tableActionButton}
                >
                  <Close
                    className={
                      classes.tableActionButtonIcon + " " + classes.close
                    }
                  />
                </IconButton>
              </Tooltip>
            
        </div>
    )
}

export default DeleteIconButton
