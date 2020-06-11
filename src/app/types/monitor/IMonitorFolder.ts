export interface IMonitorFolder {
  'name': string;
  'isActive': boolean;
  'notifyOn': boolean;
  'id': number;
  'monitorCount': number;
  'permission': {
    'type': string,
    'level': string
  };
  'specificPermission': {
    'type': string,
    'level': string
  };
  'ownerId': number;
}
