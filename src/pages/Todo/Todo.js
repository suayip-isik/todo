import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import styles from './Todo.style';
import TodoComplate from "../../components/TodoComplate";

const initialTodo = {
  title: '',
  isActive: true,
}

const Todo = () => {

  const [todo, setTodo] = useState(initialTodo)
  const [todos, setTodos] = useState([])

  const onChangeInput = (text) => setTodo({ ...todo, title: text });

  // useEffect(() => {
  //   console.log(todo);
  // }, [todo]) // follow todo state

  const addTodo = () => {
    if (todo.title === '') {
      return false
    }
    return setTodos([...todos, todo])
  }

  useEffect(() => {
    setTodo(initialTodo)
  }, [todos]) // follow todos state

  const todoIsComplete = (todo, i) => {
    const newState = todos.map(obj => {
      if (todos[i] === obj) {
        return { ...obj, isActive: !todo.isActive }
      }

      return obj;
    });
    setTodos(newState);
  };

  return (
    <SafeAreaView style={styles.pages}>

      <View style={styles.container}>

        <Text style={styles.title}>todos</Text>

        <View style={styles.inputView}>

          <TextInput
            value={todo.title}
            onChangeText={onChangeInput}
            placeholder="Add todo"
            style={styles.textInput} />

          <TouchableOpacity
            onPress={addTodo}
            style={styles.addButton}>
            <Text>Ekle</Text>
          </TouchableOpacity>

        </View>

        <ScrollView style={styles.todoListView}>
          {
            todos.map(
              (todo, i) => (
                <TouchableOpacity
                  key={i}
                  style={styles.todoViewButton}
                  onPress={() => todoIsComplete(todo, i)}
                >
                  <Text style={todo.isActive ? styles.todoText : [styles.todoText, { textDecorationLine: 'line-through', color: 'gray' }]}>{todo.title}</Text>
                  {todo.isActive === false
                    ? <TodoComplate />//<View style={styles.checkView}></View>
                    : <></>
                  }
                </TouchableOpacity>
              )
            )
          }
        </ScrollView>

      </View>

    </SafeAreaView>
  )
}

export default Todo;