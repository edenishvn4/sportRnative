import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  Thumbnail,
  Text,
  Icon,
  Button,
  Item,
  Input,
  View,
  Card,
  CardItem,
  List,
  ListItem,
  Left,
  Right,
  Body,} from 'native-base';
import { ScrollView,Image }from 'react-native'
import axios from 'axios';

class App extends Component{

  constructor(){
    super();
    this.state={team:[],nama:''};
  }

  klik(){
    var nm=this.state.nama;
    var url ='https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t='+nm;
    axios.get(url).then((ambilData)=>{
      console.log(ambilData.data);
      this.setState({
        team:ambilData.data.player
      })
    })
  }
  
  componentDidMount(){
  }
  render() {
    const data=this.state.team.map((item,index)=>{
      var name=item.strPlayer;
      var tgl =item.dateBorn;
      var nat =item.strNationality;
      var gaji=item.strWage;
      var imgtm= item.strCutout;
      var imgbg = item.strThumb;
      var hgt = item.strHeight;
      var wgt = item.strWeight;
      var pos = item.strPosition;
      return( <Card avatar key={index}>
      <CardItem header>
        <Left>
          <Thumbnail source={{uri:imgtm}}/>
          <Body>
            <Text>{name}</Text>
            <Text note>{pos}</Text>
          </Body>
        </Left>
        <Right><Button transparent onPress={()=>{alert('Gaji nya: '+gaji)}}>
          <Icon name="bookmark"/>
          <Text> Lihat Gaji</Text>
          </Button>
        </Right>
      </CardItem>
      <CardItem cardBody>
        <Image source={{uri:imgbg}} style={{height:400,width:400,flex:1}}/>
      </CardItem>
      <CardItem footer>
        <Left><Button transparent>
          <Icon name="flag"/>
          <Text>{nat}</Text>
          </Button>
        </Left>
        <Body><Button transparent>
          <Icon name="code"/>
          <Text>{hgt} M / {wgt} KG</Text>
          </Button>
        </Body>
        <Right><Button transparent>
          <Icon name="home"/>
          <Text>{tgl}</Text>
          </Button>
        </Right>
      </CardItem>
      </Card>
      )
    })
    return (
     <Container>
       <Header searchBar rounded>
        <Item>
          <Icon name="search"/>
          <Input placeholder="Cari Team..." onChangeText={(x)=>{this.setState({nama:x})}} />
          <Button transparent onPress={()=>this.klik()}><Icon name="flag"/></Button>
        </Item>
       </Header>
       <ScrollView>
         {data}
       </ScrollView>
     </Container>
    );
  }
}
export default App;

{/* <Container>
       <Header/>
       <Content>
         <Thumbnail large source={{uri:'http://stage48.net/wiki/images/thumb/9/92/HoriInfluencer.jpg/280px-HoriInfluencer.jpg'}}/>
         <Icon name = "home" type="FontAwesome"/>
         <Button iconLeft light>
          <Icon name='arrow-back'/>
          <Text>Back</Text>
         </Button>
         <Button iconRight light>
          <Text>Next</Text>
          <Icon name='arrow-forward'/>
         </Button>
         <Button iconLeft success>
          <Icon name='copy'/>
          <Text>Copy files</Text>
         </Button>
         <Form>
           <Item floatingLabel>
            <Label> Username </Label><Input/>
           </Item>
           <Item floatingLabel last>
            <Label> Password </Label><Input/>
           </Item>
         </Form>
         <Text style={{fontSize:30}}> Daftar Karyawan!! :</Text>
         {data}
         <View style={{flex:1}}>
         <Fab 
         active={this.state.active} 
         direction="left" 
         style={{backgroundColor:'#5067FF'}} 
         position="bottomRight"
         onPress={()=>this.setState({
           active:!this.state.active})}>
            <Icon name="share"/>
            <Button style={{backgroundColor:'#34A34F'}}>
              <Icon name="logo-whatsapp"/>
            </Button>
            <Button style={{backgroundColor:'#3B5998'}}>
              <Icon name="logo-facebook"/>
            </Button>
            <Button style={{backgroundColor:'#DD5144'}}>
              <Icon name="mail"/>
            </Button>
          </Fab>
          </View>
       </Content>
       <Footer/>
     </Container> 
    active:false
    */}