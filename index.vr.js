//run npm start in Space folder

import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton,
  Model,
  Animated,
  Sound
} from 'react-vr';

import {Easing,TextInput} from 'react-native';

export default class Space extends React.Component {
    constructor(){
        super();
        this.state = {planetName:""};
    }
    handleClick(string){
        //figure out how to get text of form input and assign to name to update which planet is being viewed
        this.setState({planetName:string});
    }
  render() {
    return (
      <View>
        <Pano source={asset('space2.jpg')} style={{transform:[{rotateY: 45}]}}/>
        
        <Model style={{transform:[{translate:[0,-5,0]}]}}>
          <Sound source={{mp3: asset('music.mp3')}} loop={true}/>
        </Model>
        <View><Planet name={this.state.planetName}/></View>
        <View style={{
                width:50,
                flexDirection:'row',
                transform: [{translate: [-4,-1,-5]}],
              }}>
        
            <VrButton onClick={this.handleClick.bind(this,"Sun")}>
                <Text style={{
                    backgroundColor: '#0009',
                    fontSize: 0.2,
                    fontWeight: '400',
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.3,
                    paddingRight: 0.3,
                    paddingTop:0.1,
                    paddingBottom: 0.1,
                    textAlign: 'center',
                    textAlignVertical: 'center', 
                    }}
                >
                Sun
                </Text>
            </VrButton>
            <VrButton onClick={this.handleClick.bind(this,"Mercury")}>
                <Text style={{
                    backgroundColor: '#0009',
                    fontSize: 0.2,
                    fontWeight: '400',
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.3,
                    paddingRight: 0.3,
                    paddingTop:0.1,
                    paddingBottom: 0.1,
                    textAlign: 'center',
                    textAlignVertical: 'center', 
                    }}
                >
                Mercury
                </Text>
            </VrButton>
            <VrButton onClick={this.handleClick.bind(this,"Venus")}>
                <Text style={{
                    backgroundColor: '#0009',
                    fontSize: 0.2,
                    fontWeight: '400',
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.3,
                    paddingRight: 0.3,
                    paddingTop:0.1,
                    paddingBottom: 0.1,
                    textAlign: 'center',
                    textAlignVertical: 'center', 
                    }}
                >
                Venus
                </Text>
            </VrButton>
            <VrButton onClick={this.handleClick.bind(this,"Mars")}>
                <Text style={{
                    backgroundColor: '#0009',
                    fontSize: 0.2,
                    fontWeight: '400',
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.3,
                    paddingRight: 0.3,
                    paddingTop:0.1,
                    paddingBottom: 0.1,
                    textAlign: 'center',
                    textAlignVertical: 'center', 
                    }}
                >
                Mars
                </Text>
            </VrButton>
            <VrButton onClick={this.handleClick.bind(this,"Jupiter")}>
                <Text style={{
                    backgroundColor: '#0009',
                    fontSize: 0.2,
                    fontWeight: '400',
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.3,
                    paddingRight: 0.3,
                    paddingTop:0.1,
                    paddingBottom: 0.1,
                    textAlign: 'center',
                    textAlignVertical: 'center', 
                    }}
                >
                Jupiter
                </Text>
            </VrButton>
            <VrButton onClick={this.handleClick.bind(this,"Saturn")}>
                <Text style={{
                    backgroundColor: '#0009',
                    fontSize: 0.2,
                    fontWeight: '400',
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.3,
                    paddingRight: 0.3,
                    paddingTop:0.1,
                    paddingBottom: 0.1,
                    textAlign: 'center',
                    textAlignVertical: 'center', 
                    }}
                >
                Saturn
                </Text>
            </VrButton>
            <VrButton onClick={this.handleClick.bind(this,"Uranus")}>
                <Text style={{
                    backgroundColor: '#0009',
                    fontSize: 0.2,
                    fontWeight: '400',
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.3,
                    paddingRight: 0.3,
                    paddingTop:0.1,
                    paddingBottom: 0.1,
                    textAlign: 'center',
                    textAlignVertical: 'center', 
                    }}
                >
                Uranus
                </Text>
            </VrButton>
            <VrButton onClick={this.handleClick.bind(this,"Neptune")}>
                <Text style={{
                    backgroundColor: '#0009',
                    fontSize: 0.2,
                    fontWeight: '400',
                    layoutOrigin: [0.5, 0.5],
                    paddingLeft: 0.3,
                    paddingRight: 0.3,
                    paddingTop:0.1,
                    paddingBottom: 0.1,
                    textAlign: 'center',
                    textAlignVertical: 'center', 
                    }}
                >
                Neptune
                </Text>
            </VrButton>
        </View>     
      </View>
      
    );
  }
};


