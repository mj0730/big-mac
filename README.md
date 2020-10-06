## Getting Started

First, install the dependencies.
`npm i`

To start the app, run
`npm start`

This builds the production react components and starts the server.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

Note: The server started with `npm start` only serves the production build. If the server is running and modifying front end files, run `npm build` to view them with the server. `npm dev` will run the development server for the client side app only.

## Testing

To run tests and monitor changed files, run `npm test`.
To run tests and view coverage, run `npm coverage`.

## Project Requirements

Top 1/3 of page
You are in [COUNTRY]
Please enter an amount of money in your local currency - [Input Field]

---

Middle 1/3 of page - local results
You could buy [#] of Big Macs in your country
Your Dollar Purchasing Parity (PPP) is [#]

---

Bottom 1/3 of page - Results compared to random country
Random Country: [RANDOM COUNTRY]
You could buy [#] of Big Macs in [RAND COUNTRY] with [INPUT]!
(calculation is (INPUT / local price) _ (local dollar price / RAND COUNTRY dollar price)
Your [INPUT] is worth about [#] in [RAND COUNTRY]
(Calculation is [INPUT] _ (local dollar price / RAND COUNTRY dollar price))

## Description

This application uses historical big mac prices to display information based on the user country and a random county.

For the first requirement to find the ip address location, normally this could be obtained from the browswer request. However, a browser running on localhost wouldn't give a public IP to resolve. In this app, the server uses the API at whatismyipaddress.com to send a query request.

The second requirement displays the amount of Big Mac's that could be purchased with the user entered amount in thier local currency. The third converts local currency to the currency of a random country and displays the amount of big macs that could be purchased at the "Big Mac exchange rate".

When the server starts, it will generate a json file with the Big Mac data. If running nodemon or something similar, be sure to exclude monitoring the src/server/json directory, or else the server will perpetually restart.
