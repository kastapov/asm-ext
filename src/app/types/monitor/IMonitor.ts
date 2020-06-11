export interface IMonitor {
  'id': number;
  'type': string;
  'name': string;
  'host': string;
  'url': string;
  'browser': string;
  'folderId': number;
  'maintenanceGroupIds': Array<number>;
  'tagNames': Array<string>;
  'transactionTag': string;
  'userNote': string;
  'check': {
    'mode': number,
    'interval': string,
    'periodFrom': string,
    'periodTo': string,
    'days': Array<number>
  };
  'alert': {
    'timeWarn': number,
    'timePoor': number,
    'timeOut': number,
    'alertAfter': number,
    'dontDoPostMortem': boolean,
    'contactId': number,
    'notifyWhenUp': boolean,
    'quietPeriod': string,
    'checkThreshold': number
  };
  'checkpoint': {
    'usePublic': boolean,
    'groupIds': Array<number>;
    'algorithm': string,
    'defaultGroupId': number
  }
}
