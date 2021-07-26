import * as path from 'path';
import envPaths from 'env-paths';

export interface Paths {
  // folder where electron zipfiles will be cached
  readonly electronDownloads: string;

  // folder where an electron download will be unzipped to be run
  readonly electronInstall: string;

  // folder where fiddles will be saved
  readonly fiddles: string;

  // file where electron releases are cached
  readonly versionsCache: string;
}

const paths = envPaths('electron-fiddle-runner', { suffix: '' });

export const DefaultPaths: Paths = {
  electronDownloads: path.join(paths.data, 'electron', 'zips'),
  electronInstall: path.join(paths.data, 'electron', 'current'),
  fiddles: path.join(paths.temp, 'fiddles'),
  versionsCache: path.join(paths.cache, 'releases.json'),
};
