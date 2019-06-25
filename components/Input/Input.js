import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';

export default class Inputa extends React.Component{
    
    fetchData(){
        console.log(this.props.value);
    }
    
    render(){
        return (
            <View style={styles.container}>
                <TextInput 
                    keyboardType={'numeric'}
                    value={this.props.value}
                    style={styles.input}
                    onChangeText={(text)=>this.props.onChange(text)} 
                />
                <TouchableHighlight onPress={()=>this.fetchData()} style={styles.button}><Text style={styles.text}>Button</Text></TouchableHighlight>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input:{
        height:40,
        width:300,
        borderColor:'gray',
        borderWidth: 1
    },
    button:{
        backgroundColor: '#007791',
        height:40,
        width:100,
        borderColor: 'gray',
        borderRadius:5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color:'white',
    }
    
})
