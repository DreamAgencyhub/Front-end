import Modal from "@/app/components/ui/modal/Modal";
// import { useGetUser } from "@/app/hooks/useGetUser";
import MobileSidebar from "./MobileSidebar";
import Sidebar from "./Sidebar";
import Button from "@/app/components/ui/Button";
import { useModal } from "../../components/ui/modal/ModalContext";
import useSignout from "../../hooks/useSignout";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

export default function Dashboard() {
  const { close } = useModal();
  const { mutate: signout, isPending, isError } = useSignout();
  const router = useRouter();
  const query = useQueryClient();

  const handleSingOut = () => {
    signout();

    if (!isError) {
      toast.success("You've logged out successfully!");
      close();
      query.resetQueries({ queryKey: ["currentUser", null] });
      router.replace("/");
    }

    if (isError) {
      toast.error("Something went wrong signing out!");
    }
  };

  return (
    <>
      <div>
        <MobileSidebar />
        <div className="hidden lg:block">
          <Sidebar />
        </div>
      </div>

      <Modal.Window name="signout">
        <Modal>
          <Modal.Header>
            <div className=" w-120 mb-1 ">
              <span className="text-yellow-500 font-semibold  ">Warning!</span>
            </div>
            <hr className="text-text-muted/30" />
          </Modal.Header>
          <Modal.Body>
            <span className="text-text-default font-semibold">
              Are you sure you want to sign out?!
            </span>
          </Modal.Body>

          <Modal.Footer>
            <div className="flex flex-row items-center py-2 justify-end gap-4">
              <Button
                onClick={() => close()}
                variant="secondary"
                size="small"
                className="w-20"
              >
                <span>Cancel</span>
              </Button>
              <Button
                onClick={handleSingOut}
                variant="danger"
                size="small"
                className="w-20"
              >
                <span>Sign Out</span>
              </Button>
            </div>
          </Modal.Footer>
        </Modal>
      </Modal.Window>
    </>
  );
}
