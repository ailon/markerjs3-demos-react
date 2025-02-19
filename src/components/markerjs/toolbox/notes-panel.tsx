import { useEffect, useState } from "react";

import { NotesIcon } from "../ui/icons";
import ToolboxPanel, { PanelProps } from "../ui/toolbox-panel";
import { Textarea } from "@/components/ui/textarea";

const NotesPanel = ({ markerEditor, variant = "ghost" }: PanelProps) => {
  // @todo replace with markerEditor.notes in the next release
  const [notes, setNotes] = useState(markerEditor.marker.notes);

  useEffect(() => {
    setNotes(markerEditor.marker.notes);
  }, [markerEditor]);

  const handleNotesChange = (newValue: string) => {
    markerEditor.marker.notes = newValue;
    setNotes(newValue);
  };

  return (
    <ToolboxPanel
      title="Notes"
      icon={NotesIcon}
      variant={variant}
      className="w-80"
    >
      <div className="flex flex-col space-y-4">
        <Textarea
          className="min-h-24"
          value={notes}
          onChange={(e) => handleNotesChange(e.target.value)}
        />
      </div>
    </ToolboxPanel>
  );
};

export default NotesPanel;
