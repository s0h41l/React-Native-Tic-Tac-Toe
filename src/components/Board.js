import {View,Text,TouchableOpacity} from 'react-native';
import React,{Component} from 'react';
import  {connect} from 'react-redux';
import Reducer from '../Reducer';

class Board extends Component{
    winCheck(){
        if((this.props.State.board[0]=="X" && this.props.State.board[1]=="X" && this.props.State.board[2]=="X") || (this.props.State.board[0]=="X" && this.props.State.board[3]=="X" && this.props.State.board[6]=="X") || (this.props.State.board[2]=="X" && this.props.State.board[5]=="X" && this.props.State.board[8]=="X") || (this.props.State.board[6]=="X" && this.props.State.board[7]=="X" && this.props.State.board[8]=="X") || (this.props.State.board[0]=="X" && this.props.State.board[4]=="X" && this.props.State.board[8]=="X") || (this.props.State.board[2]=="X" && this.props.State.board[4]=="X" && this.props.State.board[6]=="X") || (this.props.State.board[1]=="X" && this.props.State.board[4]=="X" && this.props.State.board[7]=="X") || (this.props.State.board[3]=="X" && this.props.State.board[4]=="X" && this.props.State.board[5]=="X")){
            alert("Player 0 win!");
            this.restart();
        }

        if((this.props.State.board[0]=="O" && this.props.State.board[1]=="O" && this.props.State.board[2]=="O") || (this.props.State.board[0]=="O" && this.props.State.board[3]=="O" && this.props.State.board[6]=="O") || (this.props.State.board[2]=="O" && this.props.State.board[5]=="O" && this.props.State.board[8]=="O") || (this.props.State.board[6]=="O" && this.props.State.board[7]=="O" && this.props.State.board[8]=="O") || (this.props.State.board[0]=="O" && this.props.State.board[4]=="O" && this.props.State.board[8]=="O") || (this.props.State.board[2]=="O" && this.props.State.board[4]=="O" && this.props.State.board[6]=="O") || (this.props.State.board[1]=="O" && this.props.State.board[4]=="O" && this.props.State.board[7]=="O") || (this.props.State.board[3]=="O" && this.props.State.board[4]=="O" && this.props.State.board[5]=="O")){
            alert("Player 1 win!");
            this.restart();
        }
        
    }

    drawCheck(){
        for(i=0;i<9;i++){
            if(this.props.State.board[i]==""){
                return false;
            }
        }
        return true;
    }
    placePeg(position){
        if(this.props.State.player==0){
            if(this.props.State.board[position]==""){
                this.props.dispatch({type:"PLACE_PEG_P_1",pos:position});
                this.props.dispatch({type:"CHANGE_PLAYER",player:this.props.State.player});
                this.winCheck();
            }else{
                if(this.drawCheck()){
                    alert("Draw!");
                    this.restart();
    
                }else{
                    alert("Can't place here!");
                }
            }
            
        }
        if(this.props.State.player==1){
            if(this.props.State.board[position]==""){
                this.props.dispatch({type:"PLACE_PEG_P_2",pos:position});
                this.props.dispatch({type:"CHANGE_PLAYER",player:this.props.State.player});
                this.winCheck();
            }else{
                if(this.drawCheck()){
                    alert("Draw!");
                    this.restart();
    
                }else{
                    alert("Can't place here!");
                }
            }
            
        }

    }

    start(){
        if(!this.setState.win){
            return <View style={{width:300,height:300,flexDirection:'column'}}>

                <View style={{flexDirection:'row'}}>
    
                    <TouchableOpacity style={{borderRightColor:'black',borderBottomColor:'black',borderBottomWidth:1,borderRightWidth:1,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(0)}>
                    <Text style={{fontSize:80,marginTop:-11,color:(this.props.State.board[0]=="X")?"red":'green'}}>{this.props.State.board[0]}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{borderRightColor:'black',borderBottomColor:'black',borderLeftColor:'black',borderLeftWidth:1,borderBottomWidth:1,borderRightWidth:1,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(1)}>
                    <Text style={{fontSize:80,marginTop:-11,color:(this.props.State.board[1]=="X")?"red":'green'}}>{this.props.State.board[1]}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{borderBottomColor:'black',borderLeftColor:'black',borderLeftWidth:1,borderBottomWidth:1,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(2)}>
                    <Text style={{fontSize:80,marginTop:-11,color:(this.props.State.board[2]=="X")?"red":'green'}}>{this.props.State.board[2]}</Text>
                    </TouchableOpacity>
    
    
                </View>
    
                <View style={{flexDirection:'row'}}>
    
                    <TouchableOpacity style={{borderRightColor:'black',borderBottomColor:'blue',borderTopColor:'black',borderTopWidth:1,borderBottomWidth:1,borderRightWidth:1,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(3)}>
                    <Text style={{fontSize:80,marginTop:-11,color:(this.props.State.board[3]=="X")?"red":'green'}}>{this.props.State.board[3]}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{borderRightColor:'black',borderBottomColor:'black',borderLeftColor:'black',borderLeftWidth:1,borderBottomWidth:1,borderRightWidth:1,borderTopColor:'black',borderTopWidth:1,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(4)}>
                    <Text style={{fontSize:80,marginTop:-11,color:(this.props.State.board[4]=="X")?"red":'green'}}>{this.props.State.board[4]}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{borderBottomColor:'black',borderLeftColor:'black',borderLeftWidth:1,borderBottomWidth:1,borderTopColor:'black',borderTopWidth:1,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(5)}>
                    <Text style={{fontSize:80,marginTop:-11,color:(this.props.State.board[5]=="X")?"red":'green'}}>{this.props.State.board[5]}</Text>
                    </TouchableOpacity>
    
    
                </View>
    
                <View style={{flexDirection:'row'}}>
    
                    <TouchableOpacity style={{borderRightColor:'black',borderRightWidth:1,borderTopColor:'black',borderTopWidth:1,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(6)}>
                    <Text style={{fontSize:80,marginTop:-11,color:(this.props.State.board[6]=="X")?"red":'green'}}>{this.props.State.board[6]}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{borderRightColor:'black',borderLeftColor:'black',borderLeftWidth:1,borderRightWidth:1,borderTopColor:'black',borderTopWidth:1,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(7)}>
                    <Text style={{fontSize:80,marginTop:-11,color:(this.props.State.board[7]=="X")?"red":'green'}}>{this.props.State.board[7]}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{borderLeftColor:'black',borderLeftWidth:1,borderTopColor:'black',borderTopWidth:1,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(8)}>
                    <Text style={{fontSize:80,marginTop:-11,color:(this.props.State.board[8]=="X")?"red":'green'}}>{this.props.State.board[8]}</Text>
                    </TouchableOpacity>
    
    
                </View>
                
    
                </View>

        }

    }

    restart(){
        this.props.dispatch({type:"RESET_GAME"});
    }


    render(){
        return(
           <View>
               {this.start()}
               <TouchableOpacity onPress={()=>this.restart()} style={{marginTop:50,justifyContent:'center',alignItems:'center',backgroundColor:'purple',borderColor:'grey',padding:5,borderRadius:5}}>
                   <Text style={{fontSize:30,marginBottom:5,color:'white'}}>Restart</Text>
               </TouchableOpacity>
           </View>
        );
    }
}

function mapStateToProps(state){
    return {State:state};
}




export default connect(mapStateToProps)(Board);