import {
    Text,
    FlatList,
    View,
    Image,
    SafeAreaView,
    StyleSheet
} from "react-native";



const AddLay = () =>{
    return(
        <View>
        <View style={styles.verticleLine}>
          <TextInput style={styles.textInput} />
          <Button
            title='Hủy'
            onPress={() => setSwitchState(!switchState)}></Button>
        </View>
      </View>
    )
};

export default AddLay;

const styles = StyleSheet.create({

    verticleLine: {
      alignItems: 'center',
      flexDirection: 'row',   
      justifyContent: 'space-evenly',
      width: '100%',
      marginBottom: 20,
    }
  });
 






 
