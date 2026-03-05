import { ReactNode } from "react";
import { CloseXSvgrepoCom } from "../../icons";
import { useModal } from "./ModalContext";

export default function ModalHeader({ children }: { children: ReactNode }) {
  const { close } = useModal();

  return (
    <div className=" relative w-full py-2">
      <CloseXSvgrepoCom
        onClick={() => close()}
        className="absolute right-0 bottom-0 top-0 cursor-pointer stroke-none fill-text-default text-xl "
      />
      {children}
    </div>
  );
}
