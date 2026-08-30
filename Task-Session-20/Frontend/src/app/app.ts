import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TeamMember {
  name: string;
  age: number;
  department: string;
  available: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  teamMembers: TeamMember[] = [
    { name: 'Ahmed', age: 28, department: 'Development', available: true },
    { name: 'Esraa', age: 24, department: 'Development', available: true },
    { name: 'Ali', age: 30, department: 'Marketing', available: false }
  ];
  
  departments: string[] = ['Development', 'Marketing', 'Design'];
  selectedFilter: string = 'All';
  viewMode: string = 'card';
  
  newMember: TeamMember = {
    name: '',
    age: null as any,
    department: '',
    available: true
  };

  addMember() {
    if (this.newMember.name && this.newMember.age > 0 && this.newMember.department) {
      this.teamMembers.push({ ...this.newMember });
      this.newMember = { name: '', age: null as any, department: '', available: true };
    }
  }

  toggleStatus(member: TeamMember) {
    member.available = !member.available;
  }

  get filteredMembers() {
    if (this.selectedFilter === 'All') {
      return this.teamMembers;
    }
    return this.teamMembers.filter(m => m.department === this.selectedFilter);
  }
}