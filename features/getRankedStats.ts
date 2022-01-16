import { Client } from "discord.js";
import usersSchema from "../models/users-schema";
import Galeforce from "galeforce";
const galeforce = new Galeforce();

export default (client: Client) => {}

export const config = {
    displayName: 'getRankedStats',
    dbName: 'GETRANKEDSTATS'}