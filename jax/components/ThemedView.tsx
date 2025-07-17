import { View, type ViewProps, Text } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import React from 'react';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  children?: React.ReactNode; // Explicitly include children
};

export function ThemedView({
  style,
  lightColor,
  darkColor,
  children,
  ...otherProps
}: ThemedViewProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    'background'
  );

  // Safely render children with text validation
  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      if (typeof child === 'string') {
        return <Text>{child}</Text>;
      }
      return child;
    });
  };

  return (
    <View style={[{ backgroundColor }, style]} {...otherProps}>
      {renderChildren()}
    </View>
  );
}