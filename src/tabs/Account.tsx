import { View, Text, SafeAreaView, Pressable } from 'react-native';

const Account: React.FC = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Logic Tanjueco</Text>
      </View>
      <View>
        <View>
          <Text>Account</Text>
          <Pressable>
            <View>
              <Text>Delete My Account</Text>
            </View>
          </Pressable>
        </View>

        <View>
          <Text>Settings</Text>
          <Pressable>
            <View>
              <Text>Sign Out</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Account;
