import {View,Text,TouchableOpacity} from 'react-native';
import React,{Component} from 'react';
class Board extends Component{
    state={board:["","","","","","","","",""],player:0,win:false,turn:0};
    winCheck(){
        if((this.state.board[0]=="X" && this.state.board[1]=="X" && this.state.board[2]=="X") || (this.state.board[0]=="X" && this.state.board[3]=="X" && this.state.board[6]=="X") || (this.state.board[2]=="X" && this.state.board[5]=="X" && this.state.board[8]=="X") || (this.state.board[6]=="X" && this.state.board[7]=="X" && this.state.board[8]=="X") || (this.state.board[0]=="X" && this.state.board[4]=="X" && this.state.board[8]=="X") || (this.state.board[2]=="X" && this.state.board[4]=="X" && this.state.board[6]=="X") || (this.state.board[1]=="X" && this.state.board[4]=="X" && this.state.board[7]=="X") || (this.state.board[3]=="X" && this.state.board[4]=="X" && this.state.board[5]=="X")){
            alert("Player 0 win!");
            this.restart();
        }

        if((this.state.board[0]=="O" && this.state.board[1]=="O" && this.state.board[2]=="O") || (this.state.board[0]=="O" && this.state.board[3]=="O" && this.state.board[6]=="O") || (this.state.board[2]=="O" && this.state.board[5]=="O" && this.state.board[8]=="O") || (this.state.board[6]=="O" && this.state.board[7]=="O" && this.state.board[8]=="O") || (this.state.board[0]=="O" && this.state.board[4]=="O" && this.state.board[8]=="O") || (this.state.board[2]=="O" && this.state.board[4]=="O" && this.state.board[6]=="O") || (this.state.board[1]=="O" && this.state.board[4]=="O" && this.state.board[7]=="O") || (this.state.board[3]=="O" && this.state.board[4]=="O" && this.state.board[5]=="O")){
            alert("Player 1 win!");
            this.restart();
        }
        
    }
    placePeg(position){
        if(this.state.player==0){
            if(this.state.board[position]==""){
                this.setState({turn:this.state.turn+1})
                b=this.state.board;
                b[position]="X";
                this.setState({board:b});
                this.winCheck();
                this.setState({player:(1-this.state.player)});
            }else{
                if(this.state.turn>=9){
                    alert("Draw!");
                    this.restart();
    
                }else{
                    alert("Can't place here!");
                }
            }
            
        }
        if(this.state.player==1){
            if(this.state.board[position]==""){
                this.setState({turn:this.state.turn+1})
                b=this.state.board;
                b[position]="O";
                this.setState({board:b})
                this.winCheck();
                this.setState({player:(1-this.state.player)});
            }else{
                if(this.state.turn>=9){
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
            return <View style={{borderColor:'black',borderWidth:0.7,width:300,height:300,flexDirection:'column'}}>

                <View style={{flexDirection:'row'}}>
    
                    <TouchableOpacity style={{borderColor:'black',borderWidth:0.7,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(0)}>
                    <Text style={{fontSize:80,marginTop:-11}}>{this.state.board[0]}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{borderColor:'black',borderWidth:0.7,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(1)}>
                    <Text style={{fontSize:80,marginTop:-11}}>{this.state.board[1]}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{borderColor:'black',borderWidth:0.7,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(2)}>
                    <Text style={{fontSize:80,marginTop:-11}}>{this.state.board[2]}</Text>
                    </TouchableOpacity>
    
    
                </View>
    
                <View style={{flexDirection:'row'}}>
    
                    <TouchableOpacity style={{borderColor:'black',borderWidth:0.7,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(3)}>
                    <Text style={{fontSize:80,marginTop:-11}}>{this.state.board[3]}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{borderColor:'black',borderWidth:0.7,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(4)}>
                    <Text style={{fontSize:80,marginTop:-11}}>{this.state.board[4]}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{borderColor:'black',borderWidth:0.7,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(5)}>
                    <Text style={{fontSize:80,marginTop:-11}}>{this.state.board[5]}</Text>
                    </TouchableOpacity>
    
    
                </View>
    
                <View style={{flexDirection:'row'}}>
    
                    <TouchableOpacity style={{borderColor:'black',borderWidth:0.7,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(6)}>
                    <Text style={{fontSize:80,marginTop:-11}}>{this.state.board[6]}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{borderColor:'black',borderWidth:0.7,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(7)}>
                    <Text style={{fontSize:80,marginTop:-11}}>{this.state.board[7]}</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={{borderColor:'black',borderWidth:0.7,width:100,height:100,justifyContent:'center',alignItems:'center'}} onPress={()=>this.placePeg(8)}>
                    <Text style={{fontSize:80,marginTop:-11}}>{this.state.board[8]}</Text>
                    </TouchableOpacity>
    
    
                </View>
                
    
                </View>

        }

    }

    restart(){
        this.setState({board:["","","","","","","","",""],player:0,win:false});
    }


    render(){
        return(
           <View>
               {this.start()}
               <TouchableOpacity onPress={()=>this.restart()} style={{marginTop:50,justifyContent:'center',alignItems:'center',backgroundColor:'#0078D7',borderColor:'grey',padding:5,borderRadius:5}}>
                   <Text style={{fontSize:30,marginBottom:5,color:'white'}}>Restart</Text>
               </TouchableOpacity>
           </View>
        );
    }
}



export default Board;