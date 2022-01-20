import { JSBI } from '@candlelabs/core-sdk'

export interface AccrueInfo {
  interestPerSecond: JSBI
  lastAccrued: JSBI
  feesEarnedFraction: JSBI
}
