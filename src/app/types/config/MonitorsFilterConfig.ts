export class MonitorsFilterConfig {
  active: boolean;
  selected: boolean;
  failing: boolean;
  selectedFolderId: number;
  selectedTag: string;

  constructor() {
    this.active = false;
    this.selected = true;
    this.failing = false;
    this.selectedFolderId = null;
    this.selectedTag = null;
  }
}
