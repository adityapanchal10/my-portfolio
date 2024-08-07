import { Colors } from './colors';

export enum Stack {
  // Languages
  go,
  typescript,
  javascript,
  python,
  c,
  cpp,
  java,
  rust,

  // Frontend
  react,
  reactnative,
  html5,
  css3,
  bootstrap,

  // Backend
  graphql,
  node,
  django,
  php,

  // Cloud
  aws,
  gcp,

  // Messaging
  nats,
  kafka,

  // Databases
  arangodb,
  redis,
  postgres,
  mongo,
  mysql,

  // Tools
  docker,
  kubernetes,
  terraform,
  git,
  linux,
  tensorflow,
  torch,
  yolo,
  smoothgrad,
  opencv,
  sort,
  deepsort,
  burp,
  numpy,
  pandas,
  scipy,
  sklearn,
  altair,
  plotly,
  streamlit,
  explainerdash
}

export const WorkStack = [
  Stack.python,
  Stack.c,
  Stack.cpp,
  Stack.javascript,
  Stack.typescript,
  Stack.rust,
  Stack.tensorflow,
  Stack.torch,
  Stack.react,
  Stack.node,
  Stack.java,
  Stack.html5,
  Stack.css3,
  Stack.bootstrap,
  Stack.mysql,
  Stack.php,
  Stack.postgres,
  Stack.mongo,
  Stack.docker,
  Stack.gcp,
  Stack.git,
  Stack.linux,
  Stack.altair,
  Stack.streamlit,
];

type StackInfoMap = {
  value: string;
  color: string;
};

export const StackInfo: Record<Stack, StackInfoMap> = {
  [Stack.typescript]: {
    value: 'TypeScript',
    color: Colors.typescript,
  },
  [Stack.javascript]: {
    value: 'JavaScript',
    color: Colors.javascript,
  },
  [Stack.go]: {
    value: 'Go',
    color: Colors.go,
  },
  [Stack.react]: {
    value: 'React',
    color: Colors.react,
  },
  [Stack.reactnative]: {
    value: 'React Native',
    color: Colors.reactnative,
  },
  [Stack.graphql]: {
    value: 'GraphQL',
    color: Colors.graphql,
  },
  [Stack.aws]: {
    value: 'AWS',
    color: Colors.aws,
  },
  [Stack.gcp]: {
    value: 'Google Cloud',
    color: Colors.gcp,
  },
  [Stack.python]: {
    value: 'Python',
    color: Colors.python,
  },
  [Stack.node]: {
    value: 'Node',
    color: Colors.node,
  },
  [Stack.django]: {
    value: 'Django',
    color: Colors.django,
  },
  [Stack.nats]: {
    value: 'NATS',
    color: Colors.nats,
  },
  [Stack.kafka]: {
    value: 'Kafka',
    color: Colors.kafka,
  },
  [Stack.arangodb]: {
    value: 'ArangoDB',
    color: Colors.arangodb,
  },
  [Stack.postgres]: {
    value: 'Postgres',
    color: Colors.postgres,
  },
  [Stack.redis]: {
    value: 'Redis',
    color: Colors.redis,
  },
  [Stack.mongo]: {
    value: 'MongoDB',
    color: Colors.mongo,
  },
  [Stack.docker]: {
    value: 'Docker',
    color: Colors.docker,
  },
  [Stack.kubernetes]: {
    value: 'Kubernetes',
    color: Colors.kubernetes,
  },
  [Stack.terraform]: {
    value: 'Terraform',
    color: Colors.terraform,
  },
  [Stack.c]: {
    value: 'C',
    color: Colors.c,
  },
  [Stack.cpp]: {
    value: 'C++',
    color: Colors.cpp,
  },
  [Stack.java]: {
    value: 'Java',
    color: Colors.java,
  },
  [Stack.rust]: {
    value: 'Rust',
    color: Colors.rust,
  },
  [Stack.php]: {
    value: 'PHP',
    color: Colors.php,
  },
  [Stack.html5]: {
    value: 'HTML5',
    color: Colors.html5,
  },
  [Stack.css3]: {
    value: 'CSS3',
    color: Colors.css3,
  },
  [Stack.bootstrap]: {
    value: 'Bootstrap',
    color: Colors.bootstrap,
  },
  [Stack.mysql]: {
    value: 'MySQL',
    color: Colors.mysql,
  },
  [Stack.git]: {
    value: 'Git',
    color: Colors.git,
  },
  [Stack.linux]: {
    value: 'Linux',
    color: Colors.linux,
  },
  [Stack.tensorflow]: {
    value: 'TensorFlow',
    color: Colors.tensorflow,
  },
  [Stack.torch]: {
    value: 'pyTorch',
    color: Colors.torch,
  },
  [Stack.yolo]: {
    value: 'YOLO',
    color: Colors.yolo,
  },
  [Stack.smoothgrad]: {
    value: 'SmoothGrad',
    color: Colors.smoothgrad,
  },
  [Stack.opencv]: {
    value: 'OpenCV',
    color: Colors.opencv,
  },
  [Stack.sort]: {
    value: 'SORT',
    color: Colors.sort,
  },
  [Stack.deepsort]: {
    value: 'DeepSORT',
    color: Colors.deepsort,
  },
  [Stack.burp]: {
    value: 'Burp Suite',
    color: Colors.burp,
  },
  [Stack.numpy]: {
    value: 'NumPy',
    color: Colors.python,
  },
  [Stack.pandas]: {
    value: 'Pandas',
    color: Colors.python,
  },
  [Stack.scipy]: {
    value: 'SciPy',
    color: Colors.python,
  },
  [Stack.sklearn]: {
    value: 'scikit-learn',
    color: Colors.python,
  },
  [Stack.altair]: {
    value: 'Altair',
    color: Colors.altair,
  },
  [Stack.plotly]: {
    value: 'Plotly',
    color: Colors.plotly,
  },
  [Stack.streamlit]: {
    value: 'Streamlit',
    color: Colors.streamlit,
  },
  [Stack.explainerdash]: {
    value: 'Explainer-Dashboard',
    color: Colors.explainerdash,
  },
};
