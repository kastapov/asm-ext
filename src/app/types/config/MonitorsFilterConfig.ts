export class MonitorsFilterConfig {
  active: boolean;
  selected: boolean;
  failing: boolean;
  selectedFolder: string;
  selectedTag: string;

  constructor() {
    this.active = false;
    this.selected = true;
    this.failing = false;
    this.selectedFolder = null;
    this.selectedTag = null;
  }
}
