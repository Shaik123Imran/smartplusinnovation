import { SHOW_HOME_STATS_COUNTERS } from '../../config/sections'
import StatsCounters from './StatsCounters'
import PartnerLogos from './PartnerLogos'

/**
 * Home stats slot — toggles between logo showcase and numeric counters.
 * Set SHOW_HOME_STATS_COUNTERS = true in src/config/sections.js to restore counters.
 */
function Stats() {
  if (SHOW_HOME_STATS_COUNTERS) {
    return <StatsCounters />
  }

  return <PartnerLogos />
}

export default Stats
export { StatsCounters, PartnerLogos }
