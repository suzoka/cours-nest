import * as fs from 'fs';
import * as path from 'path';

export function generateDirectoryComponents({directory, pattern}: {directory: string, pattern: RegExp}) {
    return fs.readdirSync(directory)
        .filter(file => pattern.test(file))
        .map(file => require( path.join(directory, file)).default )
        .filter(defaultModule => !!defaultModule)
        .reduce((acc, defaultModule) => [
            ...acc,
            defaultModule
        ], []);
}