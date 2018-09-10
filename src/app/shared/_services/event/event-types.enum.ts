/** 
 * Used to register all event types in the system for consistency. 
 * To emit any event, it must be register here
*/
export enum EventTypes {
    /** Emit after user had signIn successfully. @param<LoginResponse> */
    USERSIGNIN="UserSignIn"
}
