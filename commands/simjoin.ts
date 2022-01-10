import { ICommand } from "wokcommands";

export default {
    category: 'testing',
    description: 'Simulates a join.',

    slash: true,
    testOnly: true,

    callback: ({member, client}) => {
        client.emit('guildMemberAdd', member)
        return 'Join simulated'
    }
} as ICommand