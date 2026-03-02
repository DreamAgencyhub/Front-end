export default function VideoBox() {
  return (
    <div className="flex flex-col w-full items-center gap-6">
      <h3 className="text-2xl font-bold w-full lg:max-w-4xl  border-y text-center py-4 border-dashed ">
        Maria Smith
      </h3>
      <div className=" relative rounded-4xl aspect-video w-full lg:max-w-4xl self-center bg-gray-600">
        <p className=" absolute bottom-4 left-3 text-xs text-gray-200 ">
          Entrepreneurship and business improvement consulting
        </p>
      </div>
    </div>
  );
}
