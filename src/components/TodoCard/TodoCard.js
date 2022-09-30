import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from './TodoCard.style';
import TodoComplate from "../TodoComplate";

const TodoCard = ({ onLongPress, onPress, todoState, todoTitle }) => {
    return (
        <TouchableOpacity
            onLongPress={onLongPress}
            delayLongPress={300}
            style={styles.todoViewButton}
            onPress={onPress}
        >
            <Text style={todoState ? styles.todoText : [styles.todoText, { textDecorationLine: 'line-through', color: 'gray' }]}>{todoTitle}</Text>
            {todoState === false
                ? <TodoComplate />
                : <></>
            }
        </TouchableOpacity>
    );
}

export default TodoCard;