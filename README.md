<div align="center">
    <h1>
        <img src="logo.png" height="100px">
    </h1>
    <h4><b>New website for the Triumph Mayflower Club, launched in March 2018</b></h4>
		⭐ Star us on GitHub — it motivates us a lot!
    <h3>
        <a href="https://www.github.com/andiemmadavies">
            <img src="https://img.shields.io/badge/maintainer-%40andiemmadavies-yellow">
        </a>
        <a href="https://www.triumphmayflowerclub.com/">
            <img src="https://img.shields.io/website?url=http%3A%2F%2Fwww.triumphmayflowerclub.com%2F">
        </a>
        <a href="https://www.triumphmayflowerclub.com/news/2018/03/launchofthenewclubwebsite">
            <img src="https://img.shields.io/badge/launched-march%202018-teal">
        </a>
        <a href="https://www.github.com/Stack-in-a-box/triumphmayflowerclub.com/commits/master">
            <img src="https://img.shields.io/github/last-commit/Stack-in-a-box/triumphmayflowerclub.com?color=blue&label=updated">
        </a>
        <a href="https://www.github.com/Stack-in-a-box/triumphmayflowerclub.com/releases/latest">
            <img src="https://img.shields.io/github/v/release/Stack-in-a-box/triumphmayflowerclub.com?color=blueviolet&label=version">
        </a>
        <a href="#copyright">
            <img src="https://img.shields.io/badge/licence-%C2%A9-crimson">
        </a>
        <a href="https://www.facebook.com/triumphmayflowerclub">
            <img src="https://img.shields.io/badge/social-facebook-darkred">
        </a>
    </h3>
</div>

![Chat Preview](http://i.imgur.com/lgRe8z4.png)

WHY?
The [Triumph Mayflower Club](https://www.triumphmayflowerclub.com/) is an organisation dedicated to the preservation of classic 1950s car, the Mayflower, by British car manufacturer Triumph. The club itself formed in 1974 and made its initial, limited foray into the World Wide Web back in [2005](https://legacy.triumphmayflowerclub.com/), and then I ([Andi](https://www.github.com/andiemmadavies), project maintainer) was commissioned in 2017 to create them a new website from scratch when my parents became members. Click [here](https://www.triumphmayflowerclub.com/about) if you’re interested in reading more about the car and the club.

Features

## 🚀&nbsp; Getting started

The `ag-forms` team builds and maintains several packages that helps build Angular Reactive Forms controls and optionally UI view.

<div style="font-size: 18px"><b>Option 1: form controls only, no framework</b></div>
<div>👀 <a href="url">Live Demo on StackBlitz</a></div>
<div>⚙️ <a href="url">Live configure tool</a></div>

<details>
<summary>Implementation and usage details</summary>

##### Step 1: Install dependencies

_Option 1:_ using <a href="">npm</a>
`npm i @angular/forms @ngx-formly/core @ngx-formly/bootstrap --save`

_Option 2:_ using <a href="">npx</a>
`npx i @angular/forms @ngx-formly/core @ngx-formly/bootstrap --save`

_Option 3:_ <a href="">yarn</a>
`yarn add @angular/forms @ngx-formly/core @ngx-formly/bootstrap`
</br>

##### Step 2: In your app provide access to AgFormService

_Option 1:_ provide in @NgModule()

```ts
import { AgFormService } from '@ag-forms/core';

@NgModule({
  providers: [
    ReactiveFormsModule,
    AgFormService
  ],
  …
})
```

_Option 2:_ provide in @Component()

```ts
import { AgFormService } from '@ag-forms/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers: [ AgFormService ]
})
```

##### Step 3: Configure & build form

```ts
import { AgFormService } from '@ag-forms/core';
...

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  providers: [ AgFormService ]
})
export class AppComponent {
  form: FormGroup;
  schema = [{ type: 'input' }, { type: 'email' }];

  constructor(public fs: AgFormService) {
    this.form = this.fs.buildForm(this.schema);
  }
}
```

That's it, the above example will render...

</details>

<div style="font-size: 18px"><b>Option 2: form with Tailwind</b></div>
<div>👀 <a href="url">Live Demo on StackBlitz</a></div>
<div>⚙️ <a href="url">Live configure tool</a></div>

<details>
<summary>Implementation and usage details</summary>
</details>

<div style="font-size: 18px"><b>Option 3: form with Material</b></div>
<div>👀 <a href="url">Live Demo on StackBlitz</a></div>
<div>⚙️ <a href="url">Live configure tool</a></div>

<details>
<summary>Implementation and usage details</summary>
</details>

<div style="font-size: 18px"><b>Option 4: form with Bootstrap</b></div>
<div>👀 <a href="url">Live Demo on StackBlitz</a></div>
<div>⚙️ <a href="url">Live configure tool</a></div>

<details>
<summary>Implementation and usage details</summary>
</details>

## 💬 Support

🐞 [Bug](): file a bug/issue
💡 [Idea](https://github.com/movadee/ag-forms/discussions/categories/ideas): share ideas for new features
🙏 [Q&A](https://github.com/movadee/ag-forms/discussions/categories/q-a): ask us and the community for help
🙌 [Show & tell](https://github.com/movadee/ag-forms/discussions/categories/show-tell): checkout our tutorials/examples or show off something you've made
💬 [General](https://github.com/movadee/ag-forms/discussions/categories/general): chat about anything and everything here

## :computer: Contributing

Contributions are welcome! Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) for more details. Thanks to all our contributors!

## :page_facing_up: License

This project is licensed under [MIT License](https://license.md/licenses/mit-license/) - see the [`LICENSE.md`](./LICENSE.md) file for details.
