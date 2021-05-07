import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";

const Profile = styled.Text`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const ProfileScreen = () => {
  return (
    <SafeArea>
        <Profile>Profile Screen</Profile>
    </SafeArea>
  );
};