import usersSchema from "../models/users-schema";
import Galeforce from "galeforce";
const galeforce = new Galeforce();

const RANKED_ICON = {
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
}; // returns a promise

const profileIcon = async (member) => {
  const getProfileIcon = (id) => {
    if(id != 0  || undefined || null){    
      const profileIcon = galeforce.lol.ddragon.profileIcon
        .art()
        .version("11.21.1")
        .assetId(id)
        .URL()
      return profileIcon
    } else {
      const profileIcon = 'error'
      return profileIcon
    } 
  }
 const user = await usersSchema.findOne({ "discord.memberId": member });
 
 const profileIcon = getProfileIcon(user.lol.profileIconId)
 return profileIcon;
};

export { RANKED_ICON, profileIcon };
