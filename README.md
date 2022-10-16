[![GitHub Stars](https://img.shields.io/github/stars/IgorAntun/node-chat.svg)](https://github.com/IgorAntun/node-chat/stargazers) [![GitHub Issues](https://img.shields.io/github/issues/IgorAntun/node-chat.svg)](https://github.com/IgorAntun/node-chat/issues) [![Current Version](https://img.shields.io/badge/version-1.0.7-green.svg)](https://github.com/IgorAntun/node-chat) [![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://igorantun.com/chat) [![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/IgorAntun/node-chat?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

This is a node.js chat application powered by SockJS and Express that provides the main functions you'd expect from a chat, such as emojis, private messages, an admin system, etc.

⭐ Star us on GitHub — it motivates us a lot!

![Chat Preview](http://i.imgur.com/lgRe8z4.png)

## Demo

Here is a working live demo : https://iharsh234.github.io/WebApp/

## Why

https://github.com/alichtman/shallow-backup#why

## Features

## Getting started

<details>
<summary>Getting started with @ag-forms/core</summary>

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

## Support

Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc
Your Name - @your_twitter - email@example.com

## Contributing

Contributions are welcome! Please see our [Contributing Guide](./CONTRIBUTING.md) for more details. Thanks to all our contributors!

## License

This project is licensed under [MIT License](https://license.md/licenses/mit-license/) - see the [`LICENSE.md`](./LICENSE.md) file for details.
