export default function AvatarPlaceholder({ fullName }: { fullName: string }) {
  const getFirstLetter = (text: string) => {
    return text.split(" ").map((item) => item[0].toLocaleUpperCase());
  };

  const firstLetters = getFirstLetter(fullName);

  return (
    <div
      className={`relative w-32 h-32 rounded-full overflow-hidden bg-primary-500 flex items-center justify-center font-medium text-4xl text-gray-100`}
    >
      <span>{firstLetters[0]}</span>
      <span>{firstLetters[1]}</span>
    </div>
  );
}
