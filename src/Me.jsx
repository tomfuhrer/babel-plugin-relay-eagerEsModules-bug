import { graphql } from "react-relay";

const MeQuery = graphql`
  query MeQuery {
    me {
      id
      name
    }
  }
`;

console.log(MeQuery);

