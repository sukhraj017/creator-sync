// ops/ffcore.js
export function ffcore(plan, dsp, inputPath, outputPath) {
  const commands = [];

  // base command
  commands.push('ffmpeg', '-i', inputPath);

  // Build video filter chain
  let vf = [];

  if (dsp?.motion?.stabilize) {
    // NOTE: real stabilization needs 2-pass, this is placeholder for now
    vf.push('vidstabdetect');
  }

  if (dsp?.motion?.crop === "vertical_crop") {
    vf.push('crop=ih,scale=1080:1920');
  }

  // Only push -vf if filters exist
  if (vf.length > 0) {
    commands.push('-vf', vf.join(','));
  }

  // Audio filters
  if (dsp?.audio?.normalize) {
    commands.push('-af', `loudnorm=${dsp.audio.normalize}`);
  }

  // output
  commands.push(outputPath);

  return commands;
}
