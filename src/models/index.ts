import { generateDirectoryComponents } from 'src/core/utils/generateDirectoryComponents.util';

export default [
    ...generateDirectoryComponents({directory: __dirname, pattern: /\.model\.(ts|js)$/i})
];