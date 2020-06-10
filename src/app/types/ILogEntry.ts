import { ResultTypeEnum } from './ResultTypeEnum';

export interface ILogEntry {
  "id": string;
  "monitor": {
    "id": number,
    "name": string,
  };
  "location": {
    "id": number,
    "name": string,
  };
  "start": string;
  "monitor_type": string;
  "result": {
    "code": number,
    "description": string,
    "type": string
  };
  "metrics": {
    "rtime": number,
    "ctime": number,
    "ptime": number,
    "dtime": number,
    "utime": number,
    "dsize": number,
    "multi_probes_all": number,
    "multi_probes": number,
    "multi_probes_failed": number
  };
  "assets": [
    {
      "url": string,
      "type": string
    }
  ]
}
