import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import StudentList from './src/screen/StudentList';

export default function App() {

  const [switchState, setSwitchState] = useState(false);

  // dữ liệu cần truyền cho ds
  const studentList = [
    {
      id: 1,
      name: 'Ip 12',
      desc: 'Siêu khỏe'
    },
    {
      id: 2,
      name: 'Ip 13',
      desc: 'Siêu siêu khỏe'
    },
    {
      id: 3,
      name: 'Ip 14',
      desc: 'Công nghệ mới'
    },
    {
      id: 4,
      name: 'Ip X',
      desc: 'Cũ'
    },
    {
      id: 5,
      name: 'Ip 8',
      desc: 'Yếu'
    },
    
  ];

  return (

    <View style={styles.container}>
      <Text style={styles.textTitle}> infomation </Text>
      <Text> Do Thanh Hai </Text>
      <Text> PH20645 </Text>
      <Button
        title='Thêm mới'
        onPress={() => setSwitchState(true)}
        style={styles.buttonAdd}></Button>
      {
        switchState ?
          <>
            <View>

              <View style={styles.verticleLine}>
                <Text>Tên</Text>
                <TextInput style={styles.textInput} />
              </View>

               
              <View style={styles.verticleLine}>
                <Text>Thông tin</Text>
                <TextInput style={styles.textInput} />
              </View>

              <View style={styles.verticleLine}>
                <Text>Ảnh</Text>
                <TextInput style={styles.textInput} />
              </View>

              <View style={styles.verticleLine}>
              <Button
                  title='Hủy'
                  onPress={() => setSwitchState(!switchState)}></Button>
                <Button
                  title='Thêm'
                  onPress={() => setSwitchState(!switchState)}></Button>
              </View>

            </View>
          </>
          : null
      }
      <StudentList data={studentList} style={styles.lisst} />
      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },

  textTitle: {
    fontSize: 30,
    
    color: 'red',
  },

  textInput: {
    width: 200,
    height: 30,
    backgroundColor: '#f0ffff',
    margin: 10,
    padding: 10,
    alignItems: 'flex-end'
  },

  lisst: {
    height: 100,
    width: 100,
    backgroundColor: '#f0ffff',
  },

  verticleLine: {
    alignItems: 'center',
    flexDirection: 'row',   
    justifyContent: 'space-evenly',
 
    marginBottom: 20,
  }
});
