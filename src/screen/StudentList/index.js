import {
    Text,
    FlatList,
    View,
    Image,
    SafeAreaView,
    StyleSheet
} from "react-native";

const StudentList = (props) => {

    const studentList = props.data

    return (
        <SafeAreaView style={styles.safeView}>
            <FlatList
                data={studentList}

                renderItem={({ item }) => (
                    <View style={styles.itemView}>
                        <Text> Tên: {item.name}</Text>
                        <Text> Thông tin: {item.desc}</Text>
                    </View>
                )}

                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    )
}
export default StudentList;

const styles = StyleSheet.create({
    safeView: {
        flex: 1
    },

    itemView: {
        width: 300,
        borderWidth: 1,
        borderColor: 'yellow',
        padding: 10,
        margin: 10
    }
});