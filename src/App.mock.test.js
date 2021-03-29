import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from './App';
import MockedCartItem from "./cartItem";

jest.mock("./cartItem", () => {
  return function DummyCartItem(props) {
    return (
      <div data-testid="dummycartitem">
        Dummy CartItem
      </div>
    );
  };
});

describe('Test Suite for App Component', () => {
  beforeAll(() => jest.spyOn(window, 'fetch'))
  afterAll(() => window.fetch.mockClear())

  test('renders with mocked out CartItem', async () => {
    window.fetch.mockResolvedValueOnce({
      status: 200,
      ok: true,
      json: async () => ({
        cartID: "777",
        cartItems: [
          {
            title: "TestItemOneTitle",
            description: "TestItemOneDesc",
            cost: 111,
            imageUrl: "https://m.media-amazon.com/images/I/51VCKN8qupL._AC_UL320_.jpg"
          }
        ]
      }),
    })

    render(<App cartId={777} />);
    expect(await screen.findByTestId("dummycartitem")).toBeInTheDocument();
    expect(screen.getByTestId('dummycartitem')).toHaveTextContent('Dummy CartItem')
  });
});

//XXXXXXXXXXXXXXXXXXXXXXXXXX
// import { loadStripe } from '@stripe/stripe-js';
// jest.mock('@stripe/stripe-js', () => {
//   return {
//     loadStripe: () => {
//       // TODO: Console log the "result" from an actual run and copy here
//       return Promise.resolve({})
//     }
//   };
// });

// var AWS = require('aws-sdk');
// jest.mock('aws-sdk', () => {
//   const SQSMocked = {
//     receiveMessage: jest.fn((paramscancel, cb) => {
//       // throw new Error('Test error');
//       setImmediate(() => {
//         return cb(null,
//           {
//             "ResponseMetadata": {
//               "RequestId": "7b2d9ba3-4395-5d9a-8d2f-ccc460220805"
//             }
//           });
//       })
//     }),
//     sendMessage: jest.fn((params, cb) => {
//       // throw new Error('Test error');
//       setImmediate(() => {
//         return cb(null,
//           {
//             "ResponseMetadata": {
//               "RequestId": "f38f44a5-f10c-59ac-8300-13c2d2c2c678"
//             },
//             "MD5OfMessageBody": "80148b94de01a2a26976475590570f3c",
//             "MessageId": "624b39d0-3ff4-48b5-a297-19a5158d7a9b",
//             "SequenceNumber": "18854449398826223616"
//           });
//       })
//     })
//   };
//   return {
//     SQS: jest.fn(() => SQSMocked),
//     config: { update: jest.fn(() => "called config") }
//   };
// });
