import { View, Text , ScrollView, SafeAreaView} from 'react-native'


const Home = () => {
    return(
        <SafeAreaView>
                <View>
                    <Text style={{textAlign: "justify",marginTop: "50%", marginLeft: "25%"}}>
                    HOME PAGE</Text>
                    <Text style={{marginTop: "60%", marginLeft: "25%"}}>
                    HELLO REACT NATIVE!!</Text>
                </View>               
        </SafeAreaView>
    )
}

export default Home;