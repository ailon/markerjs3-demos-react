export interface EditorState {
  mode: "select" | "create";
  canUndo: boolean;
  canRedo: boolean;
  canDelete: boolean;
}
