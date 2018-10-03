/** 
 * Used to register all event types in the system for consistency. 
 * To emit any event, it must be register here
*/
export enum EventTypes {
    /** Emit after user had signIn successfully. @param<LoginResponse> */
    USERSIGNIN = "UserSignIn",
    /** Emit after user profile changes. @param<UserModel> */
    USERPROFILEUPDATED = "UserProfileUpdated",
    /** Emit once user signIn or token is refreshed.*/
    IDLETIMEOUTCHANGED = "IdleTimeoutChanged",
    /** Emit once the current user signout  */
    USERSIGNOUT="UserSignOut"
}
