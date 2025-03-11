import { generateDirectoryComponents } from 'src/core/utils/generateDirectoryComponents.util';

export default [
    ...generateDirectoryComponents({directory: __dirname, pattern: /\.service\.(ts|js)$/i})
];