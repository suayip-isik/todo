import React from "react";
import { View, Modal, Text, TouchableOpacity } from "react-native";
import styles from './CustomModal.style';

const CustomModal = ({ visible, modalState, deleteTodoCard, cardName }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            style={styles.centeredView}
        >

            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Delete '{cardName}'</Text>

                    <TouchableOpacity
                        style={[styles.button, styles.buttonDelete]}
                        onPress={deleteTodoCard}
                    >
                        <Text style={styles.textStyle}>  Delete  </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.buttonClose]}
                        onPress={modalState}
                    >
                        <Text style={styles.textStyle}>  Cancel  </Text>
                    </TouchableOpacity>

                </View>
            </View>

        </Modal>
    );
}

export default CustomModal;