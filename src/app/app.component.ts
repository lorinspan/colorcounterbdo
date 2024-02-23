import {Component} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  colors: string[] = [];
  colorCounts: { [key: string]: number } = {};

  darkMode: boolean = false;

  // Toggle Dark Mode
  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }

  addColor(color: string): void {
    if (!this.colorCounts[color]) {
      this.colorCounts[color] = 1;
    } else {
      this.colorCounts[color]++;
    }
    this.updateColorsArray();
  }

  removeColor(color: string): void {
    if (this.colorCounts[color] && this.colorCounts[color] > 0) {
      this.colorCounts[color]--;
      this.updateColorsArray();
    }
  }

  updateColorsArray(): void {
    this.colors = [];
    for (const color in this.colorCounts) {
      if (this.colorCounts[color] > 0) {
        for (let i = 0; i < this.colorCounts[color]; i++) {
          this.colors.push(color);
        }
      }
    }
  }

  calculateWinner(): void {
    let winner = 'white';
    let maxCount = this.colorCounts['white'] || 0;

    for (const color in this.colorCounts) {
      if (this.colorCounts[color] && this.colorCounts[color] > maxCount) {
        winner = color;
        maxCount = this.colorCounts[color];
      }
    }

    alert('Winner: ' + winner);
  }
}
