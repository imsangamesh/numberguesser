import { StyleSheet, Text, View } from 'react-native';

const Header = props => {
  return (
    <View style={{...styles.header , ...props.style}}>
      <Text style={styles.headertext}>{props.children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    width:'100%',
    backgroundColor:'#ff85ad',
    height:80,

  },
  headertext:{
    fontSize:26,
    fontWeight:'bold',
    paddingTop:20,

  }
});

export default Header 