import { StyleSheet} from 'react-native';


export default styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header:{
      backgroundColor:'#4287f5',
      width:'100%',
      padding:5,  
    },
    logo:{
      width:400,
      height:150,
      alignSelf:'center',
    },
    icones:{
      height:100,
      width:100,
      

    },
    ordemdeicones:{
      flex:1,
      flexWrap:'wrap',
      flexDirection:'row',
      borderWidth:2,
      borderColor:'red',
      justifyContent:'center',

    },


  });