import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import Header from './components/Header/Header'
import SaveCard from './components/SaveCard/SaveCard';
import ToDoCard from './components/ToDoCard/ToDoCard'

const App = ()=> {
  const [todos,setTodos] = useState([
    "Çöp dökülecek",
    "Oda toplanacak",
    "Ayakkabı temizlenecek",
    "Markete gidilecek",
  ]);
  
  const [newTodo,setNewTodo] = useState("");
 
 
  const handleTodoDone = ()=>{
    console.log("123")
  }

  const handlAddNewTodo = ()=>{    
     setTodos([...todos,newTodo]);     
    setNewTodo("");
  }
  
  

  const renderTodo = ({item}) => <ToDoCard todo={item}/>
  return (
      <SafeAreaView style={styles.container}>
        <Header todosLength={todos.length}/>
          <FlatList
          data={todos}
          renderItem={renderTodo}
          />
          <SaveCard text={newTodo} handleAdd={handlAddNewTodo} handleOnChange={setNewTodo}/>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#37474F'
  }
})
export default App;