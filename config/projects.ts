import { Maybe, Tuple } from '../types';
import { Stack } from './stack';

export type Deployment = {
  web?: string;
  android?: string;
  ios?: string;
};

export type Repository = {
  github?: string;
  gitlab?: string;
  bitbucket?: string;
};

export interface SubProject {
  title: string;
  description: string;
  repository: Repository;
  deployment: Deployment;
  stack: Stack[];
}

export const defaultDimensions: Tuple<number> = [450, 220];

export interface Project {
  title: string;
  slug: string;
  website: string;
  banner: string;
  description: string;
  shortDescription?: string;
  repository: Repository;
  stack: Stack[];
  dimensions?: Tuple<number>; // Tuple of [height, width]
  screenshots: string[];
  deployment: Deployment;
  subProjects: SubProject[];
}

export const projects: Project[] = [
  {
    title: 'Cryptopot',
    slug: 'cryptopot',
    banner: '/static/projects/cryptopot/banner.png',
    website: 'https://crypto-honeypot.forenzythreatlabs.com/',
    description:
      'A fully-functional honeypot for an in-house cryptocurreny exchange platform. The idea of this project was to make something that was both challenging as well as something that could be used for educational purposes later on. \nThe honeypot consists of three security levels (least to most secure) and supports a variety of attacks including but not limited to SQL Injections, XSS, IDORs, PrivEsc, and more.',
    shortDescription:
      'A fully-functional honeypot for educational purposes.',
    repository: { github: 'https://github.com/adityapanchal10/crypto-pot'},
    stack: [
      Stack.php,
      Stack.html5,
      Stack.css3,
      Stack.javascript,
      Stack.bootstrap,
      Stack.mysql,
      Stack.burp,
    ],
    dimensions: [287, 600],
    screenshots: [
      '/static/projects/cryptopot/ss1.png',
      '/static/projects/cryptopot/ss2.png',
      '/static/projects/cryptopot/ss3.png',
      '/static/projects/cryptopot/ss4.png',
      '/static/projects/cryptopot/ss5.png',
      '/static/projects/cryptopot/ss6.png',
      '/static/projects/cryptopot/ss7.png',
      '/static/projects/cryptopot/ss8.png',
      '/static/projects/cryptopot/ss9.png',
    ],
    deployment: {
      web: 'https://crypto-honeypot.forenzythreatlabs.com/',
    },
    subProjects: [
      {
        title: 'Scanners for Apache Struts RCE and log4j',
        repository: {github: 'https://github.com/adityapanchal10/silver-spoon'},
        description:
          'Scanner for the Apache Struts RCE and log4j vulnerabilities.',
        deployment: null,
        stack: [
          Stack.python,
          Stack.react,
          Stack.docker,
        ],
      },
    ],
  },
  {
    title: 'Maternal Health Risk Prediction',
    slug: 'healthymom',
    website: 'https://healthymom.streamlit.app',
    repository: {github: 'https://github.com/adityapanchal10/maternal-risk-app'},
    banner: '/static/projects/healthymom/banner.png',
    description:
      'An explanation dashboard that allows users to determine the risk of maternal health complications via exploring the model predictions using X-AI techniques.',
      shortDescription:
      'An explanation dashboard that allows users to explore and play around with the model predictions of maternal health complications.',
    stack: [
      Stack.python,
      Stack.streamlit,
      Stack.explainerdash,
      Stack.sklearn,
      Stack.plotly,
    ],
    dimensions: [540, 800],
    screenshots: [
      '/static/projects/healthymom/ss1.png',
      '/static/projects/healthymom/ss2.png',
      '/static/projects/healthymom/ss3.png',
      '/static/projects/healthymom/ss4.png',
      '/static/projects/healthymom/ss5.png',
      '/static/projects/healthymom/ss6.png',
      '/static/projects/healthymom/ss7.png',
    ],
    deployment: {
      web: 'https://healthymom.streamlit.app',
    },
    subProjects: [],
  },
  {
    title: 'Getting Quantum-Chemical Insights using Machine Learning',
    slug: 'quantum-ml',
    website: 'https://github.com/adityapanchal10/Getting-insights-into-quantum-chemical-reactions',
    banner: '/static/projects/quantum-ml/banner.gif',
    description:
      'A Machine Learning project that investigates the relation between molecular geometry and atomization energy. Custom Ridge Regression model was used which was trained on both linear and complex feature representations of the molecules of the \'QM7\' datataset. The predictions were also explained using explanability methods, linking them to existing chemical litertaure.',
    shortDescription:
      'A Machine Learning project that investigates the relation between molecular geometry and atomization energy.',
    repository: {github: 'https://github.com/adityapanchal10/Getting-insights-into-quantum-chemical-reactions'},
    stack: [
      Stack.python,
      Stack.numpy,
      Stack.sklearn,
      Stack.scipy,
      Stack.pandas,
      Stack.smoothgrad,
    ],
    dimensions: [450, 600],
    screenshots: [
      '/static/projects/quantum-ml/ss1.gif',
      '/static/projects/quantum-ml/ss2.png',
      '/static/projects/quantum-ml/ss3.png',
      '/static/projects/quantum-ml/ss4.png',
    ],
    deployment: null,
    subProjects: [],
  },
  {
    title: 'Getting Insights into Images and their Metadata',
    slug: 'leaf',
    banner: '/static/projects/leaf/banner.png',
    website: 'https://github.com/adityapanchal10/Getting-insights-into-images-and-their-metadata',
    description: `A Machine Learning project that distinguishes between healthy and rotten images of an apple plant using VGG-16 and Discriminant Analysis. Feature extraction was done using the top layer of a pretrained VGG-16 and and then predictions were made using Discriminant Analysis. Explanations about the predictions were also given via methods such as 'Sensitivity Analysis' and 'SmoothGrad'.`,
    shortDescription:
      'A Machine Learning project that explains the distinguishions between healthy and rotten images of an apple plant using VGG-16, Discriminant Analysis, and SmoothGrad.',
    repository: { github: 'https://github.com/adityapanchal10/Getting-insights-into-images-and-their-metadata'},
    stack: [
      Stack.python,
      Stack.torch,
      Stack.smoothgrad,
    ],
    dimensions: [424, 600],
    screenshots: [
      '/static/projects/leaf/ss1.png',
      '/static/projects/leaf/ss2.png',
      '/static/projects/leaf/ss3.png',
    ],
    deployment: null,
    subProjects: [],
  },
  {
    title: 'Deep Learning for Hen Detection and Movement Tracking',
    slug: 'hens',
    banner: '/static/projects/hens/banner.gif',
    website: 'https://git.imp.fu-berlin.de/adip00/hens_deepsort',
    description: 'A university project that involved the usage of deep learning to detect hens in a video feed and track their movement. Detection was performed using YOLOv7 and the tracking was done using both the Simple Online and Realtime Tracking (SORT) algorithm and DeepSORT (SORT + deep learning metric).',
    shortDescription:
      'A university project that involved the usage of deep learning to detect hens in a video feed and track their movement.',
    repository: {gitlab: 'https://git.imp.fu-berlin.de/adip00/hens_deepsort'},
    stack: [
      Stack.python,
      Stack.yolo,
      Stack.opencv,
      Stack.sort,
      Stack.deepsort,
    ],
    dimensions: [340, 600],
    screenshots: [
      '/static/projects/hens/banner.gif',
      '/static/projects/hens/ss2.png',
    ],
    deployment: null,
    subProjects: [],
  },
  {
    title: 'CHIP-8 Emulator',
    slug: 'chip8',
    website: 'https://github.com/adityapanchal10/chip8',
    banner: '/static/projects/chip8/banner.png',
    description:
      'A small emulator for the CHIP-8 interpreter language. This implementation uses C++ for the core functionality and a SDL2 backend completes the emulator with sound, keyboard input and GL display.',
    shortDescription:
      'A small emulator for the CHIP-8 interpreter language made using C++.',
    repository: {github: 'https://github.com/adityapanchal10/chip8'},
    stack: [
      Stack.cpp, 
    ],
    dimensions: [350, 600],
    screenshots: [
      '/static/projects/chip8/ss1.png',
      '/static/projects/chip8/ss2.png',
      '/static/projects/chip8/ss3.png',
      '/static/projects/chip8/ss4.png',
      '/static/projects/chip8/ss5.png',
    ],
    deployment: null,
    subProjects: [],
  },
];
