import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Styles } from "./style";
import { TouchableOpacity } from "react-native";
import { PieChart } from "react-native-chart-kit";
import { colors } from "../../constants/colors";

interface Dashboard {

}
const data = [
    {
      name: 'BMIIndex',
      population: 20.1,
      color: colors.lavendar,
      legendFontColor: 'black',
    },
    {
      name: 'Normal',
      population: 80,
      color: colors.white,
      legendFontColor: 'black',
    },
  ];

const Dashboard = (props: Dashboard) =>{
    return(
        <SafeAreaView style={Styles.mainView}>
            <View>
                <View style={Styles.welcomeView}>
                    <View style={Styles.welcomeBackText}>
                        <Text style={Styles.welcome}>Welcome Back,</Text>
                        <Text style={Styles.welcomeUserText}>Stefani Wong</Text>
                    </View>
                    <View style={Styles.notificationBell}>
                        <Text>Noti icon</Text>
                    </View>
                </View>
                <View style={Styles.bmiView}>
                    <View style={Styles.bmiTextView}>
                    <Text style={Styles.bmiText}>BMI (Body Mass Index)</Text>
                    <Text style={Styles.bmiUserText}>You have a normal weight</Text>
                    <TouchableOpacity style={Styles.viewMoreButton}>
                        <Text style={Styles.viewMoreText}>View More</Text>
                    </TouchableOpacity>
                    </View>
                    <View style={Styles.pieChartView}>
                    <PieChart
        data={data}
        width={120}
        height={120}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="20"
        absolute
        hasLegend={false}
      />
      {/* Custom text overlay */}
      <View
        style={{
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          top: -30,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' }}>
          {data[0].population}
        </Text>
      </View>
                    </View>
                </View>
                <View style={Styles.targetView}>
                    <View style={Styles.targetTextView}>
                    <Text style={Styles.todayTargetText}>Today's Target</Text>
                    </View>
                    <View style={Styles.buttonView}>
                    <TouchableOpacity style={Styles.checkButton}>
                        <Text style={Styles.checkText}>Check</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default Dashboard;