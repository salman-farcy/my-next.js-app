

import Counter from "@/components/Counter/page";
import Link from "next/link";




const HomePage = () => {
  // console.log('Hello World');
  // throw new Error();
  return (
    <div>
      <h1 className='text-3xl'>This is next app</h1>
      <Counter />
      <Link href="/about">
        <button className="btn btn-accent">About</button>
      </Link>

      <Link href="/news">
        <button className="btn btn-primary">News</button>
      </Link>
    </div>
  );
};

export default HomePage;