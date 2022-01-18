import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";
import usersSchema from "../models/users-schema";
import { rankedIcon, getProfileIcon } from "../Images/images";

export default {
 category: "Account",
 description: "Get your profile information",
 slash: true,
 testOnly: true,
 options: [
  {
   name: "summoner-name", // Must be lower case
   description: "The summoner you want to look up",
   required: true,
   type: 3, // This argument is a string
  },
 ],

 callback: async ({ interaction, member }) => {
  try {
   const summonerName = interaction.options.getString("summoner-name");
   const getTheRankIcon = (rank: String) => {
    if (rank.includes("iron")) {
     return rankedIcon.iron;
    } else if (rank.includes("Bronze")) {
     return rankedIcon.bronze;
    } else if (rank.includes("Silver")) {
     return rankedIcon.silver;
    } else if (rank.includes("Gold")) {
     return rankedIcon.gold;
    } else if (rank.includes("Platinum")) {
     return rankedIcon.platinum;
    } else if (rank.includes("Diamond")) {
     return rankedIcon.diamond;
    }
   };
   const getTheColor = (rank: String) => {
    if (rank.includes("iron")) {
     return "#1F8B4C";
    } else if (rank.includes("Bronze")) {
     return "#A84300";
    } else if (rank.includes("Silver")) {
     return "#95A5A6";
    } else if (rank.includes("Gold")) {
     return "#F1C40F";
    } else if (rank.includes("Platinum")) {
     return "#1ABC9C";
    } else if (rank.includes("Diamond")) {
     return "#3498DB";
    }
   };
   const user = await usersSchema.findOne({ "lol.name": summonerName });
   const top10users = await usersSchema.find().sort({ "discord.totalLp": -1 });
   let position = 0;
   for (let i = 0; i < top10users.length; i++) {
    if (top10users[i].discord.memberId === member.id) {
     ++position;
     break;
    } else {
     position++;
    }
   }
   const profileIcon = await getProfileIcon(user._id);
   const theRankIcon = getTheRankIcon(user.discord.rank);
   const theColor = getTheColor(user.discord.rank);
   let winRateFlex = 0;
   let winRateSolo = 0;
   if ("rankedFlexSr" in user.lol.ranked) {
    winRateFlex = Math.floor(
     (Number(user.lol.ranked.rankedFlexSr.wins) /
      (Number(user.lol.ranked.rankedFlexSr.wins) +
       Number(user.lol.ranked.rankedFlexSr.losses))) *
      100
    );
   }
   if ("rankedSolo5x5" in user.lol.ranked) {
    winRateSolo = Math.floor(
     (Number(user.lol.ranked.rankedSolo5x5.wins) /
      (Number(user.lol.ranked.rankedSolo5x5.wins) +
       Number(user.lol.ranked.rankedSolo5x5.losses))) *
      100
    );
   }
   const embed = new MessageEmbed()
    .setThumbnail(profileIcon)
    .setColor(theColor)
    .setFooter(
     "leschums",
     "https://cdn.discordapp.com/app-icons/924806180755341342/fae9c65d008111cb26961f52d8dfb022.png?size=256"
    )
    .setTimestamp()
    .setImage("")
    .setAuthor({ name: String(user.lol.name), iconURL: theRankIcon })
    .addField(
     `${user.discord.rank} ${user.discord.totalLp} lps`,
     `**Rank: ${position}**`
    )
    .addField(
     "**```League of Legends```**",
     `-------------------------------------------`
    )
    .addField(`Level`, String(user.lol.summonerLevel), true);
   if ("rankedFlexSr" in user.lol.ranked) {
    embed.addField(
     "Flex",
     `${user.lol.ranked.rankedFlexSr.tier} ${user.lol.ranked.rankedFlexSr.rank} ◇ ${user.lol.ranked.rankedFlexSr.leaguePoints} lp ◇ ${user.lol.ranked.rankedFlexSr.wins} wins ◇ ${user.lol.ranked.rankedFlexSr.losses} losses ◇ Winrate: ${winRateFlex}%`
    );
   }
   if ("rankedSolo5x5" in user.lol.ranked) {
    embed.addField(
     "Solo/Duo",
     `${user.lol.ranked.rankedSolo5x5.tier} ${user.lol.ranked.rankedSolo5x5.rank} ◇ ${user.lol.ranked.rankedSolo5x5.leaguePoints} ◇ ${user.lol.ranked.rankedSolo5x5.wins} wins ◇ ${user.lol.ranked.rankedSolo5x5.losses} losses ◇ Winrate: ${winRateSolo}%`
    );
   }
   return embed;
  } catch (err) {
   await interaction.reply({
    content: `Summoner does not exist or mispelled`,
   });
  }
 },
} as ICommand;
