'use client';

import { PropertyAccessExpression } from 'typescript';
import { useApollo } from '../util/client';

type Props = {
  initialApolloState : string;
  children: React.ReactNode;
};

export defult function ApolloClientProvider (props: PropertyAccessExpression){
const apolloClient = useApollo(JSON.parse(props.initialApolloState));
return (
  <ApolloProvider client = {apolloClient}>{props.children}</ApolloProvider>
);

}
