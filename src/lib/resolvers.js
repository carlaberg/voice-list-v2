import LISTS from '../queries/lists'
import { gql } from "@apollo/client";

export const clientSideResolvers = {
  Mutation: {
    updateCurrentList: (_, args, { cache }) => {
      const currentList = {
        __typename: 'CurrentList',
        name: args.name,
        items: args.items
      }
      cache.writeQuery({ 
        query: gql`
          query GetCurrentList {
            currentList
          }
        `,        
        data: { currentList } 
      })

      return currentList
    },
    updateListVisibilityFilter: (_, args, { cache }) => {
      const { userLists } = cache.readQuery({ query: LISTS })

      const itemToUpdate = userLists.findIndex((item) => item._id == args.id);
      const itemsBefore = userLists.slice(0, itemToUpdate);
      const itemsAfter = userLists.slice(itemToUpdate + 1);

      const updatedList = [
        ...itemsBefore,
        {
          ...userLists[itemToUpdate],
          open: !userLists[itemToUpdate].open
        },
        ...itemsAfter
      ];
      
      cache.writeQuery({
        query: gql`
          query GetUserLists {
            userLists
          }
        `,
        data: { 
          userLists: updatedList
         } 
      })

      return userLists
    }
  },
  List: {
    open: () => {
      return false
    }
  }
}