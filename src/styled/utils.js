export const getStylesDependingOnTheme = (styleFromTheme) => (props) =>
  styleFromTheme[props.theme.name];
