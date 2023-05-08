import { Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const OpenDetailButton = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Detail 1 열기"
      onPress={() => navigation.push('Detail', { id: 1 })}
    />
  );
};

export default OpenDetailButton;
