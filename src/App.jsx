import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText, Paper, Button, TextField } from '@material-ui/core';

import Appbar from './components/Appbar/Appbar'

const styles = theme => ({
  card: {
    marginTop: '24px'
  },
  flex: {
    display: 'flex',
    marginTop: '24px'
  }
})

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: [
        { id: 0, title: 'D2 LingProg', description: 'Montar apresentação' },
        { id: 1, title: 'Maratona de programação', description: 'começa às 10:00' }
      ],
      taskToAdd: {
        id: null,
        title: '',
        description: ''
      }
    }
  }

  addTask = () => {
    let newTasks = this.state.tasks
    let task = this.state.taskToAdd

    task.id = newTasks.length + 1
    newTasks.push(task)

    this.setState({
      tasks: newTasks,
      taskToAdd: {
        id: null,
        title: '',
        description: ''
      }
    })
  }

  deleteTask = (index) => {
    let newTasks = this.state.tasks

    newTasks.splice(index, 1)

    this.setState({
      tasks: newTasks
    })
  }


  handleChange = (event) => {
    const { name, value } = event.target

    this.setState(prevState => ({
      taskToAdd: { ...prevState.taskToAdd, [name]: value }
    }))
  }

  render() {
    const { classes } = this.props
    const { tasks, taskToAdd } = this.state

    return (
      <>
        <Appbar tasksNumber={tasks.length} />
        <span className={classes.flex}>
          <TextField
            label='Título'
            name='title'
            value={taskToAdd.title}
            onChange={e => this.handleChange(e)}
          />
          <TextField
            label='Descrição'
            name='description'
            value={taskToAdd.description}
            onChange={e => this.handleChange(e)}
          />
          <Button color='primary' variant='contained' onClick={() => this.addTask()}>
            Add
        </Button>
        </span>
        <List>
          {tasks.map((t, index) =>
            <Paper key={index} className={classes.card}>
              <ListItem button onClick={(index) => this.deleteTask(index)}>
                <ListItemText primary={t.title} secondary={t.description} />
              </ListItem>
            </Paper>
          )}
        </List>
      </>
    );
  }
}

export default withStyles(styles)(App)
