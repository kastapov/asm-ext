import * as moment from 'moment';

export class DateUtil {
  public static getTodayDateISO(): string {
    return DateUtil.toISOString(new Date());
  }

  public static getDateSubMinutesISO(subMinutes: number): string {
    const date = new Date();
    date.setMinutes(date.getMinutes() - subMinutes);
    return DateUtil.toISOString(date);
  }

  public static toISOString(date: Date): string {
    return `${date.toISOString().slice(0, -5)}+00:00`;
  }

  public static ISOToDate(date: string): Date {
    return new Date(Date.parse(date));
  }

  static formatDateTimeline(timestamp: string): string {
    const date = moment(timestamp);
    return date.utc().format('DD MMM HH:mm');
  }
}
