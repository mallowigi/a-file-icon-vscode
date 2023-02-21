import i18next from 'i18next';
import { QuickPickItemKind } from 'vscode';

import type { Theme } from 'src/@types/config';

type ThemeColorQuickPickItem = {
  id?: string;
  name?: string;
  kind: QuickPickItemKind;
  order: number;
  color?: string;
  description?: string;
}

export const themes: Theme[] = [
  {
    accent: '#009688',
    attributes: '#ffcb6b',
    background: '#263238',
    blue: '#82aaff',
    border: '#2a373e',
    button: '#2e3c43',
    className: 'oceanic',
    classes: '#ffcb6b',
    comments: '#546e7a',
    contrast: '#1e272c',
    cyan: '#89ddff',
    dark: true,
    desc: 'An oceanic blue flat theme',
    disabled: '#415967',
    error: '#ff5370',
    excluded: '#2e3c43',
    foreground: '#b0bec5',
    functions: '#82aaff',
    gray: '#546e7a',
    green: '#c3e88d',
    hl: '#425b67',
    id: 'mt.oceanic',
    keywords: '#c792ea',
    links: '#80cbc4',
    name: 'Material Oceanic',
    name2: 'Material Oceanic Contrast',
    notif: '#1e272c',
    numbers: '#f78c6c',
    operators: '#89ddff',
    orange: '#f78c6c',
    parameters: '#f78c6c',
    purple: '#c792ea',
    red: '#f07178',
    scheme: 'Material Oceanic',
    second: '#32424a',
    selectBg: '#546e7a',
    selectFg: '#fff',
    selectFg2: '#fff',
    strings: '#c3e88d',
    table: '#314549',
    tags: '#f07178',
    text: '#607d8b',
    tree: '#30454d',
    vars: '#eff',
    white: '#eff',
    yellow: '#ffcb6b',
  },
  {
    accent: '#ff9800',
    attributes: '#ffcb6b',
    background: '#212121',
    blue: '#82aaff',
    border: '#292929',
    button: '#2a2a2a',
    className: 'darker',
    classes: '#ffcb6b',
    comments: '#616161',
    contrast: '#1a1a1a',
    cyan: '#89ddff',
    dark: true,
    desc: 'A pitch-black flat theme',
    disabled: '#474747',
    error: '#ff5370',
    excluded: '#323232',
    foreground: '#b0bec5',
    functions: '#82aaff',
    gray: '#616161',
    green: '#c3e88d',
    hl: '#3f3f3f',
    id: 'mt.darker',
    keywords: '#c792ea',
    links: '#80cbc4',
    name: 'Material Darker',
    name2: 'Material Darker Contrast',
    notif: '#1a1a1a',
    numbers: '#f78c6c',
    operators: '#89ddff',
    orange: '#f78c6c',
    parameters: '#f78c6c',
    purple: '#c792ea',
    red: '#f07178',
    scheme: 'Material Darker',
    second: '#292929',
    selectBg: '#404040',
    selectFg: '#fff',
    selectFg2: '#fff',
    strings: '#c3e88d',
    table: '#323232',
    tags: '#f07178',
    text: '#727272',
    tree: '#2d2d2d',
    vars: '#eff',
    white: '#eff',
    yellow: '#ffcb6b',
  },
  {
    accent: '#00bcd4',
    attributes: '#f6a434',
    background: '#fafafa',
    blue: '#6182b8',
    border: '#d3e1e8',
    button: '#f3f4f5',
    className: 'lighter',
    classes: '#f6a434',
    comments: '#aabfc9',
    contrast: '#eee',
    cyan: '#39adb5',
    dark: false,
    desc: 'A bright light flat theme',
    disabled: '#d2d4d5',
    error: '#e53935',
    excluded: '#d3e1e8',
    foreground: '#546e7a',
    functions: '#6182b8',
    gray: '#aabfc9',
    green: '#91b859',
    hl: '#e7e7e8',
    id: 'mt.lighter',
    keywords: '#7c4dff',
    links: '#39adb5',
    name: 'Material Lighter',
    name2: 'Material Lighter Contrast',
    notif: '#eae8e8',
    numbers: '#f76d47',
    operators: '#39adb5',
    orange: '#f76d47',
    parameters: '#f76d47',
    purple: '#7c4dff',
    red: '#e53935',
    scheme: 'Material Lighter',
    second: '#fff',
    selectBg: '#ccd7da',
    selectFg: '#546e7a',
    selectFg2: '#272727',
    strings: '#91b859',
    table: '#e7e7e8',
    tags: '#e53935',
    text: '#94a7b0',
    tree: '#d7eeec',
    vars: '#272727',
    white: '#272727',
    yellow: '#f6a434',
  },
  {
    accent: '#ab47bc',
    attributes: '#ffcb6b',
    background: '#292d3e',
    blue: '#82aaff',
    border: '#323147',
    button: '#303348',
    className: 'palenight',
    classes: '#ffcb6b',
    comments: '#676e95',
    contrast: '#202331',
    cyan: '#89ddff',
    dark: true,
    desc: 'A purplish flat theme',
    disabled: '#515772',
    error: '#ff5370',
    excluded: '#2f2e43',
    foreground: '#a6accd',
    functions: '#82aaff',
    gray: '#676e95',
    green: '#c3e88d',
    hl: '#444267',
    id: 'mt.palenight',
    keywords: '#c792ea',
    links: '#80cbc4',
    name: 'Material Palenight',
    name2: 'Material Palenight Contrast',
    notif: '#202331',
    numbers: '#f78c6c',
    operators: '#89ddff',
    orange: '#f78c6c',
    parameters: '#f78c6c',
    purple: '#c792ea',
    red: '#f07178',
    scheme: 'Material Palenight',
    second: '#34324a',
    selectBg: '#444267',
    selectFg: '#fff',
    selectFg2: '#fff',
    strings: '#c3e88d',
    table: '#414863',
    tags: '#f07178',
    text: '#676e95',
    tree: '#3b415b',
    vars: '#eff',
    white: '#eff',
    yellow: '#ffcb6b',
  },
  {
    accent: '#84ffff',
    attributes: '#ffcb6b',
    background: '#0f111a',
    blue: '#82aaff',
    border: '#0f111a',
    button: '#191a21',
    className: 'deepocean',
    classes: '#ffcb6b',
    comments: '#717cb4',
    contrast: '#090b10',
    cyan: '#89ddff',
    dark: true,
    desc: 'A deep sea black flat theme',
    disabled: '#464b5d',
    error: '#ff5370',
    excluded: '#292d3e',
    foreground: '#8f93a2',
    functions: '#82aaff',
    gray: '#717cb4',
    green: '#c3e88d',
    hl: '#1f2233',
    id: 'mt.deepocean',
    keywords: '#c792ea',
    links: '#80cbc4',
    name: 'Material Deep Ocean',
    name2: 'Material Deep Ocean Contrast',
    notif: '#090b10',
    numbers: '#f78c6c',
    operators: '#89ddff',
    orange: '#f78c6c',
    parameters: '#f78c6c',
    purple: '#c792ea',
    red: '#f07178',
    scheme: 'Material Deep Ocean',
    second: '#181a1f',
    selectBg: '#222533',
    selectFg: '#fff',
    selectFg2: '#fff',
    strings: '#c3e88d',
    table: '#1a1c25',
    tags: '#f07178',
    text: '#4b526d',
    tree: '#212639',
    vars: '#eff',
    white: '#eff',
    yellow: '#ffcb6b',
  },
  {
    accent: '#ffcc80',
    attributes: '#ffcb6b',
    background: '#002626',
    blue: '#82aaff',
    border: '#003838',
    button: '#003535',
    className: 'forest',
    classes: '#ffcb6b',
    comments: '#005454',
    contrast: '#002020',
    cyan: '#89ddff',
    dark: true,
    desc: 'A forests and trees based flat theme',
    disabled: '#005454',
    error: '#ff5370',
    excluded: '#113711',
    foreground: '#b2c2b0',
    functions: '#82aaff',
    gray: '#005454',
    green: '#c3e88d',
    hl: '#003f3f',
    id: 'mt.forest',
    keywords: '#c792ea',
    links: '#80cbc4',
    name: 'Material Forest',
    name2: 'Material Forest Contrast',
    notif: '#002020',
    numbers: '#f78c6c',
    operators: '#89ddff',
    orange: '#f78c6c',
    parameters: '#f78c6c',
    purple: '#c792ea',
    red: '#f07178',
    scheme: 'Material Forest',
    second: '#002e2e',
    selectBg: '#1e611e',
    selectFg: '#fff',
    selectFg2: '#fff',
    strings: '#c3e88d',
    table: '#104110',
    tags: '#f07178',
    text: '#49694d',
    tree: '#004724',
    vars: '#eff',
    white: '#eff',
    yellow: '#ffcb6b',
  },
  {
    accent: '#00c6e0',
    attributes: '#f6a434',
    background: '#f1fffe',
    blue: '#6182b8',
    border: '#d0edf1',
    button: '#c9eef2',
    className: 'skyblue',
    classes: '#f6a434',
    comments: '#01579b',
    contrast: '#e4f2f2',
    cyan: '#39adb5',
    dark: false,
    desc: 'A clear and light blue flat theme',
    disabled: '#87a7ab',
    error: '#e53935',
    excluded: '#c1def0',
    foreground: '#005761',
    functions: '#6182b8',
    gray: '#01579b',
    green: '#91b859',
    hl: '#d1eafa',
    id: 'mt.skyblue',
    keywords: '#7c4dff',
    links: '#39adb5',
    name: 'Material Sky Blue',
    name2: 'Material Sky Blue Contrast',
    notif: '#e0eff1',
    numbers: '#f76d47',
    operators: '#39adb5',
    orange: '#f76d47',
    parameters: '#f76d47',
    purple: '#7c4dff',
    red: '#e53935',
    scheme: 'Material Sky Blue',
    second: '#e7f2f3',
    selectBg: '#ade2eb',
    selectFg: '#272727',
    selectFg2: '#272727',
    strings: '#91b859',
    table: '#caedf2',
    tags: '#e53935',
    text: '#01579b',
    tree: '#ccf1f4',
    vars: '#272727',
    white: '#272727',
    yellow: '#f6a434',
  },
  {
    accent: '#53c7f0',
    attributes: '#f6a434',
    background: '#fff8ed',
    blue: '#6182b8',
    border: '#d9d4c7',
    button: '#f6d7b0',
    className: 'sandybeach',
    classes: '#f6a434',
    comments: '#888477',
    contrast: '#fff3db',
    cyan: '#39adb5',
    dark: false,
    desc: 'A sandy based flat theme',
    disabled: '#b8b6a5',
    error: '#e53935',
    excluded: '#f6d7b0',
    foreground: '#546e7a',
    functions: '#6182b8',
    gray: '#888477',
    green: '#91b859',
    hl: '#faf0de',
    id: 'mt.sanybeach',
    keywords: '#7c4dff',
    links: '#39adb5',
    name: 'Material Sandy Beach',
    name2: 'Material Sandy Beach Contrast',
    notif: '#f6d7b0',
    numbers: '#f76d47',
    operators: '#39adb5',
    orange: '#f76d47',
    parameters: '#f76d47',
    purple: '#7c4dff',
    red: '#e53935',
    scheme: 'Material Sandy Beach',
    second: '#f6edda',
    selectBg: '#e7c496',
    selectFg: '#272727',
    selectFg2: '#272727',
    strings: '#91b859',
    table: '#f0e2c2',
    tags: '#e53935',
    text: '#888477',
    tree: '#f7ddbd',
    vars: '#272727',
    white: '#272727',
    yellow: '#f6a434',
  },
  {
    accent: '#00bcd4',
    attributes: '#ffcb6b',
    background: '#390000',
    blue: '#82aaff',
    border: '#400000',
    button: '#700000',
    className: 'volcano',
    classes: '#ffcb6b',
    comments: '#7f6451',
    contrast: '#300000',
    cyan: '#89ddff',
    dark: true,
    desc: 'A rock and fiery based theme',
    disabled: '#7f3c3c',
    error: '#ff5370',
    excluded: '#622',
    foreground: '#ffeaea',
    functions: '#82aaff',
    gray: '#7f6451',
    green: '#c3e88d',
    hl: '#500',
    id: 'mt.volcano',
    keywords: '#c792ea',
    links: '#80cbc4',
    name: 'Material Volcano',
    name2: 'Material Volcano Contrast',
    notif: '#300a0a',
    numbers: '#f78c6c',
    operators: '#89ddff',
    orange: '#f78c6c',
    parameters: '#f78c6c',
    purple: '#c792ea',
    red: '#f07178',
    scheme: 'Material Volcano',
    second: '#300',
    selectBg: '#750000',
    selectFg: '#fff',
    selectFg2: '#fff',
    strings: '#c3e88d',
    table: '#400',
    tags: '#f07178',
    text: '#ffd0aa',
    tree: '#4c0000',
    vars: '#eff',
    white: '#eff',
    yellow: '#ffcb6b',
  },
  {
    accent: '#ffd866',
    attributes: '#78dce8',
    background: '#2d2a2e',
    blue: '#78dce8',
    border: '#2d2a2e',
    button: '#403e41',
    className: 'monokai',
    classes: '#78dce8',
    comments: '#727072',
    contrast: '#221f22',
    cyan: '#78dce8',
    dark: true,
    desc: 'Theme based on the Monokai Pro Theme',
    disabled: '#5b595c',
    error: '#f65f87',
    excluded: '#3a3a3c',
    foreground: '#fcfcfa',
    functions: '#a9dc76',
    gray: '#727072',
    green: '#a9dc76',
    hl: '#5b595c',
    id: 'monokai',
    keywords: '#ff6188',
    links: '#78dce8',
    name: 'Monokai Pro',
    name2: 'Monokai Pro Contrast',
    notif: '#363437',
    numbers: '#ab9df2',
    operators: '#ff6188',
    orange: '#f59762',
    parameters: '#f59762',
    purple: '#ab9df2',
    red: '#ff6188',
    scheme: 'Monokai Pro',
    second: '#403e41',
    selectBg: '#6e6c6f',
    selectFg: '#fff',
    selectFg2: '#ffd866',
    strings: '#ffd866',
    table: '#4a474b',
    tags: '#ff6188',
    text: '#939293',
    tree: '#403e41',
    vars: '#fcfcfa',
    white: '#fcfcfa',
    yellow: '#ffd866',
  },
  {
    accent: '#ff79c5',
    attributes: '#8aff80',
    background: '#282a36',
    blue: '#79cbdc',
    border: '#21222c',
    button: '#393c4b',
    className: 'dracula',
    classes: '#8aff80',
    comments: '#6272a4',
    contrast: '#191a21',
    cyan: '#80ffea',
    dark: true,
    desc: 'Theme based on the Dracula Theme',
    disabled: '#6272a4',
    error: '#f55',
    excluded: '#313341',
    foreground: '#f8f8f2',
    functions: '#8aff80',
    gray: '#6272a4',
    green: '#8aff80',
    hl: '#44475a',
    id: 'dracula',
    keywords: '#ff79c5',
    links: '#feff80',
    name: 'Dracula',
    name2: 'Dracula Contrast',
    notif: '#1d2228',
    numbers: '#9580ff',
    operators: '#ff79c5',
    orange: '#f89580',
    parameters: '#f89580',
    purple: '#9580ff',
    red: '#ff79c5',
    scheme: 'Dracula',
    second: '#282a36',
    selectBg: '#44475a',
    selectFg: '#8be9fd',
    selectFg2: '#fff',
    strings: '#feff80',
    table: '#44475a',
    tags: '#ff79c5',
    text: '#6272a4',
    tree: '#2f3342',
    vars: '#f8f8f2',
    white: '#f8f8f2',
    yellow: '#feff80',
  },
  {
    accent: '#79cb60',
    attributes: '#6f42c1',
    background: '#f7f8fa',
    blue: '#005cc5',
    border: '#dfe1e4',
    button: '#edf1f5',
    className: 'github',
    classes: '#6f42c1',
    comments: '#6a737d',
    contrast: '#fafbfc',
    cyan: '#032f62',
    dark: false,
    desc: 'Theme based on the GitHub UI',
    disabled: '#9ba0a3',
    error: '#d25252',
    excluded: '#dcdcdc',
    foreground: '#5b6168',
    functions: '#6f42c1',
    gray: '#6a737d',
    green: '#22863a',
    hl: '#cce5ff',
    id: 'github',
    keywords: '#d73a49',
    links: '#005cc5',
    name: 'GitHub',
    name2: 'GitHub Contrast',
    notif: '#dfecfe',
    numbers: '#005cc5',
    operators: '#d73a49',
    orange: '#e36209',
    parameters: '#e36209',
    purple: '#6f42c1',
    red: '#d73a49',
    scheme: 'GitHub',
    second: '#f3f3f3',
    selectBg: '#c6e5ff',
    selectFg: '#111',
    selectFg2: '#111',
    strings: '#032f62',
    table: '#cce5ff',
    tags: '#22863a',
    text: '#292d31',
    tree: '#ebedf0',
    vars: '#24292e',
    white: '#24292e',
    yellow: '#e36209',
  },
  {
    accent: '#f9826c',
    attributes: '#b392f0',
    background: '#24292e',
    blue: '#79b8ff',
    border: '#1b1f23',
    button: '#39414a',
    className: 'github_dark',
    classes: '#b392f0',
    comments: '#959da5',
    contrast: '#1e2428',
    cyan: '#79b8ff',
    dark: true,
    desc: 'Theme based on the GitHub Dark UI',
    disabled: '#6a737d',
    error: '#f97583',
    excluded: '#2f363d',
    foreground: '#e1e4e8',
    functions: '#b392f0',
    gray: '#959da5',
    green: '#85e89d',
    hl: '#444d56',
    id: 'github_dark',
    keywords: '#f97583',
    links: '#79b8ff',
    name: 'GitHub Dark',
    name2: 'GitHub Dark Contrast',
    notif: '#2f363d',
    numbers: '#79b8ff',
    operators: '#f97583',
    orange: '#ffab70',
    parameters: '#ffab70',
    purple: '#b392f0',
    red: '#f97583',
    scheme: 'GitHub Dark',
    second: '#2f363d',
    selectBg: '#3392ff',
    selectFg: '#fff',
    selectFg2: '#fff',
    strings: '#79b8ff',
    table: '#2b3036',
    tags: '#85e89d',
    text: '#959da5',
    tree: '#39414a',
    vars: '#d1d5da',
    white: '#d1d5da',
    yellow: '#ffab70',
  },
  {
    accent: '#5294e2',
    attributes: '#f9ee98',
    background: '#2f343f',
    blue: '#7587a6',
    border: '#404552',
    button: '#383c4a',
    className: 'arcdark',
    classes: '#f9ee98',
    comments: '#747c84',
    contrast: '#262b33',
    cyan: '#47bc9b',
    dark: true,
    desc: 'Theme based on the Arc Dark GTK Theme',
    disabled: '#a2a2a2',
    error: '#cf6a4c',
    excluded: '#37373d',
    foreground: '#d3dae3',
    functions: '#7587a6',
    gray: '#a7a7a7',
    green: '#8f9d6a',
    hl: '#444a58',
    id: 'arc.dark',
    keywords: '#9b859d',
    links: '#7587a6',
    name: 'Arc Dark',
    name2: 'Arc Dark Contrast',
    notif: '#262a33',
    numbers: '#cda869',
    operators: '#a7a7a7',
    orange: '#cda869',
    parameters: '#cda869',
    purple: '#9b859d',
    red: '#cf6a4c',
    scheme: 'Arc Dark',
    second: '#393f4c',
    selectBg: '#414181',
    selectFg: '#fff',
    selectFg2: '#fff',
    strings: '#8f9d6a',
    table: '#41416a',
    tags: '#cf6a4c',
    text: '#8b9eb5',
    tree: '#0f3d56',
    vars: '#cf6a4c',
    white: '#d3dae3',
    yellow: '#f9ee98',
  },
  {
    accent: '#2979ff',
    attributes: '#e5c17c',
    background: '#282c34',
    blue: '#61aeef',
    border: '#282c34',
    button: '#3a3f4b',
    className: 'onedark',
    classes: '#e5c17c',
    comments: '#59626f',
    contrast: '#21252b',
    cyan: '#57b6c2',
    dark: true,
    desc: 'Theme based on the Atom One Dark theme',
    disabled: '#6b727d',
    error: '#e06c75',
    excluded: '#3c4150',
    foreground: '#979fad',
    functions: '#61aeef',
    gray: '#59626f',
    green: '#98c379',
    hl: '#383d48',
    id: 'one.dark',
    keywords: '#c679dd',
    links: '#56b6c2',
    name: 'Atom One Dark',
    name2: 'Atom One Dark Contrast',
    notif: '#282c34',
    numbers: '#d19a66',
    operators: '#61afef',
    orange: '#d19a66',
    parameters: '#abb2bf',
    purple: '#c679dd',
    red: '#e06c75',
    scheme: 'Atom One Dark',
    second: '#2f333d',
    selectBg: '#4d515d',
    selectFg: '#fff',
    selectFg2: '#fff',
    strings: '#98c379',
    table: '#383e49',
    tags: '#e06c75',
    text: '#979fad',
    tree: '#303540',
    vars: '#d19a66',
    white: '#abb2bf',
    yellow: '#e5c17c',
  },
  {
    accent: '#2979ff',
    attributes: '#c18401',
    background: '#f4f4f4',
    blue: '#4078f2',
    border: '#dbdbdc',
    button: '#dbdbdc',
    className: 'onelight',
    classes: '#c18401',
    comments: '#a0a1a7',
    contrast: '#eaeaeb',
    cyan: '#0184bc',
    dark: false,
    desc: 'Theme based on the Atom One Light theme',
    disabled: '#b8b8b9',
    error: '#e4564a',
    excluded: '#cacacb',
    foreground: '#232324',
    functions: '#4078f2',
    gray: '#a0a1a7',
    green: '#50a14e',
    hl: '#fff',
    id: 'one.light',
    keywords: '#a626a4',
    links: '#0184bc',
    name: 'Atom One Light',
    name2: 'Atom One Light Contrast',
    notif: '#f2f2f2',
    numbers: '#986801',
    operators: '#4078f2',
    orange: '#986801',
    parameters: '#383a42',
    purple: '#a626a4',
    red: '#e4564a',
    scheme: 'Atom One Light',
    second: '#eaeaeb',
    selectBg: '#fff',
    selectFg: '#232324',
    selectFg2: '#232324',
    strings: '#50a14e',
    table: '#dbdbdc',
    tags: '#e4564a',
    text: '#7f7f7f',
    tree: '#e8e8e8',
    vars: '#986801',
    white: '#232324',
    yellow: '#c18401',
  },
  {
    accent: '#d33682',
    attributes: '#b58900',
    background: '#002b36',
    blue: '#268bd2',
    border: '#0d3640',
    button: '#073642',
    className: 'solardark',
    classes: '#b58900',
    comments: '#657b83',
    contrast: '#00252e',
    cyan: '#2aa198',
    dark: true,
    desc: 'Solarized Dark Theme',
    disabled: '#2e5861',
    error: '#dc322f',
    excluded: '#083f4d',
    foreground: '#839496',
    functions: '#b58900',
    gray: '#657b83',
    green: '#859900',
    hl: '#005a6f',
    id: 'solarized.dark',
    keywords: '#859900',
    links: '#268bd2',
    name: 'Solarized Dark',
    name2: 'Solarized Dark Contrast',
    notif: '#2e4c52',
    numbers: '#d33682',
    operators: '#93a1a1',
    orange: '#cb4b16',
    parameters: '#93a1a1',
    purple: '#6c71c4',
    red: '#d13684',
    scheme: 'Solarized Dark',
    second: '#003745',
    selectBg: '#2e4c52',
    selectFg: '#fff',
    selectFg2: '#fff',
    strings: '#2aa198',
    table: '#003946',
    tags: '#268bd2',
    text: '#586e75',
    tree: '#023c45',
    vars: '#268bd2',
    white: '#93a1a1',
    yellow: '#b58900',
  },
  {
    accent: '#d33682',
    attributes: '#657b83',
    background: '#fdf6e3',
    blue: '#268bd2',
    border: '#edead9',
    button: '#d8d4c4',
    className: 'solarlight',
    classes: '#657b83',
    comments: '#93a1a1',
    contrast: '#eee8d5',
    cyan: '#2aa198',
    dark: false,
    desc: 'Solarized Light Theme',
    disabled: '#c9ccc3',
    error: '#dc322f',
    excluded: '#e3dcc9',
    foreground: '#586e75',
    functions: '#b58900',
    gray: '#93a1a1',
    green: '#859900',
    hl: '#d1cbb8',
    id: 'solarized.light',
    keywords: '#859900',
    links: '#268bd2',
    name: 'Solarized Light',
    name2: 'Solarized Light Contrast',
    notif: '#ede8d4',
    numbers: '#d33682',
    operators: '#657b83',
    orange: '#cb4b16',
    parameters: '#657b83',
    purple: '#6c71c4',
    red: '#d13684',
    scheme: 'Solarized Light',
    second: '#f6f0de',
    selectBg: '#e8dcb6',
    selectFg: '#002b36',
    selectFg2: '#002b36',
    strings: '#2aa198',
    table: '#d1cbb8',
    tags: '#268bd2',
    text: '#93a1a1',
    tree: '#f0e4bf',
    vars: '#268bd2',
    white: '#657b83',
    yellow: '#b58900',
  },
  {
    accent: '#7e57c2',
    attributes: '#addb67',
    background: '#011627',
    blue: '#82aaff',
    border: '#122d42',
    button: '#0b253a',
    className: 'nightowl',
    classes: '#addb67',
    comments: '#637777',
    contrast: '#010e1a',
    cyan: '#7fdbca',
    dark: true,
    desc: 'Theme based on Night Owl by Sarah Drasner',
    disabled: '#697098',
    error: '#ef5350',
    excluded: '#0e293f',
    foreground: '#d6deeb',
    functions: '#82aaff',
    gray: '#637777',
    green: '#addb67',
    hl: '#084d81',
    id: 'nightowl',
    keywords: '#c792ea',
    links: '#ecc48d',
    name: 'Night Owl',
    name2: 'Night Owl Contrast',
    notif: '#01111d',
    numbers: '#f78c6c',
    operators: '#c792ea',
    orange: '#f78c6c',
    parameters: '#d6deeb',
    purple: '#c792ea',
    red: '#ff6363',
    scheme: 'Night Owl',
    second: '#0b2942',
    selectBg: '#084d81',
    selectFg: '#fff',
    selectFg2: '#fff',
    strings: '#ecc48d',
    table: '#13344f',
    tags: '#7fdbca',
    text: '#5f7e97',
    tree: '#13344f',
    vars: '#addb67',
    white: '#d6deeb',
    yellow: '#ecc48d',
  },
  {
    accent: '#2aa298',
    attributes: '#0c969b',
    background: '#f0f0f0',
    blue: '#4876d6',
    border: '#d9d9d9',
    button: '#d9d9d9',
    className: 'lightowl',
    classes: '#0c969b',
    comments: '#989fb1',
    contrast: '#f0f0f0',
    cyan: '#0c969b',
    dark: false,
    desc: 'Theme based on Light Owl by Sarah Drasner',
    disabled: '#93a1a1',
    error: '#de3d3b',
    excluded: '#e0e7ea',
    foreground: '#403f53',
    functions: '#4876d6',
    gray: '#989fb1',
    green: '#56b6c2',
    hl: '#ccc',
    id: 'lightowl',
    keywords: '#994cc3',
    links: '#ff869a',
    name: 'Light Owl',
    name2: 'Light Owl Contrast',
    notif: '#f0f0f0',
    numbers: '#aa0982',
    operators: '#994cc3',
    orange: '#c96765',
    parameters: '#0c969b',
    purple: '#994cc3',
    red: '#aa0982',
    scheme: 'Light Owl',
    second: '#fbfbfb',
    selectBg: '#d3e8f8',
    selectFg: '#403f53',
    selectFg2: '#fff',
    strings: '#c96765',
    table: '#d3e8f8',
    tags: '#994cc3',
    text: '#90a7b2',
    tree: '#dfebf4',
    vars: '#4876d6',
    white: '#111',
    yellow: '#e0af02',
  },
  {
    accent: '#74a0f1',
    attributes: '#ffbd76',
    background: '#222436',
    blue: '#70b0ff',
    border: '#222436',
    button: '#444a73',
    className: 'moonlight',
    classes: '#ffbd76',
    comments: '#7e8eda',
    contrast: '#191a2a',
    cyan: '#34d3fb',
    dark: true,
    desc: 'Theme based on the Moonlight Theme by Atomiks',
    disabled: '#828bb8',
    error: '#ff5370',
    excluded: '#2f334d',
    foreground: '#c8d3f5',
    functions: '#70b0ff',
    gray: '#7e8eda',
    green: '#7af8ca',
    hl: '#444a73',
    id: 'moonlight',
    keywords: '#baacff',
    links: '#34d3fb',
    name: 'Moonlight',
    name2: 'Moonlight Contrast',
    notif: '#191a2a',
    numbers: '#ff9668',
    operators: '#baacff',
    orange: '#ff9668',
    parameters: '#f3c1ff',
    purple: '#baacff',
    red: '#f3c1ff',
    scheme: 'Moonlight',
    second: '#2f334d',
    selectBg: '#444a73',
    selectFg: '#fff',
    selectFg2: '#fff',
    strings: '#7af8ca',
    table: '#2f334d',
    tags: '#ff757f',
    text: '#a9b8e8',
    tree: '#2f3452',
    vars: '#c8d3f5',
    white: '#c8d3f5',
    yellow: '#ffdb8e',
  },
  {
    accent: '#f92aad',
    attributes: '#fede5d',
    background: '#2a2139',
    blue: '#34d3fb',
    border: '#34294f',
    button: '#382c4d',
    className: 'synthwave',
    classes: '#f92aad',
    comments: '#848bbd',
    contrast: '#241b2f',
    cyan: '#36f9f6',
    dark: true,
    desc: 'Theme based on the SynthWave\'84 theme by Robb Owen',
    disabled: '#848bbd',
    error: '#fe4450',
    excluded: '#463564',
    foreground: '#fff',
    functions: '#36f9f6',
    gray: '#848bbd',
    green: '#72f1b8',
    hl: '#463564',
    id: 'synthwave',
    keywords: '#fede5d',
    links: '#ff7edb',
    name: 'SynthWave \'84',
    name2: 'SynthWave \'84 Contrast',
    notif: '#191621',
    numbers: '#f97e72',
    operators: '#fede5d',
    orange: '#f97e72',
    parameters: '#ff7edb',
    purple: '#ff7edb',
    red: '#fe4450',
    scheme: 'Synthwave',
    second: '#2a2139',
    selectBg: '#463465',
    selectFg: '#fff',
    selectFg2: '#fff',
    strings: '#ff8b39',
    table: '#34294f',
    tags: '#72f1b8',
    text: '#999',
    tree: '#362a42',
    vars: '#b6b1b1',
    white: '#b6b1b1',
    yellow: '#fede5d',
  },
];

export const getFolderColors = (): ThemeColorQuickPickItem[] => {
  const separator = {
    kind: QuickPickItemKind.Separator,
    order: 1,
  };

  const themeColors: ThemeColorQuickPickItem[] = themes.map((theme) => ({
    color: theme.text,
    description: i18next.t('folders.theme.description', { color: theme.text, name: theme.name }),
    id: theme.id,
    kind: QuickPickItemKind.Default,
    name: theme.name,
    order: 1,
  }));

  const customColor: ThemeColorQuickPickItem = {
    description: i18next.t('folders.hexCode'),
    id: 'custom',
    kind: QuickPickItemKind.Default,
    name: i18next.t('custom'),
    order: 2,
  };

  return [...themeColors, separator, customColor];
};
