# toggs

![material](https://github.com/phoker/toggs/blob/master/assets/material.gif?raw=true) ![ios](https://github.com/phoker/toggs/blob/master/assets/ios.gif?raw=true)

Inspired by this [tweet](https://twitter.com/dan_abramov/status/1086704419033497600)

## :exclamation: CAUTION

 this was hacked together using an self updated version of create-react-library; this is my first time creating a library :sweat_smile:
  - create-react-library and all deps were updated
  - create-react-app/example folder was removed
  - react-cosmos is used instead for dev/demo purposes

tl;dr, this component might be a bit buggy lol

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
