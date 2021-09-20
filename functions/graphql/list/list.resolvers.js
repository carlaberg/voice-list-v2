const List = require('./list.model')
const ListItem = require('../listitem/listitem.model')

const list = async (_, args, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to see this list')
  }
  
  return await List.findById(args.id).populate('collaborators')
}

const userLists = async (_, __, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to query a list')
  }

  return await List.find({ createdBy: ctx.request.userId }).populate('collaborators');
}

const collaboratorLists = async (_, __, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to query a list')
  }

  return await List.find({ 'collaborators._id': ctx.request.userId }).populate('collaborators');
}

const createList = async (_, args, ctx) => {
  // 1. Check if user is logged in
  
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to create a list')
  }

  // Save a post to the database and return the saved post from the resolver
  return List.create({ ...args.input, createdBy: ctx.request.userId })
}

const createListWithItems = async (_, args, ctx) => {
  // 1. Check if user is logged in
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to create a list')
  }

  // Save a post to the database and return the saved post from the resolver
  const list = await List.create({
    name: args.input.name,
    createdBy: ctx.request.userId })

    const listItems = args.input.items.map((item) => {
      return {
        text: item,
        list: list._id
      }
    })
    await ListItem.create(listItems)
    return list
}

const updateList = async (_, args, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to update a list')
  }
  
  const update = args.input
  
  return List.findByIdAndUpdate(args.id, update, { new: true })
    .exec()
}

const deleteList = async (_, args, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to delete a list')
  }
  
  return List.findByIdAndRemove(args.id)
    .exec()
}

const deleteListAndItems = async (_, args, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to delete a list')
  }
  
  const res = await ListItem.deleteMany({ list: args.id }).exec()

  if (res.ok) {
    return await List.findByIdAndRemove(args.id).exec()
  } 
}

module.exports = {
  Query: {
    list,
    userLists,
    collaboratorLists
  },
  Mutation: {
    createList,
    createListWithItems,
    updateList,
    deleteList,
    deleteListAndItems
  },
  List: {
    async items(list, _, { models }) {
      const items = await models.listitem.find({ list: list._id })
      return items
    }
  }
}