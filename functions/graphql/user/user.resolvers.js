const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const user = async (_, args, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must logg to access this')
  }

  const user = await ctx.models.user.findOne({ _id: ctx.request.userId});
  return user
}

const findUsers = async (_, { input }, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must logg to access this')
  }

  if (!input.userId && !input.email) {
    throw new Error('You must supply either id or email')
  }

  const filter = {}

  if (input?.userId) {
    filter._id = input.userId
  }

  if (input?.email) {
    filter.email = input.email
  }

  const users = await ctx.models.user.find(filter);
  return users
}

const createUser = async (_, args, ctx) => {
  const existingUser = await ctx.models.user.findOne({email: args.input.email});

  if (existingUser) {
    throw new Error('User already exists');
  }

  const hash = await bcryptjs.hash(args.input.password, 12)

  const user = await ctx.models.user.create({
    email: args.input.email,
    password: hash
  })

  const token = jwt.sign(
    {
      userId: user._id.toString(),
      email: user.email
    }, 
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  )

  return { token, userId: user._id.toString() }
}

const loginUser = async (_, args, ctx) => {
  const user = await ctx.models.user.findOne({email: args.input.email})
  
  if (!user) {
    throw new Error('User not found')
  }

  const isEqual = await bcryptjs.compare(args.input.password, user.password)

  if (!isEqual) {
    throw new Error('Password is not correct')
  }

  const token = jwt.sign(
    {
      userId: user._id.toString(),
      email: user.email
    }, 
    process.env.JWT_SECRET, 
    { expiresIn: '2 days' }
  )

  return { token, userId: user._id.toString() }
}

const loggedInUser = (_, args, ctx) => {
  return {
    userId: ctx.request.userId 
  }
}

const updateUser = async (_, args, ctx) => {
  if (!ctx.request.userId) {
    throw new Error('You must be logged in to update a list')
  }
  
  const update = args.input

  
  const result = await ctx.models.user.findByIdAndUpdate(ctx.request.userId, update, { new: true })
  .exec()

  return result
}


module.exports = {
  Query: {
    user,
    loggedInUser,
    findUsers
  },
  Mutation: {
    loginUser,
    createUser,
    updateUser
  }
}