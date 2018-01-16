import { Injectable } from "@angular/core"
import { Http } from "@angular/http"

import 'rxjs/add/operator/toPromise';

import { User } from "../models/user-models"
import { Test } from "../models/main-models"

@Injectable()
export class UserService {
    private testUrl = "api/users";
    private user: User;
    constructor(private http: Http) { }

    hardcodeUser(): Promise<User> {
        this.user = new User();
        this.user.FirstName = "Yaroslav";
        this.user.LastName = "Gozak";
        this.user.Login = "yason97";
        this.user.Password = "yason97";
        this.user.UserID = 1;
        this.user.GroupID = 132;

        let test = new Test();
        test.TestID = 1;
        test.TestName = "Test";
        test.EstimatedTime = 20;

        let test2 = new Test();
        test.TestID = 2;
        test.TestName = "UKR";
        test.EstimatedTime = 20;

        this.user.PassedTests = new Array<Test>(2);
        this.user.PassedTests.push(test2);
        this.user.PassedTests.push(test);


        return Promise.resolve(this.user);
    }

    getUser(id: number): Promise<User> {
        return this.hardcodeUser();
        //return this.http.get(this.testUrl + '/' + id)
        //    .toPromise()
        //    .then(data => {
        //        console.log("User as user");
        //        this.user = data.json() as User;
        //        console.log(this.user);
        //        return this.user;
        //    })
        //    .catch(err => {
        //        console.log('Getting test by id in service was not successfull');
        //        console.log(err);
        //        return null;
        //    })
    }
}