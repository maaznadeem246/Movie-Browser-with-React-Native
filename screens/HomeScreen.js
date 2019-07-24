import React from 'react';

import {View,Text,TextInput,StyleSheet} from "react-native"
import Movies from "../components/movies"
import {movieData} from "../api"
export default class HomeScreen extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this)

        this.state = {
            searchValue: '',
            moviesData:'',
            moiveresponse:"False",
            message:'No Result'
        }
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Home',
        }
    }

    bringData = async (text) => {
        try{
        const result = await movieData(text)
           // console.log(result)       
        if(this.state.searchValue != ''){
                 
                this.setState({
                    moviesData: result.Search,
                    moiveresponse: result.Response,
                })
                }
        }catch(err){
            this.setState({
                message:err.message
            })
        }
    }

    handleChange(text){
        

        if(text != ''){
            this.setState({
                searchValue: text,
                message: 'Searching',
                moiveresponse: "False",
            })
            this.bringData(text)  
        }else{
            this.setState({
                searchValue: text,
                message: 'No result'
            })
        }


    }


    render(){
        return(
        <View style={[styles.conatiner]}>
            <TextInput style={styles.textInput} value={this.state.searchValue} placeholder="Type Movie Name" onChangeText={(text)=>this.handleChange(text)} />
                {this.state.moiveresponse == "True" && this.state.searchValue != '' ? 
                    <Movies style={[styles.movie]} navigation={this.props.navigation} movieData={this.state.moviesData} />
                 //  <Text>sd</Text> 
                : 
                    <Text style={[styles.det]}>{this.state.message}</Text>
            }
        </View>
        );
    }
}

const styles = StyleSheet.create({
    conatiner:{
        flex:1
    },
    movie:{

    },
    det:{
        textAlign:'center',
        justifyContent:'center',
        padding:40,
        fontSize:25,
    },
    textInput:{
        
        borderRadius:7,
        borderColor:"black",
        borderWidth:2,
        padding:7,
        marginRight:10,
        marginLeft:10,
        fontSize:16,
        marginTop:10
        
    }
})