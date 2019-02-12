# toggs
> a React toggle that doesnt suck

![material](https://github.com/phoker/toggs/blob/master/assets/material.gif?raw=true) ![ios](https://github.com/phoker/toggs/blob/master/assets/ios.gif?raw=true)

Inspired by this [tweet](https://twitter.com/dan_abramov/status/1086704419033497600)

## :exclamation: CAUTION

 this was hacked together using an self updated version of create-react-library; this is my first time creating a library :sweat_smile:
  - create-react-library and all deps were updated
  - create-react-app/example folder was removed
  - react-cosmos is used instead for dev/demo purposes

## :sunglasses: INSTALL

```
$ yarn add toggs
```

## :fire: USAGE

```
import React, { useState } from 'react'
import Toggs from 'toggs'

const Example = () => {
  const [ checked, setChecked ] = useState(false)
  return (
    <Toggs
      check={checked}
      onClick={() => setChecked(!checked)}
    />
  )
}
```

[Examples](https://codesandbox.io/s/qvqqz794rq)

## :eyes: PROPS

| Prop              | Type       | Default    | Description |
|-------------------|------------|------------|-------------|
| `checked`         | _bool_     | false      | Self-explanatory |
| `onChange`        | _func_     | noOp       | Function to invoke when User clicks on component. Inverted checked value will be passed as arg to the function. |
| `theme`           | _string_   | `material` | Choose between `material` or `ios`  |
| `trueColor`       | _string_   | `#14D790`  | Hex or rgb(a) value for when toggle is true. |
| `falseColor`      | _string_   | `#000000`  | Hex or rgb(a) value for when toggle is false. |
| `width`           | _number_   | 34         | Width in `px`. Will automatically scale. |

## :pencil2: DEVELOP

 - clone
 - run `yarn install`
 - run `yarn run cosmos`
 - do stuff

## :pray: MADE WITH

 - [react (with them hooks!)](https://reactjs.org/)
 - [styled-components](https://www.styled-components.com/)
 - [react-spring](https://react-spring.surge.sh/#/)
 - [react-with-gesture](https://github.com/react-spring/react-with-gesture)

## License

MIT
