import ModalProvider from "@/app/components/ui/modal/ModalContext";
import CommentsSection from "../CommentsSection";
import ConsultantInfoCard from "../ConsultantInfoCard";
import Reservation from "../Reservation";
import VideoBox from "../../../../../components/ui/VideoBox";

interface PageProps {
  params: {
    consultantId: string;
  };
}

export default function page({ params }: PageProps) {
  return (
    <ModalProvider>
      <div className="flex flex-col items-center gap-8 py-8 md:p-8">
        <ConsultantInfoCard />
        <VideoBox title="Maria Smith" border titleAlign="text-center" />
        <Reservation />
        <CommentsSection />
      </div>
    </ModalProvider>
  );
}
