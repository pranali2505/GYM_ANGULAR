import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member';
 
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
 
  members: Member[] = [];
  newMember: Member = { id: 0, firstName: '', lastName: '', email: '', mobileNumber: '', gender: '' };
  selectedMemberId:number=0;
  updatedMember: Member = { id: 0, firstName: '', lastName: '', email: '', mobileNumber: '', gender: '' };
  member:Member | undefined;

  constructor(private memberService: MemberService) { }
 
  ngOnInit(): void {
    this.loadMembers();
  }
 
  loadMembers(): void {
    this.memberService.getAllMembers().subscribe(members => {
      this.members = members;
    });
  }
 
  deleteMember(id: number): void {
    this.memberService.deleteMember(id).subscribe(() => {
      this.loadMembers();
    });
  }
  
  createMember(): void {
    this.memberService.createMember(this.newMember).subscribe(() => {
      
      this.newMember = { id: 0, firstName: '', lastName: '', email: '', mobileNumber: '', gender: '' }; 
      this.loadMembers();// Reset the new member object
    });
  }

  // updateMember(member: Member): void {
  //   this.updatedMember = { ...member }; // Copy the member object to the updatedMember object
  // }

  updateMember(): void {
    this.memberService.updateMember(this.selectedMemberId, this.updatedMember).subscribe(() => {

      this.loadMembers();
      //this.updatedMember = { id: 0, firstName: '', lastName: '', email: '', mobileNumber: '', gender: '' }; // Reset updatedMember
    });
  }

getMemberById(id: number): void {
    this.memberService.getMemberById(id).subscribe(member => {
      this.member = member;
    });
  }
  
}
  
  
  // getAllMembers() {
  //   throw new Error('Method not implemented.');
  // };
function updateMember(member: any, Member: any) {
  throw new Error('Function not implemented.');
}

function getAllMembers() {
  throw new Error('Function not implemented.');
}

