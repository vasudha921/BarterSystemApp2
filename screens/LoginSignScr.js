import React, {Component} from 'react';
import { Alert, StyleSheet, Text, View, Modal, TextInput, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';

export default class LoginSignScr extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            firstName:'',
            lastName:'',
            address:'',
            contact:'',
            confirmPassword:'',
            isModalVisible:'false',
            username:'',
            password:''
        }
    }

    userLogin= (username, password)=>{
     firebase.auth().signInWithEmailAndPassword(username, password)
     .then(()=>{
         return Alert.alert("Successfully Login")
     })
     .catch((error)=>{
         var errorCode = error.code;
         var errorMessage= error.message;
         return Alert.alert(errorMessage)
     })
    }

    userSignUp  = (username, password,confirmPassword)=>{
        if(password!== confirmPassword){
            return Alert.alert("password doesn't match\nCheck your password.")

        }
        else{
        firebase.auth().creatrUserWithEmailAndPassword(username, password)
        .then(()=>{
            db.collection('users').add({
                first_name:this.state.firstName,
                last_name:this.state.lastName,
                contact:this.state.contact,
                email_id:this.state.username,
                address:this.state.address
            })
            return Alert.alert(
                'User added Successfully',
                '',
                [
                    {text:'OK', onPress:()=> this.setState({"isModalVisible": false})},

                ]
            );
        })
        .catch((error)=> {
            //Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        })
    }
}
    
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>BARTERSYSTEM APP</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.textbox}
                        placeholder="enter email id"
                        keyboardType='email-address'
                        onChangeText={(text) => {
                            this.setState({ username: text })
                        }}
                    />
                    <TextInput
                        style={styles.textbox}
                        secureTextEntry={true}
                        placeholder="enter your password"
                        onChangeText={(text) => {
                            this.setState({ password: text })
                        }}
                    />
                    <TouchableOpacity 
                     style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7, alignItems:'center'}}
                     onPress={()=>{this.userLogin(this.state.username ,this.state.password)}}>
                        <Text>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    style={{height:30,width:90,borderWidth:1,marginTop:20,paddingTop:5,borderRadius:7, alignItems:'center'}}
                    onPress={()=>{this.userSignUp(this.state.username ,this.state.password)}}>
                        <Text>SIGNUP</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        color: '#a7f986',
        alignItems: 'center'
    },
    title:{
        justifyContent: 'center',
        color:'#ea3838',
        fontSize:65,
    
    },
    textbox:{
        width:300,
        height:40,
        borderBottomWidth:1.5,
        borderColor: '#ff8a65',
        margin:10,
        paddingLeft: 10
    }
})