//3d Planet object that shows info message when clicked
class Planet extends React.Component{
  constructor(props){
    super(props);
    this.state = { spin: new Animated.Value(0), zoom:0.2};
  }
  componentDidMount(){
    this.spinAnimation();
  }
  
  spinAnimation() {
    this.state.spin.setValue(0);
    Animated.timing(
      this.state.spin,
      {
        toValue: 1,
        duration: 50000,
        easing: Easing.linear
      }
    ).start( () => this.spinAnimation() );
  }
  handleClick(){
      if(this.state.zoom == 0.2){
        this.setState({zoom:0.5});
      }else{
        this.setState({zoom:0.2});
      }
  }
  
  render(){
    const spin = this.state.spin.interpolate({inputRange:[0,1], outputRange: ['0deg', '360deg']})
    const AnimatedModel = Animated.createAnimatedComponent(Model);
    //could fetch location and source from json
    return(
      <View>

        <VrButton onClick={this.handleClick.bind(this)}>
            <NasaInfo name = {this.props.name}/>
        </VrButton>
        
      <AnimatedModel 
        source={{
          obj: asset(this.props.name+'.obj'),
          mtl: asset(this.props.name+'.mtl')
        }}
        style={{
          transform:[
            {scaleX: this.state.zoom},
            {scaleY: this.state.zoom},
            {translate:[0,0,-1000]},
            {rotateX: spin},
            {rotateY: spin}
            
            
          ]
        }}
        wireframe={false}
      />
      </View>
    );
  }

}



//return info about planet/star from passed name = json-server fetch
class NasaInfo extends React.Component{
  constructor(props) {
    super(props);
    this.state = {message:"  ",name:"" , info: []};
    
  }
  
  componentDidMount (nextProps) {

    
  }

  componentDidUpdate(prevProps){
   
    if(this.props.name !== prevProps.name){
        console.log("New: " + this.props.name);
        console.log("Old: " + prevProps.name);
        this.setState({name:this.props.name});
        fetch('http://localhost:3000/'+this.props.name)
        .then(response => response.json())
        .then(result => {
            this.setState({
                info: result
            });
        })
        .catch(error => {
            console.log(error);
        });
    }
    
  }

  //display the data here from json
  handleClick(){
    if(this.state.message == "  "){
        let distword = "sun";
        if(this.props.name == "Sun"){
            distword = "earth";
        }
        this.setState({message: 
            this.state.info.map(theinfo =>
                this.props.name +
                "\n\nDistance from the "+distword +": " + theinfo.distance +
                "\nMass: " + theinfo.mass +
                "\nSurface temperature: " + theinfo.temp +
                "\nVolume: " + theinfo.volume )
    }); 
      
    }else{
      this.setState({message: "  "});
    }

  }
  
  render(){
    //change this to get info from nasa and populate a info table/ images
    return (
      <View>
          <VrButton onClick={this.handleClick.bind(this)}>
            <Text
              style={{
                backgroundColor: '#0009',
                fontSize: 0.2,
                fontWeight: '400',
                layoutOrigin: [0.5, 0.5],
                paddingLeft: 0.5,
                paddingRight: 0.5,
                paddingTop:0.5,
                paddingBottom: 0.5,
                textAlign: 'center',
                textAlignVertical: 'center',
                transform: [{translate: [0,0,-5]}],
              }}
            >
            {this.state.message}
            </Text>
          </VrButton>
      </View>
    );
  }
};


AppRegistry.registerComponent('Space', () => Space);
