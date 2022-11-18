export type SubmitRequest = {
  transactionId: string;
  payment: {
    creditCardToken: string;
  };
};

export function getPayment531(): SubmitRequest["payment"] {
  return {
    creditCardToken: "123xyz",
  };
}

//UI
type PaymentRequest = SubmitRequest["payment"];

export function getPayment532(): PaymentRequest {
  return {
    creditCardToken: "123xyz",
  };
}
