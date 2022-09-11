import { useRouter } from "next/router";
export const Car = () => {
  const router = useRouter();
  const { id } = router.query;
  return <div>Car {id}</div>;
};

export default Car;
