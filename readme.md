# datetime / leon20spr

With this middleware you can display the time.

## Installation

```
npm install @leon20spr/datetime
```

## Usage / ES6

```js
import datetime from "@leon20spr/datetime";

/**
 * To get Local date
 */
datetime.local.getDate();
/**
 * To get local time
 */
datetime.local.getTime();
/**
 * To get local date and time
 */
datetime.local.getDateTime();

/**
 * To get global date
 */
datetime.utc.getDate();
/**
 * To get global time
 */
datetime.utc.getTime();
/**
 * To get global date and time
 */
datetime.utc.getDateTime();
```

## Usage / ES5

```js
const datetime = require("@leon20spr/datetime");

/**
 * To get Local date
 */
datetime.local.getDate();
/**
 * To get local time
 */
datetime.local.getTime();
/**
 * To get local date and time
 */
datetime.local.getDateTime();

/**
 * To get global date
 */
datetime.utc.getDate();
/**
 * To get global time
 */
datetime.utc.getTime();
/**
 * To get global date and time
 */
datetime.utc.getDateTime();
```