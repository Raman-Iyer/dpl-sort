import { ViceCaptainSelectModalProps } from "@/interfaces/modals";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  DialogHeader,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
} from "../ui/dialog";

const ViceCaptainSelectModal = ({
  teamIndex,
  handleSelectViceCaptain,
  membersList,
}: ViceCaptainSelectModalProps) => {
  const [viceCaptain, setViceCaptain] = useState<string>("");

  const handleViceCaptainChoose = () => {
    handleSelectViceCaptain(teamIndex, viceCaptain);
  };

  const handleViceCaptainChange = (viceCaptain: string) => {
    setViceCaptain(viceCaptain);
  };

  return (
    <Dialog>
      <DialogTrigger className="font-body">
        <Button>Select Flag Bearer</Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl w-auto font-body">
        <DialogHeader>
          <DialogTitle className="font-heading">
            Choose your flag bearer
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-4">
          {membersList.map((member) => (
            <div
              className={`w-[100%] py-2 px-1 flex justify-center items-center rounded bg-slate-500 cursor-pointer border-4 ${
                viceCaptain === member ? "border-white" : "border-transparent"
              }`}
              onClick={() => handleViceCaptainChange(member)}
            >
              {member}
            </div>
          ))}
        </div>
        <DialogFooter>
          <Button onClick={handleViceCaptainChoose}>Select</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ViceCaptainSelectModal;
