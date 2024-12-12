import React, { useState } from "react";
import { Text,View,StyleSheet,TouchableOpacity} from "react-native";
const Counter = ()=>{
    const[Count,setCount]=useState(0);
    const increment = () => {
        setCount(Count + 1);
    };
    const decrement = () => {
        setCount(Count - 1);
    };

    return(
        <View >
        <View style={styles.main}>
        <Text style={styles.text}>Counter App</Text>
        </View>
        <View style={styles.countbox}>
        <Text style={styles.count}>{Count}</Text>
        <View style={styles.btn}>
        <TouchableOpacity onPress={increment}>
            <Text style={styles.incre}>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement}>
            <Text style={styles.Decre}>Decrement</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
    );
};
const styles=StyleSheet.create({
    main:{
        marginTop:30,
        paddingLeft:100,
        backgroundColor:'#5678f0',
        height:80
    },
    text:{
        fontWeight:"bold",
        fontSize:25,
        marginTop:20,
        color:"#cbf5e3"

    },
    count:{
        marginTop:100,
        marginLeft:140,
        fontSize:90,
        fontWeight:"bold"
    },
   btn:{
    flexDirection:"row",
    marginTop:70,
    marginLeft:12
   },
   incre:{
    backgroundColor:"blue",
    color:"white",
    marginTop:10,
    width:150,
    height:60,
    fontWeight:"bold",
    borderRadius:7,
    marginLeft:10,
    fontSize:20,
    paddingTop:12,
    paddingLeft:20
   },
   Decre:{
    backgroundColor:"red",
    color:"white",
    marginTop:10,
    width:150,
    height:60,
    fontWeight:"bold",
    borderRadius:7,
    marginLeft:10,
    fontSize:20,
    paddingLeft:20,
    paddingTop:12
   }
})
export  default Counter;