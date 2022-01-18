import usersSchema from "../models/users-schema";
import Galeforce from "galeforce";
const galeforce = new Galeforce();

const rankedIcon = {
 iron: galeforce.lol.ddragon.profileIcon
  .art()
  .version("11.21.1")
  .assetId(5123)
  .URL(),
 bronze: galeforce.lol.ddragon.profileIcon
  .art()
  .version("11.21.1")
  .assetId(5124)
  .URL(),
 silver: galeforce.lol.ddragon.profileIcon
  .art()
  .version("11.21.1")
  .assetId(5125)
  .URL(),
 gold: galeforce.lol.ddragon.profileIcon
  .art()
  .version("11.21.1")
  .assetId(5126)
  .URL(),
 platinum: galeforce.lol.ddragon.profileIcon
  .art()
  .version("11.21.1")
  .assetId(5127)
  .URL(),
 diamond: galeforce.lol.ddragon.profileIcon
  .art()
  .version("11.21.1")
  .assetId(5128)
  .URL(),
 master: galeforce.lol.ddragon.profileIcon
  .art()
  .version("11.21.1")
  .assetId(5128)
  .URL(),
 grandmaster: galeforce.lol.ddragon.profileIcon
  .art()
  .version("11.21.1")
  .assetId(5129)
  .URL(),
 challenger: galeforce.lol.ddragon.profileIcon
  .art()
  .version("11.21.1")
  .assetId(5130)
  .URL(),
};
const getProfileIcon = async (member) => {
 const user = await usersSchema.findOne({ "discord.memberId": member });
 const profile = await galeforce.lol
  .summoner()
  .region(galeforce.region.lol.NORTH_AMERICA)
  .puuid(user.lol.puuid)
  .exec();
 const profileIdNumber = profile.profileIconId;
 const profileIcon = galeforce.lol.ddragon.profileIcon
  .art()
  .version("11.21.1")
  .assetId(profileIdNumber)
  .URL();
 return profileIcon;
};

// Testing !
// const getRankedIcon = async (member) => {
//     const user = await usersSchema.findOne({'memberId': member})
//     const profile = await galeforce.lol.league.entries()
//     .summonerId('JgGeZNMMpM8ofkZ6R1dXMJtd97VxEZ2lCwplanLVY4K6HQE')
//     const profileRankedIdNumber = profile.tier
//     const profileIcon = galeforce.lol.ddragon.profileIcon.art()
//     .version('11.21.1')
//     .assetId(profileRankedIdNumber)
//     .URL()
//     return profileIcon
// }

export { rankedIcon, getProfileIcon };
