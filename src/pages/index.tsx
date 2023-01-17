import { NextPage } from "next";
import Link from "next/link";

type IndexPageProps = {};

const IndexPage: NextPage<IndexPageProps> = () => {
  return (
    <div>
      <h1>Index</h1>

      <ul>
        <li>
          <Link href="/debug">Debug</Link>
        </li>
        <li>
          <Link href="/hydration-success">Hydration Success</Link>
        </li>
        <li>
          <Link href="/hydration-error">Hydration Error</Link>
        </li>
      </ul>
    </div>
  );
};

export default IndexPage;
