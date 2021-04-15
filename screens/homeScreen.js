import React,{Component} from 'react'
import{View,Text,StyleSheet,Image,TouchableOpacity,TextInput,Alert,Modal,KeyboardAvoidingView, ScrollView, FlatList} from 'react-native'

export default class HomeScreen extends React.Component{
    render(){
        return(
            <View>
                <MyHeader title = "Donate Items" navigation = {this.props.navigation}/>
                <View>
                    {
                        this.state.requestedItemList.length === 0
                        ?
                        (
                            <View><Text>list of requested items</Text></View>
                        )
                        :(
                            <FlatList
                            keyExtractor= {this.keyExtractor}
                            data = {this.state.requestedItemList}
                            renderItem = {this.renderItem}
                            />
                        )
                    }
                </View>
            </View>
        )
    }
}