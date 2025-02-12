import { Button } from "@/components/ui/button";
import { type IconComponent } from "./icons";
import { ToolbarAction } from "@/models/toolbar";

type Props = {
  icon: IconComponent;
  title: string;
  action: ToolbarAction;
  onAction: (action: ToolbarAction) => void;
} & React.ComponentProps<typeof Button>;

const ToolbarActionButton = ({
  icon: Icon,
  title,
  action,
  onAction,
  ...props
}: Props) => {
  return (
    <Button
      variant="outline"
      className="bg-transparent"
      size="icon"
      title={title}
      onClick={() => onAction(action)}
      {...props}
    >
      <Icon />
    </Button>
  );
};

export default ToolbarActionButton;
