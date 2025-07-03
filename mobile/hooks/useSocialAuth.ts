import { useSSO } from '@clerk/clerk-expo';
import { useState } from 'react';
import { Alert } from 'react-native';

export const useSocialAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { startSSOFlow } = useSSO();

  const handleSocialAuth = async (strategy: 'oauth_google' | 'oauth_apple') => {
    setIsLoading(true);

    try {
      const { createdSessionId, setActive } = await startSSOFlow({ strategy });

      if (createdSessionId && setActive) {
        await setActive({ session: createdSessionId });
      }
    } catch (error) {
      console.error('Error during social authentication:', error);
      const provider = strategy === 'oauth_google' ? 'Google' : 'Apple';
      Alert.alert(
        'Authentication Error',
        `Failed to authenticate with ${provider}. Please try again later.`
      );
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, handleSocialAuth };
};
