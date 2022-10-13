// import { useCallOnInit } from 'helpers/hooks';
import { GetStaticPaths } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { useState } from 'react';
import api from 'shared/api/dtos.mock';
// import { useAppDispatch } from 'redux/hooks';
// import { setPaymentDetails } from 'redux/payment';
import { PaymentDetails, ViewID } from 'shared/types/payment';

interface Params extends ParsedUrlQuery {
  id: string;
}

// export const getStaticProps: GetStaticProps<ViewID, Params> = async ({ params }) => {
//   const { id } = params as Params;
//   const dto = await api.fetch(id);

//   if (!dto) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: {
//       dto,
//     },
//   };
// };

export const getStaticPaths: GetStaticPaths = async () => {
  // const list = await api.list();

  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const useMockup = async (customDTO: ViewID) => {
  const isError = <boolean>false;
  const isCreated = <boolean>false;
  const isSuccess = <boolean>false;
  const [displayView, setDisplayView] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  let response: PaymentDetails;
  try {
    response = await api.fetch(customDTO);
    console.log(response);

    return response;
  } catch (e) {
    console.log(e);
  }
  // return { response };

  // const dispatch = useAppDispatch();
  // const mockResponse: PaymentDetails = Object.entries(DTOs)
  //   .filter(([key]) => {
  //     return key === customDTO;
  //   })
  //   .reduce((_prev, [, value]) => {
  //     return value;
  //   }, {} as PaymentDetails);

  // useCallOnInit(async () => {
  //   await getMockPayment();
  // });

  // const getMockPayment = useCallback(async () => {
  //   // dispatch(setPaymentDetails(mockResponse));
  //   // setDisplayView(DISPLAY_STATE.includes(mockResponse.payment.status));
  //   // setTimeout(() => {
  //   //   setLoading(false);
  //   // }, 500);
  // }, []);
};
