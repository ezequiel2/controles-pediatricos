import React from 'react'
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import RemoveRedEye from "@material-ui/icons/RemoveRedEye";
import styles from "../../assets/jss/material-dashboard-react/components/tasksStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const VisualIconButton = () => {
    const classes = useStyles();
    return (
        <div>
            <Tooltip
                id="tooltip-top-start"
                title="Ver"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <IconButton
                  aria-label="Visualized"
                  className={classes.tableActionButton}
                >
                  <RemoveRedEye
                    className={
                      classes.tableActionButtonIcon + " " + classes.checked
                    }
                  />
                </IconButton>
              </Tooltip>
            
        </div>
    )
}

export default VisualIconButton