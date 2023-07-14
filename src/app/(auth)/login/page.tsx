const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const Page = async () => {
  await sleep(3000);

  // throw new Error("Some error");

  return <div>Login page</div>;
};

export default Page;
