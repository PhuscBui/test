import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-4">
      <div className="z-10">
        <ModeToggle />
      </div>

      <Button className="mt-10" variant={"default"}>
        Click me
      </Button>
    </div>
  );
}
