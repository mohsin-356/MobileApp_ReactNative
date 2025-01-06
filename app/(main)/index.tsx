// import React, { useContext } from 'react';
// import { ScrollView, View, Text, StyleSheet } from 'react-native';
// import themeContext from '@/themes/themeContext';
// import BarGraph from '../components/BarGrapgh';
// import LineGrapgh from '../components/LineGrapgh';
// import SemicircleChart from '../components/SemicircleChart';
// import Cards from '../components/Cards';
// import PiChart  from '../components/PiChart';
// import PiDonut from '../components/PiDonut';
// import Final from '../components/final';
// import Paying from '../components/paying';
// import Revenue from '@/components/Revenue';
// import Slider from '../components/Slider';
// import One from '../components/oneslider';
//  const HomePage = () => {
//   const { theme } = useContext(themeContext); // Accessing the current theme

//   return (
//     <ScrollView
//       style={[styles.container, { backgroundColor: theme === 'dark' ? '#433F3F' : '#FFFFFF' }]}
//       showsVerticalScrollIndicator={false}
//     >
//       <Cards />
//       <BarGraph/>
//      <SemicircleChart/>    
//       <PiChart />
 
//     <LineGrapgh/>
//      <PiDonut/>
//       <Paying/>
//       <Final/>
//     <Revenue/> 
//     <Slider/>
   
//     {/* <One/> */}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//      flex: 1,
//     padding: 10,
//     marginBottom:10 // Adjusted padding for better layout
//   },
// });

// export default HomePage;
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useSettings } from '@/themes/SettingsContext';
import BarGraph from '@/components/BarGrapgh';
import LineGrapgh from '@/components/LineGrapgh';
import SemicircleChart from '@/components/SemicircleChart';
import Cards from '@/components/Cards';
import PiChart  from '@/components/PiChart';
import PiDonut from '@/components/PiDonut';
import Final from '@/components/final';
import Paying from '@/components/paying';
import Revenue from '@/components/Revenue';
const HomeScreen: React.FC = () => {
  const { isDarkMode } = useSettings(); // Use the custom hook

  return (
    <ScrollView style={{ flex: 1, padding: 10,
     marginBottom:10 ,backgroundColor: isDarkMode ? '#1F2937' : '#F3F4F6' }}>
      <Cards/>
      <Paying/>
      <PiChart/>
      <Revenue/>
     
    </ScrollView>
  );
};

export default HomeScreen;
