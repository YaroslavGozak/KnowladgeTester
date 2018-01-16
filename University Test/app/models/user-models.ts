import { Test } from './main-models';

export class User {
    public UserID: number;
    public FirstName: string;
    public LastName: string;
    public Login: string;
    public Password: string;
    public GroupID: number;
    public PassedTests: Test[];
    public AwailableTests: Test[];
    public AvatarUrl: string;
}

export class Group {
    public GroupID: number;
    public GroupName: string;
    public StudentsID: number[];
    public AvaliableTests: Test[];
}