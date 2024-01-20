import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function Post() {
  return <div>this is the post page</div>;
}

export const getServerSideProps = withPageAuthRequired(() => {
  return {
    props: {},
  };
});
