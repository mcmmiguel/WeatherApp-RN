import { Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native';
import React from 'react';
import { styles } from './styles';

interface Props {
    title: string;
    onPress: () => void;
    style?: StyleProp<ViewStyle>
}

export const PrimaryButton = ({ title, onPress, style }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.9}
            style={{
                ...style as any,
                ...styles.primaryButton,
            }}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};
