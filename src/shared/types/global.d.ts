import { PaymentType } from 'types/payment/types';
export interface Dictionary<T> {
  [key: string]: T;
}

export type Disabled = boolean | (() => boolean);

export interface urlParams {
  paymentExternalID: string;
}
export interface urlParamsType {
  paymentExternalID: string;
  type: PaymentType;
}
export interface SimpleObject {
  [key: string]: string | number | Record<string, unknown> | undefined;
}

export type GenericObject = Dictionary<any>;

interface ObjectOf<T> {
  [key: string]: T;
}

export type ValueOfObject<T> = T extends { [key: string]: infer U } ? U : T;

export type Option = { text: string; value: string };

export type FormFieldPaymentElement = {
  type?: string;
  key: string;
  input_type?: string;
  label?: string;
  regex?: string;
  select?: boolean;
  options?: Option[];
} & ObjectOf<any>;

export type FormField = {
  name: string;
  type?: string;
  className?: string;
  autoComplete?: string;
  placeholder?: string;
  autoComplete?: string;
  options?: Option[];
  path?: string;
  style?: React.CSSProperties;
  select?: boolean;
  key?: string;
} & ObjectOf<any>;

export type AllFormField = FormField | FormFieldPaymentElement;
