import { StyleSheet } from "react-native";

export default StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: '#e0e0e0',
    },
    title: {
        color: 'rgba(255, 10, 30, 0.3)',
        fontSize: 38,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    text: {
        backgroundColor: 'white',
    },
    container: {
        paddingHorizontal: '5%',
        paddingTop: '5%',
    },
    inputView: {
        flexDirection: 'row'
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'rgba(108, 122, 137, 0.3)',
        borderRadius: 10,
        paddingLeft: 20,
        fontSize: 20,
        color: 'gray', // text-color
        flex: 1
    },
    addButton: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 10
    },
    todoListView: {},
    todoViewButton: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingLeft: '3%',
        backgroundColor: 'white',
        marginTop: '2%',
        borderRadius: 15,
    },
    todoText: {
        color: 'black',
        fontSize: 20,
        paddingLeft: '3%',
        flex: 1,
        // textDecorationLine: 'line-through'
    },
    checkView: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 20,
        marginRight: '3%'
    }
});