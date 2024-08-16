import IconMapping from "./IconMapping";
import TypeMapping from "./TypeMapping";

export function getIconComponent(iconName) {
  const IconComponent = IconMapping[iconName.toLowerCase().replaceAll(" ", "")];
  if (IconComponent) {
    return IconComponent;
  }
  return IconMapping["link"];
}

export function getTypeStyle(typeName) {
  const typeStyle = TypeMapping[typeName.toLowerCase().replaceAll(" ", "")];
  if (typeStyle) {
    return typeStyle;
  }
  return TypeMapping["normal"];
}
