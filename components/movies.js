import React from 'react';

import { View,FlatList,StyleSheet } from "react-native";
import Movie from '../components/movie';

export default class Movies extends React.Component{
   
    render(){
                     //       console.log(this.props.movieData.length)
        return(
            
            <View style={[styles.container]}>
                {

                    this.props.movieData && 
                    <FlatList
                        data={this.props.movieData}
                        renderItem={({item})=>
                            <Movie title={item.Title} navigation={this.props.navigation} poster={item.Poster} type={item.Type} year={item.Year} imdbid={item.imdbID}  />
                        }
                        keyExtractor={item => item.imdbID}
                    />
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:8,
        paddingTop: 22
    }
})