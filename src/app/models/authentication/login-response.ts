import { IdNamePair } from "../common/id-name-pair";
import { Permission } from "../permission/permission";

export class CurrentUser {
  fullName: string;
  profilePictureUrl;
  token: string;
  tokenExpires: Date;
  permissions: Array<Permission>;
  roles: Array<IdNamePair>;
  username: string;
  userId: string;
  refreshToken: string;
  email:string;
}
