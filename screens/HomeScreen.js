import React ,{useState,useEffect} from 'react'
import {Text,View,FlatList,TextInput,Button,StyleSheet} from 'react-native'
const firebase = require("firebase");
var config = {
    apiKey: "AIzaSyBLwWyP1YuWZrqvpo_zsNJIyEf8Xi_Lpco",
    authDomain: "gyradosvpn.firebaseapp.com",
    databaseURL: "https://gyradosvpn.firebaseio.com",
    projectId: "gyradosvpn",
    storageBucket: "gyradosvpn.appspot.com",
    messagingSenderId: "50961203679",
    appId: "1:50961203679:web:5889613169c3eeb168c46a"
  };

const HomeScreen = ({navigation}) => {
const [messages,setMessages] = useState([{user:"Name",msg:"Message"},{user:"Name",msg:"Message"}])
const [msg,setMsg] = useState("")
const [user,setUser] = useState("User")
function writeUserData(message) {
  if (!firebase.apps.length) {
   firebase.initializeApp(config);
}else {
   firebase.app(); // if already initialized, use that one
}
firebase.database().ref('Screams/'+Date.now()).set({
    user:user,
    msg:msg
});
update() 
  }
function update() {
  if (!firebase.apps.length) {
   firebase.initializeApp(config);
}else {
   firebase.app(); // if already initialized, use that one
}
setMessages([]);
firebase.database().ref('Screams').on('value',function(snapshot){
    var data="";
    var temp=[];     
    snapshot.forEach(function(childSnapshot){
           data = childSnapshot.val();
           temp.push(data);
         })
    setMessages(temp);
    });
    console.log(messages)
  }
      
  useEffect(()=>{
    setUser(navigation.state.params.name)
    update()
    },[])
    return(
        <View>
        
            <FlatList
                data={messages}
                keyExtractor={item=>Math.random().toString(36).substring(7)}
                renderItem={({item})=>{
                    var color = 'red';
                    if(item.user==user){
                        color='#82E0AA'
                    }else{
                        color='#85C1E9'
                    }
                    return(
                        <View style={{backgroundColor:color,paddingBottom:5}}>
                            <View>
                                <Text
                            style={{fontSize:18}}
                            >{item.user} says:</Text>
                            </View>
                            <Text
                            style={{textAlign:'center',fontSize:16}}
                            >{item.msg}</Text>
                        </View>
                    )
                }}
                style={{height:500}}
            />
            <TextInput
            placeholder="Message"
            onChangeText={(item)=>{
                setMsg(item)
            }}
            style={{height:50,marginTop:20,backgroundColor:'silver'}}
            />
            <Button
                title="Send"
                onPress={()=>{
                    writeUserData(msg)
                }}
            />
        </View>
    )
}


export default HomeScreen;