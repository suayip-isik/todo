import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import styles from './Todo.style';
import TodoComplate from "../../components/TodoComplate";
import AsyncStorage from '@react-native-async-storage/async-storage';


const AsyncStorageKey = 'todoList';

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

  const storeData = async (value) => {
    // console.log('LOG: ', value);
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(AsyncStorageKey, jsonValue)
      console.log('Ekleme Tamamlandı!');
    } catch (e) {
      console.log(e);
    }
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(AsyncStorageKey)
      console.log('GET DATA LOG: ', jsonValue);
      setTodos(JSON.parse(jsonValue))
      return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch (e) {

    }
  }

  useEffect(() => {
    getData();
  }, [])

  const addTodo = () => {
    if (todo.title === '') {
      return false
    }
    return setTodos([...todos, todo])
  }

  useEffect(() => {
    setTodo(initialTodo)
    storeData(todos)
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