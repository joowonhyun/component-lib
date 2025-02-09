import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { colors, space, fontSize, fontWeight, borderRadius } from "@/styles";

const responsiveProperties = defineProperties({
  conditions: {
    mobile: {},
    desktop: { "@media": "screen and (min-width: 1040px)" },
  },
  defaultCondition: "mobile",
  properties: {
    position: ["static", "relative", "absolute", "fixed", "sticky"],
    display: ["none", "flex", "block", "inline"],
    flexDirection: ["row", "column"],
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    borderRadius: borderRadius,
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
    gap: space,
    flexWrap: ["nowrap", "wrap"],
    fontSize: fontSize,
    fontWeight: fontWeight,
    width: space,
    height: space,
    maxWidth: {
      full: "1040px",
    },
    border: {
      none: "none",
      solid: "1px solid",
    },
    borderColor: colors,
  },
  shorthands: {
    padding: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    paddingX: ["paddingLeft", "paddingRight"],
    paddingY: ["paddingTop", "paddingBottom"],
    margin: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    marginX: ["marginLeft", "marginRight"],
    marginY: ["marginTop", "marginBottom"],
    placeItems: ["justifyContent", "alignItems"],
  },
});

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { "@media": "(prefers-color-scheme: dark)" },
  },
  defaultCondition: "lightMode",
  properties: {
    color: colors,
    background: colors,
  },
});

export const sprinkles = createSprinkles(responsiveProperties, colorProperties);
export type Sprinkles = Parameters<typeof sprinkles>[0];
