type colorStep = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];
export interface ColorScaleItem {
  light: colorStep;
  lightA: colorStep;
  dark: colorStep;
  darkA: colorStep;
}

export interface ColorScales {
  red: ColorScaleItem;
  volcano: ColorScaleItem;
  orange: ColorScaleItem;
  gold: ColorScaleItem;
  yellow: ColorScaleItem;
  lime: ColorScaleItem;
  green: ColorScaleItem;
  cyan: ColorScaleItem;
  blue: ColorScaleItem;
  geekblue: ColorScaleItem;
  purple: ColorScaleItem;
  magenta: ColorScaleItem;
  gray: ColorScaleItem;
  bnw: ColorScaleItem;
}

export const colorScales: ColorScales = {
  red: {
    light: [
      '#ffffff',
      '#fff7f6',
      '#ffeceb',
      '#ffdedc',
      '#ffcdcb',
      '#ffbab8',
      '#ffa4a2',
      '#ff8c8a',
      '#ff6e70',
      '#f2555a',
      '#aa2e35',
      '#660613',
      '#100001',
    ],
    lightA: [
      'rgba(255, 255, 255, 0.01)',
      'rgba(255, 55, 30, 0.04)',
      'rgba(255, 17, 5, 0.08)',
      'rgba(255, 19, 5, 0.14)',
      'rgba(255, 17, 7, 0.21)',
      'rgba(255, 9, 1, 0.28)',
      'rgba(255, 9, 4, 0.37)',
      'rgba(255, 5, 1, 0.46)',
      'rgba(255, 1, 4, 0.57)',
      'rgba(236, 1, 9, 0.67)',
      'rgba(151, 0, 9, 0.82)',
      'rgba(99, 1, 14, 0.98)',
      '#100001',
    ],
    dark: [
      '#100001',
      '#370005',
      '#4f000a',
      '#660613',
      '#7c141d',
      '#932129',
      '#aa2e35',
      '#c13b41',
      '#d9484d',
      '#f2555a',
      '#ff9290',
      '#ffcbc9',
      '#ffffff',
    ],
    darkA: [
      'rgba(229, 0, 14, 0.07)',
      'rgba(250, 0, 23, 0.22)',
      'rgba(255, 0, 32, 0.31)',
      'rgba(255, 15, 47, 0.4)',
      'rgba(253, 41, 59, 0.49)',
      'rgba(253, 57, 71, 0.58)',
      'rgba(254, 69, 79, 0.67)',
      'rgba(254, 78, 86, 0.76)',
      'rgba(255, 85, 91, 0.85)',
      'rgba(255, 89, 95, 0.95)',
      '#ff9290',
      '#ffcbc9',
      '#ffffff',
    ],
  },
  volcano: {
    light: [
      '#ffffff',
      '#fff7f6',
      '#ffece9',
      '#ffded9',
      '#ffcec5',
      '#ffbbaf',
      '#ffa695',
      '#ff8e78',
      '#fb745a',
      '#ec5e41',
      '#a53716',
      '#5d1900',
      '#0c0100',
    ],
    lightA: [
      'rgba(255, 255, 255, 0.01)',
      'rgba(255, 55, 30, 0.04)',
      'rgba(255, 44, 11, 0.09)',
      'rgba(255, 35, 2, 0.15)',
      'rgba(255, 42, 3, 0.23)',
      'rgba(255, 43, 5, 0.32)',
      'rgba(255, 43, 3, 0.42)',
      'rgba(255, 42, 0, 0.53)',
      'rgba(249, 41, 1, 0.65)',
      'rgba(230, 40, 2, 0.75)',
      'rgba(157, 38, 2, 0.92)',
      '#5d1900',
      '#0c0100',
    ],
    dark: [
      '#0c0100',
      '#2f0a00',
      '#451200',
      '#5d1900',
      '#762000',
      '#8e2a07',
      '#a53716',
      '#bc4424',
      '#d45132',
      '#ec5e41',
      '#ff9480',
      '#ffcbc3',
      '#ffffff',
    ],
    darkA: [
      'rgba(240, 20, 0, 0.05)',
      'rgba(247, 53, 0, 0.19)',
      'rgba(246, 64, 0, 0.28)',
      'rgba(251, 68, 0, 0.37)',
      'rgba(251, 68, 0, 0.47)',
      'rgba(254, 75, 12, 0.56)',
      'rgba(254, 85, 34, 0.65)',
      'rgba(254, 92, 49, 0.74)',
      'rgba(255, 98, 60, 0.83)',
      'rgba(254, 101, 70, 0.93)',
      '#ff9480',
      '#ffcbc3',
      '#ffffff',
    ],
  },
  orange: {
    light: [
      '#ffffff',
      '#fff9f8',
      '#fff0ec',
      '#ffe6dd',
      '#ffd9ca',
      '#ffcbb5',
      '#ffbb9c',
      '#ffaa7f',
      '#ff975c',
      '#ff802b',
      '#a75400',
      '#552d00',
      '#080300',
    ],
    lightA: [
      'rgba(255, 255, 255, 0.01)',
      'rgba(255, 55, 22, 0.03)',
      'rgba(255, 67, 17, 0.08)',
      'rgba(255, 76, 12, 0.14)',
      'rgba(255, 74, 3, 0.21)',
      'rgba(255, 76, 0, 0.29)',
      'rgba(255, 81, 1, 0.39)',
      'rgba(255, 88, 4, 0.51)',
      'rgba(255, 93, 0, 0.64)',
      'rgba(255, 102, 0, 0.83)',
      '#a75400',
      '#552d00',
      '#080300',
    ],
    dark: [
      '#080300',
      '#271400',
      '#3d2000',
      '#552d00',
      '#6f3a00',
      '#8a4700',
      '#a75400',
      '#c66100',
      '#e37013',
      '#ff802b',
      '#ffae87',
      '#ffd7c8',
      '#ffffff',
    ],
    darkA: [
      'rgba(200, 75, 0, 0.04)',
      'rgba(244, 125, 0, 0.16)',
      'rgba(254, 133, 0, 0.24)',
      'rgba(250, 132, 0, 0.34)',
      'rgba(252, 132, 0, 0.44)',
      'rgba(251, 129, 0, 0.55)',
      'rgba(253, 127, 0, 0.66)',
      'rgba(254, 124, 0, 0.78)',
      'rgba(255, 126, 21, 0.89)',
      '#ff802b',
      '#ffae87',
      '#ffd7c8',
      '#ffffff',
    ],
  },
  gold: {
    light: [
      '#ffffff',
      '#fffcff',
      '#fff8f2',
      '#fff4e2',
      '#ffefd0',
      '#ffe9bb',
      '#ffe3a4',
      '#ffdb8b',
      '#ffd46d',
      '#ffcb47',
      '#ac8100',
      '#593f00',
      '#070300',
    ],
    lightA: [
      'rgba(255, 255, 255, 0.01)',
      'rgba(255, 105, 255, 0.02)',
      'rgba(255, 138, 38, 0.06)',
      'rgba(255, 163, 13, 0.12)',
      'rgba(255, 171, 8, 0.19)',
      'rgba(255, 174, 3, 0.27)',
      'rgba(255, 177, 2, 0.36)',
      'rgba(255, 177, 3, 0.46)',
      'rgba(255, 181, 3, 0.58)',
      'rgba(255, 184, 3, 0.73)',
      '#ac8100',
      '#593f00',
      '#070300',
    ],
    dark: [
      '#070300',
      '#271a00',
      '#3f2c00',
      '#593f00',
      '#745400',
      '#906a00',
      '#ac8100',
      '#c99811',
      '#e4b12f',
      '#ffcb47',
      '#ffdd90',
      '#ffeecd',
      '#ffffff',
    ],
    darkA: [
      'rgba(233, 100, 0, 0.03)',
      'rgba(244, 163, 0, 0.16)',
      'rgba(252, 176, 0, 0.25)',
      'rgba(254, 180, 0, 0.35)',
      'rgba(252, 183, 0, 0.46)',
      'rgba(253, 186, 0, 0.57)',
      'rgba(253, 190, 0, 0.68)',
      'rgba(254, 192, 22, 0.79)',
      'rgba(253, 197, 52, 0.9)',
      '#ffcb47',
      '#ffdd90',
      '#ffeecd',
      '#ffffff',
    ],
  },
  yellow: {
    light: [
      '#ffffff',
      '#fffeff',
      '#fffcff',
      '#fffbf1',
      '#fffada',
      '#fff9c2',
      '#fff7aa',
      '#fff592',
      '#fff279',
      '#ffef5c',
      '#ab9800',
      '#584a00',
      '#050400',
    ],
    lightA: [
      'rgba(255, 255, 255, 0.01)',
      'rgba(255, 155, 255, 0.01)',
      'rgba(255, 105, 255, 0.02)',
      'rgba(255, 188, 22, 0.06)',
      'rgba(255, 222, 8, 0.15)',
      'rgba(255, 230, 1, 0.24)',
      'rgba(255, 231, 5, 0.34)',
      'rgba(255, 232, 2, 0.43)',
      'rgba(255, 230, 2, 0.53)',
      'rgba(255, 230, 0, 0.64)',
      '#ab9800',
      '#584a00',
      '#050400',
    ],
    dark: [
      '#050400',
      '#251d00',
      '#3e3300',
      '#584a00',
      '#736300',
      '#8e7d00',
      '#ab9800',
      '#c7b426',
      '#e3d142',
      '#ffef5c',
      '#fff594',
      '#fffad3',
      '#ffffff',
    ],
    darkA: [
      'rgba(250, 200, 0, 0.02)',
      'rgba(247, 193, 0, 0.15)',
      'rgba(248, 204, 0, 0.25)',
      'rgba(251, 211, 0, 0.35)',
      'rgba(250, 215, 0, 0.46)',
      'rgba(254, 223, 0, 0.56)',
      'rgba(255, 227, 0, 0.67)',
      'rgba(255, 231, 49, 0.78)',
      'rgba(255, 235, 74, 0.89)',
      '#ffef5c',
      '#fff594',
      '#fffad3',
      '#ffffff',
    ],
  },
  lime: {
    light: [
      '#ffffff',
      '#feffeb',
      '#f9ffd8',
      '#f2ffc1',
      '#ebfdaf',
      '#e4fc9b',
      '#ddf987',
      '#d5f773',
      '#cdf35c',
      '#c4f042',
      '#769d00',
      '#374f00',
      '#020400',
    ],
    lightA: [
      'rgba(255, 255, 255, 0.01)',
      'rgba(242, 255, 5, 0.08)',
      'rgba(218, 255, 11, 0.16)',
      'rgba(203, 255, 7, 0.25)',
      'rgba(193, 249, 5, 0.32)',
      'rgba(187, 247, 5, 0.4)',
      'rgba(183, 242, 0, 0.47)',
      'rgba(179, 240, 0, 0.55)',
      'rgba(177, 236, 0, 0.64)',
      'rgba(175, 235, 0, 0.74)',
      '#769d00',
      '#374f00',
      '#020400',
    ],
    dark: [
      '#020400',
      '#142100',
      '#253700',
      '#374f00',
      '#4b6800',
      '#608200',
      '#769d00',
      '#8fb81b',
      '#a9d42f',
      '#c4f042',
      '#daf685',
      '#eefbbe',
      '#ffffff',
    ],
    darkA: [
      'rgba(100, 200, 0, 0.02)',
      'rgba(154, 254, 0, 0.13)',
      'rgba(168, 250, 0, 0.22)',
      'rgba(177, 255, 0, 0.31)',
      'rgba(183, 254, 0, 0.41)',
      'rgba(188, 255, 0, 0.51)',
      'rgba(190, 253, 0, 0.62)',
      'rgba(196, 252, 37, 0.73)',
      'rgba(204, 255, 57, 0.83)',
      'rgba(209, 255, 70, 0.94)',
      'rgba(225, 254, 137, 0.97)',
      'rgba(240, 254, 192, 0.99)',
      '#ffffff',
    ],
  },
  green: {
    light: [
      '#ffffff',
      '#f2fdef',
      '#e3f8e3',
      '#d2f1d6',
      '#bfe9c8',
      '#abe0b9',
      '#94d5a9',
      '#7cca99',
      '#60be89',
      '#3cb179',
      '#007653',
      '#003e2e',
      '#000503',
    ],
    lightA: [
      'rgba(255, 255, 255, 0.01)',
      'rgba(69, 226, 26, 0.07)',
      'rgba(0, 191, 0, 0.11)',
      'rgba(5, 177, 27, 0.18)',
      'rgba(9, 170, 43, 0.26)',
      'rgba(0, 161, 43, 0.33)',
      'rgba(0, 155, 50, 0.42)',
      'rgba(3, 153, 59, 0.52)',
      'rgba(3, 152, 68, 0.63)',
      'rgba(2, 154, 81, 0.77)',
      '#007653',
      '#003e2e',
      '#000503',
    ],
    dark: [
      '#000503',
      '#001c15',
      '#002c21',
      '#003e2e',
      '#004f3b',
      '#006247',
      '#007653',
      '#008a5f',
      '#1a9e6b',
      '#3cb179',
      '#8bcba0',
      '#c7e5cb',
      '#ffffff',
    ],
    darkA: [
      'rgba(0, 250, 150, 0.02)',
      'rgba(0, 255, 191, 0.11)',
      'rgba(0, 244, 183, 0.18)',
      'rgba(0, 248, 184, 0.25)',
      'rgba(0, 255, 190, 0.31)',
      'rgba(0, 251, 182, 0.39)',
      'rgba(0, 251, 177, 0.47)',
      'rgba(0, 251, 173, 0.55)',
      'rgba(42, 255, 173, 0.62)',
      'rgba(86, 253, 173, 0.7)',
      'rgba(174, 254, 200, 0.8)',
      'rgba(221, 254, 226, 0.9)',
      '#ffffff',
    ],
  },
  cyan: {
    light: [
      '#ffffff',
      '#f9fffb',
      '#effff8',
      '#e3fff4',
      '#d8fef0',
      '#ccfcec',
      '#c0fae8',
      '#b3f8e3',
      '#a5f6de',
      '#95f3d9',
      '#2fa28a',
      '#005245',
      '#000503',
    ],
    lightA: [
      'rgba(255, 255, 255, 0.01)',
      'rgba(55, 255, 122, 0.03)',
      'rgba(26, 255, 155, 0.07)',
      'rgba(0, 255, 155, 0.11)',
      'rgba(11, 249, 161, 0.16)',
      'rgba(0, 240, 160, 0.2)',
      'rgba(3, 235, 163, 0.25)',
      'rgba(2, 232, 162, 0.3)',
      'rgba(5, 230, 163, 0.36)',
      'rgba(3, 226, 165, 0.42)',
      'rgba(1, 142, 112, 0.82)',
      '#005245',
      '#000503',
    ],
    dark: [
      '#000503',
      '#00221c',
      '#003930',
      '#005245',
      '#006c5b',
      '#008772',
      '#2fa28a',
      '#55bca4',
      '#75d7be',
      '#95f3d9',
      '#bdf7e4',
      '#dffcf0',
      '#ffffff',
    ],
    darkA: [
      'rgba(0, 250, 150, 0.02)',
      'rgba(0, 243, 200, 0.14)',
      'rgba(0, 248, 209, 0.23)',
      'rgba(0, 248, 209, 0.33)',
      'rgba(0, 251, 212, 0.43)',
      'rgba(0, 255, 215, 0.53)',
      'rgba(73, 253, 216, 0.64)',
      'rgba(115, 254, 222, 0.74)',
      'rgba(138, 253, 224, 0.85)',
      'rgba(155, 253, 226, 0.96)',
      'rgba(195, 255, 235, 0.97)',
      'rgba(225, 255, 242, 0.99)',
      '#ffffff',
    ],
  },
  blue: {
    light: [
      '#ffffff',
      '#fbfeff',
      '#f4fcff',
      '#eafaff',
      '#dff7ff',
      '#d3f5ff',
      '#c4f2ff',
      '#b4efff',
      '#a1ecff',
      '#8ae8ff',
      '#159ab0',
      '#004e59',
      '#000506',
    ],
    lightA: [
      'rgba(255, 255, 255, 0.01)',
      'rgba(55, 205, 255, 0.02)',
      'rgba(35, 195, 255, 0.05)',
      'rgba(22, 199, 255, 0.09)',
      'rgba(9, 193, 255, 0.13)',
      'rgba(11, 199, 255, 0.18)',
      'rgba(9, 201, 255, 0.24)',
      'rgba(5, 202, 255, 0.3)',
      'rgba(1, 204, 255, 0.37)',
      'rgba(1, 205, 255, 0.46)',
      'rgba(1, 145, 169, 0.92)',
      '#004e59',
      '#000506',
    ],
    dark: [
      '#000506',
      '#002126',
      '#00363f',
      '#004e59',
      '#006675',
      '#008093',
      '#159ab0',
      '#47b3ca',
      '#6acde4',
      '#8ae8ff',
      '#b8f0ff',
      '#def7ff',
      '#ffffff',
    ],
    darkA: [
      'rgba(0, 167, 200, 0.03)',
      'rgba(0, 220, 253, 0.15)',
      'rgba(0, 216, 252, 0.25)',
      'rgba(0, 223, 254, 0.35)',
      'rgba(0, 222, 254, 0.46)',
      'rgba(0, 221, 253, 0.58)',
      'rgba(30, 223, 255, 0.69)',
      'rgba(89, 224, 252, 0.8)',
      'rgba(118, 228, 253, 0.9)',
      '#8ae8ff',
      '#b8f0ff',
      '#def7ff',
      '#ffffff',
    ],
  },
  geekblue: {
    light: [
      '#ffffff',
      '#f8faff',
      '#eaf3ff',
      '#daeaff',
      '#c7e0ff',
      '#b1d5ff',
      '#9ac9ff',
      '#7fbcff',
      '#60aeff',
      '#369eff',
      '#0264c1',
      '#003176',
      '#000216',
    ],
    lightA: [
      'rgba(255, 255, 255, 0.01)',
      'rgba(22, 88, 255, 0.03)',
      'rgba(22, 122, 255, 0.09)',
      'rgba(8, 115, 255, 0.15)',
      'rgba(0, 114, 255, 0.22)',
      'rgba(3, 120, 255, 0.31)',
      'rgba(3, 120, 255, 0.4)',
      'rgba(4, 124, 255, 0.51)',
      'rgba(3, 126, 255, 0.63)',
      'rgba(1, 132, 255, 0.79)',
      '#0264c1',
      '#003176',
      '#000216',
    ],
    dark: [
      '#000216',
      '#001343',
      '#00225c',
      '#003176',
      '#00418f',
      '#0052a8',
      '#0264c1',
      '#1877d5',
      '#288aea',
      '#369eff',
      '#88bffb',
      '#c5dffd',
      '#ffffff',
    ],
    darkA: [
      'rgba(0, 22, 244, 0.09)',
      'rgba(0, 70, 248, 0.27)',
      'rgba(0, 92, 249, 0.37)',
      'rgba(0, 104, 251, 0.47)',
      'rgba(0, 116, 255, 0.56)',
      'rgba(0, 124, 255, 0.66)',
      'rgba(3, 132, 254, 0.76)',
      'rgba(29, 142, 254, 0.84)',
      'rgba(43, 150, 254, 0.92)',
      '#369eff',
      'rgba(137, 193, 254, 0.99)',
      '#c5dffd',
      '#ffffff',
    ],
  },
  purple: {
    light: [
      '#ffffff',
      '#fff5fe',
      '#fae8ff',
      '#f2d8ff',
      '#e8c7fb',
      '#dbb4f5',
      '#cea0ed',
      '#be8be5',
      '#ae74dc',
      '#9d5bd2',
      '#6c349f',
      '#400771',
      '#080017',
    ],
    lightA: [
      'rgba(255, 255, 255, 0.01)',
      'rgba(255, 5, 230, 0.04)',
      'rgba(205, 25, 255, 0.1)',
      'rgba(174, 11, 255, 0.16)',
      'rgba(150, 0, 237, 0.22)',
      'rgba(135, 5, 222, 0.3)',
      'rgba(126, 5, 208, 0.38)',
      'rgba(114, 3, 198, 0.46)',
      'rgba(108, 2, 191, 0.55)',
      'rgba(104, 3, 186, 0.65)',
      'rgba(71, 1, 135, 0.8)',
      'rgba(60, 2, 110, 0.98)',
      '#080017',
    ],
    dark: [
      '#080017',
      '#210043',
      '#31005c',
      '#400771',
      '#4e1980',
      '#5d278f',
      '#6c349f',
      '#7c41b0',
      '#8c4ec1',
      '#9d5bd2',
      '#bf92df',
      '#e2c7ef',
      '#ffffff',
    ],
    darkA: [
      'rgba(80, 0, 230, 0.1)',
      'rgba(122, 0, 248, 0.27)',
      'rgba(132, 0, 249, 0.37)',
      'rgba(142, 16, 251, 0.45)',
      'rgba(153, 49, 251, 0.51)',
      'rgba(166, 70, 255, 0.56)',
      'rgba(171, 83, 252, 0.63)',
      'rgba(180, 94, 255, 0.69)',
      'rgba(184, 103, 254, 0.76)',
      'rgba(189, 110, 253, 0.83)',
      'rgba(217, 166, 253, 0.88)',
      'rgba(240, 212, 254, 0.94)',
      '#ffffff',
    ],
  },
  magenta: {
    light: [
      '#ffffff',
      '#fff7f9',
      '#ffeaf4',
      '#ffdaee',
      '#ffc7e7',
      '#ffb2df',
      '#ff99d6',
      '#f980ca',
      '#ef67ba',
      '#e34ba9',
      '#a32466',
      '#63002d',
      '#100002',
    ],
    lightA: [
      'rgba(255, 255, 255, 0.01)',
      'rgba(255, 55, 105, 0.04)',
      'rgba(255, 22, 133, 0.09)',
      'rgba(255, 8, 142, 0.15)',
      'rgba(255, 0, 146, 0.22)',
      'rgba(255, 7, 152, 0.31)',
      'rgba(255, 0, 153, 0.4)',
      'rgba(243, 1, 149, 0.5)',
      'rgba(228, 2, 140, 0.6)',
      'rgba(216, 1, 134, 0.71)',
      'rgba(148, 0, 77, 0.86)',
      '#63002d',
      '#100002',
    ],
    dark: [
      '#100002',
      '#350011',
      '#4b001e',
      '#63002d',
      '#79093f',
      '#8e1752',
      '#a32466',
      '#b8317b',
      '#ce3e91',
      '#e34ba9',
      '#f38bcb',
      '#fec5e8',
      '#ffffff',
    ],
    darkA: [
      'rgba(229, 0, 29, 0.07)',
      'rgba(252, 0, 81, 0.21)',
      'rgba(250, 0, 100, 0.3)',
      'rgba(254, 0, 115, 0.39)',
      'rgba(252, 19, 131, 0.48)',
      'rgba(254, 41, 146, 0.56)',
      'rgba(255, 56, 159, 0.64)',
      'rgba(252, 67, 168, 0.73)',
      'rgba(254, 77, 179, 0.81)',
      'rgba(255, 84, 190, 0.89)',
      'rgba(253, 145, 211, 0.96)',
      '#fec5e8',
      '#ffffff',
    ],
  },
  gray: {
    light: [
      '#ffffff',
      '#f8f8f8',
      '#eeeeee',
      '#e3e3e3',
      '#dddddd',
      '#cccccc',
      '#bbbbbb',
      '#aaaaaa',
      '#999999',
      '#888888',
      '#666666',
      '#333333',
      '#080808',
    ],
    lightA: [
      'rgba(0, 0, 0, 0.02)',
      'rgba(0, 0, 0, 0.04)',
      'rgba(0, 0, 0, 0.08)',
      'rgba(0, 0, 0, 0.12)',
      'rgba(0, 0, 0, 0.18)',
      'rgba(0, 0, 0, 0.24)',
      'rgba(0, 0, 0, 0.32)',
      'rgba(0, 0, 0, 0.38)',
      'rgba(0, 0, 0, 0.44)',
      'rgba(0, 0, 0, 0.5)',
      'rgba(0, 0, 0, 0.68)',
      'rgba(0, 0, 0, 0.84)',
      'rgba(0, 0, 0, 0.98)',
    ],
    dark: [
      '#000000',
      '#111111',
      '#222222',
      '#2d2d2d',
      '#333333',
      '#444444',
      '#555555',
      '#666666',
      '#6f6f6f',
      '#777777',
      '#aaaaaa',
      '#dddddd',
      '#ffffff',
    ],
    darkA: [
      'rgba(255, 255, 255, 0.02)',
      'rgba(255, 255, 255, 0.06)',
      'rgba(255, 255, 255, 0.10)',
      'rgba(255, 255, 255, 0.16)',
      'rgba(255, 255, 255, 0.24)',
      'rgba(255, 255, 255, 0.28)',
      'rgba(255, 255, 255, 0.32)',
      'rgba(255, 255, 255, 0.38)',
      'rgba(255, 255, 255, 0.44)',
      'rgba(255, 255, 255, 0.5)',
      'rgba(255, 255, 255, 0.66)',
      'rgba(255, 255, 255, 0.84)',
      '#ffffff',
    ],
  },
  bnw: {
    light: [
      '#ffffff',
      '#f5f5f5',
      '#eeeeee',
      '#cccccc',
      '#aaaaaa',
      '#888888',
      '#666666',
      '#444444',
      '#333333',
      '#222222',
      '#111111',
      '#111111',
      '#111111',
    ],
    lightA: [
      'rgba(0, 0, 0, 0.02)',
      'rgba(0, 0, 0, 0.08)',
      'rgba(0, 0, 0, 0.16)',
      'rgba(0, 0, 0, 0.22)',
      'rgba(0, 0, 0, 0.36)',
      'rgba(0, 0, 0, 0.48)',
      'rgba(0, 0, 0, 0.6)',
      'rgba(0, 0, 0, 0.72)',
      'rgba(0, 0, 0, 0.84)',
      'rgba(0, 0, 0, 0.88)',
      'rgba(0, 0, 0, 0.92)',
      'rgba(0, 0, 0, 0.96)',
      'rgba(0, 0, 0, 0.98)',
    ],
    dark: [
      '#000000',
      '#111111',
      '#333333',
      '#555555',
      '#666666',
      '#888888',
      '#aaaaaa',
      '#cccccc',
      '#dddddd',
      '#eeeeee',
      '#ffffff',
      '#ffffff',
      '#ffffff',
    ],
    darkA: [
      'rgba(255, 255, 255, 0.02)',
      'rgba(255, 255, 255, 0.08)',
      'rgba(255, 255, 255, 0.16)',
      'rgba(255, 255, 255, 0.22)',
      'rgba(255, 255, 255, 0.36)',
      'rgba(255, 255, 255, 0.48)',
      'rgba(255, 255, 255, 0.6)',
      'rgba(255, 255, 255, 0.72)',
      'rgba(255, 255, 255, 0.84)',
      'rgba(255, 255, 255, 0.88)',
      'rgba(255, 255, 255, 0.92)',
      'rgba(255, 255, 255, 0.96)',
      'rgba(255, 255, 255, 0.98)',
    ],
  },
};
