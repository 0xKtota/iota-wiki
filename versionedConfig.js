exports.buildPluginsConfig = [
  {
    id: 'iota-sdk',
    label: 'IOTA SDK',
    description: 'Seamlessly integrate IOTA into your app.',
    icon: 'IotaCore',
    subsection: 'build-layer-1',
    versions: [
      {
        label: '1.0',
        badges: ['IOTA', 'Shimmer'],
        //overriding default exclude array to include the python api's classes with _ at the beginning
        //but still exclude any _admonitions
        exclude: [
          '**/*.test.{js,jsx,ts,tsx}',
          '**/__tests__/**',
          '**/_admonitions/_**',
        ],
      },
    ],
  },
  {
    id: 'wasp-evm',
    label: 'EVM',
    description: 'Create EVM smart contracts.',
    icon: 'SmartContracts',
    subsection: 'build-layer-2',
    versions: [
      {
        label: 'v1.0.0-rc.6',
        badges: ['Shimmer'],
      },
    ],
  },
  {
    id: 'wasp-cli',
    label: 'Wasp CLI',
    description: 'Create custom smart contract chains.',
    icon: 'SmartContracts',
    subsection: 'build-layer-2',
    versions: [
      {
        label: 'v1.0.0-rc.6',
        badges: ['Shimmer'],
      },
    ],
  },
  {
    id: 'wasp-wasm',
    label: 'WASM (Experimental)',
    description: 'Create WASM smart contracts.',
    icon: 'SmartContracts',
    subsection: 'build-layer-2',
    versions: [
      {
        label: 'v1.0.0-rc.6',
        badges: ['Shimmer'],
      },
    ],
  },
  {
    id: 'identity-rs',
    routeBasePath: 'identity.rs',
    label: 'Identity',
    description: 'Trustless digital identity management.',
    icon: 'Identity',
    subsection: 'build-layer-1',
    versions: [
      {
        label: '1.1',
        badges: ['IOTA', 'Shimmer'],
      },
      {
        label: '1.0',
        badges: ['IOTA', 'Shimmer'],
      },
    ],
  },
  {
    id: 'stronghold-rs',
    routeBasePath: 'stronghold.rs',
    label: 'Stronghold',
    description: 'Securely store secrets.',
    icon: 'Stronghold',
    subsection: 'build-layer-1',
    versions: [
      {
        label: '1.1',
        badges: ['IOTA', 'Shimmer'],
      },
    ],
  },
  {
    id: 'apis',
    label: 'APIs',
    description: 'All available APIs.',
    icon: 'Tools',
    subsection: 'build-layer-1',
    versions: [
      {
        label: '',
        badges: ['IOTA', 'Shimmer'],
        docItemComponent: '@theme/ApiItem',
      },
    ],
  },
  {
    id: 'cli-wallet',
    label: 'CLI Wallet',
    description: 'Command line wallet.',
    icon: 'Wallet',
    subsection: 'build-layer-1',
    versions: [
      {
        label: '1.0',
        badges: ['IOTA', 'Shimmer'],
      },
    ],
  },
  {
    id: 'iota-sandbox',
    label: 'IOTA Sandbox',
    description: 'Your tool for local development.',
    icon: 'Tools',
    subsection: 'build-tools',
    versions: [
      {
        label: '',
        badges: ['IOTA', 'Shimmer'],
      },
    ],
  },
];

exports.maintainPluginsConfig = [
  {
    id: 'hornet',
    label: 'Hornet',
    description: 'The primary node software for IOTA.',
    icon: 'Hornet',
    subsection: 'maintain-layer-1',
    versions: [
      {
        label: '2.0',
        badges: ['IOTA', 'Shimmer'],
      },
    ],
  },
  {
    id: 'wasp',
    label: 'Wasp',
    description: 'The node software to run an ISC network',
    icon: 'SmartContracts',
    subsection: 'maintain-layer-2',
    versions: [
      {
        label: 'v1.0.0-rc.6',
        badges: ['Shimmer'],
      },
    ],
  },
  {
    id: 'chronicle',
    label: 'Chronicle',
    description: 'Indexer, archival node, analytics.',
    icon: 'Chronicle',
    subsection: 'maintain-layer-1',
    versions: [
      {
        label: '1.0-rc.2',
        badges: ['IOTA', 'Shimmer'],
      },
    ],
  },
];
