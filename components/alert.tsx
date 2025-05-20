import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useTheme } from '../components/themeprovider';

interface CustomAlertProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function CustomAlert({ visible, onClose, onConfirm }: CustomAlertProps) {
  const { darkMode } = useTheme();

  return (
    <Modal
      transparent
      statusBarTranslucent
      navigationBarTranslucent
      visible={visible}
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={[styles.alertBox, { backgroundColor: darkMode ? '#262626' : '#f5f5f5' }]}>
          <Text style={[styles.title, { color: darkMode ? '#fff' : '#000' }]}>
            Delete Note
          </Text>
          <Text style={[styles.message, { color: darkMode ? '#ccc' : '#333' }]}>
            Are you sure you want to delete this note?
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity onPress={onClose} style={styles.button}>
              <Text style={{ color: darkMode ? '#ccc' : '#555', fontSize: 18 }}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onConfirm} style={styles.button}>
              <Text style={{ color: '#e53935', fontSize: 18 }}>Delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alertBox: {
    width: '80%',
    borderRadius: 12,
    padding: 20,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 20
  },
  button: {
    marginLeft: 12,
  },
});
