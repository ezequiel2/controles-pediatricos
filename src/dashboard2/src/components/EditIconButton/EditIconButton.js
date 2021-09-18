import React from 'react'
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Edit from "@material-ui/icons/Edit";
import styles from "../../assets/jss/material-dashboard-react/components/tasksStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const EditIconButton = () => {
    const classes = useStyles();
    return (
        <div>
            <Tooltip
                id="tooltip-top"
                title="Editar"
                placement="top"
                classes={{ tooltip: classes.tooltip }}
              >
                <Button
                  aria-label="Edit"
                  className={classes.tableActionButton}
                >
                  <Edit
                    className={
                      classes.tableActionButtonIcon + " " + classes.edit
                    }
                  />
                </Button>
              </Tooltip>
        </div>
    )
}

export default EditIconButton
