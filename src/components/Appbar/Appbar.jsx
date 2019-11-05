import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    }
})

class Appbar extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { classes, tasksNumber } = this.props

        return (
            <div className={classes.root}>
                <AppBar color="primary" position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            {`${tasksNumber} ${tasksNumber.length > 1 ? 'Tasks' : 'Task'}`}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Appbar)