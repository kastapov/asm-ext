import { ObservingPeriod } from './ObservingPeriod';
import { DurationEnum } from './DurationEnum';
import { PeriodEnum } from './PeriodEnum';

export class ObservingPeriods {
  static FIFTEEN_MINUTES = new ObservingPeriod(DurationEnum.FIFTEEN_MINUTES, PeriodEnum.ONE_MINUTE);
  static THIRTY_MINUTES = new ObservingPeriod(DurationEnum.THIRTY_MINUTES, PeriodEnum.FIVE_MINUTES);
  static ONE_HOUR = new ObservingPeriod(DurationEnum.ONE_HOUR, PeriodEnum.FIFTEEN_MINUTES);
  static SIX_HOURS = new ObservingPeriod(DurationEnum.SIX_HOURS, PeriodEnum.THIRTY_MINUTES);
  static ONE_DAY = new ObservingPeriod(DurationEnum.ONE_DAY, PeriodEnum.ONE_HOUR);
  static ONE_WEEK = new ObservingPeriod(DurationEnum.ONE_WEEK, PeriodEnum.SIX_HOURS);
}
