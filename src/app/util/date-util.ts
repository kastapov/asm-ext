export class DateUtil {
  public static getTodayDateEncoded(): string {
    return DateUtil.toIsoStringUrlencoded(new Date());
  }

  public static getDateSubHoursEncoded(subHours: number): string {
    const date = new Date();
    date.setHours(date.getHours() - subHours);
    return DateUtil.toIsoStringUrlencoded(date);
  }

  public static toIsoStringUrlencoded(date: Date): string {
    return `${date.toISOString().slice(0, -5)}+00:00`;
  }
}
