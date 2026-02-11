import { ReactNode } from "react";
import Button from "../../ui/Button";
import Link from "next/link";

type InfoWidget = {
  label: string;
  href: string;
  icon: ReactNode;
};

interface InfoWidgetProps {
  data?: InfoWidget[];
  className?: string;
}

export default function InfoWidget({ data, className }: InfoWidgetProps) {
  return data?.map((item) => (
    <Link
      className={` ${className} bg-secondary-muted flex flex-col items-center justify-around rounded-3xl shadow-md p-2 w-38 h-38 `}
      key={item.label}
      href={item.href}
    >
      {item.icon}

      <Button
        className="font-semibold  shadow-lg "
        variant="primary"
        size="small"
      >
        {item.label}
      </Button>
    </Link>
  ));
}
