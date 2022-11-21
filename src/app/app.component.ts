import { STRING_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';
import { memberType } from './interface/memberType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'angular-template';
  numberOfTeams: number = 0;
  newmember: memberType["string"] = "";
  memberList: string[] = [];
  errorMessage: string = "";
  teams: string[][] = [];
  onInput(value: string): string {
    return this.newmember = value;
  }
  addMember(): any {
    if (!this.newmember) {
      return this.errorMessage = "Member can't be empty "
    }
    this.memberList.push(this.newmember);
    this.newmember = "";
  }
  onInputNum(value: any): any {
    return this.numberOfTeams = value;
  }
  randomIndex() {
    return Math.floor(Math.random() * this.memberList.length);
  }
  generateTeams(): any {
    this.teams = [];
    if(this.numberOfTeams <= 0) {
      return this.errorMessage = "Invalid number of teams";
    }
    if (this.memberList.length < this.numberOfTeams) {
      this.errorMessage = 'Not enough members';
      return;
    }

    const allMembers = [...this.memberList]
    if (allMembers.length < this.numberOfTeams) {
      return this.errorMessage = "Number of teams can't be greater than number of members";
    }
    this.errorMessage = "";
    while (allMembers.length) {
      for (var i = 0; i < this.numberOfTeams; i++) {
        let randomIndex = this.randomIndex();
        const member = allMembers.splice(randomIndex, 1)[0];
        if(!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    console.log("The teams : ", this.teams);
    this.memberList = [];
    this.numberOfTeams = 0;
  }
}
