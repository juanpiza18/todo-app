import desktopDark from "../assets/images/bg-desktop-dark.jpg";
import desktopLight from "../assets/images/bg-desktop-light.jpg";
import mobileDark from "../assets/images/bg-mobile-dark.jpg";
import mobileLight from "../assets/images/bg-mobile-light.jpg";

const palette = {
  gray: {
    100: "hsl(0, 0%, 98%)",
    200: "hsl(236, 33%, 92%)",
    300: "hsl(233, 11%, 84%)",
    400: "hsl(234, 39%, 85%)",
    500: "hsl(236, 9%, 61%)",
    600: "hsl(234, 11%, 52%)",
    700: "hsl(233, 14%, 35%)",
    800: "hsl(237, 14%, 26%)",
  },
  blue: {
    0: "hsl(231, 100%, 46%)",
    100: "hsl(235, 19%, 35%)",
    200: "hsl(235, 24%, 19%)",
    300: "hsl(235, 21%, 11%)",
  },
  cyan: {
    100: "hsl(192, 100%, 67%)",
  },
  violet: {
    100: "hsl(280, 87%, 65%)",
  },
};

const gradients = {
  blueToPurple: `linear-gradient( to bottom right, ${palette.cyan[100]}, ${palette.violet[100]});`,
};

const dark_theme = {
  name: "dark",
  backgroundColor: palette.blue[200],
  border: `1px solid ${palette.gray[600]}`,
  bodyBackground: {
    primary: palette.blue[300],
  },
  variant: {
    primary: palette.gray[400],
    secondary: palette.gray[300],
    tertiary: palette.blue[0],
    quaternary: palette.gray[600],
  },
  backgroundImageDesktop: desktopDark,
  backgroundImageMobile: mobileDark,
};

const light_theme = {
  name: "light",
  backgroundColor: palette.gray[100],
  border: `1px solid ${palette.gray[200]}`,
  bodyBackground: {
    primary: {
      default: "white",
    },
  },
  variant: {
    primary: palette.blue[200],
    secondary: palette.gray[700],
    tertiary: palette.blue[0],
    quaternary: palette.gray[500],
  },
  backgroundImageDesktop: desktopLight,
  backgroundImageMobile: mobileLight,
};

export const templateTheme = {
  theme: {
    dark: dark_theme,
    light: light_theme,
  },
  colors: palette,
  shadows: {
    100: "rgba(157, 162, 235, 0.3)",
  },
  gradients,
};
