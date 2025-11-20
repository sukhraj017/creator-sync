// ffcore.js placeholder
// ops/ffcore.js  (Readable source — keep this private)
export function ffcore(plan, dsp, inputPath, outputPath, opts = {}) {
  const ffBin = opts.ffBin || 'ffmpeg';
  const cmd = [ffBin, '-i', inputPath];

  const vFilters = [];
  const aFilters = [];

  if (dsp?.motion?.stabilize) vFilters.push('vidstabdetect');
  if (dsp?.motion?.crop === 'vertical_crop') vFilters.push('crop=ih,scale=1080:1920');

  if (vFilters.length) cmd.push('-vf', vFilters.join(','));
  if (dsp?.audio?.normalize) aFilters.push(`loudnorm=${dsp.audio.normalize}`);
  if (aFilters.length) cmd.push('-af', aFilters.join(','));

  cmd.push(outputPath);
  return cmd;
}
