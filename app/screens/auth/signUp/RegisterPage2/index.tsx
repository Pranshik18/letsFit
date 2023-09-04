import * as React from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import { Styles } from './style';
import { assets } from '../../../../assets';
import { Dropdown } from 'react-native-element-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-date-picker';
interface CreateAccountInfoPage{
  navigation : {
    navigate : (props: any)=> void;
  }
}


const genderData = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Prefer not to say', value: 'notDefined'}
]

const CreateAccountInfoPage = (props: CreateAccountInfoPage) =>{
    const [gender, setGender] = React.useState('');
    const [showDatePicker, setShowDatePicker] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const handleDateChange = (date: any) => {
        setSelectedDate(date);
      };
      const confirmDate = () => {
        setShowDatePicker(false); // Hide the date picker
        // You can use the selectedDate for further processing
      };
      
    return(
        <SafeAreaView style={Styles.mainView}>
            <ScrollView>
                <View>
                    <View style={Styles.imageView}>
                        <Image source={assets.girlAvatar} resizeMode='contain'/>
                    </View>
                    <View style={Styles.completeProfileView}>
                        <Text style={Styles.completeProfileText}>Let's complete your profile</Text>
                        <Text style={Styles.completeProfileDescText}>It will help us to know more about you!</Text>
                    </View>
                    <View style={Styles.inputFieldView}>
                    <Dropdown
                        data={genderData}
                        style={Styles.dropDownField}
                        onChange={(item) => setGender(item.value)}
                        labelField={'label'}
                        valueField={'value'}
                        value={gender}
                        placeholder='Choose Gender'
                        renderLeftIcon={()=>(
                            <Icon name='people' size={20} style={{marginRight: 10}} color='black'/>
                        )}
                    />
                <TouchableOpacity onPress={() => setShowDatePicker(true)}>
                <View style={Styles.dob}>
                  <TextInput editable={false} style={Styles.dobInput}>
                    {
                    selectedDate.toDateString()
                    }
                  </TextInput>
                </View>
              </TouchableOpacity>
                {showDatePicker && (
                <>
              <DatePicker
                date={selectedDate}
                mode='date'
                onDateChange={handleDateChange}
                style={Styles.datePicker}
              />
              <TouchableOpacity onPress={confirmDate} style={Styles.selectButton}>
                    <Text style={Styles.selectText}>Select</Text>
                  </TouchableOpacity>
                  </>
            )}
            <View style={Styles.weightView}>
                <TextInput style={Styles.weightField} placeholder='Your Weight'/>
                <Image source={assets.weightImage} style={Styles.weightImage}/>
            </View>
            <View style={Styles.weightView}>
                <TextInput style={Styles.weightField} placeholder='Your Height'/>
                <Image source={assets.heightImage} style={Styles.weightImage}/>
            </View>
            <TouchableOpacity style={Styles.nextButton} onPress={()=>props.navigation.navigate('userInfoPage')}>
                <Text style={Styles.nextText}>Next</Text>
            </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default CreateAccountInfoPage;