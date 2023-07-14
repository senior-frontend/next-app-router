import s from "./page.module.css";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  return { title: `Shoe ${params.slug}` };
}

export async function generateStaticParams() {
  const shoes = ["nike", "adidas"];
  return shoes.map((shoe: any) => ({
    slug: shoe,
  }));
}

const Page = ({ params }: { params: { slug: string } }) => {
  return <div className={s.root}>ID этого ботинка: {params.slug}</div>;
};

export default Page;
