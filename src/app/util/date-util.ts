export class DateUtil {
  public static getTodayDateISO(): string {
    return DateUtil.toISOString(new Date());
  }

  public static getDateSubHoursISO(subHours: number): string {
    const date = new Date();
    date.setHours(date.getHours() - subHours);
    return DateUtil.toISOString(date);
  }

  public static toISOString(date: Date): string {
    return `${date.toISOString().slice(0, -5)}+00:00`;
  }
}
