import * as gulp from 'gulp';
import * as project from '../aurelia.json';
import build from './build';
import {CLIOptions} from 'aurelia-cli';

function onChange(path) {
  console.log(`File Changed: ${path}`);
}

let watch = function() {
  gulp.watch(project.transpiler.source, build).on('change', onChange);
  gulp.watch(project.markupProcessor.source, build).on('change', onChange);
  gulp.watch(project.cssProcessor.source, build).on('change', onChange);
}

let run;

if (CLIOptions.hasFlag('watch')) {
  run = gulp.series(
    build,
    watch
  );
} else {
  run = build;
}

export default run;
