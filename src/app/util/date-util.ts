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
}
