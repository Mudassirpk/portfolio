export default function Heading({
  theme,
  title,
}: {
  title: string;
  theme?: "dark" | "light";
}) {
  return (
    <h2
      className={`w-full text-3xl text-center font-semibold ${theme && `text-${theme === "dark" ? "white" : "m-blue-dark"}`}`}
    >
      {title}
    </h2>
  );
}
