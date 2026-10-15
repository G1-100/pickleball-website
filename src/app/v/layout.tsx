import Switcher from "./Switcher";

export default function VariationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Switcher />
    </>
  );
}
