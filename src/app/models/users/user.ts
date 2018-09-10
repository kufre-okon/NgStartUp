import { IdNamePair } from "../common/id-name-pair";
import { Permission } from "../permission/permission";

export class UserCount {
    inActiveUsers: number;
    activeUsers: number;
    constructor() { }
}

export class UserModel {
    /** Readonly */
    userID: string;
    username: string
    firstName: string;
    lastName: string;
    /** Readonly */
    fullName: string;
    phoneNumber: string;
    /** Readonly */
    lastLoginDate: Date;
    /** Readonly */
    dateCreated: Date;
    /**
     * Reaonly - Use to determine if the user is using temporary password. 
     */
    isTemporaryPassword: boolean
    /**
     * Readonly - Use only when creating new user.       
     */
    password: string;
    /**
     * When set to true, an email is send to the user after creation.
     */
    sendActivationEmail: boolean;
    email: string;
    isActive: boolean;
    /**
     * Set if the user has been lockout of the system. Though may be still be active
     */
    lockoutEnabled: boolean;
    profilePictureUrl: string;
    /** 
     * Readonly. List of user permissions (i.e. distinct collection of all permissions assigned to the user)
    */
    permissions: Array<Permission>;
    /** 
     * Readonly. List of User roles
    */
    roles: Array<IdNamePair>;
    /**
     * Readonly. Determine if the user account has been activated
     */
    isEmailVerified: boolean;
}