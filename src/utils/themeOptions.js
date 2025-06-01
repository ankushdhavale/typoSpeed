// Dark-only themes with no light or mid-tone backgrounds


const gruvboxTheme = {
  label: 'Gruvbox Dark',
  backgroundColor: '#282828', // very dark gray-black
  textColor: '#ebdbb2',
  typeBoxText: '#458588'
};

const nordTheme = {
  label: 'Nord',
  backgroundColor: '#2e3440', // dark blue-gray
  textColor: '#d8dee9',
  typeBoxText: '#81a1c1'
};

const camoTheme = {
  label: 'Camo',
  backgroundColor: '#2d2f26', // dark olive/gray
  textColor: '#a0a088',
  typeBoxText: '#7d8266'
};


const tokyoNightTheme = {
  label: 'Tokyo Night',
  backgroundColor: '#1a1b26', // near black dark blue
  textColor: '#c0caf5',
  typeBoxText: '#7aa2f7'
};

const midnightMirageTheme = {
  label: 'Midnight Mirage',
  backgroundColor: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)', // dark gradient blues
  textColor: '#c3dafe',
  typeBoxText: '#718096'
};




// const darkTheme = {
//     label: 'Dark Shadow',
//     // backgroundColor
// }

// Exporting themes
export const themeOptions = [
  { label: 'Gruvbox Dark', value: gruvboxTheme },
  { label: 'Nord', value: nordTheme },
  { label: 'Camo', value: camoTheme },
  { label: 'Tokyo Night', value: tokyoNightTheme },
  { label: 'Midnight Mirage', value: midnightMirageTheme },
];
