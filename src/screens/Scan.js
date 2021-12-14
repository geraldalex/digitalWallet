import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Camera } from "expo-camera";
import { COLORS, SIZES, icons, images, FONTS } from "../constants";

const Scan = ({navigation}) => {
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(Camera.Constants.Type.back);


function onBarCodeRead(result) {
console.log(result.data)
}

function renderScanFocus() {
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
<Image
source={images.focus}
resizeMode='stretch'
style={{
    width:200,
    height:300,
    marginTop:'-55%'
}}
/>
        </View>
    )
}

  function renderHeader() {
      return(
          <View style={{flexDirection:'row',marginTop:SIZES.padding*4, paddingHorizontal:SIZES.padding*3 }}>
<TouchableOpacity style={{
    width:45,
    justifyContent:'center',
    alignItems:'center'
}}
onPress={() => navigation.navigate("Home1")}
>
<Image
source={icons.close}
style={{
    width:20,
    height:20,
    tintColor:COLORS.white
}}
/>
</TouchableOpacity>
<View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
<Text style={{color:COLORS.white, ...FONTS.body3}}>Scan for Payment</Text>
</View>
<TouchableOpacity style={{
    height:45,
    width:45,
    backgroundColor:COLORS.green,
    borderRadius:10,
    alignItems:"center",
    justifyContent:'center'
}}
onPress={() => console.log("Info ssssssssss")}
>
    <Image
    source={icons.info}
    style={{
        height:25,
        width:25,
        tintColor:COLORS.white
    }}
    />

</TouchableOpacity>
          </View>
      )
  }

  function renderPaymentMethods() {
      return(
          <View style={{
              position:'absolute',
              bottom:0,
              right:0,
              left:0,
              height:160,
              padding: SIZES.padding*3,
              borderTopRightRadius:SIZES.radius,
              borderTopLeftRadius:SIZES.radius,
              backgroundColor:COLORS.white

          }}>
<Text style={{...FONTS.h4}}>Another payment methods</Text>
<View style={{flexDirection:'row', alignItems:'flex-start', marginTop:SIZES.padding*2, justifyContent:'space-between'}}>
<TouchableOpacity style={{flexDirection:'row', alignItems:'center'}}
onPress={() => console.log("Phone number")}
>
<View style={{width:40, height:40, backgroundColor:COLORS.lightpurple, alignItems:'center', justifyContent:'center', borderRadius:10}}>
<Image
source={icons.phone}
resizeMode='cover'
style={{
width:25,
height:25,
tintColor:COLORS.purple
}}
/>
</View>
<Text style={{...FONTS.body4, marginLeft:SIZES.padding}}>
    Phone Number
</Text>
</TouchableOpacity>


<TouchableOpacity style={{flexDirection:'row', alignItems:'center', marginLeft:SIZES.padding*2}}
onPress={() => console.log("Barcode")}
>
<View style={{width:40, height:40, backgroundColor:COLORS.lightGreen, alignItems:'center', justifyContent:'center', borderRadius:10}}>
<Image
source={icons.barcode}
resizeMode='cover'
style={{
width:25,
height:25,
tintColor:COLORS.primary
}}
/>
</View>
<Text style={{...FONTS.body4, marginLeft:SIZES.padding}}>
    BarCode
</Text>
</TouchableOpacity>
</View>
          </View>
      )
  }

  React.useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.transparent }}>
      <Camera
        style={{
          flex: 1,
        }}
        type={type}
        onBarCodeScanned={onBarCodeRead}
      >
{renderHeader()}
{renderScanFocus()}
{renderPaymentMethods()}
      </Camera>
    </View>
  );
};

export default Scan;

const styles = StyleSheet.create({});
