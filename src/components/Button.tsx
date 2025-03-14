import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

type ButtonOutlineProps = {
  text: string;
};

export function ButtonOutline({ text }: ButtonOutlineProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (typeof text === "string") {
      const uri = text.toLowerCase();
      navigate(`/admin/${uri}`);
    } else {
      console.error("Provided text is not a string.");
    }
  };
  return (
    <Button
      variant="outline"
      onClick={handleClick}
      className="w-[350px] ml-8 md:ml-0 md:w-52 text-center"
    >
      {text}
    </Button>
  );
}
