import React,{Component} from 'react'
import{View,Text,StyleSheet,Image,TouchableOpacity,TextInput,Alert,Modal,KeyboardAvoidingView, ScrollView} from 'react-native'

export default class ExchangeScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            userId: firebase.auth().currentUser.email,
            itemName:'',
            reasonToAddItem:''
        }
    }

    addItem = (itemName,reasonToAddItem) => {
        var userId = this.state.userId
        var randomRequestId = this.createUniqueId()
        db.collection('add_Item').add({
            user_Id:userId,
            item_Name:itemName,
            reason_Add_Item:reasonToAddItem,
            request_Id: randomRequestId
        })
        this.setState({
            itemName:'',
            reasonToAddItem:''
        })
        return Alert.alert('itemRequestedSuccessfully')
    }
    render(){
        return(
            <View>
                <MyHeader title ={'AddItem'}/>
                <KeyboardAvoidingView>
                    <TextInput
                    style = {styles.formTextInput}
                    placeholder = {"enter the item name"}
                    onChangeText = {(text)=>{
                        this.setState({
                            itemName:text
                        })
                    }}
                    value = {this.state.itemName}
                    />

                    <TextInput
                    style = {[styles.formTextInput,{height:300}]}
                    numberOfLines = {8}
                    multiline
                    placeholder = {"why do you need the item"}
                    onChangeText = {(text)=>{
                        this.setState({
                        reasonToAddItem:text
                        })
                    }}
                    value ={this.state.reasonToAddItem}
                    />

                    <TouchableOpacity
                    style = {styles.button}
                    onPress = {()=>{this.addItem(this.state.itemName,this.state.reasonToAddItem)}}>
                        <Text>AddItem</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </View>
        )
    }
}