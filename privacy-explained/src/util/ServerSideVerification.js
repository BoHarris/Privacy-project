import { verifyToken } from "../util/auth"; // custom function to verify JWT or session token

export async function getServerSideProps(contex) {
  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: { user },
  };
}
