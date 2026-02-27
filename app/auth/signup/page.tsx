import SignupForm from "./SignupForm";

export default function page() {
  return (
    <div className="absolute inset-0 bg-default-color grid grid-cols-1 md:grid-cols-2 ">
      <SignupForm />
      <div className="">dd</div>
    </div>
  );
}
