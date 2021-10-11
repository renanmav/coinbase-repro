import PropTypes from "prop-types";
import React from "react";
import { TouchableHighlight } from "react-native";

export default function Button({ onPress, children }) {
  return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
}

Button.defaultProps = {
  children: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onPress: () => {},
};

Button.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
};
