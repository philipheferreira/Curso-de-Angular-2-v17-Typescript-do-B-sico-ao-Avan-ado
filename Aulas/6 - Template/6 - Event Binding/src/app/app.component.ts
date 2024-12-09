import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public nome = "Philiphe Siqueira Ferreira"
  public idade = 28;
  title = 'projectBinding';

public soma() {
  return this.idade++;
}

public sub() {
  return this.idade--;
}

}