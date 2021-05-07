import React, { useContext } from "react";
import { Text } from "react-native";
import { ActivityIndicator, Colors } from 'react-native-paper';
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Spacer } from "../../../components/spacer/spacer.component";
import { colors } from "../../../infrastructure/theme/colors";

const Profile = styled.View`
`;

export const ProfileScreen = () => {
  return (
    <SafeArea>
        <Profile>
            <Text>Profile</Text>
        </Profile>
    </SafeArea>
  );
};