import { TestsService } from '../../services/tests.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Test, Question, Answer } from '../../models/main-models';
import { Http } from '@angular/http';
@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [Http]
})
export class HomeComponent implements OnInit {
    private tests: Test[];
    private results: number[];
    private selectedTest: Test;
    private currentQuestion: number;
    constructor(private testService: TestsService,
        private router: Router) { }
    ngOnInit() {
        this.testService.getAllTests().then(data => { this.tests = data; console.log(this.tests); });
    }
    selectTest(test: Test) {

        this.currentQuestion = 0;
        this.selectedTest = test;
        this.router.navigate(['/app/test', test.TestID]);
    }

}