import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { WriteScreenProps } from '../screens/WriteScreen';
import TransparentCircleButton from './TransparentCircleButton';

type WriteHeaderProps = {
  onSave: () => void;
};

const WriteHeader = ({ onSave }: WriteHeaderProps) => {
  const navigation = useNavigation<WriteScreenProps['navigation']>();
  const onGoBack = () => {
    navigation.pop();
  };

  return (
    <View style={styles.block}>
      <TransparentCircleButton
        onPress={onGoBack}
        name="arrow-back"
        color="#424242"
      />
      <View style={styles.buttons}>
        <TransparentCircleButton
          name="delete-forever"
          color="#ef5350"
          hasMarginRight
        />
        <TransparentCircleButton
          name="check"
          color="#009688"
          onPress={onSave}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    height: 48,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default WriteHeader;
