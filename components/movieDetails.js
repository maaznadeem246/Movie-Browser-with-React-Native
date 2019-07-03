import React from 'react';
import {View,ScrollView,Text,Image,StyleSheet} from 'react-native';
import Ratings from "./ratings"


export default class MovieDetails extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
//        console.log(this.props.ratings)
        return(
            <ScrollView >
                <View style={[styles.container]}> 
                <Image resizeMode='stretch' style={[styles.movieImage]} source={{uri:this.props.poster}} />
                <View style={[styles.line]}>
                    <Text style={[styles.movietTitle]} >{this.props.title}</Text>
                    <Text style={[styles.year]} >({this.props.year})</Text>
                </View>
                <View style={[styles.line]}>
                    <Text style={[styles.runtime]}>R, {this.props.runtime}m</Text>
                </View>
                <View style={[styles.line]}>
                    <Text style={[styles.plot]}>{this.props.plot}</Text>
                </View> 
                <View style={[styles.line]}>
                    <Ratings ratings={this.props.ratings} />
                </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        marginBottom:20
    },
    line:{
        flexDirection:'row',
         marginLeft: 20,
         marginRight:20,
         flexWrap:'wrap'
    },
    movieImage:{
        margin:15,
        height:340,
    },
    movietTitle:{
        fontSize:26,
        fontWeight:'bold',
       
    },
    year:{
        fontSize:14,
        padding:9
    },
    runtime:{
        padding:5,
    },
    plot:{
        padding:5
    }
})