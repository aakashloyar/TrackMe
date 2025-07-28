import Image from "next/image";

export default function Home() {
  return (
    <div>
      { process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
    </div>
  );
}
