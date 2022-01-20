export const promiseCheck = promise =>
promise
.then(result => ({ok: true, result}))
.catch(error => Promise.resolve({ok: false, error}))

//EXAMPLE
// const usersLolAccountSet = async () => {
//   const users = await usersSchema.find({'discord.lolAccountSet': false})
//   return users
// }
// const test = await promiseCheck(usersLolAccountSet())
// console.log(test.result)