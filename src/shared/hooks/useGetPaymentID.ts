import { useRouter } from 'next/router';

export const useGetPaymentID = () => {
  const router = useRouter();
  const { paymentType, paymentID } = router.query;

  return { paymentType, paymentID };
};
