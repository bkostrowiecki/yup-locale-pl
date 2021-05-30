# Polish translation of yup validation messages

This repository contains a single JavaScript file which exports Polish versions for [Yup](https://github.com/jquense/yup) validation messages. 

`mixed.notType` hasn't been translated as it would need a helper method that is not publicly exported by Yup

## Usage

```
npm install yup-locale-pl
```

or
```
yarn add yup-locale-pl
```

```javascript
import * as yup from 'yup';
import yupLocalePL from 'yup-locale-pl';

yup.setLocale(yupLocalePL);
```

Make sure to set your localized messages before any other calls to Yup, see [yup#using-a-custom-locale-dictionary](https://github.com/jquense/yup#using-a-custom-locale-dictionary) for details.
