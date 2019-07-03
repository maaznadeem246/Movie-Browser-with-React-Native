import React from 'react';
import {View,Text, StyleSheet} from 'react-native';
import * as Progress from 'react-native-progress';

export default class Ratings extends React.Component {
  
    render() { 
//        console.log(this.props.ratings)
        return ( 
            <View>
                {this.props.ratings.map((rat,key)=>{
                    let res = rat.Value.search("/")
                    
                    if(parseInt(res)>0){
                        //console.log(rat.Value.slice(0,res))
                      //console.log(rat.Value.slice(res+1,res.length))
                      //  console.log(parseInt(rat.Value.slice(0, res)) / parseInt(rat.Value.slice(res + 1, res.length)))
                        var v = parseInt(rat.Value.slice(0, res)) / parseInt(rat.Value.slice(res + 1, res.length))                    
                        }else{
                        var v = parseInt(rat.Value) / 100 
                      // console.log(parseInt(rat.Value)/100) 
                    }


                    return(
                        <View style={[styles.rating]} key={key}>
                        <View style={[styles.deta]}>
                            <Text style={[styles.source]}>{rat.Source}</Text> 
                                <Text>({rat.Value}):</Text>
                        </View>
                        <Progress.Bar progress={v} color={'black'} width={300} height={20} />
                        </View>
                    )
                })}

            </View>
         );
    }
}
 
const styles = StyleSheet.create({
    rating:{
        paddingTop:5,
        paddingBottom: 5,
    },
    deta:{
        flexDirection:'row',
        paddingBottom:5,
    },
    source:{
        paddingRight:5
    },
})