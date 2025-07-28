import Image from "next/image";

export default function Home() {
  console.log("*******", process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY);
  return (
    <div>
      { process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
    </div>
  );
}
