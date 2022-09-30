import { StyleSheet } from "react-native";

export default StyleSheet.create({
    pages: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        color: 'black', //'rgba(255, 10, 30, 0.3)',
        fontSize: 40,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    text: {
        backgroundColor: 'white',
    },
    topContainer: {
        paddingHorizontal: '5%',
        paddingTop: '5%',
    },
    inputView: {
        flexDirection: 'row',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'rgba(108, 122, 137, 0.3)',
        borderRadius: 16,
        paddingLeft: 20,
        fontSize: 22,
        color: 'gray', // text-color
        flex: 1,
        marginHorizontal: '2%',
    },
    addButton: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#2196F3',
        borderRadius: 15,
    },
    deleteButton: {
        padding: 20,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E03814', //'rgba(255, 100, 100, 0.4)',
    },
    buttonView: {
        flexDirection: 'row',
        marginVertical: '2%',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginHorizontal: '2%',
    },
    checkView: {
        borderWidth: 1,
        borderColor: '#e0e0e0',
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 20,
        marginRight: '3%'
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
});