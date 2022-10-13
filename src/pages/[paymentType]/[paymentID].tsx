// Imports
import { Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { NextPage } from 'next';
import { useGetPaymentID } from 'shared/hooks/useGetPaymentID';
import { PaymentDetails } from 'shared/types/payment';

interface Props {
  dto: PaymentDetails;
}
// export const getStaticProps: GetStaticProps<Props> = async () => {
//   // const { id } = params as Params;
//   const dto = await api.fetch(ViewID.PIX);

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

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: 'blocking',
//   };
// };

//CSS-In-JS
const PaymentInit: NextPage<Props> = () => {
  // const styles = makeStyles(({theme}))=>({
  //   buttonT1: {
  //     color: theme.palette.secondary.main,
  //     backgroundColor: theme.backgroundTest,
  //     ...theme.specificTypographyBodyText1116pxRegular,
  //   },
  // });
  const styles = {
    buttonT1: `color:#ccc`,
  };

  const Root = styled('h1')(({ theme }) => ({
    color: theme.palette.primary.main,
    backgroundColor: theme.backgroundTest,
    [`& .${styles.buttonT1}`]: {
      color: 'red',
      // borderRadius: theme.shape.radius,
    },
  }));
  const ButtonT1 = styled('button')(({ theme }) => ({
    color: theme.palette.secondary.main,
    backgroundColor: theme.backgroundTest,
    // specificTypographyBodyText1116pxRegular
    ...theme.specificTypographyBodyText1116pxRegular,
  }));
  const ButtonT2 = styled('button')(({ theme }) => ({
    color: theme.palette.secondary.main,
    backgroundColor: theme.backgroundTest,
    ...theme.specificTypographyBodyText1116pxRegular,
  }));

  const { paymentType, paymentID } = useGetPaymentID();
  // const { isError, isSuccess, isLoading, isCreated, displayView } = useMockup(
  // const { response } = useMockup(ViewID.ACCOUNT_BANK_ID);
  // const response = await api.fetch(ViewID.ACCOUNT_BANK_ID);

  // console.log('log desde page', dto);

  return (
    <>
      <Button variant="contained" color="primary">
        {'enviar'}
      </Button>
      <Root>{paymentType}</Root>

      <ButtonT1>{'ButtonT1'}</ButtonT1>
      <ButtonT2>{'buttonLocal'}</ButtonT2>
      <Typography variant="specificTypographyBodyText1116pxRegular">{'test variant'}</Typography>
      <Typography variant="textRegular">{'donde esta eto'}</Typography>
      <h1>{paymentID}</h1>
    </>
  );
};

export default PaymentInit;
