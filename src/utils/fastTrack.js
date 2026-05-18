/** Programs completed in 10 weeks or less qualify as Fast Track. */
export const FAST_TRACK_MAX_WEEKS = 10

export function getDurationWeeks(duration) {
  const match = String(duration || '').match(/(\d+)/)
  return match ? parseInt(match[1], 10) : 99
}

export function isFastTrackProgram(program) {
  return program?.fastTrack === true || getDurationWeeks(program?.duration) <= FAST_TRACK_MAX_WEEKS
}

export function getFastTrackPrograms(programList) {
  return [...programList]
    .filter(isFastTrackProgram)
    .sort((a, b) => getDurationWeeks(a.duration) - getDurationWeeks(b.duration))
}
