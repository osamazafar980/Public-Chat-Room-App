import React ,{useState,useEffect} from 'react'
import {Text,View,FlatList,TextInput,Button,StyleSheet} from 'react-native'


const ConfigScreen = ({navigation}) => {
const [user,setUser] = useState("")
    return(
        <View>
            <TextInput
            placeholder="Name"
            onChangeText={(item)=>{
                setUser(item)
            }}
            style={{height:100,width:100}}
            />
            <Button
                title="Next"
                onPress={()=>{
                    navigation.navigate("Home",{"name":user})
                }}
            />
        </View>
    )
}


export default ConfigScreen;