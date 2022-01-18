// import { Client, MessageEmbed, TextBasedChannel, Message } from "discord.js";

// export default  async (client: Client) => {
//     client.on('unhandledRejection', async (reason, p) => {
//         console.log('[Anti-crash] :: Unhandled Rejection/Catch')
//         console.log(reason, p)

//         const errEmbed = new MessageEmbed()
//         .setColor('RED')
//         .setTitle("⚠ New Error")
//         .setDescription("An error just occured in the bot console!**\n\nERROR:\n\n** ```" + reason + "\n\n" + p + "```")
//         .setTimestamp()
//         .setFooter("Anti-Crash System")

//         const guild = client.guilds.cache.get('924806922874552320')
//         const errChannel = await guild.channels.fetch('932441744954507275') as TextBasedChannel
//         errChannel.send({embeds: [errEmbed]})

//     })
//     client.on('uncaughtException', async (err, origin) => {
//         console.log('[Anti-crash] :: Uncaught Exception/Catch')
//         console.log(err, origin)

//         const errEmbed = new MessageEmbed()
//         .setColor('RED')
//         .setTitle("⚠ New Error")
//         .setDescription("An error just occured in the bot console!**\n\nERROR:\n\n** ```" + err + "\n\n" + origin + "```")
//         .setTimestamp()
//         .setFooter("Anti-Crash System")

//         const guild = client.guilds.cache.get('924806922874552320')
//         const errChannel = await guild.channels.fetch('932441744954507275') as TextBasedChannel
//         errChannel.send({embeds: [errEmbed]})
//     })
//     client.on('uncaughtExceptionMonitor', async (err, origin) => {
//         console.log('[Anti-crash] :: Uncaught Exception/Catch (MONITOR)')
//         console.log(err, origin)

//         const errEmbed = new MessageEmbed()
//         .setColor('RED')
//         .setTitle("⚠ New Error")
//         .setDescription("An error just occured in the bot console!**\n\nERROR:\n\n** ```" + err + "\n\n" + origin + "```")
//         .setTimestamp()
//         .setFooter("Anti-Crash System")

//         const guild = client.guilds.cache.get('924806922874552320')
//         const errChannel = await guild.channels.fetch('932441744954507275') as TextBasedChannel
//         errChannel.send({embeds: [errEmbed]})
//     })
//     client.on('multipleResolves', async (type, promise, reason) => {
//         console.log('[Anti-crash] :: Multiple Resolves')
//         console.log(type, promise, reason)

//         const errEmbed = new MessageEmbed()
//         .setColor('RED')
//         .setTitle("⚠ New Error")
//         .setDescription("An error just occured in the bot console!**\n\nERROR:\n\n** ```" + type + "\n\n" + promise + "\n\n" + reason + "```")
//         .setTimestamp()
//         .setFooter("Anti-Crash System")

//         const guild = client.guilds.cache.get('924806922874552320')
//         const errChannel = await guild.channels.fetch('932441744954507275') as TextBasedChannel
//         errChannel.send({embeds: [errEmbed]})
//     })

// }
// export const config = {
//     displayName: "ErrorHandling",
//     dbName: "ERR_HANDLING",
//    };
