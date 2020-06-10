export class DateUtil {
  public static getTodayDate(): string {
    return (new Date()).toISOString();
  }

  public static getDateSubHours(subHours: number): string {
    const date = new Date();
    date.setHours(date.getHours() - subHours);
    return date.toISOString();
  }
}
