export interface File {
  fileID: number;
  name: string;
  path: string;
  owner: number;
  parentID: number;
}

export interface Folder {
  folderID: number;
  name: string;
  path: string;
  owner: number;
  parentID: number;
}

export interface FolderContent {
  files: File[];
  folders: Folder[];
}
