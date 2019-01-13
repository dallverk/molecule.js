import React from 'react';
import renderer from 'react-test-renderer';
import { MockedProvider } from 'react-apollo/test-utils';
import { GET_DOG_QUERY, Dog } from './dog';

const mocks = [
  {
    request: {
      query: GET_DOG_QUERY,
      variables: {
        name: 'Buck',
      },
    },
    result: {
      data: {
        dog: { id: '1', name: 'Buck', breed: 'bulldog' },
      },
    },
  },
];


it('renders without error', () => {
  renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Dog name="Buck" />
    </MockedProvider>,
  );
});

it('should render loading state initially', () => {
  const component = renderer.create(
    <MockedProvider mocks={[]}>
      <Dog name="Buck" />
    </MockedProvider>,
  );

  expect(component.toJSON()).toStrictEqual('Loading...');
});
