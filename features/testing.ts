import { Client } from "discord.js";
import usersSchema from "../models/users-schema";

export default (client: Client) => {
 const testFunction = async () => {
  const allRoles = () => {
   const allRoles = new Map();
   allRoles.set("Iron I", "929796439427653642");
   allRoles.set("Iron II", "929796490275205120");
   allRoles.set("Iron III", "929796526925049907");
   allRoles.set("Iron IV", "925833005602320394");
   allRoles.set("Bronze I", "929796334691700797");
   allRoles.set("Bronze II", "929796370020319302");
   allRoles.set("Bronze III", "929796392258519051");
   allRoles.set("Bronze IV", "929796413913706516");
   allRoles.set("Silver I", "929796217880330290");
   allRoles.set("Silver II", "929796255687802961");
   allRoles.set("Silver III", "929796280933318656");
   allRoles.set("Silver IV", "929796310792540171");
   allRoles.set("Gold I", "929796089001959485");
   allRoles.set("Gold II", "929796125253320735");
   allRoles.set("Gold III", "929796154168844359");
   allRoles.set("Gold IV", "929796193683406868");
   allRoles.set("Platinum I", "929795905752805386");
   allRoles.set("Platinum II", "929796019129024512");
   allRoles.set("Platinum III", "929796045993574430");
   allRoles.set("Platinum IV", "929796067770388521");
   allRoles.set("Diamond I", "929795768074784798");
   allRoles.set("Diamond II", "929795805475381258");
   allRoles.set("Diamond III", "929795834902642778");
   allRoles.set("Diamond IV", "929795859820998726");
   allRoles.set("Master", "929795725901049956");
   allRoles.set("Grandmaster", "929795664857170010");
   allRoles.set("Challenger", "929795524687704144");
   return allRoles;
  };
  const roles = allRoles();
  const users = await usersSchema.find({}).exec();
  const guild = client.guilds.cache.get("924806922874552320");
  if (!guild) return;
  for (const eachUser of users) {
   const member = guild.members.cache.get(eachUser.discord.memberId) ||
    (await guild.members.fetch(eachUser.discord.memberId).catch(() => null));
   if (!member) return;
   if (eachUser.discord.totalLp >= 100 && eachUser.discord.totalLp < 200) {
    member.roles.add(roles.get("Iron III"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Iron III" }
    );
   } else if (eachUser.discord.totalLp >= 200 && eachUser.discord.totalLp < 300) {
    member.roles.add(roles.get("Iron II"));
    await usersSchema.updateOne(
        { 'lol.puuid': eachUser.lol.puuid }, 
        { 'discord.rank': "Iron II" });
   } else if (eachUser.discord.totalLp >= 300 && eachUser.discord.totalLp < 400) {
    member.roles.add(roles.get("Iron I"));
    await usersSchema.updateOne(
        { 'lol.puuid': eachUser.lol.puuid }, 
        { 'discord.rank': "Iron I" });
   } else if (eachUser.discord.totalLp >= 400 && eachUser.discord.totalLp < 500) {
    member.roles.add(roles.get("Bronze IV"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Bronze IV" }
    );
   } else if (eachUser.discord.totalLp >= 500 && eachUser.discord.totalLp < 600) {
    member.roles.add(roles.get("Bronze III"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Bronze III" }
    );
   } else if (eachUser.discord.totalLp >= 600 && eachUser.discord.totalLp < 700) {
    member.roles.add(roles.get("Bronze II"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Bronze II" }
    );
   } else if (eachUser.discord.totalLp >= 700 && eachUser.discord.totalLp < 800) {
    member.roles.add(roles.get("Bronze I"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Bronze I" }
    );
   } else if (eachUser.discord.totalLp >= 800 && eachUser.discord.totalLp < 900) {
    member.roles.add(roles.get("Silver IV"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Silver IV" }
    );
   } else if (eachUser.discord.totalLp >= 900 && eachUser.discord.totalLp < 1000) {
    member.roles.add(roles.get("Silver III"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Silver III" }
    );
   } else if (eachUser.discord.totalLp >= 1000 && eachUser.discord.totalLp < 1100) {
    member.roles.add(roles.get("Silver II"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Silver II" }
    );
   } else if (eachUser.discord.totalLp >= 1100 && eachUser.discord.totalLp < 1200) {
    member.roles.add(roles.get("Silver I"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Silver I" }
    );
   } else if (eachUser.discord.totalLp >= 1200 && eachUser.discord.totalLp < 1300) {
    member.roles.add(roles.get("Gold IV"));
    await usersSchema.updateOne(
        { 'lol.puuid': eachUser.lol.puuid }, 
        { 'discord.rank': "Gold IV" });
   } else if (eachUser.discord.totalLp >= 1300 && eachUser.discord.totalLp < 1400) {
    member.roles.add(roles.get("Gold III"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Gold III" }
    );
   } else if (eachUser.discord.totalLp >= 1400 && eachUser.discord.totalLp < 1500) {
    member.roles.add(roles.get("Gold II"));
    await usersSchema.updateOne(
        { 'lol.puuid': eachUser.lol.puuid }, 
        { 'discord.rank': "Gold II" });
   } else if (eachUser.discord.totalLp >= 1500 && eachUser.discord.totalLp < 1600) {
    member.roles.add(roles.get("Gold I"));
    await usersSchema.updateOne(
        { 'lol.puuid': eachUser.lol.puuid }, 
        { 'discord.rank': "Gold I" });
   } else if (eachUser.discord.totalLp >= 1600 && eachUser.discord.totalLp < 1700) {
    member.roles.add(roles.get("Platinum IV"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Platinum IV" }
    );
   } else if (eachUser.discord.totalLp >= 1700 && eachUser.discord.totalLp < 1800) {
    member.roles.add(roles.get("Platinum III"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Platinum III" }
    );
   } else if (eachUser.discord.totalLp >= 1800 && eachUser.discord.totalLp < 1900) {
    member.roles.add(roles.get("Platinum II"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Platinum II" }
    );
   } else if (eachUser.discord.totalLp >= 1900 && eachUser.discord.totalLp < 2000) {
    member.roles.add(roles.get("Platinum I"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Platinum I" }
    );
   } else if (eachUser.discord.totalLp >= 2000 && eachUser.discord.totalLp < 2100) {
    member.roles.add(roles.get("Diamond IV"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Diamond IV" }
    );
   } else if (eachUser.discord.totalLp >= 2100 && eachUser.discord.totalLp < 2200) {
    member.roles.add(roles.get("Diamond III"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Diamond III" }
    );
   } else if (eachUser.discord.totalLp >= 2200 && eachUser.discord.totalLp < 2300) {
    member.roles.add(roles.get("Diamond II"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Diamond II" }
    );
   } else if (eachUser.discord.totalLp >= 2300 && eachUser.discord.totalLp < 2400) {
    member.roles.add(roles.get("Diamond I"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Diamond I" }
    );
   } else if (eachUser.discord.totalLp >= 2400 && eachUser.discord.totalLp < 2500) {
    member.roles.add(roles.get("Master"));
    await usersSchema.updateOne(
        { 'lol.puuid': eachUser.lol.puuid }, 
        { 'discord.rank': "Master" });
   } else if (eachUser.discord.totalLp >= 2500 && eachUser.discord.totalLp < 2600) {
    member.roles.add(roles.get("Grandmaster"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Grandmaster" }
    );
   } else if (eachUser.discord.totalLp >= 2600) {
    member.roles.add(roles.get("Challenger"));
    await usersSchema.updateOne(
     { 'lol.puuid': eachUser.lol.puuid },
     { 'discord.rank': "Challenger" }
    );
   }
  }
 };
 try{setInterval(testFunction, 3 * 60000);} 
 catch (err) {
     console.log(err)
 }

};
export const config = {
 displayName: "testing",
        dbName: "TEST",
};
