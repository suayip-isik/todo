import React from "react";
import { View, Modal, Text, TouchableOpacity } from "react-native";
import styles from './CustomModal.style';

const CustomModal = ({ visible, modalState }) => {
    return (
        <View style={styles.centeredView}>

            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={modalState}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </Modal>

        </View>
    );
}

export default CustomModal;