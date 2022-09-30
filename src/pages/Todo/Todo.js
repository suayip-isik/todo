import React, { useEffect, useState } from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity, View, ScrollView, Modal } from "react-native";
import styles from './Todo.style';
import TodoComplate from "../../components/TodoComplate";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomModal from "../../components/CustomModal";
import TodoCard from "../../components/TodoCard";


const AsyncStorageKey = 'todoList';

const initialTodo = {
  title: '',
  isActive: true,
}

const Todo = () => {

  const [todo, setTodo] = useState(initialTodo)
  const [todos, setTodos] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [selectedTodo, setSelectedTodo] = useState()
  const modalState = (value) => {
    setSelectedTodo(value)
    setModalVisible(!modalVisible)
  };

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

  const deleteTodolist = () => {
    setTodos([]);
    storeData(todos)
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

  const deleteTodoCard = () => { 
    console.log(selectedTodo) 
  }

  return (
    <SafeAreaView style={styles.pages}>

      <CustomModal
        visible={modalVisible}
        modalState={modalState}
        deleteTodoCard={deleteTodoCard}
        cardName={selectedTodo && selectedTodo.title}
      />

      <Text style={styles.title}>todos</Text>

      <View style={styles.inputView}>

        <TextInput
          value={todo.title}
          onChangeText={onChangeInput}
          placeholder="Add todo"
          style={styles.textInput} />

      </View>

      <View style={styles.buttonView}>

        <TouchableOpacity
          onPress={addTodo}
          style={styles.addButton}>
          <Text style={styles.textStyle}>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={deleteTodolist}
          style={styles.deleteButton}>
          <Text style={styles.textStyle}>Delete TodoList</Text>
        </TouchableOpacity>

      </View>

      <ScrollView
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}
      >
        {todos &&
          todos.map(
            (todo, i) => <TodoCard
              onLongPress={() => modalState(todo)}
              key={i}
              onPress={() => todoIsComplete(todo, i)}
              todoState={todo.isActive}
              todoTitle={todo.title}
            />
          )
        }
      </ScrollView>


    </SafeAreaView>
  )
}

export default Todo;