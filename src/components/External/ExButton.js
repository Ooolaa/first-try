import React from "react";
import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { theme } from "../../core/theme";

class ExButton extends React.Component {
  render() {
    const { mode, style, ...props } = this.props;

    return (
      <PaperButton
        style={[
          styles.button,
          mode === "outlined" && {
            backgroundColor: theme.colors.surface,
            borderColor: theme.colors.text,
          },
          style,
        ]}
        labelStyle={styles.text}
        mode={mode}
        {...props}
      />
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    marginVertical: 10,
    paddingVertical: 2,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 26,
  },
});

export default ExButton;
