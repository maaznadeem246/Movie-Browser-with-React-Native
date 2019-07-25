import React from 'react';

import { View, Text, StyleSheet,Image, TouchableOpacity } from "react-native";

export default class Movie extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            poster: this.props.poster,
            title:this.props.title,
            year:this.props.year,
            type:this.props.type,
            imdbid:this.props.imdbid
        }
    }


    render(){
        return(
            <TouchableOpacity style={[styles.container]} onPress={()=>{
                     
                  this.props.navigation.navigate('MovieDetailsScreen',{
                      imdbid:this.state.imdbid,
                      title:this.state.title
                  })
                }}>
                <View style={{ flexDirection: 'row'}}>
                <Image
                    style={[styles.movieImage]} 
                    source={{uri:this.state.poster}} 
                    />
                <View style={[styles.detailscont]} >
                <Text style={[styles.title]}>{this.state.title}</Text>
                    <View style={[styles.details]}>
                        <Text style={[styles.year]}>{this.state.year}</Text>
                        <Text style={[styles.type]}>({this.state.type})</Text>
                    </View>
                </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles =  StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white'
    },
    title:{
        fontWeight:'bold',
        fontSize:15
    },
    year:{
        paddingRight:5
    },
    type:{

    },
    details:{
        paddingTop:5,
        flexDirection: 'row'
    },
    detailscont:{
        padding:12
    },
    movieImage: { 
        margin:6,
        width: 55,
         height: 55,
          
    }
})