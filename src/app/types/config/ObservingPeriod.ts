import { DurationEnum } from './DurationEnum';
import { PeriodEnum } from './PeriodEnum';

export class ObservingPeriod {
  duration: DurationEnum;
  period: PeriodEnum;

  constructor(duration: DurationEnum, period: PeriodEnum) {
    this.duration = duration;
    this.period = period;
  }
}
