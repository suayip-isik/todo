import { StyleSheet } from "react-native";

export default StyleSheet.create({
    todoViewButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingLeft: '3%',
        backgroundColor: 'white',
        marginBottom: '2%',
        borderRadius: 10,
    },
    todoText: {
        color: 'black',
        fontSize: 20,
        paddingLeft: '3%',
        flex: 1,
        // textDecorationLine: 'line-through'
    },    
});