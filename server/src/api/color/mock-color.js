import casual from 'casual';

export default function colorMock () {
  return {
    colorName:     casual.color_name,
    safeColorName: casual.safe_color_name,
    rgbHex:        casual.rgb_hex,
    rgbArray:      casual.rgb_array
  };
};
