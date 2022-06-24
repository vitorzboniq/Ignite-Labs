import { ApolloClient, InMemoryCache} from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rrmn7x1hag01wgfpsxff4y/master',
    cache: new InMemoryCache()
})