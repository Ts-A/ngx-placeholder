# ngx-placeholder

Angular package to use customisable placeholders during development.

## Usage

- Install the package

```bash
npm i ngx-placeholder
```

- Go to `angular.json` of your project

```js
{
  // ...
  assets: [
    // ...
    {
      glob: "**/*",
      input: "./node_modules/ngx-placeholder/assets",
      output: "./assets",
    },
  ];
}
```

> This is required to access the placeholder image when you use placeholder with type image

- Import the module / component

```ts
@Component({
  // ...
  imports: [
  // ...
    NgxPlaceholderModule
  // ...
    ],
  // ...
})
```

```html
<!-- Placeholder with box option -->
<ngx-placeholder width="200" height="100"></ngx-placeholder>
<!-- Placeholder with image option -->
<ngx-placeholder type="image" width="200" height="100"></ngx-placeholder>
<!-- Placeholder with text option -->
<ngx-placeholder type="text" phrase="hello world" width="200" height="100"></ngx-placeholder>
```

## API

### @Input

| Options      | type                       | Inference                                                                  |
| ------------ | -------------------------- | -------------------------------------------------------------------------- |
| width        | string                     | set the width of the container <br> default: 100% of the parent container  |
| height       | string                     | set the height of the container <br> default: 100% of the parent container |
| borderWeight | string                     | borderWeight for border <br> default: 1px                                  |
| type         | 'box' \| 'text' \| 'image' | set the type of the placeholder                                            |
| phrase       | string                     | set the phrase to display when type is 'text'                              |

### Default Styles (can't be changed yet):

- Border style: `borderWidth solid black`
- Background color: `#dddddd`
- ngx-placeholder selector style: `display: contents`

### Pipeline

1. Type support
2. Demo site
3. More input functionalities
