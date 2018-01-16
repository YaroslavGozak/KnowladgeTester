import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user-models';
import { Test } from '../../models/main-models';
@Component({
    selector: 'user-settings',
    templateUrl: './user-settings.component.html',
    styleUrls: ['./user-settings.component.css'],
    providers: [Http]
})

export class UserSettingsComponent implements OnInit {
    private user: User;
    private passedTests: Test[];
    private defaultImagePath: string = "/app/images/defaultAvatar.png";

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.hardcodeUser()
            .then(
            data => {
                this.user = data;
                if (this.user.AvatarUrl == null || this.user.AvatarUrl == "") {
                    this.user.AvatarUrl = this.defaultImagePath;
                    this.passedTests = this.user.PassedTests;
                }
            }
        );
    }
}