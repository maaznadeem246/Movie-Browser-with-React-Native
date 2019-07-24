import React from 'react';

import { View, Text, StyleSheet } from "react-native"
import MovieDetails from "../components/movieDetails"
import {movieDetails} from '../api';

export default class MovieDetailsScreen extends React.Component {
    constructor(props){
        super(props);

    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.getParam('title','Some Error'),
        }
    }

    state = {
        moviesData: '',
        moiveresponse: 'False',
        message: 'Loading'
    }

    bringMovieDetails = async (id) => {
        //console.log(id)
        try{
        const result = await movieDetails(id)
                if (this.state.searchValue != '') {
                   // console.log(responseJson)
                    this.setState({
                        moviesData: result,
                        moiveresponse: result.Response,
                        
                    })
                }
    }catch(err) {
        this.setState({
            message: err.message
        })
    }

    }

    componentDidMount(){
         let id = this.props.navigation.getParam('imdbid')
            
        this.bringMovieDetails(id)
    }


    render() {
        return(
        <View>
            {this.state.moiveresponse == 'True' ? 
                    <MovieDetails 
                        poster={this.state.moviesData.Poster} 
                        title={this.state.moviesData.Title}
                        year={this.state.moviesData.Year}
                        runtime={this.state.moviesData.Runtime}
                        plot={this.state.moviesData.Plot}
                        ratings={this.state.moviesData.Ratings}
                    />
            :
            <Text style={[styles.det]}>{this.state.message}</Text>
            }
            
        </View>
        );
    }
}


const styles = StyleSheet.create({
    det: {
        textAlign: 'center',
        justifyContent: 'center',
        padding: 40,
        fontSize: 25,
    },    
})