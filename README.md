## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Requirements

Top 1/3 of page
You are in [COUNTRY]
Please enter an amount of money in your local
currency - [Input Field]

---

Middle 1/3 of page - local results
You could buy [#] of Big Macs in your country
Your Dollar Purchasing Parity (PPP) is [#]
This is a simple lookup to the table

---

Bottom 1/3 of page - Results compared to random
country
Random Country: [RANDOM COUNTRY]
You could buy [#] of Big Macs in [RAND COUNTRY]
with [INPUT]!
(calculation is (INPUT / local price) _ (local dollar
price / RAND COUNTRY dollar price)
Your [INPUT] is worth about [#] in [RAND COUNTRY]
(Calculation is [INPUT] _ (local dollar price / RAND
COUNTRY dollar price))

## Description

For the first requirement to find the ip address location, normally this could be obtained from the browswer request. However, a browser running on localhost wouldn't give a public IP to resolve. To solve this, the server uses the API at whatismyipaddress.com to send a query request.
