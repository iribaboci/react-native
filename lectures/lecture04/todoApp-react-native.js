import React from "react";
import {View, Button, Text, ScrollView, StyleSheet, Switch} from 'react-native';
import { Constants } from 'expo'


let id = 0;


const styles = StyleSheet.create({
  TodoContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
  //AppContainer: {paddingTop: Constants.statusBarHeight}
  AppContainer: {
      paddingTop: 30
    },
  Fill: {flex: 1}
})

// This is a Component, Stateless Functional Component (SFC)
//It is similar to pure function, it should only take props(arguments) and return the component, object
//Any changes in props will cause the function to be re-invoked
const Todo = (props) => (
  <View style={styles.TodoContainer}>
    <Switch value={props.todo.checked} onValueChange={props.onToggle} />
    <Button onPress={props.onDelete} title="delete"/>
    <Text>{props.todo.text}</Text>
  </View>
);


/*
Where React.Component is :
 - An abstract class that can be extended to behave however you want
 - Additional features that SFCs dont have
    - Have instances
    - Maintain their own state
    - Have lifecycle methods (similar to hooks or event handlers) that are automatically invoked
 */

/*
Component Lifecycle

Mount    ---->     Update(update Cycle)     ----> Unmount


Mount:
 - constructor(props)
 - render()
   - the meat of a component
   - return a Node
 - componentDidMount()
   - Do anything that isn't needed for UI (async actions, timers, etc)
 */

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addTodo() {
    id++
    const text = 'Todo number ${id}';
    this.setState({
      todos: [...this.state.todos, { id: id, text: text, checked: false }]
    }); // [...array] pull all the values of that array (is a way of clonning the array)
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  }

  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }

  render() {
    return (
      <View style={[styles.AppContainer,styles.Fill]}>
        <Text>Todo count: {this.state.todos.length}</Text>
        <Text>
          Unchecked todo count:
          {this.state.todos.filter((todo) => !todo.checked).length}
        </Text>
        <Button onPress={() => this.addTodo()} title="Add TODO"/>
        <ScrollView style={styles.Fill}>
          {this.state.todos.map(
            (todo) => (
              <Todo
                onToggle={() => this.toggleTodo(todo.id)}
                onDelete={() => this.removeTodo(todo.id)}
                todo={todo}
              />
            ) // Upper case `Todo` is a react component
          )}
        </ScrollView>
      </View>
    );
  }
}
