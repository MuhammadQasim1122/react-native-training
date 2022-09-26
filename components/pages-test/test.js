import * as React from 'react';
import { FlatList, Text, View, StyleSheet, Button} from 'react-native';

const Item = ({name}) => {
return(
<View style={styles.item}>
<Text style={{color: 'black'}}>{name}</Text>
</View>
);
}
const TestApp: () => Node = (navigation) => {

const countries = [
{
id: '1',
name: 'United States',
},
{
id: '2',
name: 'United Kingdom',
},
{
id: '3',
name: 'Israel',
},
{
id: '4',
name: 'Pakistan',
},
{
id: '5',
name: 'Nigeria',
},
{
id: '6',
name: 'India',
},
];

const renderItem = ({item})=>(
<Item name={item.name}/>
);
return (
<View style={styles.container}>
<FlatList
data={countries}
renderItem={renderItem}
keyExtractor={(item) => item.id}
/>
</View>
);
}
export default TestApp;
const styles = StyleSheet.create({
container: {
marginTop:30,
padding:2,
},
item: {
backgroundColor: 'orange',
padding: 20,
marginVertical: 8,
marginHorizontal: 16,
borderRadius: 8,
shadowColor: '#000',
shadowOffset: { width: 3, height: 3 },
shadowOpacity: 0.3,
shadowRadius: 8,
},
});