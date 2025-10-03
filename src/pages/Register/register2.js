import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
  ScrollView,
} from 'react-native';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {ImageRegister2} from '../../assets';
import {
  CustomButton,
  CustomTextInput,
  Select,
  Space,
} from '../../components/small';
import {connect} from 'react-redux';
import {getProvinces, getCities} from '../../actions/RajaOngkirAction';

class Register2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      province: '',
      provinces: [],
      cities: [],
    };
  }

  componentDidMount() {
    this.props.dispatch(getProvinces());
  }

  render() {
    const {city, province} = this.state;
    const {getProvincesResult, getCitiesResult} = this.props;

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.page}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.back}>
              <CustomButton
                icon="arrow-left"
                padding={7}
                onPress={() => this.props.navigation.goBack()}
                color="white"
              />
            </View>
            <View style={styles.ilustrasi}>
              <ImageRegister2 />
              <Space height={5} />
              <Text style={styles.title}>Isi Alamat</Text>
              <Text style={styles.title}>Lengkap Anda</Text>

              <View style={styles.wrapperCircle}>
                <View style={styles.circleDisabled}></View>
                <Space height={10} />
                <View style={styles.circlePrimary}></View>
              </View>
            </View>

            <View style={styles.card}>
              <CustomTextInput label="Alamat" fontSize={15} textarea />

              <Select
                label="Provinsi"
                fontSize={15}
                placeholder="Pilih Provinsi"
                data={
                  getProvincesResult
                    ? getProvincesResult.data.map(item => ({
                        label: item.name,
                        value: item.id,
                      }))
                    : []
                }
                onValueChange={item => {
                  this.setState({province: item});
                  this.props.dispatch(getCities(item));
                }}
                selectedValue={province}
              />

              <Select
                label="Kota"
                placeholder="Pilih Kota"
                fontSize={15}
                data={
                  getCitiesResult
                    ? getCitiesResult.data.map(item => ({
                        label: item.name,
                        value: item.id,
                      }))
                    : []
                }
                onValueChange={item => {
                  this.setState({city: item});
                }}
                selectedValue={city}
              />

              <Space height={30} />
              <CustomButton
                title="Continue"
                type="text"
                padding={12}
                onPress={() => this.props.navigation.navigate('Register2')}
              />
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => ({
  getProvincesResult: state.rajaOngkirReducer.getProvincesResult,
  getCitiesResult: state.rajaOngkirReducer.getCitiesResult,
});
export default connect(mapStateToProps, null)(Register2);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  ilustrasi: {
    alignItems: 'center',
    marginTop: responsiveHeight(50),
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.primary.light,
    color: colors.primary,
  },
  wrapperCircle: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 5,
  },
  circlePrimary: {
    backgroundColor: colors.primary,
    width: responsiveWidth(11),
    height: responsiveHeight(11),
    borderRadius: 10,
  },
  circleDisabled: {
    backgroundColor: colors.border,
    width: responsiveWidth(11),
    height: responsiveHeight(11),
    borderRadius: 10,
  },
  card: {
    backgroundColor: colors.white,
    marginHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    padding: 30,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  back: {
    position: 'absolute',
    top: 30,
    left: 30,
    zIndex: 1,
    backgroundColor: colors.white,
  },
});
