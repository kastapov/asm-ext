import { ObservingDurationEnum } from './ObservingDurationEnum';
import { PeriodEnum } from './PeriodEnum';

export class ObservingPeriod {
  duration: ObservingDurationEnum;
  period: PeriodEnum;

  constructor(duration: ObservingDurationEnum, period: PeriodEnum) {
    this.duration = duration;
    this.period = period;
  }
}
