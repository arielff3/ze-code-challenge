module.exports = {
  preset: 'ts-jest',
  collectCoverage: true,
  coverageReporters: ['lcov'],
  coverageDirectory: 'coverage',
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  roots: ['<rootDir>/src'],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    'dotenv/config',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '.+\\.(svg|png|jpg)$': 'identity-obj-proxy',
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|svg|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/src/__mocks__/fileMock.ts',
    '\\.(css|less)$': '<rootDir>/src/__mocks__/styleMock.ts',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@styles/(.*)$': '<rootDir>/src/styles/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@graphql/(.*)$': '<rootDir>/src/graphql/$1',
    '^@__mocks__/(.*)$': '<rootDir>/src/__mocks__/$1',
  },
};
