import { Button } from "@/components/ui/button";
import { type IconComponent } from "./icons";

type Props = {
  icon: IconComponent;
  title: string;
} & React.ComponentProps<typeof Button>;

const ToolbarButton = ({ title, ...props }: Props) => {
  return (
    <Button
      variant="outline"
      className="bg-transparent"
      size="icon"
      title={title}
      {...props}
    >
      <props.icon />
    </Button>
  );
};

export default ToolbarButton;
