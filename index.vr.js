//run npm start in Space folder

import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  Image,
  View,
  VrButton,
  Model,
  Animated,
  Sound
} from 'react-vr';
import Gallery, { imageTypes } from 'react-vr-image-gallery';
import {Easing} from 'react-native';

export default class Space extends React.Component {
    constructor(){
        super();
        this.state = {planetName:"", zoom:0.2, message:"  "};
        
    }
    handleClick(string){
        //changes state to update child components
        this.setState({planetName:string});
        this.setState({message:"  "});
        this.setState({zoom:0.2});
        
    }
    handleClickPlanet(){
        if(this.state.zoom == 0.2){
            this.setState({zoom:0.5});
          }else{
            this.setState({zoom:0.2});
          }
    }
  render() {
    return (
      <View>
        <Pano source={asset('space2.jpg')} style={{transform:[{rotateY: 45}]}}/>
        
        <Model style={{transform:[{translate:[0,-5,0]}]}}>
          <Sound source={{mp3: asset('music.mp3')}} loop={true}/>
        </Model>
        <View>
            
        <VrButton onClick={this.handleClickPlanet.bind(this)}>
            <Planet name={this.state.planetName} zoom={this.state.zoom} message={this.state.message}/>
        </VrButton>
        </View>
        <View style={{width:1, flexDirection:'row', transform: [{translate: [-4,-1,-5]}],}}>
        
            <VrButton onClick={this.handleClick.bind(this,"Sun")}>
                <Text style={{
                    backgroundColor: "#0009",
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
  componentDidMount(nextProps){
    this.spinAnimation();
  }
  componentDidUpdate(prevProps){
    if(this.props.zoom !== this.state.zoom){
        console.log(this.props.zoom);
        this.setState({zoom:this.props.zoom});
    }
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
     
  }
  
  render(){
    const spin = this.state.spin.interpolate({inputRange:[0,1], outputRange: ['0deg', '360deg']})
    const AnimatedModel = Animated.createAnimatedComponent(Model);
    //could fetch location and source from json
    return(
        <View>
            <View style={{width:3,height:1.5}}>
                <NasaInfo name = {this.props.name} message={this.props.message}/>
            </View>
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
    this.state = {message:"  ", name:"" , info: [],bgcolor:"#0000", size:0};
    
  }
  
  componentDidMount (nextProps) {

    
  }

  componentDidUpdate(prevProps){
   
    if(this.props.name !== prevProps.name){
        console.log("New: " + this.props.name);
        console.log("Old: " + prevProps.name);
        this.setState({size:0});
        this.setState({bgcolor:"#0000"});
        this.setState({message:this.props.message})
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
    this.setState({bgcolor:"#0009"});
    this.setState({size:2});
    }else{
      this.setState({message: "  "});
      this.setState({bgcolor:"#0000"});
      this.setState({size:0});
    }

  }
  changeSize(){
      if (this.state.color == "#0000"){
        return(0);
      }
      else{
          return(2);
      }
  }
  
  render(){
    //change this to get info from nasa and populate a info table/ images
    return (
      <View>
          <VrButton onClick={this.handleClick.bind(this)}>
            <Text
              style={{
                backgroundColor: this.state.bgcolor,
                fontSize: 0.15,
                fontWeight: '200',
                layoutOrigin: [0.5, 0.5],
                paddingLeft: 0.5,
                paddingRight: 0.5,
                paddingTop:0.5,
                paddingBottom: 0.5,
                textAlign: 'center',
                textAlignVertical: 'center',
                transform: [{translate: [0,0,-3.7]}],
              }}
            >
            {this.state.message}
            </Text>
          </VrButton>
          <View style={{transform:[{translate:[4,4.7,-6]}]}}>
            <Pictures name={this.state.name} size={this.state.size}/>
          </View>
      </View>
    );
  }
};

class Pictures extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:"", size:this.props.size};
    }
    componentDidMount(){

    }
    componentDidUpdate(){
        if(this.props.name !== this.state.name){
            this.setState({name:this.props.name});
        }
        if(this.props.size !== this.state.size){
            this.setState({size: this.props.size});
        }
    }
    render(){
        return(
            <View style={{flexDirection:"column",width:1 }}>
                <Image source={asset(this.state.name +"1.jpg")} style={{width:this.state.size,height:this.state.size}}></Image>
                <View style={{height:0.5}}></View>
                <Image source={asset(this.state.name +"2.jpg")} style={{width:this.state.size,height:this.state.size}}></Image>
                
            </View>
        );

    }
}
AppRegistry.registerComponent('Space', () => Space);
