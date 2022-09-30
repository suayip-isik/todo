import { StyleSheet } from "react-native";

export default StyleSheet.create({
    todoViewButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 20,
        // paddingLeft: '3%',
        margin: '2%',
        borderRadius: 20,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 3
    },
    todoText: {
        color: 'black',
        fontSize: 20,
        paddingLeft: '6%',
        flex: 1,
        // textDecorationLine: 'line-through'
    },    
});