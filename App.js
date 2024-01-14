import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Image, Button, Pressable,ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={styles.Mainpict}
          source= {require('./assets/chillingIcon.png')}
        />
        <Text style={styles.Title1}>REZA</Text>
        <Text style={styles.Title2}>SAHRUL</Text>
        <Text style={styles.HeyThere}>HEY THERE!</Text>
        <Text style={styles.Bio}>IM A STUDENT MAJORING IN SOFTWARE ENGINEER, WITH INTEREST IN VISUAL AND GRAPHIC DESIGN.</Text>
        <View style={styles.ContactMeContainer}>
          <Button style={styles.ContactMe}
          title="Contact Me!"
          onPress={()=> Alert.alert('Simple Button Pressed')}
          color="#0174BE"
          />

        </View>
        <View style={styles.MyRecentProject}>
          <Text style={styles.RecentProject}>MY RECENT PROJECT</Text>
        </View>

        <View style={styles.FirstProject}>
          <Image
          style={styles.MockupProject}
          source={require('./assets/webmockupproject.png')}
          />
        </View>

        <View style={styles.ProjectDesc}>
          <Text style={styles.MockupText}>Company Profile Mockup</Text>

          <View style={styles.MockupDescPic}>
            <Text style={styles.MockupDesc}>Web Design</Text>
            <Pressable onPress={()=> console.log("ArrowButtonPressed!")}>
              <Image style={styles.ArrowButton}
              source={require('./assets/arrowcustompressable.png')}/>
            </Pressable>
          </View>
        </View>

        <View style={styles.FirstProject}>
          <Image
          style={styles.MockUpProject}
          source={require('./assets/totebagproject.png')}
          />
        </View>
        <View style={styles.ProjectDesc}>
          <Text style={styles.MockupText}>Custom Totebag Product</Text>

          <View style={styles.MockupDescPic}>
            <Text style={styles.MockupDesc}>Entrepreneurship</Text>
            <Pressable onPress={()=> console.log("ArrowButtonPressed!")}>
              <Image style={styles.ArrowButton2}
              source={require('./assets/arrowcustompressable.png')}/>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
    paddingHorizontal:20,
  },
  Mainpict:{
    width: 350,
    height: 350,
    alignSelf:'center',
    marginBottom:50,
  },
  Title1:{
    paddingTop: 5,
    margin: 10,
    marginTop:-30,
    fontFamily: 'Poppins, bold',
    fontSize:65,
    fontWeight:'bold',
    textAlign:'left',
    lineHeight: 60, 
  },
  Title2:{
    paddingTop: 10,
    margin: 10,
    marginTop:-20,
    fontFamily: 'Poppins, bold',
    fontSize:65,
    fontWeight:'bold',
    textAlign:'right',
    lineHeight: 60, 
  },
  HeyThere:{
    fontSize:15,
    marginTop:20,
    marginBottom:1,
    fontFamily: 'poppins, bold',
    fontWeight:'bold',
    textAlign:'left',
    lineHeight:15,
    padding:'30',
    paddingLeft:'20',
    margin:'10',
  },
  Bio:{
    fontSize:14,
    marginTop:10,
    fontFamily:'poppins, medium',
    fontWeight:'medium',
    textAlign:'left',
    lineHeight:20,
    padding:'30',

  },
  ContactMeContainer:{
    marginTop:13,
    margin:0,
    alignContent:'center',
  },
  ContactMe:{
    padding:20,
    justifyContent:'center',
    marginHorizontal:20,
  },
  MyRecentProject:{
    marginBottom:10,
  },
  RecentProject:{
    fontSize:15,
    marginTop:40,
    marginBottom:1,
    fontFamily:'poppins, bold',
    fontWeight:'bold',
    textAlign:'left',
    lineHeight:20,
    padding:'30',
    paddingLeft:'20',
  },
  FirstProject:{
    alignItems:'center',
    marginHorizontal:10,
  },
  MockupProject:{
    width:350,
    height:350,
    alignSelf:'center',
    borderRadius:3,
  },
  
  MockUpProject:{
    width:350,
    height:350,
    alignSelf:'center',
    borderRadius:3,
  },

  ProjectDesc:{
    textAlign:'left',
    lineHeight:15,
    padding:'30',
    paddingLeft:'20',
    marginTop:10,
    marginBottom:40,
  },
  MockupDescPic:{
    flexDirection:'row',
  },
  MockupText:{
    fontSize:15,
    fontFamily:'poppins, bold',
    fontWeight:'bold',
    color:'gray',
  },
  MockupDesc:{
    fontSize:14,
    fontFamily:'poppins',
    fontWeight:'medium',
    color:'gray',
  },
  ArrowButton:{
    width:45,
    height:45,
    marginLeft:230,
    marginTop:-20,
  },
  ArrowButton2:{
    width:45,
    height:45,
    marginLeft:200,
    marginTop:-20,
  },
});
