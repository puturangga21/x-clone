import SignOutButton from '@/components/SignOutButton';
import { useUserSync } from '@/hooks/useUserSync';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const IndexHome = () => {
  useUserSync();

  return (
    <SafeAreaView className="flex-1">
      <Text>IndexHome</Text>
      <SignOutButton />
    </SafeAreaView>
  );
};

export default IndexHome;
