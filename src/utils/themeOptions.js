// Dark-only themes with no light or mid-tone backgrounds

const draculaTheme = {
  label: 'Dracula',
  backgroundColor: '#282a36', // very dark blue-gray
  textColor: '#f8f8f2',
  typeBoxText: '#6272a4'
};

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

const obsidianFlowTheme = {
  label: 'Obsidian Flow',
  backgroundColor: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)', // very dark purple/blue gradient
  textColor: '#d6bcfa',
  typeBoxText: '#a78bfa'
};

const deepSpaceTheme = {
  label: 'Deep Space',
  backgroundColor: 'linear-gradient(to right, #1e3c72, #2a5298)', // deep dark blue gradient
  textColor: '#e0e0e0',
  typeBoxText: '#90cdf4'
};

const noirPlasmaTheme = {
  label: 'Noir Plasma',
  backgroundColor: 'linear-gradient(to bottom, #232526, #414345)', // dark gray-black gradient
  textColor: '#f5f5f5',
  typeBoxText: '#9f7aea'
};

const cyberShadowTheme = {
  label: 'Cyber Shadow',
  backgroundColor: 'linear-gradient(120deg, #000000, #434343)', // pure black to dark gray gradient
  textColor: '#00ffcc',
  typeBoxText: '#0affef'
};


// const darkTheme = {
//     label: 'Dark Shadow',
//     // backgroundColor
// }

// Exporting themes
export const themeOptions = [
  { label: 'Dracula', value: draculaTheme },
  { label: 'Gruvbox Dark', value: gruvboxTheme },
  { label: 'Nord', value: nordTheme },
  { label: 'Camo', value: camoTheme },
  { label: 'Tokyo Night', value: tokyoNightTheme },
  { label: 'Midnight Mirage', value: midnightMirageTheme },
  { label: 'Obsidian Flow', value: obsidianFlowTheme },
  { label: 'Deep Space', value: deepSpaceTheme },
  { label: 'Noir Plasma', value: noirPlasmaTheme },
  { label: 'Cyber Shadow', value: cyberShadowTheme }
];
