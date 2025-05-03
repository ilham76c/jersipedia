import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import {dummyProfile} from '../../data';
import {colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {CustomTextInput, Select} from '../../components/small';
import Button from '../../components/small/Button';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataProvinsi: [],
      dataKota: [],
      profile: dummyProfile,
    };
  }

  render() {
    const {dataProvinsi, dataKota, profile} = this.state;
    return (
      <View style={styles.pages}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <CustomTextInput label="Nama" value={profile.name} fontSize={15} />
          <CustomTextInput label="Email" value={profile.email} fontSize={15} />
          <CustomTextInput
            label="No. Handphone"
            value={profile.phone}
            fontSize={15}
          />
          <CustomTextInput
            label="Alamat"
            value={profile.address}
            fontSize={15}
            textarea
          />

          <Select
            label="Provinsi"
            data={dataProvinsi}
            placeholder="Pilih Provinsi"
            onSelect={item => {
              this.setState({selectedProvinsi: item});
            }}
            value={profile.province}
            fontSize={15}
          />

          <Select
            label="Kota"
            data={dataKota}
            placeholder="Pilih Kota"
            onSelect={item => {
              this.setState({selectedKota: item});
            }}
            value={profile.city}
            fontSize={15}
          />

          <View style={styles.inputPhoto}>
            <Text style={styles.label}>Photo Profile :</Text>

            <View style={styles.wrapperUpload}>
              <Image source={profile.avatar} style={styles.avatar} />

              <View style={styles.tombolChangePhoto}>
                <Button title="Change Photo" type="text" padding={7} />
              </View>
            </View>
          </View>

          <View style={styles.submit}>
            <Button
              title="Submit"
              type="text"
              padding={responsiveHeight(15)}
              fontSize={18}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    paddingTop: 10,
  },
  inputPhoto: {
    marginTop: 10,
  },
  label: {
    fontSize: 15,
    fontFamily: fonts.primary.regular,
  },
  avatar: {
    width: responsiveWidth(150),
    height: responsiveHeight(150),
    borderRadius: 40,
  },
  wrapperUpload: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  tombolChangePhoto: {
    marginLeft: 20,
    flex: 1,
    justifyContent: 'center',
  },
  submit: {
    marginVertical: 30,
  },
});
