import ConsultantInfoCard from "../ConsultantInfoCard";

interface PageProps {
  params: {
    consultantId: string;
  };
}

export default function page({ params }: PageProps) {
  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <ConsultantInfoCard />
    </div>
  );
}
