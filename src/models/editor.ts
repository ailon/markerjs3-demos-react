export interface EditorState {
  mode: "select" | "create" | "rendering";
  canUndo: boolean;
  canRedo: boolean;
  canDelete: boolean;
}
