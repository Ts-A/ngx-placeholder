# ngx-placeholder

Angular package to use customisable placeholders when required.

## Usage

Install the package

```bash
npm i ngx-placeholder
```

Go to `angular.json` of your project

```json
 assets: [
        // other asset imports
            {
                "glob": "**/*",
                "input": "./node_modules/ngx-placeholder/assets",
                "output": "./assets"
            },
        ]
```

> This is required to access the placeholder image when you use placeholder with type image

```html
<!-- Placeholder with box option -->
<ngx-placeholder [width]="200" [height]="100"></ngx-placeholder>
<!-- Placeholder with image option -->
<ngx-placeholder [type]="'image'" [width]="200" [height]="100"></ngx-placeholder>
<!-- Placeholder with text option -->
<ngx-placeholder [type]="'text'" [phrase]="'hello world'" [width]="200" [height]="100"></ngx-placeholder>
```

> Note: Documentation update is on it's way <br>
> Note: Type support while using it components is on it's way
