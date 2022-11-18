import { useRouter } from "next/router";
import Link from "next/link";

const CoffeeStore = () => {
  const router = useRouter();
  console.log("router", router);
  return (
    <div>
      Coffee Store page
      <br />
      <Link href="/">Back to home</Link>
      <br />
      <Link href="/coffee-store/dynamic">go to page dynamically</Link>
    </div>
  );
};

export default CoffeeStore;
