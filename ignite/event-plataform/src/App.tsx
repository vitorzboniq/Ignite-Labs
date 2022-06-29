import{ ApolloProvider, gql, useQuery} from "@apollo/client"
import { BrowserRouter } from "react-router-dom";
import { Lesson } from "./components/Lesson";
import { client } from "./lib/apollo"
import { Event } from "./pages/Event";
import { Router } from "./router";

// const GET_LESSONS_QUERY = gql `
//   query {
//     lessons {
//       id
//       title
//     }
//   }
// `

// interface Lesson {
//   id: string;
//   title: string;
// }

function App() {
  // const { data } = useQuery<{ lessons: Lesson[] }>(GET_LESSONS_QUERY)

  return (
        <ApolloProvider client={client}>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
        </ApolloProvider>
  )
}

export default App
