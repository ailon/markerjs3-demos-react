import { Button } from "@/components/ui/button";
import { type IconComponent } from "./icons";
import { ToolbarAction } from "@/models/toolbar";
import { Toggle } from "@/components/ui/toggle";

type Props = {
  icon: IconComponent;
  title: string;
  buttonType?: "button" | "toggle";
  variant?: "ghost" | "outline";
  toggled?: boolean;
  disabled?: boolean;
  action: ToolbarAction;
  onAction: (action: ToolbarAction) => void;
};

const ToolbarActionButton = ({
  icon: Icon,
  title,
  buttonType,
  variant = "ghost",
  toggled,
  disabled,
  action,
  onAction,
}: Props) => {
  return (
    <>
      {(buttonType === undefined || buttonType === "button") && (
        <Button
          variant={variant}
          className="bg-transparent"
          size="icon"
          title={title}
          disabled={disabled}
          onClick={() => onAction(action)}
        >
          <Icon />
        </Button>
      )}
      {buttonType === "toggle" && (
        <Toggle
          variant={variant === "ghost" ? "default" : "outline"}
          className="bg-transparent"
          title={title}
          pressed={toggled ? true : false}
          disabled={disabled}
          onClick={() => onAction(action)}
        >
          <Icon />
        </Toggle>
      )}
    </>
  );
};

export default ToolbarActionButton;
