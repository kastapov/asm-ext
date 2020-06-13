import { ObservingDurationEnum } from './ObservingDurationEnum';
import { PeriodEnum } from './PeriodEnum';

export const ObservingPeriodsMapping = {
  [ObservingDurationEnum.FIFTEEN_MINUTES]: PeriodEnum.ONE_MINUTE,
  [ObservingDurationEnum.THIRTY_MINUTES]: PeriodEnum.FIVE_MINUTES,
  [ObservingDurationEnum.ONE_HOUR]: PeriodEnum.TEN_MINUTES,
  [ObservingDurationEnum.SIX_HOURS]: PeriodEnum.THIRTY_MINUTES,
  [ObservingDurationEnum.ONE_DAY]: PeriodEnum.ONE_HOUR,
  [ObservingDurationEnum.ONE_WEEK]: PeriodEnum.SIX_HOURS,
}
