import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'; 

export default function App() { 
  return ( 
    <View style={estilo.container}> 
      <Text style={estilo.textoTitulo}>Cidades do Mundo</Text> 
      <ScrollView contentContainerStyle={estilo.scrollContainer}> 
        <Text style={estilo.textoCidade}>Paris</Text> 
        <Image style={estilo.imageprincipal} source={require('./assets/paris.jpg')} /> 
        
        <Text style={estilo.textoCidade}>Londres</Text> 
        <Image style={estilo.imageprincipal} source={require('./assets/londres.jpg')} /> 
        
        <Text style={estilo.textoCidade}>New Jersey</Text> 
        <Image style={estilo.imageprincipal} source={require('./assets/newjersey.jpg')} /> 
        
        <Text style={estilo.textoCidade}>Tokyo</Text> 
        <Image style={estilo.imageprincipal} source={require('./assets/tokyo.jpg')} /> 
        
        <Text style={estilo.textoCidade}>Nova York</Text> 
        <Image style={estilo.imageprincipal} source={require('./assets/novayork.jpg')} /> 
        
        <Text style={estilo.textoCidade}>Campinas</Text> 
        <Image style={estilo.imageprincipal} source={require('./assets/campinas.jpg')} /> 
      </ScrollView> 
    </View> 
  ); 
} 

const estilo = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#00FFFF', 
  }, 
  scrollContainer: { 
    alignItems: 'center', 
    paddingBottom: 20, 
  }, 
  imageprincipal: { 
    width: 350, 
    height: 350, 
  }, 
  textoCidade: { 
    fontSize: 15, 
    marginTop: 40, 
    fontWeight: 'bold', 
  }, 
  textoTitulo: { 
    fontSize: 40, 
    color: '#800000', 
    marginTop: 60, 
    textAlign: 'center', 
  },
}); 
