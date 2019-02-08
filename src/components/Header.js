import {Text,View} from 'react-native';
import React from 'react';

const Header=(props)=>{
    return(
        <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'purple',padding:3}}>
            <Text style={{fontSize:25,color:'white',paddingVertical:5}}>{props.headerText}</Text>
        </View>
    );

}

export default Header;